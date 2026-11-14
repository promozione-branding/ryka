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
      <head>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>
      </head>
      <body className="min-h-full flex flex-col">
        <HomeHeader/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}