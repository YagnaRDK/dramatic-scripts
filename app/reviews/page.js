import Image from "next/image";
import Footer from "../components/footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ReviewsPage() {
  return (
    <>
      <div className="bgcustom">
        <div className="flex flex-col sm:flex-row navbar">
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
                <li className="text-white bg-zinc-500 rounded-md">
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
                <a href="https://dramatic.tebex.io/about">About</a>
              </li>
              <li className="hover:text-white">
                <a href="/scripts">Scripts</a>
              </li>
              <li className="text-white bg-zinc-500 rounded-md">
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
          Listen from our dear clients!
        </div>

        {/* <div className="divider fill-white m-4"></div> */}
        <hr className="rounded-full m-4 self-center"></hr>

        <Footer />
      </div>
    </>
  );
}
