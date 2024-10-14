"use client";
import { FC } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
const HeroCarousel: FC = () => {
  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden">
      <Carousel autoplay autoplayDelay={3000} loop className="">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
            fill
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-light-blue  to-light-purple"
              >
                Quality Digital Services You Really Need!
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quaerat nulla aut iure quia aliquam impedit dolor ipsum sit,
                earum delectus doloremque eos hic ullam!
              </Typography>
              <div className="flex gap-2">
                <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-8 py-3 text-light-cyan font-medium">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
            fill
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-light-blue  to-light-purple"
              >
                An Innovative IT Solutions Agency
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid ad voluptatum dolorum voluptates sint omnis labore aut,
                accusamus nihil laborum delectus enim temporibus pariatur
                veritatis?
              </Typography>
              <div className="flex gap-2">
                <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-8 py-3 text-light-cyan font-medium">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
