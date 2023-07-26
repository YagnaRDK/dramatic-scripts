import Image from "next/image";
import Footer from "../components/footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function StaffPage() {
  return (
    <>
      <div className="bgcustom">
        <div className="flex flex-col sm:flex-row navbar">
          <div className="flex flex-col sm:hidden">
            <div className="flex flex-row w-full items-center">
              <a className="navbar-start" href="/">
                <Image
                  src="/dsc-logo.png"
                  alt="Dramatic scripts' logo"
                  height={100}
                  width={100}
                ></Image>
              </a>
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
                <li className="hover:text-white bg-zinc-500 rounded-md">
                  <a href="/about">About</a>
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
          <a href="/" className="invisible sm:visible sm:navbar-start sm:ml-10">
            <Image
              src="/dsc-logo.png"
              alt="Dramatic scripts' logo"
              height={100}
              width={100}
              className="invisible sm:visible h-0 w-0 sm:h-auto sm:w-auto"
            ></Image>
          </a>
          <div className="invisible sm:visible sm:navbar-center sm:content-center">
            <ul className="menu menu-horizontal sm:px-1 sm:text-xl mr-10 text-slate-400">
              <li className="text-white bg-zinc-500 rounded-md">
                <a href="/about">About</a>
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

        <section className="text-white min-w-screen">
          <div className="max-w-screen px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-screen">
              <h2 className="text-3xl font-bold sm:text-4xl">
                What makes us special
              </h2>

              <p className="mt-4 text-gray-300">
                Our scripts are designed to enhance the roleplaying experience
                and provide players with more options to explore and interact
                with the game world. They are meticulously designed and
                optimized to provide the best possible performance, ensuring
                that your server runs smoothly and without any issues. With our
                advanced inventory systems, interactive menus, custom vehicles,
                and other customization options, you can truly create a unique
                and immersive roleplaying experience that will keep players
                engaged for hours on end.
              </p>
              <p className="mt-4 text-gray-300">
                We understand that running a server can be expensive, which is
                why we offer our highly optimized scripts at a very reasonable
                price. With a small investment, you can take your roleplaying
                game to the next level and provide your players with an
                unforgettable experience. Our scripts are easy to install and
                configure, and our support team is always available to assist
                you with any questions or issues you may have.
              </p>
              <p className="mt-4 text-gray-300">
                In summary, our scripts are the perfect addition to any roleplay
                server, offering an unparalleled premium experience for players.
                They are highly optimized and designed to enhance the immersive
                roleplay experience, providing players with more options to
                explore and interact with the game world. Don&apos;t settle for
                a mediocre experience upgrade your server today with our highly
                optimized scripts and take your roleplay to the next level.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex items-start gap-4">
                {/* <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span> */}

                <div>
                  <h2 className="text-lg font-bold">
                    Immersive Roleplay Experience.
                  </h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Our meticulously designed scripts enhance the game world,
                    providing players with interactive menus, custom vehicles,
                    and more to create an unforgettable and immersive
                    roleplaying experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg font-bold">Optimal Performance.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    We optimize our scripts for the best possible performance,
                    ensuring smooth server operation and a seamless user
                    experience, setting us apart from the competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg font-bold">Affordable Excellence.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Our highly optimized scripts come at a reasonable price,
                    offering a premium experience without breaking the bank,
                    making us a standout choice for budget-conscious server
                    owners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg font-bold">Exceptional Support.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Our dedicated support team is always available to assist
                    with any questions or issues, providing top-notch customer
                    service that sets us apart from other providers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg font-bold">Unwavering Commitment.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    We continuously refine and update our scripts to exceed
                    expectations, investing time and effort to ensure a flawless
                    and bug-free experience for our users.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg font-bold">Exclusive and Secure.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Our scripts are exclusively sold through Tebex and protected
                    by FiveM Asset Escrow, ensuring a safe and secure
                    transaction process for our customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-white text-4xl text-left m-5 mt-10 font-bold">
              FAQs:
            </div>

            {/* <div className="divider fill-white m-4"></div> */}
            <hr className="rounded-full m-4 self-center"></hr>

            <div className="space-y-4 pt-10">
              <details
                className="group border-s-4 border-indigo-500 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-xl font-medium text-white">
                    What makes oue scripts stand out from others in the market?
                  </h2>

                  <span className="shrink-0 rounded-full p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-white">
                  Our scripts are meticulously designed and optimized to provide
                  an immersive roleplaying experience, with interactive menus,
                  custom vehicles, and more, ensuring a premium gameplay
                  experience for players.
                </p>
              </details>

              <details className="group border-s-4 border-indigo-500 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-white">
                    Are your scripts affordable for server owners on a budget?
                  </h2>

                  <span className="shrink-0 rounded-full p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-white">
                  Yes, we offer our highly optimized scripts at a very
                  reasonable price, allowing server owners to enhance their
                  roleplaying game without significant financial burden.
                </p>
              </details>

              <details className="group border-s-4 border-indigo-500 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-white">
                    What kind of support can I expect if I encounter any issues
                    with your scripts?
                  </h2>

                  <span className="shrink-0 rounded-full p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-white">
                  Our dedicated support team is available to assist you promptly
                  with any questions or issues you may have, ensuring a smooth
                  experience for all our customers.
                </p>
              </details>

              <details className="group border-s-4 border-indigo-500 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-white">
                    How frequently do you update and improve your scripts?
                  </h2>

                  <span className="shrink-0 rounded-full p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-white">
                  We are committed to excellence and continuously work on
                  refining our scripts. We regularly update and enhance the
                  roleplay environment to deliver the best possible experience
                  to our users.
                </p>
              </details>

              <details className="group border-s-4 border-indigo-500 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-white">
                    How can I purchase your scripts and what payment methods do
                    you accept?
                  </h2>

                  <span className="shrink-0 rounded-full p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-white">
                  Our scripts are exclusively sold through Tebex, and we accept
                  various payment methods to ensure a secure and hassle-free
                  transaction process for our customers.
                </p>
              </details>

              <details className="group border-s-4 border-indigo-500 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-white">
                    Is there a refund policy in case I change my mind after
                    purchasing?
                  </h2>

                  <span className="shrink-0 rounded-full p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-white">
                  We do not offer refunds once the purchase has been made, but
                  rest assured that our scripts are in exceptional and fully
                  functional condition, providing a reliable and enjoyable
                  experience.
                </p>
              </details>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
