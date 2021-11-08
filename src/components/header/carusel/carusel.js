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
                        <img src={img} alt={"img"} width={"300px"} height={"300px"}  style={{borderRadius:"4%"}}/>
                    </div>
                    <div style={{width: 300, height: 300}}>
                        <img src={img} alt={"img"} width={"300px"} height={"300px"} style={{borderRadius:"4%"}}/>
                    </div>
                    <div style={{width: 300, height: 300}}>
                        <img src={img} alt={"img"} width={"300px"} height={"300px"} style={{borderRadius:"4%"}}/>
                    </div>
                    <div style={{width: 300, height: 300}}>
                        <img src={img} alt={"img"}  width={"300px"} height={"300px"} style={{borderRadius:"4%"}}/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CaruselCube
