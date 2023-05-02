import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProgressiveImage from "components/ProgressiveImage";
import { makeStyles } from "@material-ui/core/styles";
const date = new Date();


const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    padding: "75px",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  cardaction: {
    height: 312,
    width: 312,
  },
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gridroot: {
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    position: "relative",
    justifyContent: "space-between",
  },
  typography: {
    background: "#333333",
    opacity: "15%",
    height: "8px",
    width: "180px",
  },
  text: {
    position: "absolute",
    bottom: 60,
  },
  header: {
    height: "50px",
    position: "relative",
  },
  headermain: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    width: "312px",
    maxHeight: "450px",
    objectFit: "cover",
    borderRadius: "10px",
    cursor: "pointer",
  },
  size: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(1),
  },
  cartimage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  carttitle: {
    display: "flex",
    marginLeft: theme.spacing(1),
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  price: {
    marginLeft: "20px",
    fontWeight: "700",
    fontSize: "20px",
  },
  rootimg: {
    position: "relative",
    display: "inline-grid",
    width: "312px",

    maxWidth: "312px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  cartbackground: {
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
    borderRadius: "0px 0px 16px 16px",
    alignItems: "center",
    justifyContent: "initial",
    height: "75px",
    width: "100%",
    bottom: "20%",
    display: "inline-grid",
    width: "100%",
    marginTop: " -75px",
    padding: "13px 20px",
  },
  cart: {
    height: "35px",
    width: "84px",
    borderRadius: "40px",
    background: "#FDC114",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "none",
    zIndex: 1200,
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
      background: "#FDC114",
    },
  },
  explore: {
    position: "absolute",
    top: "6px",
    right: "10px",
    color: "#FDC114",
    zIndex: 900,
  },
  maintitle: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "312px",
    flexDirection: "column",
  },
  spanofnextword: {
    color: "#FDC114",
  },
  toast: {
    background: "yellow",
    color: "black",
  },
  pricing: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));


const Footer = () =>{
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
              {" "}
              <div style={{ color: "#FDC114", marginTop: "80px", cursor: "pointer" }}>Home</div>
            </a>
            <a href="/en/categories/cmVhY3Rpb24vdGFnOnBldGQydko2NmV3RWdjeWZ0">
              <div style={{ marginTop: "25px", cursor: "pointer", color: "white" }}>Explore</div>
            </a>
            <a target="_blank" href="https://bizb.store/how-to-sell/">
              <div style={{ marginTop: "25px", cursor: "pointer", color: "white" }}>How to Sell</div>
            </a>
            <a
              target="_blank"
              href="https://bizb.store/making-sustainability-stylish-breaking-cliches-about-buying-second-hand-apparel/"
            >
              {" "}
              <div style={{ marginTop: "25px", cursor: "pointer", color: "white" }}> Our Blogs</div>{" "}
            </a>
            <a href="/en/contactus">
              <div style={{ marginTop: "25px", cursor: "pointer", color: "white" }}>Contact Us</div>
            </a>
            <a target="_blank" href="https://bizb.store/about-us/">
              <div style={{ marginTop: "25px", marginBottom: "107px", cursor: "pointer", color: "white" }}>
                About Us
              </div>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div style={{ fontWeight: "500", fontSize: "15px", textAlign: "center" }}>
            <div style={{ marginTop: "80px" }}>FEEL FREE TO CONTACT US, ANYTIME, ANYWHERE</div>
            <div style={{ marginTop: "20px" }}>
              <span>
                <img src="/images/emailIcon.svg" />
              </span>
              <span style={{ marginLeft: "10px" }}> Hello@bizb.store </span>
              <span style={{ marginLeft: "20px" }}>
                <img src="/images/phoneIcon.svg" />
              </span>
              <span style={{ marginLeft: "10px" }}> +92 312 5253680</span>
            </div>
            <div
              style={{
                marginTop: "50px",
                textAlign: "center",
                marginLeft: "10vh",
                fontWeight: "500",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              DOWNLOAD OUR APP
              <div style={{ marginTop: "25px" }}>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.bizb_store&_ga=2.160110778.68931320.1680106906-903234502.1680106905&_gac=1.22526281.1680107274.Cj0KCQjww4-hBhCtARIsAC9gR3YB_dxCJOL67e-AEyIUm1512spa5Mb19b93QqlTa7QEaeGeSNwY5IEaAi41EALw_wcB&pli=1"
                >
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ paddingBottom: "20px", fontWeight: "500", fontSize: "16px", marginLeft: "91px" }}>
          Copyright {date.getFullYear()} All rights reserved.
        </span>
        <a href="https://www.codistan.org/" target="_blank">
          <span
            style={{ paddingBottom: "20px", fontWeight: "500", fontSize: "20px", marginRight: "90px", color: "white" }}
          >
            POWERED BY <span style={{ color: "#FDC114" }}>CODISTAN</span>
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer
