import React from 'react';
import { Typography } from '@material-ui/core';

import './styles/banner.scss';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', count: 0, textCount: 0 }
  }
  componentDidMount() {
    this.typeWriter();
  }


  componentWillUnmount() {
    clearInterval(this.typeWriter());
  }

  typeWriter() {
    const texts = ["Amazing", "Innovation", "Batman", "The Marketing Group"]
    setInterval(() => {
      this.setState(prevState => ({
        count: (prevState.count === texts.length - 1 ? 0 : prevState.count + 1),
        textCount: 1
      }));
    }, 5000);
    setInterval(() => {
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
