import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./Style";
import { searchMovies } from "../../handler/handler";

import PosterCard from "../../components/PosterCard/PosterCard";
import { Grid } from "@material-ui/core";

const Search = () => {
  const classes = useStyles();
  let { id } = useParams();

  const [results, setResults] = useState(null);

  useEffect(() => {
    const getRes = async (param) => {
      const res = await searchMovies(param);
      setResults(res);
    };
    getRes(id);
  }, [id]);

  if (results === null) return <></>;

  console.log(results);

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={6}
        style={{ width: "100%", margin: 0 }}
      >
        {results.data.results.map((itm) => (
          <Grid item>
            <PosterCard item={itm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Search;
