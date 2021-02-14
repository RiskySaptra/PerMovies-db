import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Chips from "../Chips/Chips";

import { useHistory } from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    padding: 12,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 190,
      padding: 120,
    },
  },
  rating: {
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      padding: 3,
    },
  },
  title: {
    fontSize: 35,
    [theme.breakpoints.up("sm")]: {
      fontSize: 50,
    },
  },
  overview: {
    maxWidth: 700,
    marginBottom: 12,
    [theme.breakpoints.up("sm")]: {
      fontSize: 20,
    },
  },
}));

const Cards = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const goToDetails = () => history.push(`/movie/${data.id}`);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Card
        className={classes.root}
        style={{ backgroundColor: "rgba(60, 60, 60, 0)" }}
        elevation={0}
      >
        <CardContent>
          <Typography component="legend" style={{ marginBottom: 5 }}>
            Rating{" "}
          </Typography>
          <div style={{ display: "flex" }}>
            <Rating
              name="read-only"
              value={parseFloat(data.vote_average)}
              max={10}
              precision={0.5}
              readOnly
              style={{ marginBottom: 10 }}
            />
            <Typography className={classes.rating}>
              {data.vote_average}
            </Typography>
          </div>
          <Chips data={data.genre_ids} />
          <Typography className={classes.title} variant="h2" component="h2">
            {data.title}{" "}
            {data.title !== data.original_title && `(${data.original_title})`}
          </Typography>
          <Typography
            className={classes.overview}
            variant="body2"
            component="p"
          >
            {data.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{ color: "white" }} onClick={goToDetails}>
            More Details
          </Button>
          <Button
            size="small"
            style={{ color: "white" }}
            onClick={handleClickOpen}
          >
            Trailer
          </Button>
        </CardActions>
      </Card>
      <VideoPlayer open={open} onClose={handleClickOpen} data={data.id} />
    </>
  );
};

export default Cards;
