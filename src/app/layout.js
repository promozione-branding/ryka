import { Raleway, Titillium_Web } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import HomeHeader from "@/components/HomeHeader";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Toilet Cubicles Partitions | Washroom Partitions in India | Ryka",
  description:
    "Ryka Restroom Cubicles - Trusted Toilet Cubicles Partition Manufacturer in India. Premium public restroom partitions, luxe systems & kids restroom solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${titillium.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HomeHeader/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}