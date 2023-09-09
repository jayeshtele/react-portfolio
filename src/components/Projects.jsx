import React from "react";
import { react } from "../ImagesPath";
import { javascript } from "../ImagesPath";
import { htmlCss } from "../ImagesPath";

export default function Projects() {
  return (
    <>
      <div className="react-projects">
        <h3 className="pb-5 text-2xl font-bold tracking-widest">Projects</h3>
        <h3 className="pb-2 font-bold tracking-wide text-[#c3c7d6] ">
          Reactjs Projects
        </h3>
        <div className="mb-10 overflow-x-scroll">
          <figure className="flex w-[30vw]">
            {react.map((reactjs) => (
              <React.Fragment key={reactjs?.id}>
                <img src={reactjs?.imagePath} alt="" />
                <div className="icons mr-5 flex flex-col justify-around bg-red-200 px-2">
                  <a
                    className="inline-block border-none p-2 text-blue-800 shadow-xl shadow-blue-800"
                    href={reactjs?.linkPath}
                  >
                    {reactjs?.linkIcon}
                  </a>
                  <a
                    className=" p-2 text-black shadow-xl shadow-black"
                    href={reactjs?.gitHubPath}
                  >
                    {reactjs?.gitHubIcon}
                  </a>
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
          <figure className="flex w-[30vw]">
            {javascript.map((js) => (
              <React.Fragment key={js?.id}>
                <img src={js?.imagePath} alt="" />
                <div className="icons mr-5 flex flex-col justify-around bg-red-200 px-2">
                  <a
                    className="inline-block border-none p-2 text-blue-800 shadow-xl shadow-blue-800"
                    href={js?.linkPath}
                  >
                    {js?.linkIcon}
                  </a>
                  <a className=" p-2 text-black shadow-xl shadow-black" href={js?.gitHubPath}>{js?.gitHubIcon}</a>
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
          <figure className="flex w-[30vw]">
            {htmlCss.map((hc) => (
              <React.Fragment key={hc?.id}>
                <img src={hc?.imagePath} alt="" />
                <div className="icons mr-5 flex flex-col justify-around bg-red-200 px-2">
                  <a
                    className="inline-block border-none p-2 text-blue-800 shadow-xl shadow-blue-800"
                    href={hc?.linkPath}
                  >
                    {hc?.linkIcon}
                  </a>
                  <a className=" p-2 text-black shadow-xl shadow-black" href={hc?.gitHubPath}>{hc?.gitHubIcon}</a>
                </div>
              </React.Fragment>
            ))}
          </figure>
        </div>
      </div>
    </>
  );
}
