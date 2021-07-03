import axios from "axios";

const GET = async (url, query) => {
  const res = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${url}${
      process.env.REACT_APP_API_KEY
    }${"&language=en"}${query || ""}`
  );
  return res;
};

// wont work yet
const POST = async (url) => {
  const res = await axios.post(
    "https://api.themoviedb.org/3/movie/550?api_key="
  );
  return res;
};

export { GET, POST };
