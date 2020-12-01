import React, { useState, useRef, useEffect } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Menu,
  MenuItem,
  Grow,
  Typography,
  withStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./assets/logo.jpg";
import reviveLogo from "./assets/logo-revive.png";
import { Container } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import hamburgerMenu from "./assets/hamburger-menu.png";
import { constants, breakpoints } from "styles/constants";

import "./styles/navigation.scss";

const useStyles = makeStyles({
  selected: {
    "&.Mui-selected": {
      fontSize: "1.25rem",
    },
  },
  root: {
    flex: "none",
  },
  label: {
    fontSize: "1.25rem",
  },
});

const useStylesBottomNavigation = makeStyles({
  root: {
    flex: "none",
    backgroundColor: (props) =>
      props.isRevive ? constants.darkBlue : constants.white,
  },
});

const useStylesSwap = makeStyles({
  selected: {
    "&.Mui-selected": {
      fontSize: "1.25rem",
      color: (props) =>
        props.isRevive ? constants.secondary2 : constants.secondary,
    },
  },
  root: {
    flex: "none",
    color: (props) =>
      props.isRevive ? constants.secondary2 : constants.secondary,
    '@media (max-width: 40.3125rem)': {
      minWidth: "0",
    },
  },
  label: {
    fontSize: "1.25rem",
    '@media (max-width: 40.3125rem)': {
      fontSize: "0.75rem",
    },
  },
});

const useStylesMenuItem = makeStyles({
  root: {
    "&.MuiButtonBase-root": {
      color: constants.primary,
    },
  },
  rootRevive: {
    "&.MuiButtonBase-root": {
      color: constants.primary2,
    },
  },
  default: {},
});

