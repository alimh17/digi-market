import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import config from "../../config/config.json";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { USER_NAME, PASSWORD } = config;

  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handlSubmitForm = (e) => {
    e.preventDefault();
    if (username === USER_NAME && password === PASSWORD) {
      navigate("/dashboard");
    } else {
      addToast("اطلاعات وارد شده اشتباه است", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="fixed w-full flex flex-col h-screen justify-start items-center font-sans bg-gradient-to-tr from-indigo-300 to-rose-300">
      <form className="mt-32 " onSubmit={handlSubmitForm}>
        <h2 className="text-xl my-4 text-center border-b py-3 text-gray-500">
          ورود به بخش مدیریت{" "}
        </h2>
        <div className="flex flex-col relative">
          <span className="absolute left-3 bottom-7">
            <AiOutlineUser className="text-xl" />
          </span>
          <label htmlFor="name">نام کاربری</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="نام کاربری"
            className="border rounded-md my-3 p-3 focus:border-rose-500 outline-none pl-8"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col relative">
          <span className="absolute left-3 bottom-7">
            <MdPassword className="text-xl" />
          </span>
          <label htmlFor="password">رمز عبور</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className="border rounded-md my-3 p-3 focus:border-rose-500 outline-none pl-8"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center mt-5">
          <button
            type="submit"
            className="bg-indigo-500 py-2 px-3 w-3/4 rounded-md text-white text-base "
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
