import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dramatic Scripts",
  description:
    "Empower your GTA 5 roleplay dreams with affordable & custom scripts.",
  keywords: [
    "Dramatic",
    "roleplay",
    "scripts",
    "GTA",
    "5",
    "affordable",
    "custom",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [
    { name: "Aayush Shankar" },
    { name: "Yagna R.D. Khokhariya", url: "https://twitter.com/YagnaRDK" },
  ],
  colorScheme: "dark",
  creator: "Yagna R.D. Khokhariya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
