import HeroCarousel from "@/components/common/HeroCarousel";
import Overview from "@/components/common/Overview";
import Services from "@/components/common/Services";
import Projects from "@/components/common/Projects";
export default function Home() {
  return (
    <div className="bg-light-cyan">
      <HeroCarousel />
      <div className="px-20 flex flex-col gap-10 py-20">
        <Overview />
        <Services />
        <Projects />
        <div>Team Member</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
