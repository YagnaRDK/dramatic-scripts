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
          src="https://www.youtube.com/embed/RqT8Bf4j0E8"
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
          Dramatic Crafting is a clever script for the qbcore framework, aiming
          to enhance players&apos; crafting experiences on the server. It
          introduces a dynamic system where players can craft various items
          predetermined by the server developers. Crafting requires specific
          materials and consumes in-game time, adding realism and enjoyment to
          the roleplay environment. With Dramatic Crafting, players can engage
          in more immersive and authentic gameplay, enhancing their overall
          experience.<br></br>
          <br></br>
          The script offers a diverse selection of craftable items, Which can be
          created by the server developers. Players can create powerful weapons,
          valuable tools, and essential consumables, providing them with a range
          of options to suit their needs. Crafting these items involves
          gathering specific materials, and fostering exploration, cooperation,
          and resourcefulness among players. It adds challenge and strategy to
          the crafting process, making it more rewarding.<br></br>
          <br></br> Time is a crucial element in Dramatic Crafting, as each
          crafting process consumes in-game time. This emphasizes the realistic
          and immersive nature of the roleplay environment. Players must manage
          their time wisely, deciding which items to prioritize and making
          strategic gameplay decisions. The time constraint adds anticipation
          and planning to the crafting experience.<br></br>
          <br></br> By implementing Dramatic Crafting, server administrators
          enhance the authenticity and enjoyment of the gaming experience. The
          script fosters a sense of accomplishment and satisfaction as players
          witness the results of their crafting efforts. Each meticulously
          crafted item allows players to immerse themselves in the server&apos;s
          world and feel a deeper connection to their character and the overall
          narrative.<br></br>
          <br></br> In conclusion, Dramatic Crafting is a significant addition
          to the qbcore framework, revolutionizing players&apos; crafting
          experiences. The script elevates the overall gameplay with its dynamic
          system, diverse item selection, material requirements, and time
          consumption. Players can embark on an engaging and authentic journey,
          enriching their time on the server and fostering a vibrant community.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>
            The crafting table allows you to spawn at any desired location by
            changing the config files.
          </li>
          <li>
            It can be utilized with or without jobs, catering to a wide range of
            users.
          </li>
          <li>
            You have the flexibility to use the crafting table with or without
            gangs.
          </li>
          <li>
            The crafting table empowers you to craft any item of your choice.
          </li>
          <li>
            You can specify the required materials for crafting a particular
            item.
          </li>
          <li>
            Upon request, the crafting table will provide you with a list of the
            required materials for a recipe.
          </li>
          <li>
            When inspecting certain crafting items, the crafting table displays
            a detailed 3D model structure.
          </li>
          <li>
            The crafting table accounts for your experience level, allowing you
            to craft different materials accordingly.
          </li>
          <li>
            Certain items can only be crafted after obtaining specific
            blueprints.
          </li>
          <li>
            There is a percentage chance for each crafting attempt to either
            pass or fail, adding an element of risk and uncertainty.
          </li>
          <li>
            The crafting table provides information on the crafting level
            required to unlock each item.
          </li>
          <li>
            The inclusion of qb-target enhances interaction possibilities with
            the table, offering a more immersive crafting experience.
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
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            href="https://dramatic.tebex.io/package/5722186"
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
