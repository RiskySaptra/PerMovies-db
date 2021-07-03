import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { GENRES } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    paddingBottom: 20,
  },
  chip: {
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
  },
}));

const ChipsArray = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      {data.map((data) => {
        return (
          <Chip
            size="small"
            key={data}
            color="primary"
            label={GENRES[data]}
            className={classes.chip}
            style={{ backgroundColor: "rgba(60, 60, 60, 0.7)" }}
          />
        );
      })}
    </>
  );
};

export default ChipsArray;
