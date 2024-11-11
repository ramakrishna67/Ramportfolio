import Navbar from "@/components/navbar";
import Image from "next/image";

export default function myprojects() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col justify-center items-center bg-cover w-full md:w-screen h-full p-5"
        style={{ backgroundImage: "url(/bck.jpg)" }}
      >
        <div className="flex">
          <h1 className="items-start text-4xl font-bold mt-24 p-6">
            MY PROJECTS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className=" md:w-96 md:h-80 w-80 h-72 flex-col gap-8 bg-gray-700 rounded-3xl"></div>
          <div className=" md:w-96 md:h-80 w-80 h-72 flex-col gap-8 bg-gray-700 rounded-3xl"></div>
          <div className=" md:w-96 md:h-80 w-80 h-72 flex-col gap-8 bg-gray-700 rounded-3xl"></div>
          <div className=" md:w-96 md:h-80 w-80 h-72 flex-col gap-8 bg-gray-700 rounded-3xl"></div>
        </div>
      </div>
    </>
  );
}
