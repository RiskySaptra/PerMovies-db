import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    color: "white",
    backgroundImage: (props) =>
      `linear-gradient(rgba(60, 60, 60, 0.5), rgba(0, 0, 0, 2)), url("${process.env.REACT_APP_BASE_IMAGEURL}original${props.link}")`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  category: {
    padding: 30,
  },
  box: {
    marginBottom: 20,
    padding: 20,
  },
}));

export default useStyles;
