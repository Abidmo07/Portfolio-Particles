import React from "react";
import { FaLaravel } from "react-icons/fa";
import { SiInertia } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import mysql96 from "../assets/mysql96.png";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Main = () => {
  return (
    <div className="bg-gray-100 m-5 px-5 py-10 rounded-lg space-y-3">
      <h2 className="text-center font-bold text-xl text-red-600">About Me</h2>
      <p className="text-3xl font-extrabold text-gray-900 tracking-tighter text-center">
        Salam,I'm Ramzi Borz
      </p>
      <p className="text-center text-gray-500 text-xl">
        A junior full stack developer,React and Laravel using Inertia.js
      </p>
      <div className=" grid sm:grid-cols-2  gap-10">
        <div>
          <h2 className="font-semibold text-2xl text-gray-900 ">My Journey </h2>
          <p className="text-gray-600 text-lg">
            I began my web development journey with a passion for creating
            efficient and user-friendly applications. Proficient in Laravel and
            React.js, I have built projects like an online store, a to-do list
            app, and a weather application. Each project reflects my ability to
            combine dynamic front-end designs with powerful back-end logic,
            delivering seamless and intuitive user experiences.{" "}
          </p>
        
        </div>

        <div className="  bg-gray-100 border border-red-400 rounded-lg px-3 py-4 shadow-md shadow-red-200">
          <h2 className="text-center font-semibold text-2xl text-red-600">
            Skills & Expertise
          </h2>
          <div className=" gap-3 my-3 grid grid-cols-3 place-items-center ">
            <FaLaravel className="text-red-500 size-14" />
            <SiInertia className="size-14 bg-purple-600 text-white px-1" />
            <FaReact className="size-14 text-blue-500" />
            <img src={mysql96} alt="" />
            <FaJs className="size-14 text-yellow-300" />
            <RiTailwindCssFill className="size-14 text-blue-500 " />
          </div>
        </div>

      </div>
      <div  >
            <h2 className="font-semibold text-lg tracking-tighter text-gray-900">More About me </h2>
            <p className="w-full text-gray-600">
              Apart from coding, I am passionate about exploring new
              technologies and staying updated with the latest trends in web
              development and eCommerce. I enjoy sharing knowledge and helping
              others, whether it’s through collaborating on projects or offering
              insights into React, Laravel, Tailwind CSS, and digital marketing
              strategies. My focus is on building practical solutions that
              empower businesses and individuals alike.
            </p>
          </div>
    </div>
  );
};

export default Main;
