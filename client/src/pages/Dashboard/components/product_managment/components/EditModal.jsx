import React from "react";
import { switchColor } from "../../../../../utils/switchColor";

const EditModal = ({ open, setOpen, data }) => {
  return (
    <div
      className=" top-0 right-0 z-40 w-full h-screen bg-gray-600 bg-opacity-50  justify-center items-center overflow-scroll"
      style={
        open ? { display: "flex", position: "fixed" } : { display: "none" }
      }
    >
      <div className="w-full  md:w-full mx-3 flex flex-col justify-between gap-3 items-center  bg-white rounded-lg  in transition-all  duration-300 ease-in overflow-visible animate-[wiggle_0.3s_linear]">
        <form className="flex flex-col justify-center items-center p-3 md:grid grid-rows-2 grid-cols-2 gap-3 lg:grid-row-3 lg:grid-cols-3">
          <div className="m-3 w-full ">
            <label htmlFor="name" className="m-2">
              نام محصول
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={data && data.title}
              defaultValue={data && data.title}
              className="p-4 mt-2 border-2 outline-0 rounded-lg focus:border-indigo-800 w-full"
            />
          </div>
          <div className="m-3 w-full">
            <label htmlFor="price" className="m-2">
              قیمت
            </label>
            <input
              id="price"
              name="price"
              type="text"
              defaultValue={data && data.price}
              placeholder={data && data.price}
              className="mt-2 p-4 border-2 outline-0 rounded-lg focus:border-indigo-800 w-full"
            />
          </div>
          <div className="m-3 w-full">
            <label htmlFor="brand" className="m-2">
              برند
            </label>
            <select
              id="brand"
              name="brand"
              placeholder="برند"
              className="mt-3 p-4 border-2 outline-0
          rounded-lg focus:border-indigo-800 w-full px-3 "
            >
              <option value={data && data.brand}>{data && data.brand}</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className="m-3 w-full">
            <label htmlFor="color" className="m-2">
              رنگ
            </label>
            <select
              id="color"
              name="color"
              placeholder="رنگ"
              className="mt-3 p-4 border-2 outline-0
         rounded-lg focus:border-indigo-800 w-full px-3"
            >
              <option value={data && switchColor(data.color)}>
                {data && switchColor(data.color)}
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="m-3 w-full">
            <label htmlFor="image" className="m-2">
              تصویر محصول
            </label>
            <input
              id="image"
              name="image"
              placeholder="تصویر"
              defaultValue={data.images}
              type="file"
              accept=".jpg , .jpeg , .png"
              className="mt-3 p-4 border-2 outline-0 rounded-lg focus:border-indigo-800 w-full product_image"
              multiple
            />
          </div>

          <div className="m-3 w-full">
            <label htmlFor="off" className="m-2">
              تخفیف
            </label>
            <select
              id="off"
              name="off"
              placeholder="تخفیف"
              className="mt-3 p-4 border-2 outline-0
         rounded-lg focus:border-indigo-800 w-full px-3"
            >
              <option value={0}>0</option>
              <option value={10}>10 درصد</option>
              <option value={20}>20 درصد</option>
              <option value={30}>30 درصد</option>
              <option value={40}>40 درصد</option>
              <option value={50}>50 درصد</option>
              <option value={60}>60 درصد</option>
              <option value={70}>70 درصد</option>
              <option value={80}>80 درصد</option>
              <option value={90}>90 درصد</option>
            </select>
          </div>

          <textarea
            type="text"
            cols={6}
            rows={8}
            placeholder={`حافظه : ${
              data.options && data.options.Ram
            }  \n شبکه : ${data.options && data.options.network} \n صفحه : ${
              data.options && data.options.screen
            }`}
            className="m-3 p-4 border-2 outline-0 rounded-lg focus:border-indigo-800 w-full resize-none col-span-full"
          />
        </form>
        <div className="flex w-full p-2">
          <button className="w-full md:w-1/2 bg-green-700 p-3 text-white rounded-lg mx-2">
            ثبت تغییرات
          </button>
          <button
            onClick={() => setOpen(false)}
            className="w-full md:w-1/2 bg-gray-400 p-3 text-white rounded-lg mx-2"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
