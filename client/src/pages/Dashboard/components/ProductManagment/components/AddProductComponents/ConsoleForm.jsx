import React, { useContext } from "react";
import _ from "lodash";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";

import InputWithLabel from "../../../../../../components/Input";
import { consoleSchema } from "../../../../../../utils/validation";
import { showMobileFormAlert } from "../../../../../../utils/showFormAlert";

import style from "./addProductComponent.module.css";
import { newConsoleRequest } from "../../../../../../server/ConsoleRequests";
import DashboardContext from "../../../../context/dashboardContext";

const ConsoleForm = () => {
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
      validationSchema={consoleSchema}
      onSubmit={async (value) => {
        setLoading(true);
        const res = await newConsoleRequest(value);
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
            label="نام کنسول بازی"
            from="name"
            type="text"
            id="name"
            name="name"
            placeholder="مجموعه کنسول بازی سونی مدل PlayStation 5 Drive ظرفیت 825 گیگابایت به همراه هدست و پایه شارژر"
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
            placeholder="29,700,000 "
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price ? values.price : ""}
          />
          <InputWithLabel
            label="تعداد دسته"
            from="joyStick"
            id="joyStick"
            name="joyStick"
            placeholder="دو عدد"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.joyStick ? values.joyStick : ""}
          />
          <div className="w-full m-3">
            <label htmlFor="image">تصاویر کنسول بازی</label>
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
            label="حافظه"
            from="ram"
            id="ram"
            name="ram"
            placeholder="هارد دیسک"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ram ? values.ram : ""}
          />
          <InputWithLabel
            label="ظرفیت هارد دیسک"
            from="ram_space"
            id="ram_space"
            name="ram_space"
            placeholder="۸۲۵ گیگابایت"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ram_space ? values.ram_space : ""}
          />

          <InputWithLabel
            label="ابعاد"
            from="dimensions"
            id="dimensions"
            name="dimensions"
            placeholder="۳۹۰x۹۰x۲۶۰ سانتی‌متر"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dimensions ? values.dimensions : ""}
          />
          <InputWithLabel
            label="فناوری ارتباطی"
            from="connection"
            id="connection"
            name="connection"
            placeholder="بلوتوث"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.connection ? values.connection : ""}
          />

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
              placeholder="نسل نهم کنسول‌های بازی هم از راه رسیدند و ورود این کنسول‌ها دقیقا مقارن بود با سالی که تقریبا تمام مردم جهان با بیماری کرونا دست و پنجه نرم می‌کردند. تقریبا ۷ سال از عمر نسل هشتم گذشته وشاید بسیاری از ما هنوز هم آمادگی ورود به نسل جدید را نداشته باشیم. اما به هر حال نمی‌توان جلوی پیشرفت را گرفت و این روز فرارسیده است. سونی در نسل هشتم درس‌هایی که از نسل هفتم گرفته بود را به خوبی پیاده کرد و توانست به نوعی در نسل هشتم کنسول‌های بازی فرمانروایی کند و رقیب دیرینه خود را شکست دهد. اما نسل جدید چندان هم ساده به نظر نمی‌رسد و مایکروسافت با عرضه قدرتمندترین کنسول جهان و همچنین تصاحب برخی از شرکت‌های بازی‌سازی، می‌خواهد شکست نسل هشتم را جبران کند. کنسول نسل نهمی سونی یعنی PS5 چه از نظر سخت افزار و چه از نظر ظاهر و حتی دسته، دارای تغییرات زیادی بوده است. شرکت سونی دو نوع کنسول تا به این لحظه به بازار عرضه کرده است که یکی از آن‌ها نوع استاندارد و دیگری دیجیتال بوده که ما در اینجا به بررسی نوع استاندارد می‌پردازیم. پس در ادامه با ما همراه باشید."
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

export default ConsoleForm;
