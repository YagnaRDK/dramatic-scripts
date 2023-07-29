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
                  className="btn btn-outline btn-primary rounded-2xl mr-10"
                  href="https://docs.dramaticrp.in/"
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
                <a href="/about">About</a>
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
              className="btn btn-outline btn-primary rounded-2xl"
              href="https://docs.dramaticrp.in/"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="text-white text-4xl text-centre m-5 font-extrabold">
          Voice of our clients!
        </div>

        {/* <div className="divider fill-white m-4"></div> */}
        <hr className="rounded-full m-4 self-center"></hr>

        <div className="min-h-screen">
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                <div className="mb-8 sm:break-inside-avoid">
                  <blockquote className="rounded-xl bg-gray-800 md:bg-gray-900 p-6 shadow">
                    <p className="leading-relaxed text-white">
                      Staff provided me exceptional assistance and support
                      throughout helping me customize a script. They quickly
                      understood what I needed and implemented them effectively
                      and quickly. They were responsive to my questions and
                      concerns, providing timely and thorough explanations.
                      Their attention to detail and commitment to delivering a
                      high-quality product was commendable. Working with this
                      Assert Gaming was a positive experience, and I highly
                      recommend their services to anyone.
                    </p>
                  </blockquote>

                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      alt="review"
                      src="/review3.webp"
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />

                    <div className="text-white">
                      <p className="text-lg">Vertex</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 sm:break-inside-avoid">
                  <blockquote className="rounded-xl bg-gray-800 md:bg-gray-900 p-6 shadow">
                    <p className="leading-relaxed text-white">
                      Script perfect work perfectly no bug and extremly good for
                      the price thank to all the team can&apos;t wait to see
                      your next script
                    </p>
                  </blockquote>

                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      alt="review"
                      src="/review2.webp"
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />

                    <div className="text-white">
                      <p className="text-lg">Jean marcel winston</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 sm:break-inside-avoid">
                  <blockquote className="rounded-xl bg-gray-800 md:bg-gray-900 p-6 shadow">
                    <p className="leading-relaxed text-white">
                      As a person who does not know a lot, I&apos;m glad I came
                      across dramatic scripts… the dev is so helpful and a fast
                      responder, his chat script works amazing and has a really
                      cool ui. I&apos;ve reached out about updating stuff and
                      he&apos;s on it! 100/10.
                    </p>
                  </blockquote>

                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      alt="review"
                      src="/review1.webp"
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />

                    <div className="text-white">
                      <p className="text-lg">Astro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
