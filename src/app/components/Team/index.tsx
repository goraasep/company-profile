"use client";
import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useTeamRandom from "@/hooks/useTeamRandom";
import randomRole from "@/utils/randomRole";
const Team: FC = () => {
  const { isLoading, error, teamRandom } = useTeamRandom();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!teamRandom || teamRandom.length === 0) return null;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        centerInsufficientSlides={true}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
        {teamRandom.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4 bg-white max-w-full lg:max-w-[300px] mx-auto h-[300px]">
              <div className="bg-light-purple rounded-full p-1">
                <Image
                  src={
                    member.picture.large
                      ? member.picture.large
                      : "/images/default-profile.jpg"
                  }
                  alt="image 1"
                  width={250}
                  height={250}
                  className="w-auto h-auto aspect-square object-cover rounded-full border-8 border-light-blue"
                />
              </div>
              <div className="font-bold text-center text-xl">
                {`${member.name.title} ${member.name.first} ${member.name.last}`}{" "}
              </div>
              <div className="text-center text-gray-500">{randomRole()}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Team;
