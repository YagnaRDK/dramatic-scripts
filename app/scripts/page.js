// import ScriptsLayout from "./layout";
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
import rental_car from "../../public/rental.jpg";
import drugs from "../../public/drugs.png";
import chat from "../../public/chat.png";
import elevators from "../../public/elevators.png";
import camera from "../../public/camera.png";
import soundpack from "../../public/soundpack.png";
import revival from "../../public/revival.png";
import catcafe from "../../public/catcafe.png";
import dmgctrl from "../../public/dmgctrl.png";
import reports from "../../public/reports.png";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ScriptsPage() {
  return (
    <>
      <div className="overflow-hidden bgcustom">
        <div className="flex flex-col sm:flex-row navbar overflow-hidden">
          <div className="flex flex-col sm:hidden">
            <div className="flex flex-row w-full items-center">
              <div className="navbar-start">
                <a href="/">
                  <Image
                    src="/dsc-logo.png"
                    alt="Dramatic scripts' logo"
                    height={100}
                    width={100}
                  ></Image>
                </a>
              </div>
              <div className="navbar-end">
                <a
                  className="btn btn-outline btn-primary rounded-2xl mr-10"
                  href="https://docs.dramaticrp.in/"
                  target="_blank"
                >
                  Documentation
                </a>
              </div>
            </div>
            <div className=" flex flex-row content-center">
              <ul className="menu menu-horizontal px-1 text-xl text-slate-400">
                <li className="hover:text-white">
                  <a href="/about">About</a>
                </li>
                <li className="text-white bg-zinc-500 rounded-md">
                  <a href="/scripts">Scripts</a>
                </li>
                <li className="hover:text-white">
                  <a href="/reviews">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="invisible sm:visible sm:navbar-start sm:ml-10">
            <a href="/">
              <Image
                src="/dsc-logo.png"
                alt="Dramatic scripts' logo"
                height={100}
                width={100}
                className="invisible sm:visible h-0 w-0 sm:h-auto sm:w-auto"
              ></Image>
            </a>
          </div>
          <div className="invisible sm:visible sm:navbar-center sm:content-center">
            <ul className="menu menu-horizontal sm:px-1 sm:text-xl mr-10 text-slate-400">
              <li className="hover:text-white">
                <a href="/about">About</a>
              </li>
              <li className="text-white bg-zinc-500 rounded-md">
                <a href="/scripts">Scripts</a>
              </li>
              <li className="hover:text-white">
                <a href="/reviews">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="invisible sm:visible sm:navbar-end sm:content-end">
            <a
              className="btn btn-outline btn-primary rounded-2xl"
              href="https://docs.dramaticrp.in/"
              target="_blank"
            >
              Documentation
            </a>
          </div>
        </div>

        <div className="text-white text-4xl text-centre m-5 font-extrabold">
          Scripts
        </div>

        {/* <div className="divider fill-white m-4"></div> */}
        <hr className="rounded-full m-4 self-center"></hr>

        {/* <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-3 min-h-screen bg-red-600"> */}
        <div className="flex flex-row flex-1 justify-center items-center flex-wrap overflow-x-hidden min-h-screen max-h-content min-w-[100vw] max-w-[100vw]">
          {/* Add new scripts below 
          <div className="badge badge-secondary">NEW</div>
          <div className="badge badge-accent">FREE</div>
          <div className="badge badge-accent">Popular</div>
          */}

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={reports} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Reports</h2>
                <div className="badge badge-secondary">NEW</div>
                <p>Well, someone needs to get some warnings now.</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/6102876"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/reports"
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
                <Image src={dmgctrl} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Damage Control</h2>
                <div className="badge badge-accent">FREE</div>
                <p>Ouch! I am 50% down by just one hit? Let me change it!</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/6037589"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/damage-control"
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
                <Image src={catcafe} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">CatCafe</h2>
                <p>
                  Let cats run the business! I&apos;m sure, it will work out,
                  don&apos;t you?
                </p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5934326"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/catcafe"
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
                <Image src={revival} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Revival</h2>
                <p>Docs on the duty! with better treatments.</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5890123"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/revival"
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
                <Image src={soundpack} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Sound Pack</h2>
                <p>
                  A little bit of quirky and fishy sounds, is not a bad choice!
                </p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5879140"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/sound-pack"
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
                <Image src={camera} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Camera</h2>
                <div className="badge badge-accent">FREE</div>
                <p>Collect all the beautiful moments with teeny-tiny lens.</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5854945"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/camera"
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
                <Image src={elevators} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Elevators</h2>
                <div className="badge badge-accent">FREE</div>
                <p>Up and down, up and down.</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5842313"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/elevators"
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
                <Image src={rental_car} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Rental</h2>
                <p>Rent out some of that bad bois.</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5813984"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/rental"
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
                <Image src={drugs} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Drugs</h2>
                <p>Get high with that white powder!</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5801379"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/drugs"
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
                <Image src={chat} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Chat</h2>
                <div className="badge badge-accent">FREE</div>
                <p>For the better control of your words!</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5773650"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/chat"
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
                <Image src={rings} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Rings</h2>
                <p>Will you marry me? I&apos;ll give you a dimond ring!</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    // className="btn btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5761744"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    // className="btn glass btn-primary rounded-lg"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
                <h2 className="card-title">Dustbin</h2>
                <p>Let the garbage be where it belongs to!</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5748590"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
                <h2 className="card-title">Car Modes</h2>
                <p>Get your supercars modified with insane upgrades.</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5735998"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/car-modes"
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

          {/* <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={crafting} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Crafting table</h2>
                <p>Let&apos;s craft a love bomb to love everyone!</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5722186"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
          </div> */}

          <div className="flex flex-col flex-1 place-content-center items-center w-full h-full m-2.5">
            <div className="card bg-gray-800 md:bg-gray-900 shadow-xl shadow_guju w-80 md:w-96">
              <figure>
                <Image src={car_radio} alt="article-cover" />
              </figure>
              <div className="card-body text-white md:text-slate-300 hover:text-white">
                <h2 className="card-title">Car Music</h2>
                <p>
                  Let the music sink within you as you emerse into deep
                  roleplay.
                </p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5709451"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/car-music"
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
                <div className="badge badge-accent">Popular</div>
                <p>Get the wepons ready, war is about to start.</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5695115"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="/scripts/weapon-back"
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
                <p>
                  Do you have a smart phone? Do you want one? I know you do!
                </p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5670439"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
                <p>Let&apos;s ride on those wheels for hours and hours...</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5660364"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
                <p>Get set ready, this is going to be a hell of adventure.</p>
                <div className="card-actions justify-end">
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    href="https://dramatic.tebex.io/package/5604807"
                  >
                    Buy now
                  </a>
                  <a
                    role="button"
                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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

// ScriptsPage.getLayout = function getLayout(page) {
//   return <ScriptsLayout>{page}</ScriptsLayout>;
// };
