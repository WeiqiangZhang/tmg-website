import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { Typography, withStyles } from "@material-ui/core";
import { constants } from "styles/constants";
import { Document, Page, pdfjs } from "react-pdf";
import RevivePrelim from "./assets/RevivePrelim.pdf";
import Rules from "./assets/Rules.pdf";
import { isMobile } from "react-device-detect";

import "./styles/caseOne.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function CaseOne(props) {
  const StyledHeader = withStyles({
    h2: {
      color: constants.grey4,
      textAlign: "center",
      "@media (max-width: 40.3125rem)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontFamily: "UniSansHeavy",
      color: constants.white,
      textAlign: "center",
    },
    body2: {
      fontFamily: "FuturaPTCondBook",
      color: constants.white,
      fontSize: "1.75rem",
      textAlign: "center",
      "@media (max-width: 40.3125rem)": {
        fontSize: "1rem",
      },
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
      "@media (max-width: 40.3125rem)": {
        width: "7.5rem",
      },
    },
    label: {
      "@media (max-width: 40.3125rem)": {
        fontSize: "0.675rem",
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
  const [previousPage, setPreviousPage] = useState(
    <div className="caseOne__pagePlaceholder" />
  );
  const [previousPage2, setPreviousPage2] = useState(
    <div className="caseOne__pagePlaceholder" />
  );
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function onDocument2LoadSuccess({ numPages }) {
    setNumPages2(numPages);
  }
  function onPageLoadSuccess({ pageNumber }) {
    setPreviousPage(<Page pageNumber={pageNumber} />);
  }
  function onPage2LoadSuccess({ pageNumber }) {
    setPreviousPage2(<Page pageNumber={pageNumber} />);
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
              <StyledHeader variant="body2" style={{ textAlign: "center" }}>
                Not only does the following case mark the beginning of your journey with us, it's also an ode to months of brainstorming, 
                planning and execution by our leadersheep team at The Marketing Group. 
                Our goal was to revive a marketing club from the ashes of the unknown, create a student conference like none other and 
                provide students around the world with an opportunity to spread their marketing wings in a realistic setting. Consider this goal achieved. 
              </StyledHeader>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className="caseOne__body2">
              <StyledHeader variant="body2" style={{ textAlign: "center" }}>
                Now it's your turn. Your journey starts here, so go and make the most of it. 
              </StyledHeader>
            </div>
            <div className="caseOne__body2">
              <StyledHeader variant="body2" style={{ textAlign: "center" }}>
                After the year we've all been through, we could all use a bit of{" "}
                <StyledHeader
              variant="body2"
              style={{ color: constants.primary2, display: "inline" }}
            >
                  revival.
                </StyledHeader>
              </StyledHeader>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className="caseOne__h3Container">
              <StyledHeader variant="h2" style={{ fontFamily: "UniSansHeavy" }}>
                SUBMIT YOUR SOLUTION
              </StyledHeader>
              <div className="caseOne__body2">
                <StyledHeader variant="body2">
                  Remember to submit your key information document alongside your video file.
                </StyledHeader>
                <StyledHeader variant="body2">
                  Ensure you are following all rules and regulations listed below, or otherwise risk disqualification. 
                </StyledHeader>
                <div className="caseOne__buttonContainer">
                  <div className="caseOne__submitButton">
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
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="caseOne__h3Container">
          <StyledHeader
            variant="h2"
            className="caseOne__header"
            style={{ fontFamily: "UniSansHeavy" }}
          >
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
                    href="https://firebasestorage.googleapis.com/v0/b/revive-bfd36.appspot.com/o/RevivePrelim.pdf?alt=media&token=f9b872ac-e8aa-42cb-b830-cbd14e25fabb"
                    target="_blank"
                  >
                    Download
                  </a>
                </Typography>
              </div>
            </Grid>
            <Grid item md={12} xs={12}>
              <div ref={pdfRef}>
                <Document
                  file={RevivePrelim}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <StyledHeader variant="body2">Loading PDF...</StyledHeader>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    onLoadSuccess={onPageLoadSuccess}
                    className="caseOne__pdfPage"
                    loading={previousPage}
                    renderTextLayer={!isMobile}
                  >
                    {pdfHovered && (
                      <div className="caseOne__pdfNav">
                        <StyledNavButton
                          style={{ minWidth: 0 }}
                          disabled={pageNumber === 1}
                          onClick={() => setPageNumber(pageNumber - 1)}
                        >
                          {"<"}
                        </StyledNavButton>
                        <StyledHeader
                          variant="body2"
                          style={{ margin: "auto" }}
                        >
                          Page {pageNumber} of {numPages}
                        </StyledHeader>
                        <StyledNavButton
                          style={{ minWidth: 0 }}
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
          <StyledHeader
            variant="h2"
            className="caseOne__header"
            style={{ fontFamily: "UniSansHeavy" }}
          >
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
                    href="https://firebasestorage.googleapis.com/v0/b/revive-bfd36.appspot.com/o/Rules.pdf?alt=media&token=bd930faf-381b-4bdd-8ceb-53b61036035f"
                    target="_blank"
                  >
                    Download
                  </a>
                </Typography>
              </div>
            </Grid>
            <Grid item md={12} xs={12}>
              <div ref={pdf2Ref}>
                <Document
                  file={Rules}
                  onLoadSuccess={onDocument2LoadSuccess}
                  loading={
                    <StyledHeader variant="body2">Loading PDF...</StyledHeader>
                  }
                >
                  <Page
                    pageNumber={pageNumber2}
                    onLoadSuccess={onPage2LoadSuccess}
                    className="caseOne__pdfPage"
                    loading={previousPage}
                    renderTextLayer={!isMobile}
                  >
                    {pdf2Hovered && (
                      <div className="caseOne__pdfNav">
                        <StyledNavButton
                          style={{ minWidth: 0 }}
                          disabled={pageNumber2 === 1}
                          onClick={() => setPageNumber2(pageNumber2 - 1)}
                        >
                          {"<"}
                        </StyledNavButton>
                        <StyledHeader
                          variant="body2"
                          style={{ margin: "auto" }}
                        >
                          Page {pageNumber2} of {numPages2}
                        </StyledHeader>
                        <StyledNavButton
                          style={{ minWidth: 0 }}
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
