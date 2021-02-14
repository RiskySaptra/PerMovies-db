import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import { Paper, Typography, Box } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import useStyles from "./Style";
import { useHistory } from "react-router-dom";

const PosterCard = ({ item }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const goToDetails = () => history.push(`/movie/${item.id}`);

  const getDetails = () => {
    if (open) {
      goToDetails();
    }
  };

  return (
    <>
      <Box
        className={"postercontainer"}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <img
          src={
            item.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              : "/no-image.jpg"
          }
          alt={item.title}
          height={350}
          width={233.3}
        />

        <Collapse in={open} className="overview">
          <Paper
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              height: 350,
              cursor: "pointer",
              paddingTop: 5,
              width: 233.3,
            }}
            square
            onClick={getDetails}
          >
            <Typography className={classes.title}>{item.title}</Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                overflow: "none",
              }}
            >
              <Typography className={classes.title}>Overview :</Typography>
              <div style={{ display: "flex", paddingRight: 7 }}>
                <GradeIcon style={{ color: "#FFD700" }} />
                <Typography className={classes.title}>
                  {item.vote_average}
                </Typography>
              </div>
            </div>
            <Typography
              className={classes.title}
              displayInline
              align={"left"}
              style={{ textOverflow: "ellipsis" }}
            >
              {item.overview}
            </Typography>
          </Paper>
        </Collapse>
      </Box>
    </>
  );
};

export default PosterCard;
