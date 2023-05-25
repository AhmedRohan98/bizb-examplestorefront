import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ProgressiveImage from "components/ProgressiveImage";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const date = new Date();


const useStyles = makeStyles((theme) => ({
  footerthirdsec: {
    display: "flex",

    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  explore: {
    position: "absolute",
    top: "6px",
    right: "10px",
    color: "#FDC114",
    zIndex: 900,
  },
}));


const Footer = () =>{
    const classes = useStyles();
  return (
    <footer style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <div style={{ display: "flex", marginTop: "70px", marginLeft: "100px", textAlign: "center" }}>
            <span>
              <a href="/">
                <img src="/images/logoLight.svg" />
              </a>
            </span>
          </div>
          <div style={{ fontSize: "20px", marginLeft: "90px", fontWeight: "500" }}>IN. FB. TW. LI</div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ fontWeight: "700", fontSize: "26px", textAlign: "center" }}>
            <a href="/">
              <div style={{ color: "#FDC114", marginTop: "80px", cursor: "pointer" }}>Home</div>
            </a>

            <a href="/en/categories/cmVhY3Rpb24vdGFnOnBldGQydko2NmV3RWdjeWZ0" style={{position:"relative"}}>
              <div style={{ marginTop: "25px", cursor: "pointer", color: "white",position:"relative" }}>Explore</div>
              {/* <img src="/images/footerbackground.webp" className={classes.explore}></img> */}
            </a>
            <a target="_blank" href="https://bizb.store/how-to-sell/">
              <div style={{ marginTop: "25px", cursor: "pointer", color: "white" }}>How to Sell</div>
            </a>
            <a
              target="_blank"
              href="https://bizb.store/making-sustainability-stylish-breaking-cliches-about-buying-second-hand-apparel/"
            >
              <div style={{ marginTop: "25px", cursor: "pointer", color: "white" }}> Our Blogs</div>{" "}
            </a>
            <a href="/en/contactus">
              <div style={{ marginTop: "25px", cursor: "pointer", color: "white" }}>Contact Us</div>
            </a>
            <a target="_blank" href="https://bizb.store/about-us/">
              <div style={{ marginTop: "25px", marginBottom: "41px", cursor: "pointer", color: "white" }}>About Us</div>
            </a>
          </div>
        </Grid>
        <Grid sm={0} md={0} lg={1}></Grid>
        <Grid item xs={12} md={5} lg={4}>
          <div className={classes.footerthirdsec}>
            <div style={{ marginTop: "80px" }}></div>
            <Typography variant="typography" style={{ fontWeight: 500 }}>
              FEEL FREE TO CONTACT US, ANYTIME, ANYWHERE
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <a href="mailto:Hello@bizb.store" target="_blank">
                <span>
                  <img src="/images/emailIcon.svg" />
                </span>
                <span style={{ marginLeft: "10px", color: "white" }}> Hello@bizb.store </span>
              </a>
              <a href="tel:+92 312 5253680" target="_blank">
                <span style={{ marginLeft: "20px" }}>
                  <img src="/images/phoneIcon.svg" />
                </span>
                <span style={{ marginLeft: "10px", color: "white" }}> +92 312 5253680</span>
              </a>
            </div>
            <div
              style={{
                marginTop: "50px",

                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              DOWNLOAD OUR APP
              <div style={{ marginTop: "25px" }}>
                <a target="_blank" href="https://apps.apple.com/pk/app/bizb/id1571110423">
                  <span>
                    <img src="/images/appStoreIcon.svg" />
                  </span>
                </a>
                <span style={{ marginLeft: "55px" }}>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.bizb_store&_ga=2.74994514.1337725914.1682938429-218131156.1681233136&_gac=1.86957418.1682759140.Cj0KCQjwgLOiBhC7ARIsAIeetVDrNuIWkimFzY2OMGgR1kIA3Jtu4RDwNAlEFpyiranTB0hEjTuqcZQaAjrAEALw_wcB"
                  >
                    <img src="/images/googlePlayIcon.svg" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #918d8ce6",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "500", fontSize: "16px", marginLeft: "91px" }}>
          Copyright {date.getFullYear()}. All rights reserved.
        </span>
        <a href="https://www.codistan.org/" target="_blank">
          <span
            style={{ paddingBottom: "10px", fontWeight: "500", fontSize: "20px", marginRight: "90px", color: "white" }}
          >
            POWERED BY <span style={{ color: "#FDC114" }}>CODISTAN</span>
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer
