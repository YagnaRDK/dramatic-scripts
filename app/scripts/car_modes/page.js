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
          src="https://www.youtube.com/embed/-7-sXLOc754"
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
          Dramatic Car Modes revolutionizes the way users experience different
          car modes by providing a seamless transition with just a single click
          of a button. Specifically designed for the QBCore Framework, it offers
          unparalleled optimization and performance. With its extensive
          customization options, developers can effortlessly tailor the script
          to their liking, enabling them to add custom cars at any given time
          using the intuitive config file.<br></br>
          <br></br> Dramatic Car Modes not only simplify the process of
          switching between multiple car modes but also ensures a dramatic and
          immersive experience for users. By integrating seamlessly with the
          QBCore Framework, this mod harnesses the full potential of its
          capabilities, guaranteeing optimal performance and reliability.
          <br></br>
          <br></br> One of the standout features of Dramatic Car Modes is its
          unparalleled customizability. Developers have the freedom to
          personalize every aspect of the mod to suit their specific
          requirements. The comprehensive options available allow for the
          addition of custom cars, giving developers complete control over the
          selection and integration process.<br></br>
          <br></br> Moreover, the script configuration file serves as a powerful
          tool that streamlines the process of adding custom cars. Developers
          can effortlessly expand the existing collection by simply modifying
          the configuration file, eliminating the need for complex coding. This
          flexibility empowers developers to continually enhance the mod and
          introduce fresh content, ensuring a dynamic and engaging experience
          for users.<br></br>
          <br></br> In summary, Dramatic Car Modes offers an unparalleled
          experience of seamlessly switching between multiple car modes, with a
          focus on optimization and compatibility with the QBCore Framework. Its
          extensive customization options and user-friendly configuration file
          make it an ideal choice for developers looking to create a fully
          immersive and dynamic modding experience for their users.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>8+ Vehicles already supported.</li>
          <li>4 Different car modes for multiple cars.</li>
          <li>Custom sound for switching the vehicle modes.</li>
          <li>
            &ldquo;N&rdquo; is currently the default key for changing modes.
          </li>
          <li>All the mode&apos;s speeds can be customised by developers.</li>
          <li>Can set the modes according to the need through config.</li>
          <li>Can add more default or custom vehicles to the config file.</li>
          <li>
            Vehicle speed decreases when the mode is switched to feel more
            realistic.
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
            href="https://dramatic.tebex.io/package/5735998"
          >
            Buy Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
