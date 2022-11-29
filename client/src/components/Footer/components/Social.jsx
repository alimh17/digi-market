import React from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiAparat } from "react-icons/si";

const Social = () => {
  return (
    <div className="w-full flex w-full justify-between">
      <h2 className="text-2xl mx-3 text-gray-400">همراه ما باشید</h2>
      <ul className="flex">
        <li className="mx-3 cursor-pointer">
          <AiOutlineInstagram className="text-gray-400 text-2xl" />
        </li>
        <li className="mx-3 cursor-pointer">
          <AiOutlineTwitter className="text-gray-400 text-2xl" />
        </li>
        <li className="mx-3 cursor-pointer">
          <AiFillLinkedin className="text-gray-400 text-2xl" />
        </li>
        <li className="mx-3 cursor-pointer">
          <SiAparat className="text-gray-400 text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default Social;
