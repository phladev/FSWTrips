"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SliderProps {
  images: string[];
  imageCover: string;
}

const Slider = ({ images, imageCover }: SliderProps) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <Image
            className="mb-5 h-[300px] w-full object-cover"
            src={imageCover}
            alt="image"
            width={393}
            height={210}
          />
        </SwiperSlide>
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className="mb-5 h-[300px] w-full object-cover"
                src={image}
                alt="a"
                width={393}
                height={210}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
