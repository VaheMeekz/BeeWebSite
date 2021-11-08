// import SwiperCore, { Navigation, Pagination, EffectCube } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
//
// // swiper style
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/effect-cube/effect-cube.scss";
//
// SwiperCore.use([EffectCube, Navigation, Pagination]);
//
// export default function App() {
//     return (
//         <Swiper
//             pagination={{ clickable: true }}
//             navigation
//             effect="cube"
//             centeredSlides
//         >
//             <SwiperSlide
//                 style={{
//                     backgroundImage: "url(https://swiperjs.com/demos/images/nature-1.jpg)"
//                 }}
//             />
//             <SwiperSlide
//                 style={{
//                     backgroundImage: "url(https://swiperjs.com/demos/images/nature-2.jpg)"
//                 }}
//             />
//             <SwiperSlide
//                 style={{
//                     backgroundImage: "url(https://swiperjs.com/demos/images/nature-3.jpg)"
//                 }}
//             />
//             <SwiperSlide
//                 style={{
//                     backgroundImage: "url(https://swiperjs.com/demos/images/nature-4.jpg)"
//                 }}
//             />
//             <SwiperSlide
//                 style={{
//                     backgroundImage: "url(https://swiperjs.com/demos/images/nature-5.jpg)"
//                 }}
//             />
//             <style jsx>
//                 {`
//                   body {
//                     position: relative;
//                     height: 100%;
//                     width: 100%;
//                   }
//
//                   .swiper-container {
//                     width: 300px;
//                     height: 300px;
//                     position: absolute;
//                     left: 10%;
//                     top: 50%;
//                   }
//                   .swiper-slide {
//                     background-position: center;
//                     background-size: cover;
//                   }
//                 `}
//             </style>
//         </Swiper>
//     );
// }
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-3d-carousels";
import img from "../../../assets/images/aboutUsImg.png"


class CaruselCube extends React.Component {
    render() {
        return (
            <div
                className="cubeBox"
                style={{
                    width: 300,
                    height: 300,
                    margin: "0 auto"
                }}
            >
                <Carousel
                    ref={carousel => (this.carousel = carousel)}
                    width={300}
                    height={300}
                    direction={"horizontal"}
                    effect={"3d"}
                    index={0}
                    className=""
                >
                    <div style={{width: 300, height: 300}}>
                        <img src={img} alt={"img"} width={"300px"} height={"300px"}/>
                    </div>
                    <div style={{width: 300, height: 300}}>
                        <img src={img} alt={"img"} width={"300px"} height={"300px"}/>
                    </div>
                    <div style={{width: 300, height: 300}}>
                        <img src={img} alt={"img"} width={"300px"} height={"300px"}/>
                    </div>
                    <div style={{width: 300, height: 300}}>
                        <img src={img} alt={"img"}  width={"300px"} height={"300px"}/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CaruselCube
