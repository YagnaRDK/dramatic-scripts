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
          src="https://www.youtube.com/embed/gZD7qFRiiJs"
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
          The Enhanced Dramatic Phone is a cutting-edge script designed to
          provide an effortless and efficient roleplay experience. It is
          developed using the original QB-phone as a reference and is
          specifically designed to be installed on the server without any
          lengthy process.<br></br>
          <br></br> The phone boasts a sleek and premium design, inspired by the
          latest smartphone features, making it an elegant device to carry
          around. Moreover, all the available apps on the Enhanced Dramatic
          Phone are fully optimized and functional without any glitches or bugs,
          providing seamless and smooth performance.<br></br>
          <br></br> With its advanced technology, the Enhanced Dramatic Phone
          offers a range of features to enhance your roleplay experience.
          Whether it&apos;s making calls, sending messages, or accessing hidden
          channels, this device offers the latest and most efficient technology
          to get things done quickly and easily.<br></br>
          <br></br> Overall, the Enhanced Dramatic Phone is a top-of-the-line
          device that provides a premium user experience with its sleek design,
          optimized apps, and efficient communication features.<br></br>
          <br></br> Please note that the lockscreen feature shown in the YouTube
          preview does not come with the script. It is due to extensive error
          and bugs while it was tested out in the beta version. It might be
          updated in future update of the script.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>More than 25 completely unique applications.</li>
          <li>Gallery with images you click and can share easily.</li>
          <li>Multiple channels can be created inside the apps.</li>
          <li>More than 20 ways to config the scripts accordingly.</li>
          <li>Can set up a multi-job system through the phone.</li>
          <li>Multiple apps are available for different jobs and users.</li>
          <li>Phone ringing can be heard by the nearby players.</li>
          <li>Social Media has a censorship system and a report button.</li>
          <li>Can sell your vehicle through the garage app.</li>
          <li>Money can be transferred easily through the bank app.</li>
          <li>Chats can be deleted when you want them to be deleted.</li>
          <li>Advertising system for promoting in-game businesses.</li>
          <li>Houses can be managed through the house app inside.</li>
          <li>The camera is more optimised than ever to take pictures.</li>
          <li>Fully customised wallpaper and avatar system.</li>
          <li>Pinger to temporarily send your location to a player.</li>
          <li>
            Personalize your phone with an iPhone-like look, adding a touch of
            elegance to your device.
          </li>
          <li>
            Enjoy a seamless photography experience with resolved bugs in the
            camera UI and app.
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
            className="btn btn-md lg:btn-lg text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            href="https://dramatic.tebex.io/package/5670439"
          >
            Buy Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
