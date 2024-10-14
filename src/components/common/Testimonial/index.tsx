"use client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper as SwiperType } from "swiper/types";
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
// import Swiper from "swiper";
const Testimonial: FC = () => {
  // const swiperRef = useRef<SwiperType>();
  return (
    <div className="flex flex-col items-center">
      <div className="text-light-purple text-xl font-bold text-center">
        Our Testimonial
      </div>
      <div className=" text-4xl font-bold text-center">Our Client Saying!</div>
      <div className="py-10 w-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          centeredSlides={true}
          spaceBetween={0}
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
          className="m"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center gap-5 items-center border border-light-purple p-5 bg-white w-full">
              <div className="flex gap-5 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 1"
                  width={250}
                  height={250}
                  className="max-w-[80px] max-h-[80px] aspect-square object-cover "
                />
                <div>
                  <div className="font-bold text-3xl text-light-purple">
                    Client Name
                  </div>
                  <div className="text-gray-500">Profession</div>
                  <div className="flex gap-1">
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                  </div>
                </div>
              </div>
              <hr className="bg-light-purple w-full" />
              <div className="w-full text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis qui sit minus sapiente maxime enim cum nostrum
                exercitationem officia, veniam impedit soluta quaerat error aut
                aliquam porro optio. Pariatur, ea?
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center gap-5 items-center border border-light-purple p-5 bg-light-cyan w-full">
              <div className="flex gap-5 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 1"
                  width={250}
                  height={250}
                  className="max-w-[80px] max-h-[80px] aspect-square object-cover "
                />
                <div>
                  <div className="font-bold text-3xl text-light-purple">
                    Client Name
                  </div>
                  <div className="text-gray-500">Profession</div>
                  <div className="flex gap-1">
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                  </div>
                </div>
              </div>
              <hr className="bg-light-purple w-full" />
              <div className="w-full text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis qui sit minus sapiente maxime enim cum nostrum
                exercitationem officia, veniam impedit soluta quaerat error aut
                aliquam porro optio. Pariatur, ea?
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center gap-5 items-center border border-light-purple p-5 bg-white w-full">
              <div className="flex gap-5 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 1"
                  width={250}
                  height={250}
                  className="max-w-[80px] max-h-[80px] aspect-square object-cover "
                />
                <div>
                  <div className="font-bold text-3xl text-light-purple">
                    Client Name
                  </div>
                  <div className="text-gray-500">Profession</div>
                  <div className="flex gap-1">
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                  </div>
                </div>
              </div>
              <hr className="bg-light-purple w-full" />
              <div className="w-full text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis qui sit minus sapiente maxime enim cum nostrum
                exercitationem officia, veniam impedit soluta quaerat error aut
                aliquam porro optio. Pariatur, ea?
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center gap-5 items-center border border-light-purple p-5 bg-light-cyan w-full">
              <div className="flex gap-5 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 1"
                  width={250}
                  height={250}
                  className="max-w-[80px] max-h-[80px] aspect-square object-cover "
                />
                <div>
                  <div className="font-bold text-3xl text-light-purple">
                    Client Name
                  </div>
                  <div className="text-gray-500">Profession</div>
                  <div className="flex gap-1">
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="h-5 w-5 text-light-blue"
                      icon={faStar}
                    />
                  </div>
                </div>
              </div>
              <hr className="bg-light-purple w-full" />
              <div className="w-full text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis qui sit minus sapiente maxime enim cum nostrum
                exercitationem officia, veniam impedit soluta quaerat error aut
                aliquam porro optio. Pariatur, ea?
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonial;
