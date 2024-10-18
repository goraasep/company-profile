import HeroCarousel from "@/app/components/HeroCarousel";
import Overview from "@/app/components/Overview";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Testimonial from "@/app/components/Testimonial";

export default function Home() {
  return (
    <>
      <div className="h-[calc(100vh-94px)] relative">
        <HeroCarousel />
      </div>
      <div className="px-5 md:px-20 flex flex-col gap-10 py-20">
        <Overview />
        <Services />
        <Projects />
        <Testimonial />
      </div>
    </>
  );
}
