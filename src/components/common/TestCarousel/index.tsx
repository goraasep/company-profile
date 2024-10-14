"use client";
import { FC, useEffect } from "react";
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
import {
  faArrowUpRightFromSquare,
  faCode,
  faDesktop,
  faDna,
  faFileCode,
  faIndustry,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
const TestCarousel: FC = () => {
  return (
    <div className="xl:mx-40 py-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        centeredSlides={true}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
        <SwiperSlide>
          <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] p-5 group mx-auto">
            <div className="relative w-full h-full">
              <div className="h-40 w-40 bg-light-blue rounded-lg absolute -top-5 -left-5"></div>
              <div className="h-40 w-40 bg-light-purple rounded-lg absolute -bottom-5 -right-5"></div>
              <Image
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
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
        <SwiperSlide>
          <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] p-5 group mx-auto">
            <div className="relative w-full h-full">
              <div className="h-40 w-40 bg-light-blue rounded-lg absolute -top-5 -left-5"></div>
              <div className="h-40 w-40 bg-light-purple rounded-lg absolute -bottom-5 -right-5"></div>
              <Image
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
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
        <SwiperSlide>
          <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] p-5 group mx-auto">
            <div className="relative w-full h-full">
              <div className="h-40 w-40 bg-light-blue rounded-lg absolute -top-5 -left-5"></div>
              <div className="h-40 w-40 bg-light-purple rounded-lg absolute -bottom-5 -right-5"></div>
              <Image
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
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
        <SwiperSlide>
          <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] p-5 group mx-auto">
            <div className="relative w-full h-full">
              <div className="h-40 w-40 bg-light-blue rounded-lg absolute -top-5 -left-5"></div>
              <div className="h-40 w-40 bg-light-purple rounded-lg absolute -bottom-5 -right-5"></div>
              <Image
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
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
      </Swiper>
    </div>
  );
};
export default TestCarousel;
