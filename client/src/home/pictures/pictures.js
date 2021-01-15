import React from "react";
import a from "./assets/1.jpg";
import b from "./assets/2.jpg";
import c from "./assets/3.jpg";
import d from "./assets/4.jpg";
import e from "./assets/5.jpg";
import f from "./assets/6.jpg";
import g from "./assets/7.jpg";
import h from "./assets/8.jpg";
import i from "./assets/9.jpg";
import j from "./assets/10.jpg";
import k from "./assets/11.jpg";
import l from "./assets/12.jpg";
import m from "./assets/13.jpg";
import n from "./assets/14.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/pictures.scss";

class Pictures extends React.Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      customPaging: (i) => <div className="slider" />,
      appendDots: (dots) => <ul>{dots}</ul>,
      responsive: [
        {
          breakpoint: 959,
          settings: {
            dots: false,
          },
        },
      ],
    };
    const pictures = [
      <img className="pictures__image" src={a} />,
      <img className="pictures__image" src={b} />,
      <img className="pictures__image" src={c} />,
      <img className="pictures__image" src={d} />,
      <img className="pictures__image" src={e} />,
      <img className="pictures__image" src={f} />,
      <img className="pictures__image" src={g} />,
      <img className="pictures__image" src={h} />,
      <img className="pictures__image" src={i} />,
      <img className="pictures__image" src={j} />,
      <img className="pictures__image" src={k} />,
      <img className="pictures__image" src={l} />,
      <img className="pictures__image" src={m} />,
      <img className="pictures__image" src={n} />,
    ];
    return (
      <div className="pictures">
        <Slider {...settings}>
          {pictures.map((picture, i) => {
            return <div key={`$picture_${i}`}>{picture}</div>;
          })}
        </Slider>
      </div>
    );
  }
}

export default Pictures;