function Navigation(props) {
  const [value, setValue] = useState(
    new URL(window.location.href).pathname.split("/").pop()
  );
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUpdate = (newValue) => {
    setAnchorEl(null);
    setValue(newValue);
    routeUpdate(newValue);
  };
  const { routeUpdate, isRevive } = props;
  const classes = useStyles({ isRevive });
  const classesMenuItem = useStylesMenuItem();
  const classesSwap = useStylesSwap({ isRevive });
  const classesBottomNav = useStylesBottomNavigation({ isRevive });
  const StyledHeader = withStyles({
    h1: {
      fontFamily: "UniSans",
      fontSize: "1.25rem",
      color: constants.grey4,
      padding: "0.375rem 0.75rem",
      margin: "auto",
      cursor: "pointer",
      '@media (max-width: 40.3125rem)': {
        fontSize: "0.75rem",
      }
    },
    subtitle1: {
      fontSize: "1rem",
      color: constants.grey4,
      '@media (max-width: 40.3125rem)': {
        fontSize: "0.75rem",
      },
    },
  })(Typography);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const dropdown2Ref = useRef(null);
  const dropdownButton2Ref = useRef(null);
  const dropdown3Ref = useRef(null);
  const dropdownButton3Ref = useRef(null);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [dropdown2Opened, setDropdown2Opened] = useState(false);
  const [dropdown3Opened, setDropdown3Opened] = useState(false);
  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (
        dropdownRef.current &&
        dropdownButtonRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setDropdownOpened(false);
      }
    };
    const handleHoverInside = (event) => {
      if (
        dropdownRef.current &&
        dropdownButtonRef.current &&
        (dropdownRef.current.contains(event.target) ||
          dropdownButtonRef.current.contains(event.target))
      ) {
        setDropdownOpened(true);
      }
    };
    const handleHoverOutside2 = (event) => {
      if (
        dropdown2Ref.current &&
        dropdownButton2Ref.current &&
        !dropdown2Ref.current.contains(event.target) &&
        !dropdownButton2Ref.current.contains(event.target)
      ) {
        setDropdown2Opened(false);
      }
    };
    const handleHoverInside2 = (event) => {
      if (
        dropdown2Ref.current &&
        dropdownButton2Ref.current &&
        (dropdown2Ref.current.contains(event.target) ||
          dropdownButton2Ref.current.contains(event.target))
      ) {
        setDropdown2Opened(true);
      }
    };
    const handleHoverOutside3 = (event) => {
      if (
        dropdown3Ref.current &&
        dropdownButton3Ref.current &&
        !dropdown3Ref.current.contains(event.target) &&
        !dropdownButton3Ref.current.contains(event.target)
      ) {
        setDropdown3Opened(false);
      }
    };
    const handleHoverInside3 = (event) => {
      if (
        dropdown3Ref.current &&
        dropdownButton3Ref.current &&
        (dropdown3Ref.current.contains(event.target) ||
          dropdownButton3Ref.current.contains(event.target))
      ) {
        setDropdown3Opened(true);
      }
    };
    document.addEventListener("mouseover", handleHoverOutside);
    document.addEventListener("mouseover", handleHoverInside);
    document.addEventListener("mouseover", handleHoverOutside2);
    document.addEventListener("mouseover", handleHoverInside2);
    document.addEventListener("mouseover", handleHoverOutside3);
    document.addEventListener("mouseover", handleHoverInside3);
    return () => {
      document.removeEventListener("mouseover", handleHoverOutside);
      document.removeEventListener("mouseover", handleHoverInside);
      document.removeEventListener("mouseover", handleHoverOutside2);
      document.removeEventListener("mouseover", handleHoverInside2);
      document.removeEventListener("mouseover", handleHoverOutside3);
      document.removeEventListener("mouseover", handleHoverInside3);
    };
  }, [dropdownRef, dropdownButtonRef]);
  const handleTabChange = (newValue) => {
    setValue(newValue);
    routeUpdate(newValue);
  };
  return (
    <div className={`navigation navigation${isRevive ? "--revive" : ""}`}>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <img
              className="navigation__logo"
              src={isRevive ? reviveLogo : logo}
              alt="Home"
              onClick={() => {
                routeUpdate(isRevive ? "revive" : "home");
                setValue(null);
              }}
            />
          </Grid>
          {isMobile && !isRevive ? (
            <div>
              <img
                className="navigation__menu"
                src={hamburgerMenu}
                aria-controls="nav-menu"
                aria-haspopup="true"
                onClick={handleClick}
              />
              <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  classes={{
                    root:
                      classesMenuItem[value === "hiring" ? "root" : "default"],
                  }}
                  onClick={() => handleUpdate("hiring")}
                >
                  Hiring
                </MenuItem>
                <MenuItem
                  classes={{
                    root:
                      classesMenuItem[value === "about" ? "root" : "default"],
                  }}
                  onClick={() => handleUpdate("about")}
                >
                  About
                </MenuItem>
                <MenuItem
                  classes={{
                    root:
                      classesMenuItem[value === "team" ? "root" : "default"],
                  }}
                  onClick={() => handleUpdate("team")}
                >
                  Leadersheep
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classesMenuItem.rootRevive,
                  }}
                  onClick={() => handleUpdate("revive")}
                >
                  REVIVE
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Grid item>
              <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                  handleTabChange(newValue);
                }}
                showLabels
                classes={classesBottomNav}
              >
                {/* MAIN SITE */}
                {!isRevive && (
                  <Grow value="hiring" in={!isRevive} {...{ timeout: 2000 }}>
                    <BottomNavigationAction
                      classes={classes}
                      label="Hiring"
                      value="hiring"
                    />
                  </Grow>
                )}
                {!isRevive && (
                  <Grow value="about" in={!isRevive} {...{ timeout: 1500 }}>
                    <BottomNavigationAction
                      classes={classes}
                      label="About"
                      value="about"
                    />
                  </Grow>
                )}
                {!isRevive && (
                  <Grow value="team" in={!isRevive} {...{ timeout: 1000 }}>
                    <BottomNavigationAction
                      classes={classes}
                      label="Leadersheep"
                      value="team"
                    />
                  </Grow>
                )}
                {/* REVIVE */}
                {isRevive && (
                  <Grow
                    value="revival"
                    in={isRevive}
                    {...{ timeout: 1000 }}
                    ref={dropdownButtonRef}
                  >
                    <div className="navigation__dropdownContainer">
                      <StyledHeader
                        style={{ color: constants.primary2 }}
                        variant="h1"
                        ref={dropdownRef}
                      >
                        Begin your revival
                      </StyledHeader>
                      <div
                        className={`navigation__dropdown navigation__dropdown${
                          dropdownOpened ? "--opened" : ""
                        }`}
                      >
                        <button
                          className="navigation__dropdownButton"
                          onClick={() => handleTabChange("caseone")}
                        >
                          <StyledHeader variant="subtitle1" color="primary2">
                            Case 1
                          </StyledHeader>
                        </button>
                        <button className="navigation__dropdownButton">
                          <StyledHeader variant="subtitle1">
                            Simulation - coming soon!
                          </StyledHeader>
                        </button>
                        <button className="navigation__dropdownButton">
                          <StyledHeader variant="subtitle1">
                            Case 2 - coming soon!
                          </StyledHeader>
                        </button>
                      </div>
                    </div>
                  </Grow>
                )}
                {isRevive && (
                  <Grow
                    value="aboutRevive"
                    in={isRevive}
                    {...{ timeout: 1500 }}
                    ref={dropdownButton2Ref}
                  >
                    <div className="navigation__dropdownContainer">
                      <StyledHeader variant="h1" ref={dropdown2Ref}>
                        About
                      </StyledHeader>
                      <div
                        className={`navigation__dropdown navigation__dropdown${
                          dropdown2Opened ? "--opened" : ""
                        }`}
                      >
                        <button className="navigation__dropdownButton">
                          <StyledHeader variant="subtitle1" color="primary2">
                            coming soon!
                          </StyledHeader>
                        </button>
                      </div>
                    </div>
                  </Grow>
                )}
                {isRevive && (
                  <Grow
                    value="connections"
                    in={isRevive}
                    {...{ timeout: 2000 }}
                    ref={dropdownButton3Ref}
                  >
                    <div className="navigation__dropdownContainer">
                      <StyledHeader variant="h1" ref={dropdown3Ref}>
                        CONNECTIONS
                      </StyledHeader>
                      <div
                        className={`navigation__dropdown navigation__dropdown${
                          dropdown3Opened ? "--opened" : ""
                        }`}
                      >
                        <button className="navigation__dropdownButton">
                          <StyledHeader variant="subtitle1" color="primary2">
                            coming soon!
                          </StyledHeader>
                        </button>
                      </div>
                    </div>
                  </Grow>
                )}
                <BottomNavigationAction
                  classes={classesSwap}
                  label={isRevive ? "TMG" : "REVIVE"}
                  value={isRevive ? "home" : "revive"}
                />
              </BottomNavigation>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Navigation;
