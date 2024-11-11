import Navbar from "@/components/navbar";
import Image from "next/image";

export default function myprojects() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col justify-center items-center bg-cover w-full h-full gap-4 p-5"
        style={{ backgroundImage: "url(/bck.jpg)" }}
      >
        <div className="flex">
          <h1 className="items-start text-4xl font-bold mt-24">MY PROJECTS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className=" w-96 h-80 flex-col gap-8 bg-gray-700 rounded-3xl"></div>
          <div className=" w-96 h-80 flex-col gap-8 bg-gray-700 rounded-3xl"></div>
          <div className=" w-96 h-80 flex-col gap-8 bg-gray-700 rounded-3xl"></div>
          <div className=" w-96 h-80 flex-col gap-8 bg-gray-700 rounded-3xl"></div>
        </div>
      </div>
    </>
  );
}
