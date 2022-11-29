import React from "react";

const Form = () => {
  return (
    <form className=" flex justify-center items-center my-5">
      <input
        placeholder="ایمیل"
        className="border w-62 bg-gray-300 px-3 rounded py-2"
      />
      <button
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="bg-gray-400 w-32 mx-3 rounded text-2xl text-white py-1  ouline-0"
      >
        ثبت
      </button>
    </form>
  );
};

export default Form;
