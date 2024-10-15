"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import axios from "axios";
import { Project } from "@/constant/types";

const Projects: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const fetchProjects = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}projects`
    );
    // console.log(data);
    setProjects(data as Project[]);
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  if (projects.length === 0) {
    return <div>Loading ....</div>;
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-light-purple text-xl font-bold text-center">
          Our Projects
        </div>
        <div className=" text-4xl font-bold text-center">
          Our Recently Completed Projects
        </div>
      </div>
      <div className="xl:mx-40 py-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          centeredSlides={true}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoHeight={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] p-5 group mx-auto">
                <div className="relative w-full h-full">
                  <div className="h-40 w-40 bg-light-blue rounded-lg absolute -top-5 -left-5"></div>
                  <div className="h-40 w-40 bg-light-purple rounded-lg absolute -bottom-5 -right-5"></div>
                  <Image
                    src={project.imageUrl}
                    alt="image 3"
                    className=" absolute z-20 w-full h-full object-cover"
                    width={384}
                    height={384}
                  />
                  <div className="hidden group-hover:visible  absolute z-30 w-full h-full group-hover:flex justify-center items-center ">
                    <div className="flex flex-col gap-2 bg-gradient-to-r from-light-blue to-light-purple rounded-lg px-5 py-2">
                      <div className=" text-md font-small text-light-cyan">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
