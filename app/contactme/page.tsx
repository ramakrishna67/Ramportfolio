import Navbar from "@/components/navbar";
import Image from "next/image";

export default function contactme() {
  return (
    <>
      <Navbar />
      <div
        className="flex bg-cover w-full md:h-screen h-full justify-center"
        style={{ backgroundImage: "url(/bck.jpg)" }}
      >
        <div className="flex flex-col mt-40">
          <div className="flex items-start">
            <h1 className="text-2xl font-extrabold pb-8 pl-6">Contact Me</h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="pl-6">
              <Image
                src="/devphoto.jpeg"
                alt="developer photo"
                height={252}
                width={252}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-row md:flex-col md:justify-center md:items-center ">
              <form method="POST">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className=" pl-6 border-4 h-14 rounded-full m-2 w-[80%] "
                />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="pl-6 border-4 h-14 rounded-full m-2  w-[80%] "
                />
                <br />
                <textarea
                  required
                  placeholder="Message"
                  name="message"
                  className=" pl-6 pt-2 border-4 h-40 rounded-lg m-2 w-[90%] text-start "
                />
                <button className=" flex justify-center items-center border-2 ml-2 w-32 h-8 rounded-xl mb-10">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
