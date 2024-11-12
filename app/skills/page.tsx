import Navbar from "@/components/navbar";
import Image from "next/image";

export default function skills() {
  return (
    <>
      <Navbar />
      <div
        className=" bg-cover bg-fixed w-full h-full md:h-screen p-5"
        style={{ backgroundImage: "url(/bck.jpg)" }}
      >
        <div className=" flex flex-col justify-center items-center ">
          <div className="flex flex-col md:mt-36 mt-24 justify-center">
            <span className="text-5xl font-bold">Skills & Technologies</span>

            <span className="text-md items-start">
              Mastering the required Technologies
            </span>
          </div>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-8 mt-5 items-center content-center">
            <li>
              <Image
                src="/html.png"
                height={122}
                width={122}
                alt="html image"
              />
            </li>
            <li>
              <Image src="/css.png" height={122} width={122} alt="css image" />
            </li>
            <li>
              <Image
                src="/js.png"
                height={122}
                width={122}
                alt="javascript image"
              />
            </li>
            <li>
              <Image src="/git.png" height={122} width={122} alt="git image" />
            </li>
            <li>
              <Image
                src="/tailwindcss.png"
                height={122}
                width={122}
                alt="tailwindcss image"
              />
            </li>
            <li>
              <Image
                src="/react.png"
                height={140}
                width={140}
                alt="react image"
              />
            </li>
            <li>
              <Image
                src="/mongodb.png"
                height={122}
                width={122}
                alt="mongodb image"
              />
            </li>
            <li>
              <Image
                src="/node.png"
                height={122}
                width={122}
                alt="node image"
              />
            </li>
            <li>
              <Image
                src="/next.png"
                height={118}
                width={118}
                alt="nextjs image"
              />
            </li>
            <li>
              <Image
                src="/ts.png"
                height={122}
                width={122}
                alt="typescriptimage"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
