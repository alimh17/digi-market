import React from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";

import Button from "../../../../../../components/Button";

import style from "./style.module.css";
import { sendBanner } from "../../../../../../server/BannerRequests";

const Form = ({ show, setLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addToast } = useToasts();

  const handleSubmitForm = async (info) => {
    const formData = new FormData();
    formData.append("name", info.name);
    formData.append("banner", info.banner[0]);
    setLoading(true);
    const res = await sendBanner(formData);
    if (res) {
      setLoading(false);
      show(false);
      addToast("بنر با موفقیت اضافه شد", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="flex flex-col w-3/4 text-center justify-evenly h-full">
      <h2 className="text-2xl font-bold">انتخاب بنر ابتدایی</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="name" className="m-2 text-right">
          نام بنر
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="نام بنر"
          {...register("name", { required: true, minLength: 3 })}
          className={`p-4 mt-3 border outline-0 rounded-lg focus:border-indigo-800 w-full border-gray-400 `}
        />
        {errors.name && (
          <p className="text-rose-500 text-right">
            * نام بنر نباید کمتری از 3 کاراکتر باشد
          </p>
        )}
        <label htmlFor="banner" className="m-2 text-right">
          تصویر بنر
        </label>
        <input
          id="banner"
          name="banner"
          type="file"
          placeholder="نام بنر"
          accept=".jpg , .jpeg , .png"
          className={`p-4 mt-3 border outline-0 rounded-lg focus:border-indigo-800 w-full border-gray-400 ${style.uploadBanner}`}
          {...register("banner", { required: true })}
        />
        {errors.banner && (
          <p className="text-rose-500 text-right">* لطفا یک تصویر اضافه کنید</p>
        )}

        <div className="flex">
          <Button
            title="تایید"
            type="submit"
            width={true}
            primary={true}
            click={(e) => {}}
          />
          <Button
            title="انصراف"
            click={() => show(false)}
            width={true}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
