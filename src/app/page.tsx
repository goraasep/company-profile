import HeroCarousel from "@/app/components/HeroCarousel";
import Overview from "@/app/components/Overview";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Testimonial from "@/app/components/Testimonial";
import ClientProvider from "@/providers/ClientProvider";

export default function Home() {
  return (
    <>
      <div className="h-[calc(100vh-94px)] relative">
        <ClientProvider>
          <HeroCarousel />
        </ClientProvider>
      </div>
      <div className="px-5 md:px-20 flex flex-col gap-10 py-20">
        <ClientProvider>
          <Overview />
          <Services />
          <Projects />
          <Testimonial />
        </ClientProvider>
      </div>
    </>
  );
}
