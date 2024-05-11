import Image from "next/image";

export default function contactme() {
  return (
    <div
      className="flex  bg-fixed bg-cover bg-center w-full h-screen gap-4"
      style={{ backgroundImage: "url(/bck.jpg)" }}
    >
      <div className="flex flex-col ml-10 sm:gap-12">
        <div className="sm:flex mt-32 sm:mt-32 sm:ml-40">
          <h1 className="text-2xl font-semibold">Contact Me</h1>
        </div>
        <div className="flex flex-col sm:flex-row mt-24 sm:mt-8 sm:justify-center sm:items-center sm:ml-72 sm:gap-8">
          <div className=" ml-16 mb-10">
            <Image
              src="/devphoto.jpeg"
              alt="developer photo"
              height={252}
              width={252}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-row sm:flex-col sm:justify-center sm:items-center ">
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
                className=" pl-6 pt-2 border-4 h-40 rounded-lg m-2 w-[100%] text-start "
              />
              <button className=" flex justify-center items-center border-2 ml-2 w-32 h-8 rounded-xl mb-10">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
