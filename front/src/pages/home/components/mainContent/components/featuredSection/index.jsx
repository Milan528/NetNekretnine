import React from "react";
import { Container, MySwiperWrapper, Section } from "./styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard } from "swiper";

const FeaturedSection = () => {
  return (
    <Section>
      <Container>
        <span>Best Choices</span>
        <h2>
          Popular Residences<span>.</span>
        </h2>
        <MySwiperWrapper>
          <Swiper
            slidesPerView={3}
            cssMode={true}
            navigation={true}
            pagination={true}
            keyboard={true}
            modules={[Navigation, Pagination, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </MySwiperWrapper>
      </Container>
    </Section>
  );
};

export default FeaturedSection;
