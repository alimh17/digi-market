import React, { useRef, useState } from "react";
import ReactLoading from "react-loading";
import { useQuery } from "react-query";
import { useToasts } from "react-toast-notifications";

import ModalComponent from "../../../../../../components/Modal";
import Form from "./Form";
import CurrentBanners from "./CurrentBanners";
import AddAndDeleteBanners from "./AddAndDeleteBanners";
import TitleBanner from "./TitleBanner";
import Button from "../../../../../../components/Button";
import {
  delBannersRequest,
  getAllBanners,
} from "../../../../../../server/BannerRequests";

const FirstBanners = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [selectedBannersForDel, setSelectedBannersForDel] = useState({});
  const [loading, setLoading] = useState(false);

  const { addToast } = useToasts();

  //! ------------------fetch all banners --------------------
  const { data, isLoading } = useQuery("banners", getAllBanners);

  const IconRef = useRef([]);
  const ImgRef = useRef([]);

  if (!isLoading) {
    IconRef.current =
      data &&
      data.map((_, i) => {
        return IconRef.current[i] ?? React.createRef();
      });

    ImgRef.current =
      data &&
      data.map((_, i) => {
        return ImgRef.current[i] ?? React.createRef();
      });
  }

  //! ------------ Set style for banners whene want delete banner ------------

  const handleAddStyle = (e, i, item) => {
    if (IconRef.current[i].current.classList.contains("text-gray-400")) {
      IconRef.current[i].current.classList.replace(
        "text-gray-400",
        "text-rose-800"
      );
      ImgRef.current[i].current.classList.replace("opacity-100", "opacity-40");
      let selected = [];
      selectedBannersForDel.selected
        ? (selected = [...selectedBannersForDel.selected])
        : (selected = []);
      selected.push(item);
      setSelectedBannersForDel({ selected });
    } else {
      IconRef.current[i].current.classList.replace(
        "text-rose-800",
        "text-gray-400"
      );
      ImgRef.current[i].current.classList.replace("opacity-40", "opacity-100");

      const filter = selectedBannersForDel.selected.filter(
        (f) => f.url !== item.url
      );
      setSelectedBannersForDel({ selected: filter });
    }
  };

  //! -------------- Delete Selected Banner ----------------

  const handleDelBanner = async () => {
    setLoading(true);
    const req = await delBannersRequest(selectedBannersForDel);
    if (req.status === 200) {
      setSelectedBannersForDel({});
      setShowDeleteIcon(false);
      addToast(req.data.message, {
        autoDismiss: true,
        appearance: "success",
      });
      data.map((_, i) => {
        ImgRef.current[i].current.classList.replace(
          "opacity-40",
          "opacity-100"
        );
        return null;
      });
    }
  };

  return (
    <section className="w-full">
      <TitleBanner />
      <div className="grid md:grid-rows-2 md:grid-cols-2 gap-3 m-2">
        <CurrentBanners
          data={data}
          IconRef={IconRef}
          ImgRef={ImgRef}
          showDeleteIcon={showDeleteIcon}
          click={handleAddStyle}
        />
        <AddAndDeleteBanners
          show={setShowModal}
          delIcon={setShowDeleteIcon}
          showIcon={showDeleteIcon}
          selectedDel={setSelectedBannersForDel}
          ImgRef={ImgRef}
          IconRef={IconRef}
        />
        {showDeleteIcon && (
          <Button
            title="ثبت تغییرات"
            type="button"
            primary={true}
            click={handleDelBanner}
          />
        )}
      </div>
      {showModal && (
        <ModalComponent>
          {loading ? (
            <ReactLoading type="spin" color="indigo" height={300} width={200} />
          ) : (
            <Form show={setShowModal} setLoading={setLoading} />
          )}
        </ModalComponent>
      )}
    </section>
  );
};

export default FirstBanners;
