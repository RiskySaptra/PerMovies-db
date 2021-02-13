/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { AppBar, Toolbar, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./Style";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      elevation={0}
      color={"transparent"}
      style={{ color: "white" }}
    >
      <Toolbar>
        <div className={classes.title}>
          <div style={{ display: "flex" }}>
            <img
              className={"posterimg"}
              src="/logo.png"
              alt="logo"
              width={300}
            />
          </div>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
