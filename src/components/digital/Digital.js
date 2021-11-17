import React from 'react'
import img1 from "../../assets/images/digitalSvg1.svg"
import arrowDigital from "../../assets/images/digitalArrow.svg"
import Tilt from "react-parallax-tilt";


function digital({darkMode, setDarkMode}) {

    // const [mode , setMode ] = useState(darkMode);
    //     const [mode,setMode] = useState()

    return (
        <div className="digital">

            <h3 className={"h2h2"}>digital inovation</h3>


            <div className="digitalContentsMain">
                <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="digitalContent digitalContentEven">
                            <img src={img1} alt={"img"}/>
                            <p className={"diggitalText"}>Strategy</p>
                            <br/>
                        </div>
                    </div>
                </Tilt>
                <div className="arrow"><img src={arrowDigital} alt={"img"}/></div>
                <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="digitalContent">
                            <img src={img1} alt="img"/>
                            <p className={"diggitalText"}>requirements</p>
                            <p className={"diggitalText"}>gathering</p>
                        </div>
                    </div>
                </Tilt>
                <div className="arrow"><img src={arrowDigital} alt={"img"}/></div>
                <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="digitalContent">
                            <img src={img1} alt="img"/>
                            <p className={"diggitalText"}>concept and</p>
                            <p className={"diggitalText"}>documentation</p>
                        </div>
                    </div>
                </Tilt>

                <div className="arrow"><img src={arrowDigital} alt={"img"}/></div>
                <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="digitalContent digitalContentEven">
                            <img src={img1} alt="img"/>
                            <p className={"diggitalText"}>planing</p>
                            <br/>
                        </div>
                    </div>
                </Tilt>

                <div className="arrow"><img src={arrowDigital} alt={"img"}/></div>

                <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="digitalContent">
                            <img src={img1} alt="img"/>
                            <p className={"diggitalText"}>software</p>
                            <p className={"diggitalText"}>development</p>
                        </div>
                    </div>
                </Tilt>

                {/* <div className="arrow"><img src={arrowDigital} alt={"img"}/></div>

                <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="digitalContent digitalContentEven">
                            <img src={img1} alt={"img"}/>
                            <p className={"diggitalText"}>release</p>
                            <br/>
                        </div>
                    </div>
                </Tilt> */}

                <div className="arrow"><img src={arrowDigital} alt={"img"}/></div>
                <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                >
                    <div className="inner-element">
                        <div className="digitalContent digitalContentEven">
                            <img src={img1} alt={"img"}/>
                            <p className={"diggitalText"}>maintenance</p>
                            <br/>
                        </div>
                    </div>
                </Tilt>


            </div>


        </div>
    )
}

export default digital
