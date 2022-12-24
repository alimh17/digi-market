import React, { useContext } from "react";
import _ from "lodash";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";

import InputWithLabel from "../../../../../../components/Input";
import { tabletBrands } from "../../../../../../utils/brnadConverToPersian";
import { colorListFa } from "../../../../../../utils/colorLists";
import { tabletSchema } from "../../../../../../utils/validation";
import { showMobileFormAlert } from "../../../../../../utils/showFormAlert";

import style from "./addProductComponent.module.css";
import { newTabletRequest } from "../../../../../../server/TabletsRequests";
import DashboardContext from "../../../../context/dashboardContext";

const TabletForm = () => {
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
      validationSchema={tabletSchema}
      onSubmit={async (value) => {
        setLoading(true);
        const res = await newTabletRequest(value);
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
            label="نام تبلت"
            from="name"
            type="text"
            id="name"
            name="name"
            placeholder="تبلت مایکروسافت مدل Surface Pro 8 - F ظرفیت 512 گیگابایت"
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
            placeholder="61,480,000"
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
              {tabletBrands.map((b, i) => (
                <option key={i} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full m-3">
            <label htmlFor="image">تصاویر تبلت</label>
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
            placeholder="بدون سیم‌کارت"
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
            placeholder="16 گیگابایت"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ram ? values.ram : ""}
          />

          <InputWithLabel
            label="حافظه داخلی"
            from="internal_ram"
            id="internal_ram"
            name="internal_ram"
            placeholder="512 گیگابایت"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.internal_ram ? values.internal_ram : ""}
          />
          <InputWithLabel
            label="وزن"
            from="weight"
            id="weight"
            name="weight"
            placeholder="
            ۸۹۱ گرم"
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
            placeholder="عدم پشتیبانی از سیم کارت"
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
              placeholder="آلومینیوم"
              className="m-3 p-4 border outline-0 rounded-lg focus:border-indigo-800  resize-none border-gray-400 w-full"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body ? values.body : ""}
            />
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
              placeholder="سرفیس پرو 8 با تغییرات بسیاری نسبت به نسخه های قبل معرفی گردید و شاهد محصولی فوق‌العاده زیبا، کارآمد و جذاب با قابلیت‌های خوب هستیم. از جمله مهم‌ترین تغییراتی که سرفیس پرو 8 به نسبت قبل داشته است، نمایشگر با اندازه 13 اینچ آن است که حاشیه‌ی کمتری دارد و رفرش‌ریت آن 120 هرتز میباشد . مایکروسافت بالاخره پورت تاندربولت 4 را به این تبلت اضافه و پورت USB-A را از آن حذف کرد. اکنون این محصول با دو پورت USB-C تاندربولت 4 ارائه شده است و کاربران امکان این را دارند تا سرفیس پرو 8 را به نمایشگرهای مختلفی با وضوح تصویر 4K متصل کند. سرفیس پرو 8 با پردازنده‌های نسل 11 اینتل که 4 هسته‌ پردازشی هم دارند ، قابلیت این را دارد تا همه‌ی فعالیت‌های شما با بالاترین سرعت و کیفیت ممکن به سرانجام برسد."
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

export default TabletForm;
