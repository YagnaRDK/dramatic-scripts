import Image from "next/image";
import Footer from "../components/footer";
import { Manrope } from "next/font/google";
import backpack from "../../public/backpack.jpg";
import skateboard from "../../public/skateboard.png";
import phone from "../../public/Iphone.png";
import wep_bak from "../../public/wep-on-bak.png";
import car_radio from "../../public/car-radio.jpg";
import crafting from "../../public/crafting.png";
import carModes from "../../public/carModes.png";
import dustbin from "../../public/dustbin.png";
import rings from "../../public/rings.png";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ScriptsPage() {
  return (
    <>
      <div className="bg-black min-w-[100vw] overflow-hidden">
        <div className="flex flex-col sm:flex-row navbar min-w-[100vw] overflow-hidden">
          <div className="flex flex-col sm:hidden">
            <div className="flex flex-row w-full items-center">
              <div className="navbar-start">
                <Image
                  src="/dsc-logo.png"
                  alt="Dramatic scripts' logo"
                  height={100}
                  width={100}
                ></Image>
              </div>
              <div className="navbar-end">
                <a
                  className="btn btn-outline btn-primary rounded-full mr-10"
                  href="https://docs.dramaticrp.in/"
                >
                  Documentation
                </a>
              </div>
            </div>
            <div className=" flex flex-row content-center">
              <ul className="menu menu-horizontal px-1 text-xl text-slate-400">
                <li className="hover:text-white">
                  <a href="https://dramatic.tebex.io/about">About</a>
                </li>
                <li className="hover:text-white">
                  <a href="/scripts">Scripts</a>
                </li>
                <li className="hover:text-white">
                  <a href="/reviews">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="invisible sm:visible sm:navbar-start sm:ml-10">
            <Image
              src="/dsc-logo.png"
              alt="Dramatic scripts' logo"
              height={100}
              width={100}
              className="invisible sm:visible h-0 w-0 sm:h-auto sm:w-auto"
            ></Image>
          </div>
          <div className="invisible sm:visible sm:navbar-center sm:content-center">
            <ul className="menu menu-horizontal sm:px-1 sm:text-xl mr-10 text-slate-400">
              <li className="hover:text-white">
                <a href="https://dramatic.tebex.io/about">About</a>
              </li>
              <li className="hover:text-white">
                <a href="/scripts">Scripts</a>
              </li>
              <li className="hover:text-white">
                <a href="/reviews">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="invisible sm:visible sm:navbar-end sm:content-end">
            <a
              className="btn btn-outline btn-primary rounded-full"
              href="https://docs.dramaticrp.in/"
            >
              Documentation
            </a>
          </div>
        </div>

        <div className="text-white text-4xl text-left m-5 font-extrabold">
          Scripts
        </div>

        {/* <div className="divider fill-white m-4"></div> */}
        <hr className="rounded-full m-4 self-center"></hr>

        {/* <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-3 min-h-screen bg-red-600"> */}
        <div className="bg-red-600 flex flex-row flex-1 justify-center items-center flex-wrap overflow-x-hidden min-h-screen max-h-content min-w-[100vw] max-w-[100vw]">
          {/* Add new scripts below */}
          <div className="bg-yellow-600 flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={rings} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">
                  Rings <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5761744"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/rings"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={dustbin} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">
                  Dustbin <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5748590"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/dustbin"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={carModes} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">
                  Car Modes <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5735998"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/car_modes"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={crafting} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Crafting table</h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5722186"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/crafting_table"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={car_radio} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Car Music</h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5709451"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/car_music"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={wep_bak} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Weapons on back</h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5695115"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/weapon_back"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={phone} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Smart phone</h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5670439"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/phone"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={skateboard} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Skateboard</h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5660364"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/skateboard"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={backpack} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Backpack</h2>
                <p>blah_blah_blah_blah blah_blah_blah_blah</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn btn-primary rounded-lg"
                    href="https://dramatic.tebex.io/package/5604807"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn btn-primary glass rounded-lg"
                    href="/scripts/backpack"
                  >
                    Know more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-white"
                    >
                      <path
                        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                        data-name="3-Arrow Right"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
