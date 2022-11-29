import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-sans">
      <img
        alt="404"
        src={process.env.PUBLIC_URL + "/images/404.jpg"}
        className="md:w-1/2 h-1/2"
      />
      <h2 className="text-3xl font-bold">صفحه پیدا نشد</h2>
      <Link to="/" className="mt-4 bg-rose-500 p-3 rounded-md text-white">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFoundPage;
