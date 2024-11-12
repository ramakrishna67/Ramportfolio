import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="z-40 flex w-full fixed items-center justify-between border-b-2 border-blue-200 bg-black">
        <div className="flex mb-4 sm:ml-8 mt-4 md:text-[#72b3c4] text-gray-300 font-extrabold items-center justify-center hover:cursor-pointer text-2xl brightness-150">
          <Image
            src="/logo.jpg"
            alt="logo"
            height={48}
            width={48}
            className=" ml-16 rounded-xl"
          />
        </div>
        <div className=" md:flex md:justify-end md:space-x-8 md:mb-4 md:mr-12 md:mt-6 md:mx-2 hidden">
          <a
            className="hover:text-[#c75fa8] text-xl hover:text-xl text-cyan-400 hover:font-extrabold font-bold hover:cursor-pointer"
            href="/"
          >
            Home
          </a>
          <a
            className="hover:text-[#c75fa8] text-xl hover:text-xl text-cyan-400 hover:font-extrabold font-bold hover:cursor-pointer"
            href="/skills"
          >
            Skills
          </a>
          <a
            className="hover:text-[#c75fa8] text-xl hover:text-xl text-cyan-400 hover:font-extrabold font-bold hover:cursor-pointer"
            href="/myprojects"
          >
            Projects
          </a>
          <a
            className="hover:text-[#c75fa8] text-xl hover:text-xl text-cyan-400 hover:font-extrabold font-bold hover:cursor-pointer"
            href="/contactme"
          >
            ContactMe
          </a>
        </div>
        {/*Hidden hamburger*/}
        <div className="md:hidden">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <div className="mr-36">
              <ul
                tabIndex={0}
                className="menu menu-3xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    className="text-white text-l hover:text-l hover:text-cyan-400 hover:font-bold font-bold hover:cursor-pointer"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-l hover:text-l hover:text-cyan-400 hover:font-bold font-bold hover:cursor-pointer"
                    href="/skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-l hover:text-l hover:text-cyan-400 hover:font-bold font-bold hover:cursor-pointer"
                    href="/myprojects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-l hover:text-l hover:text-cyan-400 hover:font-bold font-bold hover:cursor-pointer"
                    href="/contactme"
                  >
                    ContactMe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
