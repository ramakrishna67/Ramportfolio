import Navbar from "@/components/navbar";
import Image from "next/image";

export default function myprojects() {
  return (
    <>
      <Navbar />
      <div
        className=" bg-cover bg-fixed w-full h-full"
        style={{ backgroundImage: "url(/bck.jpg)" }}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="items-start text-4xl font-bold mt-24 p-6">
              MY PROJECTS
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
            <div className="card card-compact bg-base-100 md:w-96 w-80  shadow-xl">
              <figure>
                <img src="heal.png" alt="Heal.IO site Image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Heal.IO</h2>
                <p>
                  This is a website developed for the people who are confused
                  about which doctor they should consult or what might be the
                  disease they are facing.
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://github.com/ramakrishna67/heal"
                    target="_blank"
                  >
                    <button className="btn btn-primary">Go Live</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 md:w-96 w-80 shadow-xl">
              <figure>
                <img src="Myportfolio.png" alt="portfolio site Image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">My Portfolio</h2>
                <p>This is my simple & personal portfolio made using nextjs </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://github.com/ramakrishna67/Ramportfolio"
                    target="_blank"
                  >
                    <button className="btn btn-primary">Go Live</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 md:w-96 w-80 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Website Image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">My Project</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Go Live</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 md:w-96 w-80 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Website image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">My Project</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Go Live</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
