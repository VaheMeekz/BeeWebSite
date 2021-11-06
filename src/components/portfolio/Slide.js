import React, { Children, useRef } from "react";

export default function Slide({ slide, index, current, handleSlideClick }) {
  const slideEl = useRef(null);

  const handleMouseMove = (event) => {
    const el = slideEl.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = () => {
    slideEl.current.style.setProperty("--x", 0);
    slideEl.current.style.setProperty("--y", 0);
  };

  const handleClick = () => {
    handleSlideClick(index);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  const { src, button, headline } = slide;
  let classNames = "slide";

  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  return (
    <li
      ref={slideEl}
      className={classNames}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
      </article>
    </li>
  );
}
