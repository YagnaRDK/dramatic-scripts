import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function Yikes() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center place-content-center w-full space-y-5">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/gamemaster9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-auto h-auto mt-16 md:w-[800px] md:h-[450px] rounded-2xl"
          allowfullscreen
        ></iframe>
        <hr className=" rounded-full w-8/12 self-center"></hr>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Description:
        </p>

        {/* <br></br><br></br> */}
        <p className="w-7/12 indent-6 font-bold text-sm text-slate-200 md:text-lg">
          Introducing Dramatic Reports, a STANDALONE in-game reporting system
          designed to empower players and foster fair play within the gaming
          community. This standalone script revolutionizes the reporting
          experience, allowing players to swiftly report cheaters, hackers, or
          rule breakers without leaving the immersive roleplay environment. With
          its visually stunning and universally compatible UI design, Dramatic
          Reports seamlessly integrates with all major frameworks, ensuring a
          hassle-free reporting process for players across different servers.
          <br></br>
          <br></br>
          Built on simplicity without sacrificing functionality, Dramatic
          Reports offers features such as anonymous reporting, real-time
          notifications, and evidence upload for thorough investigations.
          It&apos;s not just a script; it&apos;s a commitment to community
          empowerment, providing players with the tools to maintain a
          respectable roleplay environment. Constant updates and a dedication to
          continuous improvement make Dramatic Reports an essential asset in
          server management, shaping the future of fair play in the roleplay
          community. Join the revolution, get Dramatic Reports now, and
          experience the game-changing difference for yourself!
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>Easy to install by any developer or server owner.</li>
          <li>Discord webhook to store all the data inside Discord.</li>
          <li>A Role ping system to notify the staff about the report.</li>
          <li>You cannot submit empty data in the report system.</li>
          <li>A report confirmation system when you submit a report.</li>
          <li>Easy to modify the notification that the player will receive.</li>
          <li>
            You can customise the report command inside the `config.lua` file.
          </li>
          <li>The report command suggestion can also be changed.</li>
        </ul>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Additional Information:
        </p>

        <p className="w-7/12 indent-6 font-bold text-sm text-slate-200 md:text-lg">
          This package is constantly evolving, with each image or feature in
          this publication being subject to continuous improvement and
          adaptation for the optimal experience of the end consumer.<br></br>
          <br></br>Please be aware that this package is exclusively sold through
          Tebex and is protected by FiveM Asset Escrow. We do not offer this
          script for sale through any other platforms.<br></br>
          <br></br>Refunds are not accepted once the purchase has been made. The
          package is in exceptional and fully functional condition. In the event
          that a chargeback is initiated against this resource, both Tebex and
          Dramatic Store may take appropriate action due to the violation of
          multiple terms outlined in Tebex&apos;s policies. For more information
          regarding these policies,{" "}
          <a href="https://checkout.tebex.io/terms" className="text-indigo-500">
            click here
          </a>
          .
        </p>
        <div className="w-7/12 flex flex-row justify-end text-white">
          <a
            // className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            className="btn btn-md lg:btn-lg text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            href="https://dramatic.tebex.io/package/6102876"
          >
            {/* <Image
              src="/shop.png"
              alt="support vector drawing"
              height={6}
              width={40}
            ></Image> */}
            Buy Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
