import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

const Aside = ({ active, setActive }) => {
  const handleSetState = () => {
    const copyActive = [...active];
    copyActive[0] = true;
    setActive(copyActive);
  };

  useEffect(() => {
    handleSetState();
  }, []);

  const handleActiveItems = (num) => {
    const copyActive = [...active];
    copyActive.fill(false);
    copyActive[num] = true;
    setActive(copyActive);
  };

  return (
    <aside className="sticky top-0 md:w-5/12 lg:w-4/12 hidden md:flex flex-col border-l h-screen border-l-gray-400">
      <form className="border-b-2 flex items-center justify-center h-32">
        <button
          type="submit"
          className="relative  text-2xl right-8 text-gray-500 border-none outline-none"
        >
          <BsSearch />
        </button>
        <input
          type="search"
          placeholder="جستجو"
          className="p-4 rounded-lg w-3/4 px-10 text-xl focus:border-indigo-800 outline-0 border border-gray-400"
        />
      </form>
      <ul>
        <li
          className={`${
            active[0] && "bg-indigo-700 text-white"
          } p-4 text-xl flex items-center justify-between border-b transition-all cursor-pointer duration-200 ease-out  my-2 rounded-lg mx-2`}
          onClick={() => handleActiveItems(0)}
        >
          مدیریت محصولات
          <span>
            <IoIosArrowBack className="text-2xl text-gray-500" />
          </span>
        </li>
        <li
          className={`${
            active[1] && "bg-indigo-700 text-white"
          } p-4 text-xl flex items-center justify-between border-b transition-all cursor-pointer duration-200 ease-out  my-2 rounded-lg mx-2`}
          onClick={() => handleActiveItems(1)}
        >
          مدیریت بنرها
          <span>
            <IoIosArrowBack className="text-2xl text-gray-500" />
          </span>
        </li>
        <li
          className={`${
            active[2] && "bg-indigo-700 text-white"
          } p-4 text-xl flex items-center justify-between border-b transition-all cursor-pointer duration-200 ease-out my-2 rounded-lg mx-2`}
          onClick={() => handleActiveItems(2)}
        >
          تخفیف ها
          <span>
            <IoIosArrowBack className="text-2xl text-gray-500" />
          </span>
        </li>
        <li
          className={` ${
            active[3] && "bg-indigo-700 text-white"
          } p-4 text-xl flex items-center justify-between border-b transition-all cursor-pointer duration-200 ease-out my-2 rounded-lg mx-2`}
          onClick={() => handleActiveItems(3)}
        >
          محصولات جدید
          <span>
            <IoIosArrowBack className="text-2xl text-gray-500" />
          </span>
        </li>
        <li
          className={` ${
            active[4] && "bg-indigo-700 text-white"
          } p-4 text-xl flex items-center justify-between border-b transition-all cursor-pointer duration-200 ease-out my-2 rounded-lg mx-2`}
          onClick={() => handleActiveItems(4)}
        >
          پرفروش ترین ها
          <span>
            <IoIosArrowBack className="text-2xl text-gray-500" />
          </span>
        </li>
        <li
          className={`${
            active[5] && "bg-indigo-700 text-white"
          } p-4 text-xl flex items-center justify-between border-b transition-all cursor-pointer duration-200 ease-out my-2 rounded-lg mx-2`}
          onClick={() => handleActiveItems(5)}
        >
          برندها
          <span>
            <IoIosArrowBack className="text-2xl text-gray-500" />
          </span>
        </li>
        <li
          className={`${
            active[6] && "bg-indigo-700 text-white"
          } p-4 text-xl flex items-center justify-between border-b transition-all cursor-pointer duration-200 ease-out my-2 rounded-lg mx-2`}
          onClick={() => handleActiveItems(6)}
        >
          اخبار
          <span>
            <IoIosArrowBack className="text-2xl text-gray-500" />
          </span>
        </li>
        <li
          className={`${
            active[7] && "bg-indigo-700 text-white"
          } p-4 text-xl flex items-center justify-between border-b transition-all cursor-pointer duration-200 ease-out my-2 rounded-lg mx-2`}
          onClick={() => handleActiveItems(7)}
        >
          راه های ارتباطی
          <span>
            <IoIosArrowBack className="text-2xl text-gray-500" />
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
