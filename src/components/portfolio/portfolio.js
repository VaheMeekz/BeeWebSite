import React from "react"



const Slide = (props) => {
  const {currentIdx, idx} = props;

  const classNames = [
      'card',
      idx === currentIdx && 'card--center',
      idx === currentIdx - 1 && 'card--left-inner',
      idx  <  currentIdx - 1 && 'card--left-outer',
      idx === currentIdx + 1 && 'card--right-inner',
      idx  >  currentIdx + 1 && 'card--right-outer',
  ]
      .filter(Boolean)
      .join(' ');

  return (
      <div class={classNames}>
          <div class="card__face">
              <div class="card__text">{idx + 1}</div>
          </div>
      </div>
  );
};

const items = [60, 40, 20, 0, -20, -40, -60];

const Portfolio = () => {
  const [currentIdx, setCurrentIdx] = React.useState(Math.floor(items.length / 2));

  const handlePrevClick = () => {
      setCurrentIdx((prev) => (prev + (items.length - 1)) % items.length);
  };

  const handleNextClick = () => {
      setCurrentIdx((prev) => (prev + 1) % items.length);
  };

  return (
      <div className="app">
          <div className="slider">
              <div className="slider__track">
                  <div
                      className="slider__btn slider__btn--prev"
                      onClick={handlePrevClick}>
                      &#8592;
                  </div>
                  <ul
                      className="slider__list"
                      style={{
                          transform: `translateX(${items[currentIdx]}rem)`,
                      }}>
                      {items.map((c, i) => (
                          <li className="slider__item" key={i}>
                              <Slide
                                  idx={i}
                                  idx={i}
                                  currentIdx={currentIdx}
                              />
                          </li>
                      ))}
                  </ul>
                  <div
                      className="slider__btn slider__btn--next"
                      onClick={handleNextClick}>
                      &#8594;
                  </div>
              </div>
          </div>
      </div>
  );
};


export default Portfolio