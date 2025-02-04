"use client"; // Required for client-side interactivity

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slider() {
  const swiperRef = useRef(null);

  return (
    <div
      onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
      onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay when mouse leaves
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="relative group"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store the swiper instance
      >
        <SwiperSlide>
          <div className="h-full bg-gray-100 p-24 text-center">
            <Image
              src="/B2B/slide3.webp" // Replace with your actual image path
              alt="Slide 2 Image"
              width={500}
              height={300}
              className="w-full h-full object-cover" // Ensures full coverage
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-gray-200 p-24 text-center">
            <Image
              src="/B2B/slide1.webp"
              alt="Slide 1"
              width={600}
              height={400}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-gray-300 p-24 text-center">
            <Image
              src="/B2B/slide2.jpeg"
              alt="Slide 1"
              width={600}
              height={400}
            />
          </div>
        </SwiperSlide>

        {/* Navigation Buttons */}
        <div className="swiper-button-next opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="swiper-button-prev opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Pagination Dots */}
        <div className="swiper-pagination !bottom-0"></div>
      </Swiper>
    </div>
  );
}
