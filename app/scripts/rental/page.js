import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function RentalCar() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center place-content-center w-full space-y-5">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/3-tcpEfY5zQ"
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
          Introducing Dramatic Rental, the ultimate vehicle rental script
          tailored for the qbcore framework. With a focus on simplicity and
          efficiency, renting a car or bike from any location within the city
          has never been easier. Our installation process is a breeze, requiring
          only a few straightforward steps to get you up and running quickly,
          regardless of your technical expertise.<br></br>
          <br></br>Dramatic Rental boasts an intuitive interface that ensures a
          seamless rental experience for both customers and administrators. Once
          you&apos;ve selected your preferred vehicle, the system generates a
          comprehensive rental paper, containing all necessary details for a
          stress-free rental process. When it&apos;s time to return the vehicle,
          simply hand over the rental paper, and our system takes care of the
          rest.
        </p>

        <p className="w-7/12 font-bold text-2xl underline decoration-indigo-500 decoration-4 text-slate-200 md:text-4xl">
          Key Features:
        </p>
        <ul className="w-7/12 font-bold text-sm text-slate-200 md:text-lg list-outside list-disc">
          <li>Multiple spawn location in the city.</li>
          <li>Rental paper when renting a vehicle.</li>
          <li>One time payment for renting a vehicle.</li>
          <li>Player can rent car from particular locations.</li>
          <li>license system available for renting a vehicle.</li>
          <li>Can chose what vehicle to provide for renting.</li>
          <li>Rental paper require when returning the vehicle.</li>
          <li>When use in Idle condition 0.00 In use 0.00-0.01.</li>
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
            href="https://dramatic.tebex.io/package/5813984"
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
