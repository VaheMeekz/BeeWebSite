import React, { useState } from "react";
import Slide from "./Slide";
import SliderControl from "./SliderControl";

export default function Slider({ slides }) {
  const [state, setState] = useState({
    current: 0
  });

  const handlePreviousClick = () => {
    const previous = state.current - 1;

    setState({
      current: previous < 0 ? slides.length - 1 : previous
    });
  };

  const handleNextClick = () => {
    const next = state.current + 1;

    setState({
      current: next === slides.length ? 0 : next
    });
  };

  const handleSlideClick = (index) => {
    if (state.current !== index) {
      setState({
        current: index
      });
    }
  };

  const wrapperTransform = {
    transform: `translateX(-${state.current * (100 / slides.length)}%)`
  };

  return (
    <div className="slider">
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 className="visuallyhidden">My Carousel</h3>

        {slides.map((slide, i) => {
          return (
            <Slide
              key={i}
              slide={slide}
              index={i}
              current={state.current}
              handleSlideClick={handleSlideClick}
            />
          );
        })}
      </ul>

      <div className="slider__controls">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
