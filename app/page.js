import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div className="bgcustom min-h-screen flex flex-col items-start place-content-center w-full space-y-5">
        <div className="navbar navbar-center md:fixed md:top-0">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <a href="/">
            <Image
              src="/dsc-logo.png"
              alt="Dramatic scripts' logo"
              height={100}
              width={100}
              className="ml-4"
            ></Image>
          </a>
          {/* <a href="/" className="btn btn-ghost normal-case text-xl text-white">
            Dramatic Scripts
          </a> */}
        </div>

        <p className="font-extrabold text-4xl pt-4 md:pt-0 w-fit md:text-6xl ml-8 md:w-2/5 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-800">
            Empower your
          </span>{" "}
          roleplay dreams with affordable & custom scripts.
        </p>

        <div className="hidden md:flex md:flex-row md:absolute md:self-end md:mr-20 md:w-2/5 md:h-4/5 md:overflow-hidden">
          <Image
            src="/1.png"
            alt="backpack image"
            fill
            className="object-cover"
          ></Image>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row w-fit">
          <div className="flex flex-row">
            <Image
              src="/version.png"
              alt="file version vector drawing"
              height={6}
              width={40}
              className="ml-10 md:ml-8"
            ></Image>
            <p className="font-bold text-xl text-zinc-500">Latest version</p>
          </div>
          <div className="flex flex-row">
            <Image
              src="/price.png"
              alt="price tag vector drawing"
              height={6}
              width={40}
              className="ml-10"
            ></Image>
            <p className="font-bold text-xl text-zinc-500">Affordable prices</p>
          </div>
          <div className="flex flex-row">
            <Image
              src="/support.png"
              alt="support vector drawing"
              height={6}
              width={40}
              className="ml-10"
            ></Image>
            <p className="font-bold text-xl text-zinc-500">Priority support</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pb-32 sm:flex-row md:pb-0 md:gap-0 btn-lg md:flex-row md:ml-4">
          <a
            href="/scripts"
            role="button"
            className="btn ml-5 btn-md md:ml-0 md:btn-lg rounded-2xl btn-wide btn-primary"
          >
            Explore scripts
          </a>
          <a
            href="https://docs.dramaticrp.in/"
            role="button"
            className="btn ml-5 btn-outline btn-md md:btn-lg rounded-2xl btn-wide btn-primary"
            target="_blank"
          >
            Documentation
          </a>
        </div>

        <div className="md:fixed md:bottom-0 md:gap-0 gap-3 items-center flex flex-col md:flex-row w-full outline outline-1 outline-slate-700 text-white p-3">
          <div className="items-center grid-flow-col">
            <p>
              Dramatic Scripts © 2023 - All right reserved
              {/* <a href="/staff" className="hover:text-purple-500 btn btn-sm">
                Staff team
              </a>{" "}
              |{" "} */}
              {/* <a
                href="/partners"
                className="hover:text-purple-500 btn btn-sm mx-2"
              >
                Partners
              </a>{" "}
              |{" "}
              <a
                href="/terms"
                className="hover:text-purple-500 btn btn-sm mx-2"
              >
                Terms
              </a>{" "}
              |{" "}
              <a
                href="/server"
                className="hover:text-purple-500 btn btn-sm mx-2"
              >
                Server
              </a> */}
            </p>
          </div>
          <div className="flex flex-row md:ml-auto md:mr-20 md:gap-3">
            <a href="/discord">
              <Image
                src="/discord.svg"
                alt=""
                height={2}
                width={25}
                className="w-64 h-10 md:w-8 md:h-auto"
              ></Image>
            </a>
            <a href="/youtube">
              <Image
                src="/youtube.svg"
                alt=""
                height={2}
                width={25}
                className="w-64 h-10 md:w-8 md:h-auto"
              ></Image>
            </a>
            <a href="/x">
              <Image
                src="/twitter.svg"
                alt=""
                height={2}
                width={25}
                className="w-64 h-10 md:w-8 md:h-auto"
              ></Image>
            </a>
            <a href="/instagram">
              <Image
                src="/instagram.svg"
                alt=""
                height={2}
                width={25}
                className="w-64 h-10 md:w-8 md:h-auto"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
