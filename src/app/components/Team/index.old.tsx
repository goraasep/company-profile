"use client";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import useTeam from "@/hooks/useTeam";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import useTeamRandom from "@/hooks/useTeamRandom";
library.add(fab);
const Team: FC = () => {
  const { isLoading, error, team } = useTeam();
  // const { isLoading, error, teamRandom } = useTeamRandom();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!team || team.length === 0) return null;
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
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4 bg-white max-w-full lg:max-w-[300px] mx-auto">
              <div className="bg-light-purple rounded-full p-1">
                <Image
                  src={
                    member.imageUrl
                      ? member.imageUrl
                      : "/images/default-profile.jpg"
                  }
                  alt="image 1"
                  width={250}
                  height={250}
                  className="w-auto h-auto aspect-square object-cover rounded-full border-8 border-light-blue"
                />
              </div>
              <div className="font-bold text-center text-xl">
                {`${member.name}`}
              </div>
              <div className="text-center text-gray-500">{member.role}</div>
              <div className="flex justify-between gap-3">
                {member.socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    className="text-light-purple w-[30px] h-[30px] text-center"
                  >
                    <FontAwesomeIcon
                      className="text-light-purple w-[30px] h-[30px] text-center"
                      icon={["fab", social.icon as IconName]}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Team;
