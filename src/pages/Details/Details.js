import React from "react";

import { useParams } from "react-router-dom";
import useStyles from "./Style";

const Details = () => {
  const classes = useStyles();

  let { id } = useParams();

  console.log(id);

  return (
    <div className={classes.root}>
      <h1 style={{ color: "white" }}>Details {id}</h1>
    </div>
  );
};
export default Details;
