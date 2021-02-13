/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GET } from "../../service/api";
import { Typography, AppBar, Toolbar, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./Style";

import Cards from "../../components/Cards/Cards";
import Swiper from "../../components/Swiper/Swiper";
import Footer from "../../components/Footer/Footer";

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
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const props = !loading && {
    link:
      data[`${collection[random.collection].key}`].results[random.pages]
        .backdrop_path,
  };
  const classes = useStyles(props);

  const getAlllist = async (keyword) => {
    // build promise
    const promise = keyword.map(async (itm) => {
      const res = await GET(`/movie/${itm.key}`);
      res.data.label = itm.key;
      return res.data;
    });
    await Promise.all(promise)
      .then((values) => {
        let movie = {};
        values.map((itm) => (movie[itm.label] = itm));
        return movie;
      })
      .then((movie) => setData(movie));
    setLoading(false);
  };

  useEffect(() => {
    getAlllist(collection);
  }, []);

  if (loading) return <></>;

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" elevation={0} color={"transparent"}>
          <Toolbar>
            <div className={classes.title}>
              <div style={{ display: "flex" }}>
                <img
                  className={"posterimg"}
                  src="/logo.png"
                  alt="logo"
                  width={300}
                />
                {/* <h1>test</h1> */}
              </div>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Cards
          data={
            data[`${collection[random.collection].key}`].results[random.pages]
          }
        />
        {collection.map((itm) => (
          <div className={classes.box}>
            <Typography
              className={classes.category}
              variant="h6"
              component="h1"
            >
              {itm.label}
            </Typography>
            <Swiper data={data[`${itm.key}`].results} />
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
