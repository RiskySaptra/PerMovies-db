import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-elastic-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import GradeIcon from "@material-ui/icons/Grade";

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

  const getDetails = () => {
    console.log("beraks", item.id);
    return "beraks";
  };

  return (
    <>
      <div className={"postercontainer"} onClick={getDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          height={350}
        />

        <div class="top-right">
          <div style={{ display: "flex" }}>
            <GradeIcon style={{ color: "#FFD700" }} />
            <Typography className={classes.title}>
              {item.vote_average}
            </Typography>
          </div>
        </div>
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

const Swiper = ({ data, onClick }) => {
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
          <Item item={itm} />
        ))}
      </Carousel>
    </div>
  );
};

export default Swiper;
