import HeroCarousel from "@/components/common/HeroCarousel";
import Overview from "@/components/common/Overview";
import Services from "@/components/common/Services";
import Projects from "@/components/common/Projects";
import Team from "@/components/common/Team";
import Testimonial from "@/components/common/Testimonial";
import TestCarousel from "@/components/common/TestCarousel";

export default function Home() {
  return (
    <div className="bg-light-cyan">
      <HeroCarousel />
      <div className="px-5 md:px-20 flex flex-col gap-10 py-20">
        <Overview />
        <Services />
        <Projects />
        {/* <TestCarousel /> */}
        <Team />
        <Testimonial />
      </div>
    </div>
  );
}
