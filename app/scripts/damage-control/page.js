import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function DmgCtrl() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center place-content-center w-full space-y-5">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/ma_5FTDxhBU"
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
          Introducing Dramatic Damage, an advanced script designed to seamlessly
          modify weapon damage within your FiveM Roleplay server. This versatile
          script is framework-agnostic, serving as a standalone script. Its
          user-friendly design makes installation a breeze through a
          straightforward drag-and-drop process. Follow the provided
          installation guide to effortlessly adjust weapon damage percentages
          according to your preferences.<br></br>
          <br></br>Dramatic Damage simplifies altering damage values and offers
          the flexibility to expand your arsenal by effortlessly incorporating
          custom weapons into the script. Elevate your gaming experience by
          tailoring weapon dynamics to your liking, ensuring a unique and
          engaging atmosphere in your FiveM Roleplay server.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>Customise weapon damage.</li>
          <li>Option to add custom weapons.</li>
          <li>Disable player headshot options.</li>
          <li>Works with all types of available weapons.</li>
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
            href="https://dramatic.tebex.io/package/6037589"
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
