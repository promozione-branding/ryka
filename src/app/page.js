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
   
  },
  {
    name: "Nexus Canvas",
    image: "/product/imgi_10_Nexus-Canvas-1.webp",
    href: "/public-restroom-partitions/nexus-canvas",
  },

  {
    name: "Nexus Grand",
    image: "/product/imgi_11_Nexus-Grand-2.webp",
    href: "/public-restroom-partitions/nexus-grand",
     hardware:"SS With Aluminum"
  },
  {
    name: "Carlton Prime",
    image: "/product/imgi_12_Carlton-Prime-1.webp",
    href: "/public-restroom-partitions/carlton-prime",
    hardware: "Nylon Polyamide With Aluminum"
  },
  {
    name: "Floatex",
    image: "/product/imgi_7_Swing-Lite-4.webp",
    href: "/public-restroom-partitions/floatex",
  },
  {
    name: "Sky Hung",
    image: "/product/imgi_8_top-hung-2.webp",
    href: "/public-restroom-partitions/sky-hung",
  },
  {
    name: "Miniput",
    image: "/product/imgi_16_kids-cubicles.webp",
    href: "/kids-restrooms-partitions/miniput",
  },
  {
    name: "Lil-Waves",
    image: "/product/imgi_17_petar-pan.webp",
    href: "/kids-restrooms-partitions/lil-waves",
    featured: true,
  },
  {
    name: "Lil-Shine",
    image: "/product/imgi_18_Lil-Shine.webp",
    href: "/kids-restrooms-partitions/lil-shine",
  },
  {
    name: "Aero Kids",
    image: "/product/aero-kids.webp",
    href: "/kids-restrooms-partitions/aero-kids",
  },
  {
    name: "Half Round",
    image: "/product/imgi_20_Hansel-Gretel.webp",
    href: "/kids-restrooms-partitions/half-round",
  },
  {
    name: "Slice Cut",
    image: "/product/imgi_21_Slice-Cut-2.webp",
    href: "/kids-restrooms-partitions/slice-cut",
  },
    {
    name: "RYKA LUXOR",
    image: "/Golden-Partitions.webp",
    href: "/luxe-partition-systems",
  },
  {
    name: "Straight",
    image: "/product/straight.webp",
    href: "/kids-restrooms-partitions/straight",
  },
   {
    name: "Slice Cut",
    image: "/product/imgi_21_Slice-Cut-2.webp",
    href: "/kids-restrooms-partitions/slice-cut",
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
