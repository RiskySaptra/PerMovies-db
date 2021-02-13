import axios from "axios";

const GET = async (url) => {
  const res = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${url}${process.env.REACT_APP_API_KEY}`
  );
  return res;
};

// wont work yet
const POST = async (url) => {
  const res = await axios.post(
    "https://api.themoviedb.org/3/movie/550?api_key=7243b4a7f401d3a10983f0b07fd7beef"
  );
  return res;
};

export { GET, POST };
