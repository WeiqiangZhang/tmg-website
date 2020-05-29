import React from 'react';
import Slider from "react-slick";
import { Grid, withStyles } from '@material-ui/core';
import { Typography, useMediaQuery } from '@material-ui/core';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/hiringslide.scss';

function HiringSlide(props) {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      customPaging: i => (
        <div className="slider">
          <img className="slider__dot" src={props.carousel.slide[i].image} alt={`slide ${i}`} />
        </div>),
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
        lineHeight: 1,
      }
    })(Typography);

    return (
      <div className="hiringSlide">
        <Slider {...settings}>
          { props.carousel.slide.map((slide, i) => {
          return (<div key={`${slide.name}_${i}`}>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <img className="hiringSlide__image" src={slide.image} alt={slide.name} />
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="hiringSlide__quote">
                  <StyledSubtitle variant="body1">{`"${slide.blurb}"`}
                  </StyledSubtitle>
                  <div className="hiringSlide__role">
                    <StyledSubtitle variant="subtitle1">{`-${slide.name},`}
                    </StyledSubtitle>
                    <StyledSubtitle variant="subtitle2">{` ${slide.role}`}
                    </StyledSubtitle>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>)
        })
        }
        </Slider>
      </div>
    );
}

export default HiringSlide;
