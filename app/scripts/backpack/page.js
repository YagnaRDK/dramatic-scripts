import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center place-content-center w-full space-y-5">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/W1mdfHTBvEE"
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

        <p className="w-7/12 indent-6 font-bold text-sm text-slate-200 md:text-lg">
          This backpack script is designed to increase a player&apos;s inventory
          capacity in-game. Once activated, the backpack item will appear in the
          player&apos;s inventory, allowing them to store additional items.
          <br></br>
          <br></br>The backpack will have a limited number of slots, which will
          vary depending on the size of the backpack. Players can upgrade their
          backpacks by finding or purchasing larger sizes. The script will also
          ensure that the weight of the items in the backpack is accounted for
          and will affect the player&apos;s movement and agility. Overall, this
          script will provide players with a more convenient and immersive
          gameplay experience by enabling them to carry more items and adjust
          their playstyle accordingly.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>Players can carry more materials in their inventory.</li>
          <li>Backpack props on the player&apos;s back or hand.</li>
          <li>Can blacklist required items. (for example guns)</li>
          <li>Available opening/closing animation.</li>
          <li>Locking system for Briefcase.</li>
          <li>Players cannot use backpacks if they are not in their Hotbar.</li>
          <li>Lockpick for police to unlock the locked briefcase.</li>
          <li>Can be used to transfer multiple items inside a backpack.</li>
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
            className="btn btn-md lg:btn-lg text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            href="https://dramatic.tebex.io/package/5604807"
          >
            Buy Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
