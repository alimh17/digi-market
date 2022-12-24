import React, { useContext } from "react";
import _ from "lodash";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";

import InputWithLabel from "components/Input";
import { laptopBrands } from "utils/brnadConverToPersian";
import { colorListFa } from "utils/colorLists";
import { lapTopSchema } from "utils/validation";
import { showMobileFormAlert } from "utils/showFormAlert";

import style from "./addProductComponent.module.css";
import { newLaptopRequest } from "server/LaptopRequests";
import DashboardContext from "../../../../context/dashboardContext";
import { PorductManagmentContext } from "../../context/productManagmentContext";

const LaptopForm = () => {
  const { addToast } = useToasts();
  const context = useContext(DashboardContext);
  const { setLoading } = context;

  const { handleChangeProductState } = useContext(PorductManagmentContext);

  const handleDisplayAlert = async (err) => {
    if (!_.isEmpty(err)) {
      const alert = showMobileFormAlert(err);
      addToast(alert, {
        appearance: "warning",
        autoDismiss: true,
      });
    } else {
      handleChangeProductState(1);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={lapTopSchema}
      onSubmit={async (value) => {
        setLoading(true);
        const res = await newLaptopRequest(value);
        if (res.status === 201) {
          addToast(res.data.message, {
            appearance: "success",
            autoDismiss: true,
          });
          setLoading(false);
        }
        if (res.status === 500) {
          addToast("مشکلی پیش آمده است", {
            appearance: "error",
            autoDismiss: true,
          });
          setLoading(false);
        }
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        setFieldValue,
        errors,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center p-3 md:grid grid-rows-2 grid-cols-2 gap-3 lg:grid-row-3 lg:grid-cols-3 overflow-x-hidden"
        >
          <InputWithLabel
            label="نام لپ تاپ"
            from="name"
            type="text"
            id="name"
            name="name"
            placeholder="لپ تاپ 18 اینچی ایسوس مدل ProArt W7600H3A-L2008"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name ? values.name : ""}
          />
          <InputWithLabel
            label="قیمت"
            from="price"
            type="number"
            id="price"
            name="price"
            placeholder="86,000,000"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price ? values.price : ""}
          />
          <InputWithLabel
            label="اندازه صفحه"
            from="screen"
            type="text"
            id="screen"
            name="screen"
            placeholder="16 اینچ"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.screen ? values.screen : ""}
          />
          <div className=" w-full">
            <label htmlFor="brand" className="">
              برند
            </label>
            <select
              id="brand"
              placeholder="برند"
              name="brand"
              className="p-4 mt-8 border outline-0
          rounded-lg focus:border-indigo-800 w-full border-gray-400"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brand ? values.brand : ""}
            >
              <option value="">--برند محصول را انتخاب کنید--</option>
              {laptopBrands.map((b, i) => (
                <option key={i} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full m-3">
            <label htmlFor="image">تصاویر لپ تاپ</label>
            <input
              id="image"
              name="image"
              placeholder="تصویر"
              type="file"
              accept=".jpg , .jpeg , .png"
              className={`p-4 mt-3 border outline-0 rounded-lg focus:border-indigo-800 w-full border-gray-400 ${style.uploadBTN}`}
              onChange={(e) => setFieldValue("image", e.target.files)}
              onBlur={handleBlur}
              multiple
            />
          </div>
          <div className="w-full m-3">
            <label htmlFor="mainImage">تصویر اصلی</label>
            <input
              id="mainImage"
              name="mainImage"
              placeholder="تصویر"
              type="file"
              accept=".jpg , .jpeg , .png"
              className={`p-4 mt-3 border outline-0 rounded-lg focus:border-indigo-800 w-full border-gray-400 ${style.uploadBTN}`}
              onChange={(e) => setFieldValue("mainImage", e.target.files)}
              onBlur={handleBlur}
            />
          </div>

          <InputWithLabel
            label="سری پردازنده"
            from="cpu_series"
            id="cpu_series"
            name="cpu_series"
            placeholder="Core i7"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpu_series ? values.cpu_series : ""}
          />
          <InputWithLabel
            label="سازنده پردازنده گرافیکی"
            from="gpu_maker"
            id="gpu_maker"
            name="gpu_maker"
            placeholder="NVIDIA"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gpu_maker ? values.gpu_maker : ""}
          />
          <InputWithLabel
            label="سازنده پردازنده "
            from="cpu_maker"
            id="cpu_maker"
            name="cpu_maker"
            placeholder="Intel"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpu_maker ? values.cpu_maker : ""}
          />
          <InputWithLabel
            label="مدل پردازنده "
            from="cpu_model"
            id="cpu_model"
            name="cpu_model"
            placeholder="۱۱۸۰۰H"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpu_model ? values.cpu_model : ""}
          />
          <InputWithLabel
            label="ظرفیت حافظه رم"
            from="ram"
            id="ram"
            name="ram"
            placeholder="32 گیگابایت"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ram ? values.ram : ""}
          />

          <InputWithLabel
            label="ابعاد"
            from="dimensions"
            id="dimensions"
            name="dimensions"
            placeholder="۳۶۲x۲۶۴x۲۱"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dimensions ? values.dimensions : ""}
          />
          <InputWithLabel
            label="وزن"
            from="weight"
            id="weight"
            name="weight"
            placeholder="۲.۴ کیلوگرم"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight ? values.weight : ""}
          />
          <div className=" w-full">
            <label htmlFor="ram_type" className="">
              نوع حافظه RAM
            </label>
            <select
              id="ram_type"
              name="ram_type"
              className="p-4 mt-8 border outline-0
          rounded-lg focus:border-indigo-800 w-full border-gray-400"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ram_type ? values.ram_type : ""}
            >
              <option value="">--نوع حافظه RAM را انتخاب کنید--</option>
              <option value={"DDR2"}>DDR2</option>
              <option value={"DDR3"}>DDR3</option>
              <option value={"DDR4"}>DDR4</option>
              <option value={"DDR5"}>DDR5</option>
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
              className={`mt-3 p-5 border outline-0
          rounded-lg focus:border-indigo-800 w-full px-3 border-gray-400 ${style.scrollbar}`}
              multiple
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.color ? values.color : []}
            >
              <option value="مشکی">--رنگ محصول را انتخاب کنید--</option>
              {colorListFa.map((color, i) => (
                <option key={i} className="p-2" style={{ color: color }}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-full w-full ">
            <label htmlFor="detail" className="">
              جزئیات
            </label>
            <textarea
              name="detail"
              id="detail"
              type="text"
              rows={8}
              placeholder="لپ تاپ 16 اینچی مدل ProArt W7600H3A-L2008 از جمله لپ تاپ‌های شرکت ایسوس است. این لپ‌تاپ به پردازنده اینتل از سری Core i7 مجهز است. نمایشگر آن Full HD از نوع OLED است. برخورداری از پنل OLED فاقد فلیکر، در کنار میزان روشنایی 600 نیت، کیفیت تصویری بی‌نظیر به کاربر ارائه می‌کند. پردازنده گرافیکی این دستگاه NVIDIA RTX A3000 است. ضخامت آن کمتر از 21 میلی‌متر است. برای این مدل 32 گیگابایت حافظه DDR4 در نظر گرفته شده است. همچنین حافظه داخلی آن یک ترابایت SSD است. کیبورد این لپ‌تاپ دارای نور پس زمینه است. به طور کلی می‌توان گفت که این محصول برای کارهای روزمره و مالتی مدیا انتخاب مناسبی است."
              className="m-3 p-4 border outline-0 rounded-lg focus:border-indigo-800  resize-none border-gray-400 w-full"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detail ? values.detail : ""}
            />
          </div>
          <input
            onClick={() => handleDisplayAlert(errors)}
            type="submit"
            value="ثبت محصول"
            className="bg-indigo-800 text-white hover:bg-indigo-500
       p-3 m-3 rounded-lg transition-all ease-in duration-150 text-xl cursor-pointer"
          />
        </form>
      )}
    </Formik>
  );
};

export default LaptopForm;
