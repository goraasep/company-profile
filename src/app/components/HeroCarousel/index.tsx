"use client";
import { FC } from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import Image from "next/image";
import useHero from "@/hooks/useHero";

const HeroCarousel: FC = () => {
  const { isLoading, error, heroes } = useHero();

  if (error) return "An error has occurred: " + error.message;
  if (!heroes || heroes.length === 0) return null;
  return (
    <Carousel loop className="">
      {heroes.map((hero) => (
        <div className="relative h-full w-full" key={hero.id}>
          <Image
            src={hero.imageUrl}
            alt="image 3"
            layout="fill"
            objectFit="cover"
            className="h-full w-full object-cover"
            loading="lazy"
          />
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
            </div>
          </div>
        </div>
      ))}
      {isLoading && <div className="relative h-full w-full"></div>}
    </Carousel>
  );
};
export default HeroCarousel;
