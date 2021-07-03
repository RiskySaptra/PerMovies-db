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

// tidy shit
const getVideo = async (videoId) => GET(`/movie/${videoId}/videos`);

const getMovieDetail = (videoId) => GET(`/movie/${videoId}`);

const searchMovies = async (query) => GET(`/search/movie`, `&query=${query}`);

export { getMovieCollection, getVideo, searchMovies, getMovieDetail };
