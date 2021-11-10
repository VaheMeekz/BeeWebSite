import React from 'react';
import aboutImg from '../../assets/images/aboutUsImg.png'
import arrow from '../../assets/arrow.svg'
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
                    <span className="arrowBox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-arrow-left fba" viewBox="0 0 16 9">
                             <path fill-rule="evenodd"
                                   d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </span>
                </div>
                <div className="aboutUsDivs">
                    <div className="aboutUsDiv">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna</p>
                        <p>proin tortor eu ut tortor turpis accumsan.Lorem ipsum dolor sit</p>
                        <p>amet, consectetur adipiscing elit. Id urna proin tortor eu ut</p>
                        <p>tortor turpis accumsan</p>
                    </div>
                    <span className="arrowBox">
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                              className="bi bi-arrow-left fba" viewBox="0 0 16 9">
                             <path fill-rule="evenodd"
                                   d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;