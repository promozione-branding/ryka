import Hero from "../components/Hero";
import About from "../components/About";
import Categories from "../components/Categories";
import Applications from "../components/Applications";
import Transformation from "../components/Transformation";
import Products from "../components/Products";
import Process from "../components/Before";
import Testimonials from "../components/Testimonials";
import Counter from "@/components/Counter";
import ShadeSelector from "@/components/ShadeSelector";
import WhyRyka from "@/components/WhyRyka";
import SpaceMarquee from "@/components/SpaceMarquee";
import Before from "../components/Before";
import ContactSection from "@/components/ContactSection";
import { getProductByName, getProductHref } from "@/lib/catalog";
import FAQSection from "@/components/FAQSection";
import SupplyNetwork from "@/components/SupplyNetwork";
import ClienteleMarquee from "@/components/ClienteleMarquee";

const HERO_PRODUCT_NAMES = [
  "Nexus Evo",
  "Nexus Canvas",
  "Nexus Grand",
  "Carlton Prime",
  "Floatex",
  "Sky Hung",
];

const defaultProducts = [
  {
    name: "Nexus Evo",
    image: "/product/imgi_9_Nexus-Evos.webp",
    href: "/public-restroom-partitions/nexus-evo",
    featured:"PREMIUM"
   
  },
  {
    name: "Nexus Canvas",
    image: "/product/imgi_10_Nexus-Canvas-1.webp",
    href: "/public-restroom-partitions/nexus-canvas",
     featured:"PREMIUM"
  },

  {
    name: "Nexus Grand",
    image: "/product/imgi_11_Nexus-Grand-2.webp",
    href: "/public-restroom-partitions/nexus-grand",
     hardware:"SS With Aluminum",
      featured:"STANDARD"
  },
  {
    name: "Carlton Prime",
    image: "/product/imgi_12_Carlton-Prime-1.webp",
    href: "/public-restroom-partitions/carlton-prime",
    hardware: "Nylon Polyamide With Aluminum",
     featured:"STANDARD"
  },
  {
    name: "Floatex",
    image: "/product/imgi_7_Swing-Lite-4.webp",
    href: "/public-restroom-partitions/floatex",
     featured:"PREMIUM"
  },
  {
    name: "Sky Hung",
    image: "/product/imgi_8_top-hung-2.webp",
    href: "/public-restroom-partitions/sky-hung",
     featured:"PREMIUM"
  },
  {
    name: "Miniput",
    image: "/product/imgi_16_kids-cubicles.webp",
     featured:"PREMIUM",
    href: "/kids-restrooms-partitions/miniput",
    hardware: "Full Stainless Steel"

  },
  {
    name: "Lil-Waves",
    image: "/product/imgi_17_petar-pan.webp",
    href: "/kids-restrooms-partitions/lil-waves",
     featured:"PREMIUM",
    hardware: "SS With Aluminum"
  },
  {
    name: "Lil-Shine",
     featured:"PREMIUM",
    image: "/newimag.webp",
    href: "/kids-restrooms-partitions/lil-shine",
    hardware: "Full Stainless Steel"
  },
  {
    name: "Aero Kids",
    image: "/product/aero-kids.webp",
     featured:"STANDARD",
    href: "/kids-restrooms-partitions/aero-kids",
    hardware: "Nylon Polyamide With Aluminum",
  },
  {
    name: "Half Round",
    image: "/product/imgi_20_Hansel-Gretel.webp",
    href: "/kids-restrooms-partitions/half-round",
     featured:"STANDARD",
     hardware: "Nylon Polyamide With Aluminum",
  },
  {
    name: "Slice Cut",
    image: "/product/imgi_21_Slice-Cut-2.webp",
    href: "/kids-restrooms-partitions/slice-cut",
    hardware: "Full Stainless Steel",
     featured:"PREMIUM"
  },
    {
    name: "RYKA LUXOR",
    image: "/Golden-Partitions.webp",
    href: "/luxe-partition-systems",
     featured:"PREMIUM"
  },
  {
    name: "Straight",
    image: "/product/straight.webp",
    href: "/kids-restrooms-partitions/straight",
     featured:"STANDARD",
     hardware: "Nylon Polyamide With Aluminum",
  },
   {
    name: "Slice Cut",
    image: "/product/imgi_21_Slice-Cut-2.webp",
    href: "/kids-restrooms-partitions/slice-cut",
     featured:"PREMIUM"
  },

];



const heroProducts = HERO_PRODUCT_NAMES.map(getProductByName)
  .filter(Boolean)
  .map((product) => ({
    name: product.productName,
    image: product.mainImage.url,
    href: getProductHref(product),
  }));

export default function Home() {
  return (
    <>
      <Hero defaultProducts={defaultProducts} />
       <Counter/>
       <ClienteleMarquee />
       <SpaceMarquee/>
      <About />
     
      <Categories />
    
      <ShadeSelector/>
      <WhyRyka/>
      <Applications />
         <Before />
      <Transformation />
      <Testimonials />
      <SupplyNetwork/>
      <FAQSection/>
      <ContactSection/>
   
    { /* <Products />
      
       */}
    </>
  );
}
