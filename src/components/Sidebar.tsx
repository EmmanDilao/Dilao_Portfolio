import React from "react";
import avatar from "../assets/avatar.jpg";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePhoneAndroid} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-gray-600 h-screen w-[350px] rounded-x1 m-7 hidden md:block">
      <div className="bg-gray-600 rounded-md p-4">
        <div className="rounded-x1 p-3 flex items-center justify-center">
          <img src={avatar} alt="" className="w-[200px] bg-gray-700 rounded-2x1"/>
        </div>
        <h1 className="text-white font-bold text-center text-3x1 my-2">
          Emmanuel Dilao
        </h1>
        <p className="text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7">
          Game Developer
        </p>
        <hr className="text-gray-700 mx-4 border-2" />
        <div className="mt-7 px-4 space-y-7">
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <FaRegEnvelope className="text-yellow-500 text-2x1" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">EMAIL</h1>
              <p className="text-gray-200">emmanuelfddilao@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <MdOutlinePhoneAndroid className="text-yellow-500 text-2x1" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">PHONE</h1>
              <p className="text-gray-200">+63 991-2344-656</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <FaRegCalendarAlt className="text-yellow-500 text-2x1" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">BIRTHDAY</h1>
              <p className="text-gray-200">13 December, 2003</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <FaMapMarkerAlt className="text-yellow-500 text-2x1" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">LOCATION</h1>
              <p className="text-gray-200">Cogon, Panitan, Capiz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
