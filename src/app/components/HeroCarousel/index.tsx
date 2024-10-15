"use client";
import { FC, useEffect, useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import { Hero } from "@/constant/types";
import axios from "axios";
const HeroCarousel: FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const fetchHeroes = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}hero`
    );
    // console.log(data);
    setHeroes(data as Hero[]);
  };
  useEffect(() => {
    fetchHeroes();
  }, []);
  if (heroes.length === 0) {
    return <div>Loading ....</div>;
  }
  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden">
      <Carousel autoplay autoplayDelay={3000} loop className="">
        {heroes.map((hero) => (
          <div className="relative h-full w-full" key={hero.id}>
            <Image
              src={hero.imageUrl}
              alt="image 3"
              className="h-full w-full object-cover"
              fill
            />
            {/* <img
              src={hero.imageUrl}
              alt="Example Image"
              className="h-full w-full object-cover"
            /> */}
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-light-blue  to-light-purple"
                >
                  {hero.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {hero.text}
                </Typography>
                {/* <div className="flex gap-2">
                  <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-8 py-3 text-light-cyan font-medium">
                    Explore
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
