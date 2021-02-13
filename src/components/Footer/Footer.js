import React from "react";
import { Paper, Typography, Link } from "@material-ui/core";

const Footer = () => {
  return (
    <div style={{ display: "flex" }}>
      <Paper
        style={{
          display: "flex",
          flexGrow: "1",
          backgroundColor: "rgba(60, 60, 60, 0.5",
          color: "white",
        }}
        square
        elevation={0}
      >
        <Typography style={{ padding: 30 }}>
          Created by :
          <Link href="https://www.linkedin.com/in/m-rizky-saputras/">
            {" "}
            Risky Saputra
          </Link>
        </Typography>
        <Typography style={{ padding: 30 }}>
          Resume :{" "}
          <Link href="https://drive.google.com/file/d/1MyFojCbbR9cK4Tx_Js9CW6C0rFkykXZN/view?usp=sharing">
            2021.pdf
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Footer;
