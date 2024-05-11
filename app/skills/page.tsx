import Image from "next/image";

export default function skills() {
  return (
    <div
      className="z-10 relative bg-cover bg-center justify-center items-center w-screen h-screen"
      style={{ backgroundImage: "url(/bck.jpg)" }}
    >
      <div className=" flex  flex-col gap-12 max-w-[80%] text-center items-center justify-center pt-44 pl-72  ">
        <div className="flex flex-col gap-2">
          <span className="text-5xl font-bold">Skills & Technologies</span>
          <br />
          <span className="text-md">Mastering the required Technologies</span>
        </div>
        <ul className="flex items-center gap-9">
          <li>
            <Image src="/html.png" height={122} width={122} alt="html image" />
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
        </ul>
        <ul className="flex items-center justify-between gap-8">
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
            <Image src="/node.png" height={122} width={122} alt="node image" />
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
  );
}
