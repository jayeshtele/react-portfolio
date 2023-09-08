import React from "react";

export default function AboutMe() {
  return (
    <div className="h-screen w-full  ">
      <h3 className="text-2xl font-bold pb-5">About Me</h3>
      <div className="flex">
        <div className="bg-[rgba(119,119,119,0.1)] p-10">
          <h3 className="pb-5 text-xl font-semibold">Education</h3>
          <p className="font-bold text-[#a9afc3]">2023</p>
          <h2 className="pb-5 text-xl">
            B.Tech in Mechanical Engineering -{" "}
            <span className="text-[#a9afc3]">
              R.C Patel Institute of Technology, Shirpur
            </span>
          </h2>
          <p className="font-bold text-[#a9afc3]">2020</p>
          <h2 className="pb-5 text-xl">
            Diploma in Mechanical Engineering -{" "}
            <span className="text-[#a9afc3]">
              R.C Patel Polytechnic, Shirpur
            </span>
          </h2>
          <p className="font-bold text-[#a9afc3]">2016</p>
          <h2 className="text-xl">
            10<sup>th</sup> -
            <span className="text-[#a9afc3]">
              {" "}
              R.C Patel English Medium School, Shirpur
            </span>
          </h2>
        </div>
        <div className="bg-[rgba(119,119,119,0.1)] p-5"></div>
      </div>
    </div>
  );
}
