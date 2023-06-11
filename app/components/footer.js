"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex mt-1 outline outline-1 outline-slate-700 text-white p-3 bg-black">
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
  );
}
