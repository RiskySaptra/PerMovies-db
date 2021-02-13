import React, { useState } from "react";
import { IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-elastic-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import GradeIcon from "@material-ui/icons/Grade";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
    color: "white",
    [theme.breakpoints.up("md")]: {
      padding: 150,
    },
  },
  title: {
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      padding: 3,
    },
  },
  pos: {
    maxWidth: 450,
    marginBottom: 12,
  },
}));

const Item = ({ item }) => {
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
              <div style={{ display: "flex" }}>
                <GradeIcon style={{ color: "#FFD700" }} />
                <Typography className={classes.title}>
                  {item.vote_average}
                </Typography>
              </div>
            </div>
            <Typography className={classes.title}>{item.overview}</Typography>
          </Paper>
        </Collapse>

        {/* <div className="top-right">
          <div style={{ display: "flex" }}>
            <GradeIcon style={{ color: "#FFD700" }} />
            <Typography className={classes.title}>
              {item.vote_average}
            </Typography>
          </div>
        </div> */}
      </div>
    </>
  );
};

const Arrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === "PREV" ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
  return (
    <IconButton onClick={onClick} disabled={isEdge} style={{ color: "white" }}>
      {pointer}
    </IconButton>
  );
};

const Swiper = ({ data }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 7 },
    { width: 1750, itemsToShow: 8 },
  ];
  return (
    <div>
      <Carousel
        itemsToShow={5}
        showEmptySlots
        renderArrow={Arrow}
        renderPagination={() => {
          return <div direction="row" style={{ display: "none" }}></div>;
        }}
        breakPoints={breakPoints}
      >
        {data.map((itm) => (
          <Item key={itm.id} item={itm} />
        ))}
      </Carousel>
    </div>
  );
};

export default Swiper;
