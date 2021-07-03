import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 180,
    },
  },
}));

export default useStyles;
