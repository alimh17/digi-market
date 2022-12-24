import React, { useContext } from "react";
import _ from "lodash";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";

import InputWithLabel from "../../../../../../components/Input";
import { smartWatchBrand } from "../../../../../../utils/brnadConverToPersian";
import { colorListFa } from "../../../../../../utils/colorLists";
import { smartWatchSchema } from "../../../../../../utils/validation";
import { showMobileFormAlert } from "../../../../../../utils/showFormAlert";

import style from "./addProductComponent.module.css";
import DashboardContext from "../../../../context/dashboardContext";
import { newSmartWatchRequest } from "../../../../../../server/SmartWatchRequests";

const SmartWatchForm = () => {
  const { addToast } = useToasts();
  const context = useContext(DashboardContext);
  const { setLoading } = context;

  const handleDisplayAlert = async (err) => {
    if (!_.isEmpty(err)) {
      const alert = showMobileFormAlert(err);
      addToast(alert, {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={smartWatchSchema}
      onSubmit={async (value) => {
        setLoading(true);
        const res = await newSmartWatchRequest(value);
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
            label="نام ساعت هوشمند"
            from="name"
            type="text"
            id="name"
            name="name"
            placeholder="ساعت هوشمند سامسونگ مدل Galaxy Watch 5 44mm"
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
            placeholder="7,500,000 تومان"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price ? values.price : ""}
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
              {smartWatchBrand.map((b, i) => (
                <option key={i} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full m-3">
            <label htmlFor="image">تصاویر ساعت هوشمند</label>
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
            label="فرم صفحه"
            from="screenForm"
            id="screenForm"
            name="screenForm"
            placeholder="دایره"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.screenForm ? values.screenForm : ""}
          />

          <InputWithLabel
            label="وزن"
            from="weight"
            id="weight"
            name="weight"
            placeholder="
            46 گرم"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight ? values.weight : ""}
          />
          <InputWithLabel
            label="جنس بند"
            from="strapMaterial"
            id="strapMaterial"
            name="strapMaterial"
            placeholder="سیلیکون"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.strapMaterial ? values.strapMaterial : ""}
          />
          <InputWithLabel
            label="ابعاد قاب"
            from="FrameComposition"
            id="FrameComposition"
            name="FrameComposition"
            placeholder="
            ۴۵.۴×۴۵.۴×۱۰.۵ میلی‌متر"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.FrameComposition ? values.FrameComposition : ""}
          />
          <InputWithLabel
            label="کاربرد"
            from="Application"
            id="Application"
            name="Application"
            placeholder="
            رسمی ، روزمره ، ورزشی"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Application ? values.Application : ""}
          />
          <InputWithLabel
            label="مناسب "
            from="Appropriate"
            id="Appropriate"
            name="Appropriate"
            placeholder="
            آقایا ن و بانوان"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Appropriate ? values.Appropriate : ""}
          />
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
          <div className="col-span-full w-full">
            <label htmlFor="detail" className="">
              جزئیات
            </label>
            <textarea
              name="detail"
              id="detail"
              type="text"
              cols={6}
              rows={8}
              placeholder="ساعت‌های هوشمند سامسونگ، همواره توانسته‌اند با بهره بردن از مشخصات فنی مناسب، عملکرد بسیار خوبی را به‌نمایش بگذارند. سامسونگ Galaxy Watch 5 Pro هم یکی از جدید‌ترین ساعت‌های هوشمند این شرکت است که به نسبت مدل استاندارد، مشخصات قدرتمند‌تر و البته سبک طراحی جذاب‌تری را با خود به همراه دارد. طراحی و رنگ‌بندی در نظر گرفته شده برای این ساعت هوشمند سبب شده تا در کنار حالت اسپرت، حس و حال یک ساعت رسمی و رده بالا را به‌خوبی به‌شما می‌دهد. متریال بسیار با‌کیفیت و البته تکنولوژی ساخت پیشرفته این امکان را فراهم کرده است تا Galaxy Watch 5 Pro در برابر آب تا عمق 50 متری مقاوم باشد."
              className="m-3 p-4 border outline-0 rounded-lg focus:border-indigo-800 w-full resize-none border-gray-400"
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

export default SmartWatchForm;
