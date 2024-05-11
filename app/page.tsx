import Image from "next/image";

export default function Home() {
  return (
    <div className="z-10 relative flex justify-center items-center bg-cover bg-fixed bg-center w-screen h-screen custom-img">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className=" ml-10 sm:pl-20 sm:pb-40 sm:ml-4">
          <h1 className=" text-[50px] text-white font-bold mt-96 ">
            Hello, <br />
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-800 sm:text-6xl">
              I am Ramakrishna
            </span>
          </h1>
          <br />
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <div className=" w-36 h-8 border-2 pl-1 pr-1 border-slate-700 bg-slate-700 rounded-xl text-center text-lg">
              Web developer
            </div>
            <div className=" w-56 h-8 border-2 pl-1 pr-1 border-slate-700 bg-slate-700 rounded-xl text-center text-lg">
              Competitive programmer
            </div>
            <div className=" w-36 h-8 border-2 pl-1 pr-1 border-slate-700 bg-slate-700 rounded-xl text-center text-lg ">
              App developer
            </div>
          </div>
        </div>
        <div className="ml-5 pl-9 mb-10 pb-4 sm:pl-8 pt-8 sm:pb-56 mr-12 mt-48 items-start sm:h-96 rounded-xl  border-slate-600 bg-slate-900">
          <h1 className="text-[12px] sm:text-[30px] text-white font-bold mr-80 underline">
            About Me
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-800 font-bold text-sm sm:text-lg pr-6">
            <br />
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 text-md sm:text-xl">
              Full-Stack Dev with an AI Spark:
            </span>
            <br />
            <br /> I am a full-stack developer fueled by a dual passion:
            building beautiful
            <br /> and functional websites (HTML, CSS, JS) and exploring the
            potential <br />
            of Artificial Intelligence (AI). Machine learning and deep learning
            ignite <br />
            my curiosity, and I am constantly seeking ways to bridge the gap
            between <br />
            traditional web dev and the future of AI. I want to create
            Intelligent <br />
            and interactive websites that learn, adapt, and personalize the user
            journey.
          </p>
        </div>
      </div>
    </div>
  );
}
