import React, { useEffect } from "react";
import useStyles from "./Style";
import { LANGUAGES, REGIONS } from "../../constants";

import Autocomplete from "@material-ui/lab/Autocomplete";

import { Container, TextField } from "@material-ui/core";

const Settings = () => {
  const classes = useStyles();

  useEffect(() => {
    // const getRes = async (param) => {
    //   const res = await searchMovies(param);
    //   setResults(res);
    // };
    // getRes(id);
  }, []);

  // if (!results) return <>Loading...</>;
  return (
    <div className={classes.root}>
      <Container>
        <h1>Settings</h1>
        <Autocomplete
          options={LANGUAGES}
          getOptionLabel={(option) => option.english_name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Language"
              variant="outlined"
              margin="dense"
            />
          )}
        />
        <Autocomplete
          options={REGIONS}
          getOptionLabel={(option) => option.native_name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Region"
              variant="outlined"
              margin="dense"
            />
          )}
        />
      </Container>
    </div>
  );
};
export default Settings;
