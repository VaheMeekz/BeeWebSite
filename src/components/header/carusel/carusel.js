import SwiperCore, { Navigation, Pagination, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/images/arm.png"

// swiper style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-cube/effect-cube.scss";

SwiperCore.use([EffectCube, Navigation, Pagination]);

const  CaruselCube = () => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            navigation
            effect="cube"
            centeredSlides
        >
            <SwiperSlide
                className="first"
                style={{

                    zIndex:"861"
                }}
            />
            <SwiperSlide
                style={{
                    backgroundImage: "url(https://swiperjs.com/demos/images/nature-3.jpg)"
                }}
            />
            <SwiperSlide
                style={{
                    backgroundImage: "url(https://swiperjs.com/demos/images/nature-3.jpg)"
                }}
            />
            <SwiperSlide
                style={{
                    backgroundImage: "url(https://swiperjs.com/demos/images/nature-4.jpg)"
                }}
            />
            <SwiperSlide
                style={{
                    backgroundImage: "url(https://swiperjs.com/demos/images/nature-5.jpg)"
                }}
            />
            <style jsx>
                {`
          body {
            position: relative;
            height: 100%;
            width: 100%;
          }

          .swiper-container {
            width: 300px;
            height: 300px;
            position: absolute;
            left: 10%;
            top: 50%;
          }
          .swiper-slide {
            background-position: center;
            background-size: cover;
          }
        `}
            </style>
        </Swiper>
    );
}

export default CaruselCube
