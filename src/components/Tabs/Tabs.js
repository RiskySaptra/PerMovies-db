import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparant",
  },
  title: {
    maxWidth: 900,
    fontSize: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: 35,
    },
  },
  overview: {
    maxWidth: 600,
    marginBottom: 12,
    [theme.breakpoints.up("sm")]: {
      fontSize: 20,
    },
  },
}));

const SimpleTabs = ({ overview, media, fandom }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (overview === null) return <></>;

  return (
    <div className={classes.root}>
      <h1>Not finished yet please wait....</h1>
      <AppBar
        position="static"
        color={"transparent"}
        style={{ color: "white" }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Media" {...a11yProps(1)} />
          <Tab label="Fandom" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid
          container
          direction="robirds of preyw"
          justify="center"
          backgroundColor={"white"}
          spacing={6}
          style={{ width: "100%", margin: 0 }}
          wrap={"nowrap"}
        >
          <Grid item>
            <img
              src={`${process.env.REACT_APP_BASE_IMAGEURL}original${overview.data.poster_path}`}
              alt={overview.data.title}
              width={300}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.title} variant="h2" component="h2">
              {overview.data.title}
              {overview.data.title !== overview.data.original_title &&
                `(${overview.data.original_title})`}
            </Typography>
            <Typography
              className={classes.overview}
              variant="body2"
              component="p"
            >
              {overview.data.overview}
            </Typography>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default SimpleTabs;
