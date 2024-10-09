// "use client";
import Image from "next/image";
// import Carousel from "../public/images/carousel-1.jpg";
import { Carousel } from "@material-tailwind/react";
import HeroCarousel from "@/components/common/HeroCarousel";
import Overview from "@/components/common/Overview";
import Services from "@/components/common/Services";
export default function Home() {
  return (
    <div className="bg-light-cyan">
      <HeroCarousel />

      <div className="px-20 flex flex-col gap-10 py-20">
        <Overview />
        <Services />
        <div>Projects</div>
        <div>Team Member</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
