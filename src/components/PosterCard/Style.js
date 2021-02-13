import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
    color: "white",
    [theme.breakpoints.up("md")]: {
      padding: 150,
    },
  },
  title: {
    padding: 3,
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      padding: 5,
    },
  },
  pos: {
    maxWidth: 450,
    marginBottom: 12,
  },
}));

export default useStyles;
