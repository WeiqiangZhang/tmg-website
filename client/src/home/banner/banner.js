import React from 'react';
import { Typography } from '@material-ui/core';

import './styles/banner.scss';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.intervalId1 = {};
    this.intervalId2 = {};
    this.state = { text: '', count: 0, textCount: 0 }
  }
  componentDidMount() {
    this.typeWriter();
  }


  componentWillUnmount() {
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
  }

  typeWriter() {
    const texts = ["the herd", "the home of marketing", "TMG", "innovation", "the G.O.A.T"]
    this.intervalId1 = setInterval(() => {
      this.setState(prevState => ({
        count: (prevState.count === texts.length - 1 ? 0 : prevState.count + 1),
        textCount: 1
      }));
    }, 5000);
    this.intervalId2 = setInterval(() => {
      const { count, textCount } = this.state;
      if (textCount !== texts[count].length + 1) {
        this.setState(prevState => ({
          text: texts[count].substring(0, textCount),
          textCount: prevState.textCount + 1
        }));
      }
    }, 125);
  }

  render() {
    const { text } = this.state;
    return (
      <div className="banner">
        <span>
          <Typography variant="h1" className="banner__text">{`We are ${text}_`}</Typography>
        </span>
      </div>
    );
  }
}

export default Banner;
