import React from "react";
import a from "./assets/1.jpg";
import b from "./assets/2.jpg";
import c from "./assets/3.jpg";
import d from "./assets/4.jpg";
import e from "./assets/5.jpg";
import f from "./assets/6.jpg";
import g from "./assets/7.png";
import h from "./assets/8.jpg";
import i from "./assets/9.jpg";
import j from "./assets/10.jpg";
import k from "./assets/11.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/revivePictures.scss";

class RevivePictures extends React.Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      customPaging: (i) => 
      <div className="revive">
        <div className="reviveActive" />
      </div>,
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
      <img className="revivePictures__image" src={a} />,
      <img className="revivePictures__image" src={b} />,
      <img className="revivePictures__image" src={c} />,
      <img className="revivePictures__image" src={d} />,
      <img className="revivePictures__image" src={e} />,
      <img className="revivePictures__image" src={f} />,
      <img className="revivePictures__image" src={g} />,
      <img className="revivePictures__image" src={h} />,
      <img className="revivePictures__image" src={i} />,
      <img className="revivePictures__image" src={j} />,
      <img className="revivePictures__image" src={k} />,
    ];
    return (
      <div className="revivePictures">
        <Slider {...settings}>
          {pictures.map((picture, i) => {
            return <div key={`$revivePictures_${i}`}>{picture}</div>;
          })}
        </Slider>
      </div>
    );
  }
}

export default RevivePictures;
