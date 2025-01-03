import React from "react";
import portfolio from "../assets/portfolio.jpg"
import { FaGithub } from "react-icons/fa";


const Card = () => {
  return (
    <div className="flex flex-col py-3 px-2 bg-red-50 rounded-lg gap-3 ">
      <img className="rounded-md" src={portfolio} alt="portfolio" />
      <h2 className="font-bold tracking-tighter text-lg">Portfolio</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        necessitatibus, eum est perferendis ipsum mollitia a unde reiciendis,
        recusandae accusamus voluptate? Sint quisquam tenetur expedita beatae
        dicta fugiat, libero fugit?
      </p>
      <div className="flex gap-10 py-2 ">
        <button className="bg-red-500 px-3 py-1 rounded-md text-white" type="button">Live Preview</button>
        <button className="bg-black text-white px-3 py-1 rounded-md flex items-center gap-1" type="button"><FaGithub />
        GitHub</button>
      </div>
    </div>
  );
};

export default Card;
