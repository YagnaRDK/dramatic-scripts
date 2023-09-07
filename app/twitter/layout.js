import "./globals.css";
import { Manrope } from "next/font/google";
import clsx from "clsx";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dramatic Scripts | Twitter",
  description:
    "Empower your GTA 5 roleplay dreams with affordable & custom scripts.",
  keywords: [
    "Dramatic",
    "Dramatic Scripts",
    "Roleplay",
    "Scripts",
    "GTA",
    "GTA5",
    "FiveM",
    "Affordable",
    "Custom",
    "Next.js",
    "React",
    "JavaScript",
  ],
  colorScheme: "dark",
};

export default function TwitterLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="Dramatic, Dramatic Scripts, DRS, GTA5, Roleplay, Scripts, FiveM"
      ></meta>
      <meta property="og:title" content="Dramatic Scripts | Twitter" />
      <meta
        property="og:description"
        content="Empower your GTA 5 roleplay dreams with affordable & custom scripts."
      />
      <meta property="og:image" content="/drs-twit-thumbnail.png" />

      {/* For Twitter */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dramaticrp.in/twitter" />
      <meta property="twitter:title" content="Dramatic Scripts | Twitter" />
      <meta
        property="twitter:description"
        content="Empower your GTA 5 roleplay dreams with affordable & custom scripts."
      />
      <meta property="twitter:image" content="/drs-twit-thumbnail.png" />
      <body>{children}</body>
      {/* className={clsx(manrope.className, "bg-black")} */}
    </html>
  );
}
