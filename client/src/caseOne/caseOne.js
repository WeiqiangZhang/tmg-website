import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { Typography, withStyles } from "@material-ui/core";
import { constants } from "styles/constants";
import { Document, Page, pdfjs } from "react-pdf";
import Rules from "./assets/Rules.pdf";

import "./styles/caseOne.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function CaseOne(props) {
  const StyledHeader = withStyles({
    h2: {
      color: constants.grey4,
      textAlign: "center",
    },
    h3: {
      fontFamily: "UniSansHeavy",
      color: constants.white,
      textAlign: "center",
    },
    body2: {
      fontFamily: "FuturaPTCondBook",
      color: constants.grey4,
      fontSize: "1.75rem",
      textAlign: "center",
    },
    body1: {
      color: constants.grey4,
      fontSize: "2rem",
      textAlign: "center",
    },
  })(Typography);
  const StyledButton = withStyles({
    root: {
      width: "15rem",
      backgroundColor: constants.primary2,
      color: constants.grey4,
      "&:hover": {
        backgroundColor: constants.secondary2,
      },
    },
  })(Button);
  const StyledNavButton = withStyles({
    root: {
      backgroundColor: constants.darkBlue,
      color: constants.grey4,
    },
  })(Button);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages2, setNumPages2] = useState(null);
  const [pageNumber2, setPageNumber2] = useState(1);
  const pdfRef = useRef(null);
  const pdf2Ref = useRef(null);
  const [pdfHovered, setPdfHovered] = useState(false);
  const [pdf2Hovered, setPdf2Hovered] = useState(false);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function onDocument2LoadSuccess({ numPages }) {
    setNumPages2(numPages);
  }
  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (pdfRef.current && !pdfRef.current.contains(event.target)) {
        setPdfHovered(false);
      }
    };
    const handleHoverInside = (event) => {
      if (pdfRef.current && pdfRef.current.contains(event.target)) {
        setPdfHovered(true);
      }
    };
    document.addEventListener("mouseover", handleHoverOutside);
    document.addEventListener("mouseover", handleHoverInside);
    return () => {
      document.removeEventListener("mouseover", handleHoverOutside);
      document.removeEventListener("mouseover", handleHoverInside);
    };
  }, [pdfRef]);
  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (pdf2Ref.current && !pdf2Ref.current.contains(event.target)) {
        setPdf2Hovered(false);
      }
    };
    const handleHoverInside = (event) => {
      if (pdf2Ref.current && pdf2Ref.current.contains(event.target)) {
        setPdf2Hovered(true);
      }
    };
    document.addEventListener("mouseover", handleHoverOutside);
    document.addEventListener("mouseover", handleHoverInside);
    return () => {
      document.removeEventListener("mouseover", handleHoverOutside);
      document.removeEventListener("mouseover", handleHoverInside);
    };
  }, [pdf2Ref]);
  return (
    <div className="caseOne">
      <Container maxWidth="lg">
        <div className="caseOne__headerContainer">
          <StyledHeader variant="h2" className="caseOne__header">
            We've hinted at this for a long time, and it's finally here.{" "}
            <StyledHeader
              variant="h2"
              style={{ color: constants.primary2, display: "inline" }}
            >
              Welcome to REVIVE!
            </StyledHeader>
          </StyledHeader>
        </div>
        <Grid container justify="center">
          <Grid item md={12} xs={12}>
            <div className="caseOne__body">
              <StyledHeader
                variant="body2"
                style={{ color: constants.white, textAlign: "center" }}
              >
                Not only does the following case mark the beginning of your
                adventure with us, but it's an ode to months and months of
                brainstorming, planning and execution by our leadersheep team at
                The Marketing Group. REVIVE is what happens when you take a
                group of high-octane individuals and tell them to revive a
                marketing club from the ashes of the unknown, to create a
                student conference like none other and to finally provide
                students around the world with an opportunity to spread their
                marketing wings in a real-world setting.
              </StyledHeader>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className="caseOne__body2">
              <StyledHeader
                variant="body2"
                style={{ color: constants.white, textAlign: "center" }}
              >
                But enough about us - it's now your turn. Your journey starts
                here, so go and make the most of it.
              </StyledHeader>
            </div>
            <div className="caseOne__body2">
              <StyledHeader
                variant="body2"
                style={{ color: constants.white, textAlign: "center" }}
              >
                After the year we've all been through, we could all use a bit of
                revival.
              </StyledHeader>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className="caseOne__h3Container">
              <StyledHeader variant="h3">SUBMIT YOUR SOLUTION</StyledHeader>
              <div className="caseOne__body2">
                <StyledHeader
                  variant="body2"
                  style={{ color: constants.white }}
                >
                  Already done? Click below to submit.
                </StyledHeader>
                <div className="caseOne__button">
                  <StyledButton
                    variant="contained"
                    onClick={() =>
                      window.open(
                        "https://www.dropbox.com/request/FD0zlvUKDIWlYUu4XETl",
                        "_blank"
                      )
                    }
                  >
                    Submit solution
                  </StyledButton>
                </div>
                <div className="caseOne__body2">
                  <StyledHeader
                    variant="body2"
                    style={{ color: constants.white }}
                  >
                    Remember to submit your key information document alongside
                    your video file above. Click below to download the template.
                  </StyledHeader>
                  <div className="caseOne__button">
                    <a
                      className="caseOne__underline"
                      target="_blank"
                      href="https://firebasestorage.googleapis.com/v0/b/revive-bfd36.appspot.com/o/FirstNameLastName1_FirstNameLastName2_doc.xlsx?alt=media&token=6e4dc697-7e3a-406f-b488-0df836138507"
                      title="xlsxFile"
                    >
                      <StyledButton variant="contained">
                        DOWNLOAD KEY INFO TEMPLATE
                      </StyledButton>
                    </a>
                    <div className="caseOne__body2">
                      <StyledHeader
                        variant="body2"
                        style={{ color: constants.white }}
                      >
                        Ensure you are following the rules and regulations
                        listed below. Failure to adequately follow these may
                        risk disqualification.
                      </StyledHeader>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="caseOne__h3Container">
          <StyledHeader variant="h3" className="caseOne__header">
            PRELIMINARY CASE
          </StyledHeader>
        </div>
        <Container maxWidth="md">
          <Grid container align="center">
            <Grid item md={12} xs={12}>
              <div className="caseOne__body2">
                <Typography className="caseOne__download" variant="subtitle1">
                  {" "}
                  <a
                    className="caseOne__underline"
                    href="https://www.facebook.com/HomeOfThePinkSheep"
                    target="_blank"
                  >
                    Download
                  </a>
                </Typography>
              </div>
            </Grid>
            <Grid item md={12} xs={12}>
              <div ref={pdfRef}>
                <Document file={Rules} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} className="caseOne__pdfPage">
                    {pdfHovered && (
                      <div className="caseOne__pdfNav">
                        <StyledNavButton
                          disabled={pageNumber === 1}
                          onClick={() => setPageNumber(pageNumber - 1)}
                        >
                          {"<"}
                        </StyledNavButton>
                        <StyledHeader variant="body2">
                          Page {pageNumber} of {numPages}
                        </StyledHeader>
                        <StyledNavButton
                          disabled={pageNumber === numPages}
                          onClick={() => setPageNumber(pageNumber + 1)}
                        >
                          {">"}
                        </StyledNavButton>
                      </div>
                    )}
                  </Page>
                </Document>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className="caseOne__h3Container">
          <StyledHeader variant="h3" className="caseOne__header">
            RULES AND REGULATIONS
          </StyledHeader>
        </div>
        <Container maxWidth="md">
          <Grid container align="center">
            <Grid item md={12} xs={12}>
              <div className="caseOne__body2">
                <Typography className="caseOne__download" variant="subtitle1">
                  {" "}
                  <a
                    className="caseOne__underline"
                    href="https://www.facebook.com/HomeOfThePinkSheep"
                    target="_blank"
                  >
                    Download
                  </a>
                </Typography>
              </div>
            </Grid>
            <Grid item md={12} xs={12}>
              <div ref={pdf2Ref}>
                <Document file={Rules} onLoadSuccess={onDocument2LoadSuccess}>
                  <Page pageNumber={pageNumber2} className="caseOne__pdfPage">
                    {pdf2Hovered && (
                      <div className="caseOne__pdfNav">
                        <StyledNavButton
                          disabled={pageNumber2 === 1}
                          onClick={() => setPageNumber2(pageNumber2 - 1)}
                        >
                          {"<"}
                        </StyledNavButton>
                        <StyledHeader variant="body2">
                          Page {pageNumber2} of {numPages2}
                        </StyledHeader>
                        <StyledNavButton
                          disabled={pageNumber2 === numPages2}
                          onClick={() => setPageNumber2(pageNumber2 + 1)}
                        >
                          {">"}
                        </StyledNavButton>
                      </div>
                    )}
                  </Page>
                </Document>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default CaseOne;
