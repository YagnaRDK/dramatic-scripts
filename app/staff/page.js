import Image from "next/image";
import Footer from "../components/footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ScriptsPage() {
  return (
    <>
      <div className="bg-zinc-950">
        <div className="flex flex-col sm:flex-row navbar">
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
                  <a href="/reviews">Reviews</a>
                </li>
                <li className="hover:text-white">
                  <a href="/scripts">Scripts</a>
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
                <a href="/reviews">Reviews</a>
              </li>
              <li className="hover:text-white">
                <a href="/scripts">Scripts</a>
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
          Staff team
        </div>

        {/* <div className="divider fill-white m-4"></div> */}
        <hr className="rounded-full m-4 self-center"></hr>

        <div className="gap-9 flex flex-col md:flex-row place-content-center items-center min-h-screen">
          <div className="relative flex flex-col place-content-center items-center w-80 h-[30rem] md:w-96 font-extrabold border border-slate-50 rounded-3xl overflow-hidden">
            <Image src="/gradient-img.png" alt="gradient image" fill></Image>
            <div className="rounded-full w-48 h-48 relative overflow-hidden">
              <Image
                src="/yagnaRDK.png"
                alt="profile picture of Yagan R.D. Khokhariya"
                fill
              ></Image>
            </div>
            <div className="text-2xl mt-5 text-slate-50 z-10">
              Yagna R.D. Khokhariya
            </div>
            <div className="mt-3 badge badge-accent badge-outline badge-md z-10">
              Web Developer
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5 z-10">
              <a href="https://www.youtube.com/@YagnaRDK" target="_blank">
                <Image
                  src="/youtube.svg"
                  alt=""
                  height={2}
                  width={25}
                  className="w-64 h-10 md:w-8 md:h-auto"
                ></Image>
              </a>
              <a href="https://www.twitter.com/YagnaRDK" target="_blank">
                <Image
                  src="/twitter.svg"
                  alt=""
                  height={2}
                  width={25}
                  className="w-64 h-10 md:w-8 md:h-auto"
                ></Image>
              </a>
              <a href="https://www.instagram.com/yagna.rdk" target="_blank">
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
          <div className="relative flex flex-col place-content-center items-center w-80 h-[30rem] md:w-96 font-extrabold border border-slate-50 rounded-3xl overflow-hidden">
            <Image src="/gradient-img.png" alt="gradient image" fill></Image>
            <div className="rounded-full w-48 h-48 relative overflow-hidden">
              <Image
                src="/aayush_shankar.jpg"
                alt="profile picture of Aayush Shankar"
                fill
              ></Image>
            </div>
            <div className="text-2xl mt-5 text-slate-50 z-10">
              Aayush Shankar
            </div>
            <div className="mt-3 badge badge-accent badge-outline badge-md z-10">
              Founder
            </div>
            <div className="mt-3 badge badge-accent badge-outline badge-md z-10">
              Scripts Developer
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5 z-10">
              <a href="https://www.youtube.com/BicyclerAayush" target="_blank">
                <Image
                  src="/youtube.svg"
                  alt=""
                  height={2}
                  width={25}
                  className="w-64 h-10 md:w-8 md:h-auto"
                ></Image>
              </a>
              <a href="https://twitter.com/bicycleraayush" target="_blank">
                <Image
                  src="/twitter.svg"
                  alt=""
                  height={2}
                  width={25}
                  className="w-64 h-10 md:w-8 md:h-auto"
                ></Image>
              </a>
              <a
                href="https://www.instagram.com/aayush_shankar/"
                target="_blank"
              >
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
          {/* <div className="relative flex flex-col place-content-center items-center w-80 h-[30rem] md:w-96 font-extrabold border border-slate-50 rounded-3xl overflow-hidden">
            <Image src="/gradient-img.png" alt="gradient image" fill></Image>
            <div className="rounded-full w-48 h-48 relative overflow-hidden">
              <Image
                src={yagnaRDK}
                alt="profile picture of Yagan R.D. Khokhariya"
                fill
              ></Image>
            </div>
            <div className="text-2xl mt-5 text-slate-50 z-10">
              Yagna R.D. Khokhariya
            </div>
            <div className="mt-3 badge badge-accent badge-outline badge-md z-10">
              Web Developer
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5 z-10">
              <a href="https://www.youtube.com/@DramaticScripts">
                <Image
                  src="/youtube.svg"
                  alt=""
                  height={2}
                  width={25}
                  className="w-64 h-10 md:w-8 md:h-auto"
                ></Image>
              </a>
              <a href="https://www.twitter.com/YagnaRDK">
                <Image
                  src="/twitter.svg"
                  alt=""
                  height={2}
                  width={25}
                  className="w-64 h-10 md:w-8 md:h-auto"
                ></Image>
              </a>
              <a href="https://www.instagram.com/dramaticscripts/">
                <Image
                  src="/instagram.svg"
                  alt=""
                  height={2}
                  width={25}
                  className="w-64 h-10 md:w-8 md:h-auto"
                ></Image>
              </a>
            </div>
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
