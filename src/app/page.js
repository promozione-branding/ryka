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

const HERO_PRODUCT_NAMES = [
  "Nexus Evo",
  "Nexus Canvas",
  "Nexus Grand",
  "Carlton Prime",
  "Floatex",
  "Sky Hung",
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
      <Hero products={heroProducts} />
       <Counter/>
       <SpaceMarquee/>
      <About />
     
      <Categories />
    
      <ShadeSelector/>
      <WhyRyka/>
      <Applications />
         <Before />
      <Transformation />
      <Testimonials />
      <ContactSection/>
   
    { /* <Products />
      
       */}
    </>
  );
}
