import React from 'react'
import digitalIcon1 from '../../assets/images/digitalIcon1.svg'
import digitalIcon2 from '../../assets/images/digitalIcon2.svg'
import digitalIcon3 from '../../assets/images/digitalIcon3.svg'
import digitalIcon4 from '../../assets/images/digitalIcon4.svg'
import digitalIcon5 from '../../assets/images/digitalIcon5.svg'
import digitalIcon6 from '../../assets/images/digitalIcon6.svg'
import digitalIcon7 from '../../assets/images/digitalIcon7.svg'
import arrowDigital from '../../assets/images/arrowDigital.svg'
import Tilt from "react-parallax-tilt";



function digital({darkMode, setDarkMode}) {

    // const [mode , setMode ] = useState(darkMode);
    //     const [mode,setMode] = useState()

    return (
        <div className="digital">

            <h3>digital inovation</h3>




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
                            <img src={digitalIcon1} alt={"img"}/>
                            <p>Strategy</p>
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
                            <img src={digitalIcon2}  alt="img"/>
                            <p>requirements</p>
                            <p>gathering</p>
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
                            <img src={digitalIcon3}  alt="img"/>
                            <p>concept and</p>
                            <p>documentation</p>
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
                            <img src={digitalIcon4} alt="img"/>
                            <p>planing</p>
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
                            <img src={digitalIcon5} alt="img"/>
                            <p>aglle software</p>
                            <p>development</p>
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
                            <img src={digitalIcon6} alt={"img"}/>
                            <p>release</p>
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
                        <div className="digitalContent digitalContentEven">
                            <img src={digitalIcon7} alt={"img"}/>
                            <p>maintenance</p>
                            <br/>
                        </div>
                    </div>
                </Tilt>


            </div>


        </div>
    )
}

export default digital
