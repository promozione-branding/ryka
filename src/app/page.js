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

export default function Home() {
  return (
    <>
      <Hero />
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
