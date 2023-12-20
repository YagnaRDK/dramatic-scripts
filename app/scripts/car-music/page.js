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
          src="https://www.youtube.com/embed/2880WKk2WbA"
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
          The Dramatic Car Music script enhances the ambience of your roleplay
          server, immersing players in a chill or party-filled environment. It
          offers a unique way to enjoy music from YouTube, elevating the in-game
          experience and fostering social connections.<br></br>
          <br></br> This script provides players with a physical item in the
          server that functions as a music player. It serves as a central hub
          for accessing and playing YouTube music, encouraging players to share
          their favourite tracks and create memorable moments together.<br></br>
          <br></br>
          Seamlessly integrated into the server, the script allows easy access
          and control over music playback. It offers customizable features like
          volume adjustment, track skipping, and playlist creation. Players have
          the freedom to curate their perfect soundtrack for any occasion,
          whether it&apos;s a relaxed gathering or an energetic celebration.
          <br></br>
          <br></br> The immersive nature of the script extends to the in-game
          environment, where players can enjoy music in their virtual cars.
          Whether cruising or hosting a car meet-up, the Dramatic Car Music
          script sets the desired mood and enhances social interactions.
          <br></br>
          <br></br> In summary, this script adds a dynamic and interactive
          element to your roleplay server, seamlessly integrating YouTube music.
          With a physical item and customizable features, players can create a
          chill or party atmosphere, fostering social connections and increasing
          overall enjoyment.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>The car radio is usable from your inventory.</li>
          <li>Full music control is available for players.</li>
          <li>Music play and pause buttons are available.</li>
          <li>Volume up and down buttons are available.</li>
          <li>Can loop the music if want to.</li>
          <li>The custom range is available for music to play.</li>
          <li>Can set the sound for inside the car and outside.</li>
          <li>Require items to be used by players.</li>
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
            href="https://dramatic.tebex.io/package/5709451"
          >
            Buy Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
