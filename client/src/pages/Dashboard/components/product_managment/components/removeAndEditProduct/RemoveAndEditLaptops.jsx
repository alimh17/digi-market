import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useQuery } from "react-query";
import config from "../../../../../../config/config.json";
import Loading from "../../../../../../components/Loading";
import { getAllLaptops } from "../../../../../../server/LaptopRequests";
import { deleteLaptopRequest } from "../../../../../../server/LaptopRequests";
import { replacePrice } from "../../../../../../utils/replacePrice";
import DelModal from "../DelModal";
import EditModal from "../EditModal";

const { URL } = config;

const RemoveAndEditLaptops = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectPorduct, setSelectProduct] = useState({});

  const { data, isLoading, isError } = useQuery("all_laptops", getAllLaptops);

  return (
    <>
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
      {isError && null}
      {data &&
        data.map((laptops) => {
          return laptops.map((l, i) => (
            <article className="flex md:flex-col w-full" key={l._id}>
              <div className="flex flex-row md:flex-col p-3  h-60 md:h-full justify-center  my-3  items-center border border-gray-300 shadow-md rounded-lg w-full ">
                <img
                  alt={l.name}
                  src={URL + l.mainImage}
                  className="w-1/3 md:w-2/3  h-full py-3"
                />
                <div className=" border-r border-r-gray-400 md:border-r-0">
                  <p className="my-3 p-3 ">{l.name}</p>
                  <p className="my-3 p-3 ">{replacePrice(l.price)} تومان</p>
                  <span className="flex">
                    <AiFillDelete
                      className="text-rose-600 text-2xl m-3 cursor-pointer"
                      onClick={() => {
                        setSelectProduct({ ...l });
                        setOpen(true);
                      }}
                    />
                    <AiFillEdit
                      className="text-indigo-600 text-2xl m-3 cursor-pointer"
                      onClick={() => {
                        setSelectProduct({ ...l });
                        setOpenEdit(true);
                      }}
                    />
                  </span>
                </div>
              </div>
            </article>
          ));
        })}
      <DelModal
        open={open}
        setOpen={setOpen}
        data={selectPorduct}
        url={URL}
        request={deleteLaptopRequest}
      />
      <EditModal open={openEdit} setOpen={setOpenEdit} data={selectPorduct} />
    </>
  );
};

export default RemoveAndEditLaptops;
