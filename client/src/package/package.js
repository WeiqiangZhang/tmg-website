import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { Typography, withStyles } from "@material-ui/core";
import { constants } from "styles/constants";
import { Document, Page, pdfjs } from "react-pdf";
import DelegatePackage from "./assets/DelegatePackage.pdf";
import { isMobile } from "react-device-detect";

import "./styles/package.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Package(props) {
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
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const pages = [...Array(numPages).keys()];
  return (
    <div className="package">
      <Container maxWidth="lg">
        <div className="package__headerContainer">
          <StyledHeader
            variant="h1"
            style={{ color: constants.primary2 }}
          >
            DELEGATE PACKAGE
          </StyledHeader>
        </div>
        <Container maxWidth="md">
          <Grid container align="center">
            <Grid item md={12} xs={12}>
              <div className="package__body2">
                <Typography className="package__download" variant="subtitle1">
                  {" "}
                  <a
                    className="package__underline"
                    href="https://firebasestorage.googleapis.com/v0/b/revive-bfd36.appspot.com/o/DelegatePackage.pdf?alt=media&token=f0a583ab-3195-46a6-a2d1-f60eb4d22fc9"
                    target="_blank"
                  >
                    Download
                  </a>
                </Typography>
              </div>
            </Grid>
            <Grid item md={12} xs={12}>
              <div>
                <Document
                  file={DelegatePackage}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <StyledHeader variant="body2">Loading PDF...</StyledHeader>
                  }
                >
                  {pages.map((numPage, index) => {return (<Page
                    key={`delegate_page_${index}`}
                    pageNumber={numPage + 1}
                    className="package__pdfPage"
                    renderTextLayer={!isMobile}
                  >
                  </Page>)})}
                </Document>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default Package;
