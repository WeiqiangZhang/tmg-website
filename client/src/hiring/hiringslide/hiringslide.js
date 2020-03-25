import React from 'react';
import Slider from "react-slick";
import { Grid, withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/hiringslide.scss';

class HiringSlide extends React.Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      customPaging: i => (
        <div className="slider">
          <img className="slider__dot" src={`/assets/slide${i}.png`} alt={`slide ${i}`} />
        </div>),
      appendDots: dots => <ul>{dots}</ul>,
    };

    const StyledSubtitle = withStyles({
      subtitle1: {
        display: "inline",
        fontFamily: "UniSansItalic"
      },
      subtitle2: {
        display: "inline",
        fontFamily: "UniSansItalicThin"
      }
    })(Typography);
    return (
      <div className="hiringSlide">
        <Slider {...settings}>
          <div>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <img className="hiringSlide__image" src={`/assets/slide0.png`} alt="Angela" />
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="hiringSlide__quote">
                  <Typography variant="h6">"The Marketing Group  is a student organization that's one cut above
                  the rest. We're looking for talented and passionate individuals to help us continue to stand
                  out among the herd."
                  </Typography>
                  <div className="hiringSlide__role">
                    <StyledSubtitle variant="subtitle1">-Angela Yang,
                    </StyledSubtitle>
                    <StyledSubtitle variant="subtitle2"> 2020-21 Co-President
                    </StyledSubtitle>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <img className="hiringSlide__image" src={`/assets/slide1.png`} alt="Arman" />
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="hiringSlide__quote">
                  <Typography variant="h6">"The Marketing Group  is a student organization that's one cut above
                  the rest. We're looking for talented and passionate individuals to help us continue to stand
                  out among the herd."
          </Typography>
                  <div className="hiringSlide__role">
                    <StyledSubtitle variant="subtitle1">-Arman Nagra,
                    </StyledSubtitle>
                    <StyledSubtitle variant="subtitle2"> 2020-21 Co-President
                    </StyledSubtitle>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Slider>
      </div>
    );
  }
}

export default HiringSlide;
