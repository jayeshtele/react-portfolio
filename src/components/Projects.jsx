import React from "react";
import { react } from "../ImagesPath";
import { javascript } from "../ImagesPath";
import { htmlCss } from "../ImagesPath";
import { NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="react-projects">
        <h3 className="pb-5 text-2xl font-bold tracking-widest">Projects</h3>
        <h3 className="pb-2 font-bold tracking-wide text-[#c3c7d6] ">
          Reactjs Projects
        </h3>
        <div className="mb-10 overflow-x-scroll">
          <figure className="flex w-[70vw] md:w-[30vw]">
            {react.map((reactjs) => (
              <React.Fragment key={reactjs?.id}>
                <img src={reactjs?.imagePath} alt="" />
                <div className="icons mr-5 flex flex-col justify-around bg-red-200 px-2">
                  <NavLink
                    className="inline-block border-none p-2 text-blue-800 shadow-xl shadow-blue-800"
                    to={reactjs?.linkPath}
                    target="_blank"
                  >
                    {reactjs?.linkIcon}
                  </NavLink>
                  <NavLink
                    className=" p-2 text-black shadow-xl shadow-black"
                    to={reactjs?.gitHubPath}
                    target="_blank"
                  >
                    {reactjs?.gitHubIcon}
                  </NavLink>
                </div>
              </React.Fragment>
            ))}
          </figure>
        </div>
      </div>
      <div className="javascript-projects">
        <h3 className="pb-2 font-bold tracking-wide text-[#c3c7d6] ">
          Javascript Projects
        </h3>
        <div className="mb-10 overflow-x-scroll">
          <figure className="flex w-[70vw] md:w-[30vw]">
            {javascript.map((js) => (
              <React.Fragment key={js?.id}>
                <img src={js?.imagePath} alt="" />
                <div className="icons mr-5 flex flex-col justify-around bg-red-200 px-2">
                  <NavLink
                    className="inline-block border-none p-2 text-blue-800 shadow-xl shadow-blue-800"
                    to={js?.linkPath}
                    target="_blank"
                  >
                    {js?.linkIcon}
                  </NavLink>
                  <NavLink
                    className=" p-2 text-black shadow-xl shadow-black"
                    to={js?.gitHubPath}
                    target="_blank"
                  >
                    {js?.gitHubIcon}
                  </NavLink>
                </div>
              </React.Fragment>
            ))}
          </figure>
        </div>
      </div>
      <div className="htmlCss-projects">
        <h3 className="pb-2 font-bold tracking-wide text-[#c3c7d6] ">
          HTML & CSS Projects
        </h3>
        <div className="mb-10 overflow-x-scroll">
          <figure className="flex w-[70vw] md:w-[30vw]">
            {htmlCss.map((hc) => (
              <React.Fragment key={hc?.id}>
                <img src={hc?.imagePath} alt="" />
                <div className="icons mr-5 flex flex-col justify-around bg-red-200 px-2">
                  <NavLink
                    className="inline-block border-none p-2 text-blue-800 shadow-xl shadow-blue-800"
                    to={hc?.linkPath}
                    target="_blank"
                  >
                    {hc?.linkIcon}
                  </NavLink>
                  <NavLink
                    className=" p-2 text-black shadow-xl shadow-black"
                    to={hc?.gitHubPath}
                    target="_blank"
                  >
                    {hc?.gitHubIcon}
                  </NavLink>
                </div>
              </React.Fragment>
            ))}
          </figure>
        </div>
      </div>
    </>
  );
}
