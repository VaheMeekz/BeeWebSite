import React from "react"
import img from "../../assets/portfolioImages/1.png";
import aboutImg from "../../assets/images/aboutUsImg.png";
import {Carousel} from '3d-react-carousal';

const Portfolio = () => {

    let slides = [
        <img src={aboutImg} alt="1"/>,
        <img src={aboutImg} alt="2"/>,
        <img src={aboutImg} alt="3"/>
    ];

  return (
      <div className="portfolio">
          <div>
              <h3>Portfolio</h3>
          </div>
          <div className="effect effect-1"></div>
          <Carousel slides={slides}/>
      </div>
  );
};


export default Portfolio