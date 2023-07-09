import "./globals.css";
import { Manrope } from "next/font/google";
import clsx from "clsx";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dramatic Scripts",
  description:
    "Empower your GTA 5 roleplay dreams with affordable & custom scripts.",
  // keywords: [
  //   "Dramatic",
  //   "roleplay",
  //   "scripts",
  //   "GTA",
  //   "5",
  //   "affordable",
  //   "custom",
  //   "Next.js",
  //   "React",
  //   "JavaScript",
  // ],
  // authors: [
  //   { name: "Aayush Shankar" },
  //   { name: "Yagna R.D. Khokhariya", url: "https://twitter.com/YagnaRDK" },
  // ],
  // colorScheme: "dark",
  // creator: "Yagna R.D. Khokhariya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* className={clsx(manrope.className, "bg-black")} */}
    </html>
  );
}
