import React, { useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import { Context } from "../../context/StoreProvider";
import { getMovieCollection } from "../../handler/handler";

import Cards from "../../components/Cards/Cards";
import Swiper from "../../components/Swiper/Swiper";
import Footer from "../../components/Footer/Footer";

import useStyles from "./Style";

const random = {
  collection: Math.floor(Math.random() * 4),
  pages: Math.floor(Math.random() * 20),
};

const collection = [
  { label: "Popular", key: "popular" },
  { label: "Upcoming", key: "upcoming" },
  { label: "Now Playing", key: "now_playing" },
  { label: "Top Rated", key: "top_rated" },
];

const Home = () => {
  const [state, dispatch] = useContext(Context);

  const props = !state.loading && {
    link:
      state.movieCollection[`${collection[random.collection].key}`].results[
        random.pages
      ].backdrop_path,
  };
  const classes = useStyles(props);
  useEffect(() => {
    const getAll = async (param) => {
      const res = await getMovieCollection(param);
      dispatch({
        type: "SET_DATA",
        payload: { data: res, loading: false },
      });
    };

    getAll(collection);
  }, [dispatch]);

  if (state.loading) return <></>;

  return (
    <div>
      <div className={classes.root}>
        <Cards
          data={
            state.movieCollection[`${collection[random.collection].key}`]
              .results[random.pages]
          }
        />
        {collection.map((itm, idx) => (
          <div className={classes.box} key={idx}>
            <Typography
              className={classes.category}
              variant="h6"
              component="h3"
            >
              {itm.label}
            </Typography>
            <Swiper data={state.movieCollection[`${itm.key}`].results} />
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
