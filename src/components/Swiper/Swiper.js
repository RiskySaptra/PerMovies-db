import React from "react";
import { IconButton } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PosterCard from "../PosterCard/PosterCard";

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
          <PosterCard key={itm.id} item={itm} />
        ))}
      </Carousel>
    </div>
  );
};

export default Swiper;
