import React from "react";

export default function AboutMe() {
  return (
    <div className="h-full w-full mb-10">
      <h3 className="pb-5 text-2xl font-bold tracking-widest">About Me</h3>
      <div className="grid md:gap-5 lg:grid-cols-2">
        <div className="bg-[rgba(119,119,119,0.1)] md:p-10 p-3">
          <h3 className="pb-5 text-xl font-semibold tracking-widest">Education</h3>
          <p className="font-bold text-[#a9afc3]">2023</p>
          <h2 className="pb-5 md:text-xl">
            B.Tech in Mechanical Engineering -{" "}
            <span className="text-[#a9afc3]">
              R.C Patel Institute of Technology, Shirpur
            </span>
          </h2>
          <p className="font-bold text-[#a9afc3]">2020</p>
          <h2 className="pb-5 md:text-xl">
            Diploma in Mechanical Engineering -{" "}
            <span className="text-[#a9afc3]">
              R.C Patel Polytechnic, Shirpur
            </span>
          </h2>
          <p className="font-bold text-[#a9afc3]">2016</p>
          <h2 className="md:text-xl">
            10<sup>th</sup> -
            <span className="text-[#a9afc3]">
              {" "}
              R.C Patel English Medium School, Shirpur
            </span>
          </h2>
        </div>
        <div className="bg-[rgba(119,119,119,0.1)] md:p-10 p-5">
          <h3 className="pb-5 text-xl font-semibold tracking-widest">Coding Skills</h3>
          <figure className="grid grid-cols-5 sm:grid-cols-9 gap-5 lg:grid-cols-4 lg:gap-10 xl:grid-cols-5">
            <img className="w-full" src="/logos/html.png" alt="" />
            <img className="w-full" src="/logos/css.png" alt="" />
            <img className="w-full" src="/logos/javascript.png" alt="" />
            <img className="w-full" src="/logos/bootstrap-5.png" alt="" />
            <img className="w-full" src="/logos/tailwind.png" alt="" />
            <img className="w-full" src="/logos/reactjs.png" alt="" />
            <img className="w-full" src="/logos/redux.png" alt="" />
            <img className="w-full" src="/logos/git.png" alt="" />
            <img className="w-full" src="/logos/github.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
