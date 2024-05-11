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
      <div className="flex mt-48 justify-center items-center flex-col gap-8 bg-gray-700 rounded-3xl w-[60%] h-[80%]">
        <div className="flex flex-row gap-8 pt-12">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src="/logo.jpg" alt="Shoes" width={40} height={20} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src="/logo.jpg" alt="Shoes" width={40} height={20} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 pb-10">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src="/logo.jpg" alt="Shoes" width={40} height={20} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src="/logo.jpg" alt="Shoes" width={40} height={20} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
