import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import useStyles from "./Style";

import Tabs from "../../components/Tabs/Tabs";

import { getMovieDetail } from "../../handler/handler";

const Details = () => {
  const classes = useStyles();
  let { id } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getRes = async (param) => {
      const res = await getMovieDetail(param);
      setDetails(res);
    };
    getRes(id);
  }, [id]);

  // loading
  if (!details) return <>Loading...</>;

  console.log(details);

  return (
    <div className={classes.root}>
      <Tabs overview={details} />
    </div>
  );
};
export default Details;
