import Image from "next/image";
import { Manrope } from "next/font/google";
import backpack from "../../../public/backpack.jpg";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Header />
      <Image src={backpack} alt="backpack image"></Image>
      <Footer />
    </>
  );
}
