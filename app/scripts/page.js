import Image from "next/image";
import Footer from "../components/footer";
import { Manrope } from "next/font/google";
import backpack from "../../public/backpack.jpg";
import skateboard from "../../public/skateboard.png";
import phone from "../../public/Iphone.png";
import wep_bak from "../../public/wep-on-bak.png";
import car_radio from "../../public/car-radio.jpg";
import crafting from "../../public/crafting.png";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ScriptsPage() {
  return (
    <>
      <div className="bg-black">
        <div className="navbar">
          <div className="navbar-start ml-10">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-glass lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 text-slate-300"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Image
              src="/dsc-logo.png"
              alt="Dramatic scripts' logo"
              height={100}
              width={100}
            ></Image>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl mr-10 text-slate-400">
              <li className="hover:text-white">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-white">
                <a>About</a>
              </li>
              <li className="hover:text-white">
                <a>Staff</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-outline btn-primary rounded-full mr-10">
              Documantation
            </a>
          </div>
        </div>
        {/* 
        <div className="items-center justify-center gap-6 ml-20 mt-8 mr-3 grid grid-cols-3">
          <div className="article-card">
            <div className="content">
              <p className="date">June 4, 2023</p>
              <p className="title">Crafting table</p>
            </div>
            <Image src={crafting} alt="article-cover" />
          </div>
          <div className="article-card">
            <div className="content">
              <p className="date">May 28, 2023</p>
              <p className="title">Car Music</p>
            </div>
            <Image src={car_radio} alt="article-cover" />
          </div>
          <div className="article-card">
            <div className="content">
              <p className="date">May 21, 2023</p>
              <p className="title">Weapon on back</p>
            </div>
            <Image src={wep_bak} alt="article-cover" />
          </div>
          <div className="article-card">
            <div className="content">
              <p className="date">May 7, 2023</p>
              <p className="title">Smart phone</p>
            </div>
            <Image src={phone} alt="article-cover" />
          </div>
          <div className="article-card">
            <div className="content">
              <p className="date">May 1, 2023</p>
              <p className="title">Skateboard</p>
            </div>
            <Image src={skateboard} alt="article-cover" />
          </div>
          <div className="article-card">
            <div className="content">
              <p className="date">March 31, 2023</p>
              <p className="title">Backpack</p>
            </div>
            <Image src={backpack} alt="article-cover" />
          </div>
        </div> */}

        <div className="items-center justify-center gap-5 m-5 ml-10 grid grid-cols-3">
          <div className="card w-96 bg-base-100 shadow-xl shadow_guju">
            <figure>
              <Image src={crafting} alt="article-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Crafting table <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>blah_blah_blah_blah blah_blah_blah_blah</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-lg">Buy now</button>
                <button className="btn btn-primary btn-outline rounded-lg">
                  Read
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl shadow_guju">
            <figure>
              <Image src={car_radio} alt="article-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Car radio</h2>
              <p>blah_blah_blah_blah blah_blah_blah_blah</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-lg">Buy now</button>
                <button className="btn btn-primary btn-outline rounded-lg">
                  Read
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl shadow_guju">
            <figure>
              <Image src={wep_bak} alt="article-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Weapons on back</h2>
              <p>blah_blah_blah_blah blah_blah_blah_blah</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-lg">Buy now</button>
                <button className="btn btn-primary btn-outline rounded-lg">
                  Read
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl shadow_guju">
            <figure>
              <Image src={phone} alt="article-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Smart phone{" "}
                <div className="badge badge-accent">Most Popular</div>
              </h2>
              <p>blah_blah_blah_blah blah_blah_blah_blah</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-lg">Buy now</button>
                <button className="btn btn-primary btn-outline rounded-lg">
                  Read
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl shadow_guju">
            <figure>
              <Image src={skateboard} alt="article-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Skateboard</h2>
              <p>blah_blah_blah_blah blah_blah_blah_blah</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-lg">Buy now</button>
                <button className="btn btn-primary btn-outline rounded-lg">
                  Read
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl shadow_guju">
            <figure>
              <Image src={backpack} alt="article-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Backpack <div className="badge badge-accent">Most Popular</div>
              </h2>
              <p>blah_blah_blah_blah blah_blah_blah_blah</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-lg">Buy now</button>
                <button className="btn btn-primary btn-outline rounded-lg">
                  Read
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex mt-1 outline outline-1 outline-slate-700 text-white p-3">
          <div className="items-center grid-flow-col">
            <p>Dramatic Scripts © 2023 - All right reserved</p>
          </div>
          <div className="flex flex-row ml-auto mr-20 gap-3">
            <a href="https://discord.gg/ZMsddhmTAf">
              <Image src="/discord.svg" alt="" height={2} width={25}></Image>
            </a>
            <a href="https://www.youtube.com/@DramaticScripts">
              <Image src="/youtube.svg" alt="" height={2} width={25}></Image>
            </a>
            <a href="https://www.twitter.com/YagnaRDK">
              <Image src="/twitter.svg" alt="" height={2} width={25}></Image>
            </a>
            <a href="https://www.instagram.com/dramaticscripts/">
              <Image src="/instagram.svg" alt="" height={2} width={25}></Image>
            </a>
          </div>
        </div> */}

        <Footer />
      </div>
    </>
  );
}
