"use client";
import Image from "next/image";
import DiscordSvg from "../../public/svgs/discord_svg.js";
import YtSvg from "../../public/svgs/yt_svg.js";
import InstaSvg from "../../public/svgs/insta_svg.js";
import XSvg from "../../public/svgs/x_svg.js";

export default function Footer() {
  return (
    <div className="md:gap-0 gap-3 items-center flex mt-10 flex-col md:flex-row w-full outline outline-1 outline-slate-700 text-white p-3 overflow-hidden">
      <div className="items-center grid-flow-col">
        <p>
          Dramatic Scripts © 2023 - All right reserved
          {/* <a href="/staff" className="hover:text-purple-500 btn btn-sm">
            Staff team
          </a>{" "}
          |{" "} */}
          {/* <a href="/partners" className="hover:text-purple-500 btn btn-sm mx-2">
            Partners
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:text-purple-500 btn btn-sm mx-2">
            Terms
          </a>{" "}
          |{" "}
          <a href="/server" className="hover:text-purple-500 btn btn-sm mx-2">
            Server
          </a> */}
        </p>
      </div>
      <div className="flex flex-row gap-3 md:ml-auto md:mr-20">
        <a href="/discord">
          <DiscordSvg className="w-10 h-10 md:w-8 md:h-auto hover:fill-blue-800"></DiscordSvg>
          {/* <Image
                src="/discord.svg"
                alt=""
                height={2}
                width={25}
                className="w-64 h-10 md:w-8 md:h-auto"
              ></Image> */}
        </a>
        <a href="/youtube">
          <YtSvg className="w-10 h-10 md:w-8 md:h-auto hover:fill-red-600"></YtSvg>
          {/* <Image
                src="/youtube.svg"
                alt=""
                height={2}
                width={25}
                className="w-64 h-10 md:w-8 md:h-auto"
              ></Image> */}
        </a>
        <a href="/x">
          <XSvg className="w-10 h-10 md:w-8 md:h-auto hover:fill-blue-500"></XSvg>
          {/* <Image
                src="/twitter.svg"
                alt=""
                height={2}
                width={25}
                className="w-64 h-10 md:w-8 md:h-auto"
              ></Image> */}
        </a>
        <a href="/instagram">
          <InstaSvg className="w-10 h-10 md:w-8 md:h-auto hover:fill-pink-500"></InstaSvg>
          {/* <Image
                src="/instagram.svg"
                alt=""
                height={2}
                width={25}
                className="w-64 h-10 md:w-8 md:h-auto"
              ></Image> */}
        </a>
      </div>
    </div>
    // <div className="flex flex-row w-full footer_glass mt-1 outline outline-1 outline-slate-700 text-white p-3 bg-black">
    //   <div className="items-center grid-flow-col">
    //     <p>Dramatic Scripts © 2023 - All right reserved</p>
    //   </div>
    //   <div className="flex flex-row ml-auto mr-20 gap-3">
    //     <a href="https://discord.gg/ZMsddhmTAf">
    //       <Image src="/discord.svg" alt="" height={2} width={25}></Image>
    //     </a>
    //     <a href="https://www.youtube.com/@DramaticScripts">
    //       <Image src="/youtube.svg" alt="" height={2} width={25}></Image>
    //     </a>
    //     <a href="https://www.twitter.com/YagnaRDK">
    //       <Image src="/twitter.svg" alt="" height={2} width={25}></Image>
    //     </a>
    //     <a href="https://www.instagram.com/dramaticscripts/">
    //       <Image src="/instagram.svg" alt="" height={2} width={25}></Image>
    //     </a>
    //   </div>
    // </div>
  );
}
