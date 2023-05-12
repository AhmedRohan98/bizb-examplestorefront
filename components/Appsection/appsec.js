import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "context/AuthContext";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
const Appsec = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "auto",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "15px",
      justifyContent: "center",
    },
    img: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    maingrid: {
      width: "100%",
      display: "flex",

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    grid1: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      width: "407px",
      height: "86px",
      display: "none",
      textAlign: "start",
      [theme.breakpoints.down(700)]: {
        display: "block",
        width: "95vw",
      },
    },
    maindivqrcodeappsex: {
      display: "flex",

      justifyContent: "space-between",
    },
    maindivapp: {
      display: "flex",

      flexDirection: "column",
    },
    maindivqrcode: {
      display: "flex",
marginLeft:theme.spacing(3)
    },
    imagetext: {
      height: "auto",
      width: "auto",
      marginTop: theme.spacing(2),

      [theme.breakpoints.up(700)]: {
        width: "auto",
        height: "auto",
        marginTop: theme.spacing(4),
      },
    },
    image: {
      height: "52px",
      width: "170px",
      marginTop: theme.spacing(2),

      [theme.breakpoints.up(700)]: {
        width: "300px",
        height: "auto",
        marginTop: theme.spacing(4),
      },
    },
    imae: {
      height: "746px",
      marginTop: theme.spacing(4),
      width: "100%",
    },
    [theme.breakpoints.up(700)]: {
      height: "440px",
      width: "320px",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src="/app-section/appsec1.svg" alt="Using our app" className={classes.img} />
      <div className={classes.title}>
        <Typography variant="h3">Revamp Your Wardrobe Using Our App</Typography>
      </div>

      <Grid
        container
        className={classes.maingrid}
        lg={12}
        sm={12}
        md={12}
        align="center"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.grid1} lg={6} xs={6} sm={6} md={6}>
          <img src="/app-section/text.webp" className={classes.imagetext} />
          <img src="/app-section/Line-1.webp" className={classes.imagetext} />
          <div className={classes.maindivqrcodeappsex}>
            <div className={classes.maindivapp}>
              <a href="https://play.google.com/store/apps/details?id=com.bizb_store&hl=en&gl=US&pli=1" target="_blank">
                <img src="/app-section/googleplay.webp" className={classes.image} />
              </a>
              <a href="https://apps.apple.com/pk/app/bizb/id1571110423" target="_blank">
                <img src="/app-section/appleplay.webp" className={classes.image} />
              </a>
            </div>
            <div className={classes.maindivqrcode}>
              <img src="/app-section/qrcode.webp" className={classes.image} />
            </div>
          </div>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={6} className={classes.grid1}>
          <img src="/app-section/appsec.webp" className={classes.imae} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Appsec;
