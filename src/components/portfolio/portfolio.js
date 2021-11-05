import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../../assets/images/aboutUsImg.png';
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
// import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

<<<<<<< HEAD
const Portfolio = () => {
=======
const Portfolio = ({darkMode, setDarkMode}) => {
>>>>>>> 665e6d2a3ee67cb2c2b4fd7e58452e345a82e2f5
    return (
        <div className="portfolio">
            {/*<div className="port">*/}
            {/*    <h1>Portfolio</h1>*/}
            {/*</div>*/}
            {/*<div className="caruselBox">*/}
            {/*  <Carusel/>*/}
            {/*</div>*/}
            {/*<div className="portText">*/}
            {/*    <p>*/}
            {/*        {t('portfolio')}*/}
            {/*    </p>*/}
            {/*</div>*/}

            <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} width={800} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1}  width={800} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} width={800} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} width={800} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} width={800} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} width={800} />
        </SwiperSlide>
      </Swiper>



        </div>
    );
};

export default Portfolio;