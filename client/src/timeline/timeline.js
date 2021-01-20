import React from "react";
import { Typography, Container } from "@material-ui/core";
import { constants } from "styles/constants";

import "./styles/timeline.scss";
function Timeline(props) {
  const dates = [
    "Dec 01: Preliminary Case Release",
    "Jan 25: Preliminary Case Deadline",
    "Feb 01: Simulation Commences",
    "Mar 07: Simulation Closes",
    "Mar 08: Final Case Release",
    "Mar 19: Final Case Deadline",
    "Mar 19: Top 10 Teams Present",
    "Mar 20: Network and Gala",
  ];
  const descriptions = [
    "Put your marketing knowledge into practice with a real-world industry challenge. Present your creative solutions through a video submission.",
    "Last day to submit your video entry for REVIVE.",
    "Put your marketing skills to the test! The simulation brings together all essential areas of marketing and you get to make all the decisions.",
    "This will be the final day to make any decisions or changes in the simulation. No extensions will be given under any circumstances.",
    "The top 10 teams from the simulation rounds will go through a final industry case to separate the cream from the crop!",
    "Last day for the top 10 teams to go through the industry case and prepare for their presentations.",
    "The teams will get the opportunity to bring their solutions to life in a final presentation to case partners.",
    "Sit back and enjoy because you have made it to the end of REVIVE!",
  ];
  return (
    <div className="timeline">
      <Container maxWidth="lg">
        {dates.map((date, index) => {
          return (
            <div key={`date_${index}`} className="timeline__date">
              <Typography variant="body2" style={{ color: constants.primary2 }}>
                {date}
              </Typography>
              <Typography variant="body2" style={{ color: constants.grey4 }}>{descriptions[index]}</Typography>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Timeline;
