import HeroCarousel from "@/app/components/HeroCarousel";
import Overview from "@/app/components/Overview";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Team from "@/app/components/Team";
import Testimonial from "@/app/components/Testimonial";
// import TestCarousel from "@/app/components/TestCarousel";

export default function Home() {
  return (
    <div className="bg-light-cyan">
      <HeroCarousel />
      <div className="px-5 md:px-20 flex flex-col gap-10 py-20">
        <Overview />
        <Services />
        <Projects />
        <Team />
        <Testimonial />
      </div>
    </div>
  );
}
