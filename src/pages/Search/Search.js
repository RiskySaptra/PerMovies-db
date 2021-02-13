import React from "react";

import { useParams } from "react-router-dom";
import useStyles from "./Style";

const Search = () => {
  const classes = useStyles();

  let { id } = useParams();

  console.log(id);

  return (
    <div className={classes.root}>
      <h1 style={{ color: "white" }}>Search {id}</h1>
    </div>
  );
};
export default Search;
