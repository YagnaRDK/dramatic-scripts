import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-black min-h-screen flex flex-col items-center place-content-center w-full space-y-5">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/qszybw9klxw"
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
          Dramatic Scripts is a highly efficient and specialized dramatic
          dustbin script tailored specifically for the qbcore framework. It
          provides an extensive selection of dustbin props that seamlessly
          integrate with the qb-target system, enabling players to interact with
          them and acquire a wide array of items. This script offers developers
          a configuration file that grants easy customization options for the
          available items, allowing them to adapt the script to their
          server&apos;s unique requirements.<br></br>
          <br></br> One of the standout features of Dramatic Scripts is the
          inclusion of a captivating mini-game, powered by the (free) ps-ui.
          This mini-game adds an extra layer of engagement for users, as they
          embark on a quest to obtain their desired items from the dustbins.
          With the incorporation of the ps-ui, players can experience an
          immersive and visually appealing interface that enhances the overall
          gameplay experience.<br></br>
          <br></br> Whether it&apos;s a post-apocalyptic wasteland or a bustling
          urban setting, Dramatic Scripts provides a seamless integration of
          dustbins and their interactive elements, creating a realistic and
          immersive environment for players to explore. With its optimized
          performance and customizable options, this script is a valuable
          addition to any server running on the qbcore framework, elevating the
          overall gameplay experience and keeping players entertained for hours
          on end.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>26+ dustbin props already supported.</li>
          <li>Can customise minigames circles.</li>
          <li>Can customise the time period.</li>
          <li>Cash can also be founded.</li>
          <li>Required items to collect thrash.</li>
          <li>Obtain items can be edited through config.</li>
          <li>2 different dustbin sizes for more customization.</li>
          <li>Can add more default or custom props to the config file.</li>
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
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            href="https://dramatic.tebex.io/package/5748590"
          >
            <Image
              src="/shop.png"
              alt="support vector drawing"
              height={6}
              width={40}
            ></Image>
            Buy Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
