import React from 'react';
import Slider from "react-slick";
import { Grid, withStyles } from '@material-ui/core';
import { Typography, useMediaQuery } from '@material-ui/core';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/homeSlide.scss';

function HomeSlide(props) {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      customPaging: i => (
        <div className="slider" />),
      appendDots: dots => <ul>{dots}</ul>,
      responsive: [
        {
          breakpoint: 959,
          settings: {
            dots: false
          }
        },
      ]
    };
    const matches = useMediaQuery('(max-width:45rem)');
    const StyledSubtitle = withStyles({
      subtitle1: {
        display: "inline",
        fontFamily: "UniSansItalic"
      },
      subtitle2: {
        display: "inline",
        fontFamily: "UniSansItalicThin"
      },
      body1: {
        fontSize: matches ? "2rem" : "3rem",
      }
    })(Typography);

    return (
      <div className="homeSlide">
        <Slider {...settings}>
          { props.carousel.slide.map((slide, i) => {
          return (<div key={`${slide.name}_${i}`}>
            <Grid container spacing={4}>
              <Grid item md={12} xs={12}>
                <img className="homeSlide__image" src={slide.image} alt={slide.name} />
              </Grid>
            </Grid>
          </div>)
        })
        }
        </Slider>
      </div>
    );
}

export default HomeSlide;
