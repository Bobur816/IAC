// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        direction={"vertical"}
        onScroll={"true"}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate:,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="/side_bg.svg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/side_bg.svg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/side_bg.svg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/side_bg.svg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/side_bg.svg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/side_bg.svg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/side_bg.svg" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">aaa</div>
          <div className="swiper-button-next slider-arrow">aaa</div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
