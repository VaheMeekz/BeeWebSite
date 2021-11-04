import React from 'react';
import aboutImg from '../../assets/images/aboutUsImg.png'
import arrow from '../../assets/images/arrow.png'
import {Cube} from "react-motion-components";
import img from "../../assets/portfolioImages/1.png"

// import {useTranslation} from "react-i18next";

const About = () => {
    // const {t} = useTranslation()
    return (
        <div className="about">
            {/* {t('home')} */}

            <div className="aboutImg">
                {/*<img src={aboutImg} />*/}
                <div
                    style={{
                        width: 300,
                        height: 300
                    }}
                >
                    <Cube size={250} index="front">
                        <div><img src={img}/></div>
                        <div><img src={img}/></div>
                        <div><img src={img}/></div>
                        <div><img src={img}/></div>
                        <div><img src={img}/></div>
                        <div><img src={img}/></div>
                    </Cube>
                </div>
            </div>

            <div className="aboutUsDivAll">
                <h3>about us</h3>
                <div className="aboutUsDivs">
                    <div className="aboutUsDiv">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna</p>
                        <p>proin tortor eu ut tortor turpis accumsan.Lorem ipsum dolor sit</p>
                        <p>amet, consectetur adipiscing elit. Id urna proin tortor eu ut</p>
                        <p>tortor turpis accumsan</p>
                    </div>
                    <span><img src={arrow}/></span>
                </div>

                <div className="aboutUsDivs">
                    <div className="aboutUsDiv">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna</p>
                        <p>proin tortor eu ut tortor turpis accumsan.Lorem ipsum dolor sit</p>
                        <p>amet, consectetur adipiscing elit. Id urna proin tortor eu ut</p>
                        <p>tortor turpis accumsan</p>
                    </div>
                    <span><img src={arrow}/></span>
                </div>


            </div>

        </div>
    );
};

export default About;