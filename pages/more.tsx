import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../components/Icons/ArrowIcon";
import Img from "../components/smallComp/image/Img";
import GithubIcon from "../components/Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../components/Icons/ExternalLink";

export default function SomethingIveBuilt() {
  // const router = useRouter();
  return (
    <div
    className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
   2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> More</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            More Stuff made by me!
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project 1 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href="https://github.com/Vipergigabyte/CoffeeOS" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/CoffeeOS.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/CoffeeOS.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://github.com/Vipergigabyte/CoffeeOS" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    CoffeeOS
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  One of my hardest projects is my Operating System. The reason I made an OS is because
                  I want to learn C, os development, how a computer works, and to get better at programming.
                  I tried my best on this OS. It is now the best OS but It is a pretty good one if you want to learn
                  OS development! CoffeeOS has a 64 bit kernel, bootsector and bootloader!
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">C</span>
                <span className="pr-4 z-10">OSDev</span>
                <span className="pr-4 z-10">x86_64</span>
                <span className="pr-4 z-10">Assembly</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/Vipergigabyte/CoffeeOS" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:bg-AAtertiary rounded-md py-4 md:p-6 z-10" style={{ width: '200px' }}>
          <p className="text-gray-300 md:text-gray-400 text-left">
            <Link href="/" passHref>
              <a style={{ color: '#11b7ed' }}>Back to main page</a>
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
