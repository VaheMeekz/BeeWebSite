import React from 'react';
import aboutImg from '../../assets/images/aboutUsImg.png'
import arrow from '../../assets/images/arrow.png'
import img from "../../assets/portfolioImages/1.png"
import {Carousel} from '3d-react-carousal';
// import {useTranslation} from "react-i18next";

const About = () => {
    // const {t} = useTranslation()

    let slides = [
        <img src={aboutImg} alt="1"/>,
        <img src={aboutImg} alt="2"/>,
        <img src={aboutImg} alt="3"/>,
        <img src={aboutImg} alt="4"/>,
        <img src={aboutImg} alt="5"/>];
    return (
        <div className="about">
            <div className="aboutImg">
                {/*<img src={aboutImg} />*/}
                <Carousel slides={slides}/>
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
                    <span><img src={arrow} alt={"img"}/></span>
                </div>

                <div className="aboutUsDivs">
                    <div className="aboutUsDiv">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna</p>
                        <p>proin tortor eu ut tortor turpis accumsan.Lorem ipsum dolor sit</p>
                        <p>amet, consectetur adipiscing elit. Id urna proin tortor eu ut</p>
                        <p>tortor turpis accumsan</p>
                    </div>
                    <span><img src={arrow} alt={"img"}/></span>
                </div>


            </div>

        </div>
    );
};

export default About;