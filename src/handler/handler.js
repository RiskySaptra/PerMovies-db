import { GET } from "./service/api";

const getMovieCollection = async (keyword) => {
  const promise = keyword.map(async (itm) => {
    const res = await GET(`/movie/${itm.key}`);
    res.data.label = itm.key;
    return res.data;
  });
  return Promise.all(promise).then((values) => {
    let movie = {};
    values.map((itm) => (movie[itm.label] = itm));
    return movie;
  });
};

const getVideo = async (videoId) => {
  const res = await GET(`/movie/${videoId}/videos`);
  return res;
};

export { getMovieCollection, getVideo };
