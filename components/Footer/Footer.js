import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProgressiveImage from "components/ProgressiveImage";
const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
    justifyText: "center",
  },
  root: {
    flexGrow: 1,
  },
  section1: {
    display: "flex",
    justifyContent: "right",
  },
  rightText: {
    display: "flex",
    flexDirection: "column",
    fontSize: "20px",
  },
  footerText: {
    fontSize: "12px",
    display: "flex",
    justifyContent: "right",
  },
  spacing: {
    lineHeight: "40px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "10px",
    textDecoration: "underline",
    fontSize: "15px",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = ({ ...props }) => (
  // <footer className={props.classes.footer}>
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
          <div style={{ marginTop: "25px", cursor: "pointer" }}>Contact Us</div>
          <a target="_blank" href="https://bizb.store/about-us/">
            <div style={{ marginTop: "25px", marginBottom: "107px", cursor: "pointer", color: "white" }}>About Us</div>
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
        </div>
        <div style={{ marginTop: "50px", fontWeight: "500", fontSize: "18px" }}>
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
      </Grid>
    </Grid>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ paddingBottom: "20px", fontWeight: "500", fontSize: "16px", marginLeft: "91px" }}>
        Copyright {date.getFullYear()} All rights reserved.
      </span>
      <span style={{ paddingBottom: "20px", fontWeight: "500", fontSize: "20px", marginRight: "90px" }}>
        POWERED BY <span style={{ color: "#FDC114" }}>CODISTAN</span>
      </span>
    </div>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
