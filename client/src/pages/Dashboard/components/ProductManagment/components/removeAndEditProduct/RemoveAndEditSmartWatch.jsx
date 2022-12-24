import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useQuery } from "react-query";
import config from "../../../../../../config/config.json";
import Loading from "../../../../../../components/Loading";
import { replacePrice } from "../../../../../../utils/replacePrice";
import DelModal from "../DelModal";
import EditModal from "../EditModal";
import {
  deleteSmartWatchRequest,
  getAllSmartWatch,
} from "../../../../../../server/SmartWatchRequests";

const { URL } = config;

const RemoveAndEditSmartWatch = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectPorduct, setSelectProduct] = useState({});

  const { data, isLoading, isError } = useQuery(
    "all_smart_watch",
    getAllSmartWatch
  );

  return (
    <>
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
      {isError && null}
      {data &&
        data.map((m) => (
          <article className="flex md:flex-col w-full" key={m._id}>
            <div className="flex flex-row md:flex-col p-3  h-60 md:h-full justify-center  my-3  items-center border border-gray-300 shadow-md rounded-lg w-full">
              <img
                alt={m.name}
                src={URL + m.mainImage}
                className="w-1/3 md:w-2/3  h-full py-3"
              />
              <div className=" border-r border-r-gray-400 md:border-r-0">
                <p className="my-3 p-3 ">{m.name}</p>
                <p className="my-3 p-3 ">{replacePrice(m.price)} تومان</p>
                <span className="flex">
                  <AiFillDelete
                    className="text-rose-600 text-2xl m-3 cursor-pointer"
                    onClick={() => {
                      setSelectProduct({ ...m });
                      setOpen(true);
                    }}
                  />
                  <AiFillEdit
                    className="text-indigo-600 text-2xl m-3 cursor-pointer"
                    onClick={() => {
                      setSelectProduct({ ...m });
                      setOpenEdit(true);
                    }}
                  />
                </span>
              </div>
            </div>
          </article>
        ))}
      <DelModal
        open={open}
        setOpen={setOpen}
        data={selectPorduct}
        url={URL}
        request={deleteSmartWatchRequest}
      />
      <EditModal open={openEdit} setOpen={setOpenEdit} data={selectPorduct} />
    </>
  );
};

export default RemoveAndEditSmartWatch;
