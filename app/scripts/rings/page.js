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
          &quot;Dramatic Rings&quot; is an innovative script developed
          specifically for the qbcore framework, offering players an affordable
          opportunity to engage in interactive roleplay with other players. The
          script introduces a unique mechanic where players can utilize various
          types of rings to receive different buffs, such as armour, health,
          stamina, or stress reduction, depending on the specific ring they
          choose to wear.
          <br></br>
          <br></br>By incorporating the concept of rings, players can enhance
          their character&apos;s capabilities and tailor their playstyle to suit
          their preferences and objectives. The availability of multiple types
          of rings with distinct buffs adds depth and strategy to the
          roleplaying experience, allowing players to customize their characters
          in a meaningful way.
          <br></br>
          <br></br>
          The affordability of the script ensures that a wider range of players
          can access and enjoy the features and benefits it provides. This
          inclusive approach allows for a more diverse and vibrant player
          community, fostering participant interaction and collaboration.
          <br></br>
          <br></br>Overall, &quot;Dramatic Rings&quot; introduces an exciting
          and accessible mechanic to the qbcore framework, enhancing the
          immersive roleplaying experience and offering players a range of buffs
          and customization options through the utilization of different rings.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>The rings are usable from your inventory.</li>
          <li>Full-time control is available for developers.</li>
          <li>Can be provided through stores or some other ways.</li>
          <li>Require items to be used by players.</li>
          <li>Different rings give different buffs.</li>
          <li>Easy to customize the rings.</li>
          <li>Rings can only be used once.</li>
          <li>8+ Alredy usable rings available.</li>
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
            href="https://dramatic.tebex.io/package/5761744"
          >
            Buy Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
