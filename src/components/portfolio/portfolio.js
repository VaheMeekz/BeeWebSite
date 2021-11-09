import React from "react"
import img from "../../assets/portfolioImages/1.png";
import aboutImg from "../../assets/images/aboutUsImg.png";
import {Carousel} from '3d-react-carousal';

// const Slide = (props) => {
//   const {currentIdx, idx} = props;
//
//   const classNames = [
//       'card',
//       idx === currentIdx && 'card--center',
//       idx === currentIdx - 1 && 'card--left-inner',
//       idx  <  currentIdx - 1 && 'card--left-outer',
//       idx === currentIdx + 1 && 'card--right-inner',
//       idx  >  currentIdx + 1 && 'card--right-outer',
//   ]
//       .filter(Boolean)
//       .join(' ');
//
//   return (
//       <div class={classNames}>
//           <div class="card__face">
//               <div class="card__text">{idx + 1}</div>
//           </div>
//       </div>
//   );
// };

const items = [60, 40, 20, 0, -20, -40, -60];

const Portfolio = () => {

    let slides = [
        <img src={aboutImg} alt="1"/>,
        <img src={aboutImg} alt="2"/>,
        <img src={aboutImg} alt="3"/>
    ];
    
  return (
      <div className="app">
          <div>
              <h3>Portfolio</h3>
          </div>
          <Carousel slides={slides}/>
      </div>
  );
};


export default Portfolio