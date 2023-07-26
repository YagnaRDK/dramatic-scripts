import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function DrugsEmpire() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center place-content-center w-full space-y-5">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/-IyI7Q5FXgI"
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
          Dramatic Drugs is an advanced script for the QBCore framework,
          offering two labs and over 55 items for creating various types of
          drugs. These drugs provide buffs and opportunities to earn in-game
          currency through grinding and time-consuming activities. The script
          enhances user interaction and simplifies customization for developers,
          allowing them to edit and run the server with ease.<br></br>
          <br></br>Dramatic Drugs provides a wide range of options for players
          to create unique drugs with different effects, enhancing their
          gameplay experience. The script&apos;s flexibility empowers developers
          to customize the drug system according to their preferences, while
          server administrators can introduce additional features to make the
          game more immersive.<br></br>
          <br></br>Achieving balance, the script ensures that obtaining these
          drugs requires dedicated effort and time. Players must gather
          ingredients and master the drug creation process, creating a fair and
          rewarding gameplay experience that fosters a sense of achievement.
          <br></br>
          <br></br>By implementing Dramatic Drugs, servers can offer an engaging
          environment that captivates players, encouraging exploration,
          collaboration, and pushing boundaries. This advanced drug script
          elevates gameplay, providing an interactive and dynamic experience
          that players will remember.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>The raw material can be obtain throughs plants.</li>
          <li>The plants regrow after some time.</li>
          <li>There are multiple type of plants available.</li>
          <li>There are two labs which can be accessed through keys.</li>
          <li>More than 55+ items which can be converted or used.</li>
          <li>Can provide buffs to the player for some time.</li>
          <li>Can be used to sell and earn money inside the roleplay.</li>
          <li>There are total five variety or drugs available.</li>
          <li>
            Purchasable items through black money can be changed inside the
            config.
          </li>
          <li>
            All the location are fully customised which can be changed from
            config file .
          </li>
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
            href="https://dramatic.tebex.io/package/5801379"
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
