import React from "react";
import Jessicca from "/avatar-jessica.jpeg";
import Social from "./components/Social";

const MainDesign = () => {
  return (
    <>
      <div className="bg-slate-800 rounded-lg w-fit h-fit p-5 text-white text-center">
        <div className="mb-4">
          <img
            src={Jessicca}
            alt="avatar"
            className="rounded-full mx-auto w-[25%] mb-2"
          />
          <h2 className="text-2xl text-bold">Jessica Randall</h2>
          <p className="text-lime-300 text-semibold">London, United Kingdom</p>
        </div>
        <p>"Front-end developer and avid reader"</p>
        <div className="flex flex-col gap-3 mt-3">
          <Social socialName={"GitHub"} />
          <Social socialName={"Frontend Mentor"} />
          <Social socialName={"Linkedin"} />
          <Social socialName={"Twitter"} />
          <Social socialName={"Instagram"} />
        </div>
      </div>
    </>
  );
};

export default MainDesign;
