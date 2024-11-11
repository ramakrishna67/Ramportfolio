import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="z-10 relative flex justify-evenly bg-cover bg-center w-full min-h-screen custom-img">
        <Navbar />
        <div className="flex flex-col justify-evenly mt-14 items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[50px] text-white font-bold ">
              Hello, <br />
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-800 sm:text-6xl">
                I am Ramakrishna
              </span>
            </h1>
            <br />
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className=" border-2 pl-1 pr-1 border-slate-700 bg-slate-700 rounded-xl text-center text-lg">
                Web developer
              </div>
              <div className="border-2 pl-1 pr-1 border-slate-700 bg-slate-700 rounded-xl text-center text-lg">
                Competitive programmer
              </div>
              <div className="border-2 pl-1 pr-1 border-slate-700 bg-slate-700 rounded-xl text-center text-lg ">
                App developer
              </div>
            </div>
          </div>
          <div className="flex flex-col p-5 w-4/5 rounded-xl border-slate-600 bg-slate-900">
            <h1 className="text-[12px] sm:text-[30px] text-white font-bold underline">
              About Me
            </h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-800 font-bold text-sm sm:text-lg">
              <br />
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 text-md sm:text-xl">
                Full-Stack Dev with an AI Spark:
              </span>
              <br />
              <br /> I am a full-stack developer fueled by a dual passion:
              building beautiful and functional websites (HTML, CSS, JS) and
              exploring the potential of Artificial Intelligence (AI). Machine
              learning and deep learning ignite my curiosity, and I am
              constantly seeking ways to bridge the gap between traditional web
              dev and the future of AI. I want to create Intelligent and
              interactive websites that learn, adapt, and personalize the user
              journey.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
