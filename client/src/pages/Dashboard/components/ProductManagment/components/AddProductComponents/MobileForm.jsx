import React, { useContext } from "react";
import _ from "lodash";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";

import InputWithLabel from "components/Input";
import { brands } from "utils/brnadConverToPersian";
import { colorListFa } from "utils/colorLists";
import { mobileSchema } from "utils/validation";
import { showMobileFormAlert } from "utils/showFormAlert";

import style from "./addProductComponent.module.css";
import { newMobileRequest } from "server/MobileRequests";
import DashboardContext from "../../../../context/dashboardContext";

const MobileForm = () => {
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
      validationSchema={mobileSchema}
      onSubmit={async (value) => {
        setLoading(true);
        const res = await newMobileRequest(value);
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
            label="نام موبایل"
            from="name"
            type="text"
            id="name"
            name="name"
            placeholder="گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت"
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
            placeholder="24,499,000"
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
            placeholder="6.0 اینچ و بزرگتر"
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
              {brands.map((b, i) => (
                <option key={i} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full m-3">
            <label htmlFor="image">تصاویر موبایل</label>
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
            label="شبکه"
            from="network"
            id="network"
            name="network"
            placeholder="2G , 3G , 4G , 5G"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.network ? values.network : ""}
          />
          <InputWithLabel
            label="رم"
            from="ram"
            id="ram"
            name="ram"
            placeholder="128 گیگابایت"
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
            placeholder="۱۴۶.۷x۷۱.۵x۷.۶۵"
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
            placeholder="۱۷۴  گرم"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight ? values.weight : ""}
          />
          <InputWithLabel
            label="سیم کارت"
            from="simcart"
            id="simcart"
            name="simcart"
            placeholder="سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.simcart ? values.simcart : ""}
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
          <div className="col-span-full w-full ">
            <label htmlFor="body" className="">
              بدنه
            </label>
            <textarea
              name="body"
              id="body"
              type="text"
              rows={8}
              placeholder="قاب جلویی و پشتی از جنس شیشه فریم از جنس آلومینیومی صفحه‌نمایش با شیشه مقاوم در برابر خط‌وخش با پوشش Gorilla Glass سرامیکی دارای استاندارد IP۶۸ (مقاومت در برابر نفوذ آب، گِل، گرد و خاک) دارای مقاومت تا ۳۰ دقیقه در آب تا عمق ۶ متر"
              className="m-3 p-4 border outline-0 rounded-lg focus:border-indigo-800  resize-none border-gray-400 w-full"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body ? values.body : ""}
            />
          </div>
          <div className="col-span-full w-full">
            <label htmlFor="SpecialFeatures" className="">
              ویژگی های خاص
            </label>
            <textarea
              name="features"
              id="features"
              type="text"
              cols={6}
              rows={8}
              placeholder="دارای بدنه مقاوم,
          طراحی مناسب بانوان,
          مجهز به حس‌گر تشخیص چهره,
          مقاوم در برابر آب,
          مناسب بازی,
          مناسب عکاسی,
          مناسب عکاسی سلفی"
              className="m-3 p-4 border outline-0 rounded-lg focus:border-indigo-800 w-full resize-none border-gray-400"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.features ? values.features : ""}
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

export default MobileForm;
