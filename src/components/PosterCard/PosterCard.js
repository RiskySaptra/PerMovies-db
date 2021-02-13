import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import { Paper, Typography } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import useStyles from "./Style";

const PosterCard = ({ item }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const getDetails = () => {
    console.log("beraks", item);
    return "beraks";
  };

  return (
    <>
      <div
        className={"postercontainer"}
        onClick={getDetails}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          height={350}
        />

        <Collapse in={open} className="overview">
          <Paper
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              height: 350,
              paddingTop: 5,
            }}
            square
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography className={classes.title}>Overview :</Typography>
              <div style={{ display: "flex", paddingRight: 7 }}>
                <GradeIcon style={{ color: "#FFD700" }} />
                <Typography className={classes.title}>
                  {item.vote_average}
                </Typography>
              </div>
            </div>
            <Typography className={classes.title}>{item.overview}</Typography>
          </Paper>
        </Collapse>
      </div>
    </>
  );
};

export default PosterCard;
