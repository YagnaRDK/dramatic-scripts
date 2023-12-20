import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function WeponBack() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center place-content-center w-full space-y-5">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/dvmCrtzSN0I"
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
          This script is designed to enhance the roleplay experience in your
          game by allowing players to display their inventory weapon on their
          character&apos;s back. By implementing this feature, players can fully
          immerse themselves in the virtual world, and their actions will feel
          more tangible and realistic. The script is easy to use and can be
          customized to fit the specific needs of your game. By adding this
          feature to your game, you can create a more immersive and enjoyable
          roleplaying experience for your players, which in turn can increase
          player engagement and retention.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>Shows multiple weapons being carried in inventory.</li>
          <li>Can set the visible slot to be shown on the player.</li>
          <li>Support the common Melee in the game.</li>
          <li>Support the common&apos;s Pistols in the game.</li>
          <li>Support the common Smgs in the game.</li>
          <li>Support the common&apos;s Automatic Rifle in the game.</li>
          <li>Can add more weapons in Future.</li>
          <li>42+ Weapons Supported.</li>
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
            href="https://dramatic.tebex.io/package/5695115"
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
