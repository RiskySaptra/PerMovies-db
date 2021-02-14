/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import useStyles from "./Style";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [search, setSearch] = useState(null);
  const goToSearch = () => {
    if (search.length > 0) {
      history.push(`/search/${search}`);
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const keyDown = (event) => {
    if (event === "Enter") {
      goToSearch();
    }
  };

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
              onClick={() => history.push(`/`)}
              style={{ cursor: "pointer" }}
              className={"posterimg"}
              src="/logo.png"
              alt="logo"
              width={300}
            />
          </div>
        </div>
        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={handleChange}
            onKeyDown={(e) => keyDown(e.key)}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            onClick={() => goToSearch()}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
