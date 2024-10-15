"use client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Testimonial as TestimonialType } from "@/constant/types";
import axios from "axios";

interface StarsComponentProps {
  stars: number;
}
const StarsComponent: FC<StarsComponentProps> = ({ stars }) => {
  const starsTotal = [];
  for (let i = 0; i < stars; i++) {
    starsTotal.push(
      <FontAwesomeIcon
        className="h-5 w-5 text-light-blue"
        key={i}
        icon={faStar}
      />
    );
  }
  return starsTotal;
};

const Testimonial: FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const fetchTestimonials = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}testimonial`
    );
    setTestimonials(data as TestimonialType[]);
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  if (testimonials.length === 0) {
    return <div>Loading ....</div>;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="text-light-purple text-xl font-bold text-center">
        Our Testimonial
      </div>
      <div className=" text-4xl font-bold text-center">Our Client Saying!</div>
      <div className="py-10 w-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          centeredSlides={true}
          spaceBetween={0}
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
          className="m"
        >
          {testimonials.map((testimony, index) => (
            <SwiperSlide key={testimony.id}>
              <div
                className={`flex flex-col justify-center gap-5 items-center border border-light-purple p-5 ${
                  index % 2 === 0 ? "bg-white" : "bg-light-cyan"
                } w-full`}
              >
                <div className="flex gap-5 w-full">
                  <Image
                    src={testimony.imageUrl}
                    alt="image 1"
                    width={250}
                    height={250}
                    className="max-w-[80px] max-h-[80px] aspect-square object-cover "
                  />
                  <div>
                    <div className="font-bold text-3xl text-light-purple">
                      {testimony.name}
                    </div>
                    <div className="text-gray-500">{testimony.role}</div>
                    <div className="flex gap-1">
                      <StarsComponent stars={testimony.stars} />
                    </div>
                  </div>
                </div>
                <hr className="bg-light-purple w-full" />
                <div className="w-full text-start">{testimony.text}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonial;
