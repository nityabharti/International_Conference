import React from "react";
import "../../styles/bar.css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper.min.css";
// import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
// import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
const Bar =()=> {
  return (
    <div className="bar">
      <div className="q-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p className="quote">
              All the accepted and presented papers will be available in IEEE explorer.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="quote">Paper submission deadline: 15th Sept, 2022</p>
          </SwiperSlide>
          {/* <SwiperSlide>
            <p className="quote">Slide 3</p>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Bar;
