import Image from "next/image";

export default function myprojects() {
  return (
    <div
      className="flex bg-cover bg-fixed w-screen h-[100%] justify-center items-center gap-4"
      style={{ backgroundImage: "url(/bck.jpg)" }}
    >
      {" "}
      <div className=" mb-[55%]">
        <h1 className="text-3xl font-bold">MY PROJECTS</h1>
      </div>
      <div className="flex mt-48 justify-center items-center flex-col gap-8 bg-gray-700 rounded-3xl w-[60%] h-[80%]"></div>
    </div>
  );
}
