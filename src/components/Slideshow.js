import React from "react";
import { useState } from "react";

const Slideshow = ({ imgList, title }) => {
  const [counter, setCounter] = useState(1);

  if (imgList.length === 0) {
    return "";
  }

  if (imgList.length === 1) {
    return (
      <section className="slideshow">
        <img className="slideshow-img" src={imgList[0]} alt={title} />
      </section>
    );
  }

  const prev = () => {
    if (counter === 1) return setCounter(imgList.length);
    setCounter((prevCount) => prevCount - 1);
  };

  const next = () => {
    if (counter === imgList.length) return setCounter(1);
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <section className="slideshow">
      {/* Navigation avec les boutons */}
      <button
        className="icon-prev fa-solid fa-chevron-left"
        onClick={prev}
      ></button>

      <button
        className="icon-next fa-solid fa-chevron-right"
        onClick={next}
      ></button>

      <img className="slideshow-img" src={imgList[counter - 1]} alt={title} />

      <span className="slideshow-counter">
        {counter}/{imgList.length}
      </span>
    </section>
  );
};

export default Slideshow;
