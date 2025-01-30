import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import ProcessWork from "@/components/ProcessWork";
import Testimonial from "@/components/Testimonial";
import UpcomingCards from "@/components/UpcomingCards";

export default function Home() {
  return (
   
    <>
    <main className=" min-h-screen bg-black antialiased bg-grid-white/[0.1]">

    
    <HeroSection/>
    <FeaturedCourses/>
    <ProcessWork/>
    <Testimonial/>
    <UpcomingCards/>
    <Instructor/>
    <Footer/>
    </main>
    
    </>
  );
}
