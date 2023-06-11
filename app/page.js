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
      <div className="bg-black">
        <div className="navbar bg-black">
          <Image
            src="/dsc-logo.png"
            alt="Dramatic scripts' logo"
            height={100}
            width={100}
          ></Image>
          <a className="btn btn-ghost normal-case text-xl text-white">
            Dramatic Scripts
          </a>
        </div>

        <div>
          <p className="font-extrabold text-6xl ml-8 mt-4 w-2/4 text-white">
            <span className="bg-gradient-to-r from-indigo-500 rounded-3xl">
              Empower your
            </span>{" "}
            roleplay dreams with affordable & custom scripts.
          </p>
          <div className="flex mt-16">
            <Image
              src="/version.png"
              alt="file version vector drawing"
              height={6}
              width={40}
              className="ml-8"
            ></Image>
            <p className="font-bold text-xl text-zinc-500">Latest version</p>
            <Image
              src="/price.png"
              alt="price tag vector drawing"
              height={6}
              width={40}
              className="ml-10"
            ></Image>
            <p className="font-bold text-xl text-zinc-500">Affordable prices</p>
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

        <div className="flex mt-9 mb-3 ml-8">
          <a
            href="/scripts"
            role="button"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full btn-wide btn-primary"
          >
            Explore scripts
          </a>
          <a
            href="https://docs.dramaticrp.in"
            role="button"
            className="btn ml-10 btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full btn-wide btn-primary"
          >
            Documantation
          </a>
          {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full btn-wide btn-primary">
            Explore scripts
          </button>
          <button className="btn ml-10 btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full btn-wide btn-primary">
            Documantation
          </button> */}
        </div>

        <div className="flex mt-1 outline outline-1 outline-slate-700 text-white p-3">
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
        </div>
      </div>
    </>
  );
}
