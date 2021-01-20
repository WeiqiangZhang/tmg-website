import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Typography, Link, withStyles } from "@material-ui/core";
import { constants } from "styles/constants";

import "./styles/faq.scss";

class Faq extends React.Component {
  render() {
    const questions = [
      "Q: What is REVIVE?",
      "Q: Do you have to be in teams to compete?",
      "Q: How much does REVIVE cost?",
      "Q: Where do I sign up?",
      "Q: Do I have to be in a business program to participate?",
      "Q: What are the prizes for REVIVE?",
      "Q: I’m a recent undergraduate student. Can I still participate?",
      "Q: What is a simulation and how does it work?",
      "Q: What is the format of the Preliminary case?",
    ];
    const answers = [
      "A competition where aspiring marketers gather to challenge and level up their marketing skills in a simulated real-world setting.",
      "You can compete individually or in teams of 2.",
      "It’s completely free!",
      "You can sign-up here or go to the link in our Instagram bio to register.",
      "The competition is not limited to any program or any university/college. Any student from any program is free to participate!",
      "First place cash prize: $5,000. Second place cash prize: $2,500. And if that's not enough, we've got tons more in store for the Top 32 and Top 10 teams, including giveaways, swag bags, exclusive networking and speaker sessions and much, much more.",
      "Yes, you can definitely participate! Our case competition is open to undergraduates, recent graduates (graduated within 12 months prior to our event), and postgraduate students. For more details please refer to our rules and regulations page.",
      "A simulation is a virtual environment that will behave and respond to the decisions you make within it—similar to real-world conditions.",
      "Teams will have to submit a 5 minute video presentation and key information documents supporting their solution to the given case. All submissions for their respective pages can be submitted on each case page.",
    ];

    return (
      <div className="faq">
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            className="faq__header"
            style={{ color: constants.primary2 }}
          >
            FAQ
          </Typography>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[0]}
            </Typography>
            <Typography variant="body2" style={{ color: constants.grey4 }}>
              {answers[0]}
            </Typography>
          </div>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[1]}
            </Typography>
            <Typography variant="body2" style={{ color: constants.grey4 }}>
              {answers[1]}
            </Typography>
          </div>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[2]}
            </Typography>
            <Typography variant="body2" style={{ color: constants.grey4 }}>
              {answers[2]}
            </Typography>
          </div>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[3]}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: constants.grey4, display: "inline" }}
            >
              {"You can sign-up "}
              <Link
                to={{
                  pathname: `https://share.hsforms.com/12huFhO0dT9Gh201xQTGdlg4wnjt`,
                }}
                onClick={() =>
                  window.open(
                    "https://share.hsforms.com/12huFhO0dT9Gh201xQTGdlg4wnjt"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  style={{ color: constants.secondary2, display: "inline" }}
                >
                  here
                </Typography>
              </Link>
              <Typography
                variant="body2"
                style={{ color: constants.grey4, display: "inline" }}
              >
                {" or go to the link in our Instagram bio to register."}
              </Typography>
            </Typography>
          </div>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[4]}
            </Typography>
            <Typography variant="body2" style={{ color: constants.grey4 }}>
              {"The competition is "}
              <Typography
                variant="body2"
                style={{
                  color: constants.grey4,
                  display: "inline",
                  fontStyle: "italic",
                }}
              >
                not
              </Typography>
              {
                " limited to any program or any university/college. Any student from any program is free to participate!"
              }
            </Typography>
          </div>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[5]}
            </Typography>
            <Typography variant="body2" style={{ color: constants.grey4 }}>
              {answers[5]}
            </Typography>
          </div>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[6]}
            </Typography>
            <Typography variant="body2" style={{ color: constants.grey4 }}>
              {answers[6]}
            </Typography>
          </div>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[7]}
            </Typography>
            <Typography variant="body2" style={{ color: constants.grey4 }}>
              {answers[7]}
            </Typography>
          </div>
          <div className="faq__questions">
            <Typography variant="body2" style={{ color: constants.primary2 }}>
              {questions[8]}
            </Typography>
            <Typography variant="body2" style={{ color: constants.grey4 }}>
              {"Teams will have to submit a "}
              <Typography
                variant="body2"
                style={{
                  color: constants.grey4,
                  display: "inline",
                  fontWeight: "bold",
                }}
              >
                5 minute
              </Typography>
              {
                " video presentation and key information documents supporting their solution to the given case. All submissions for their respective pages can be submitted on each case page."
              }
            </Typography>
          </div>
        </Container>
      </div>
    );
  }
}

export default Faq;
