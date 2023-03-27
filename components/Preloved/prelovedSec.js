import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import Box from "@material-ui/core/Box";
import {  Element } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(6),
  },
  PrelovedHeader: {
    display: "flex",
    justifyContent: "center",

    flexDirection: "column",
    alignItems: "center",
  },
  PrelovedHeader2: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },

  titleBar: {
    background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " + "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  subtitle: {
    width: "543px",
    height: "87px",
    display: "flex",
    align: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitlet: {
    color: "#1F1F1F",

    fontFamily: "Lato",
    textAlign: "center",
  },
  carts: {
    position: "relative",
  },
  cart: {
    height: "35px",
    width: "84px",

    bottom: "50%",
    left: "20px",
    position: "absolute",
  },
  cart2: {
    height: "35px",
    width: "84px",

    bottom: "50%",
    right: "18%",
    position: "absolute",
  },
  imagec: {
    width: "100%",
  },
  mobileicon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
  },
  text: {
    color: theme.palette.primary.contrastText,
    textTransform: "uppercase",
    "&:hover": {
      color: "black",
    },
  },
  buttonshop: {
    background: theme.palette.secondary.selected,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "35px",
    right: "50px",
    borderRadius: "40px",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
    },
  },
  buttonshopt: {
    fontSize: "22px",
    color: "#000000",
    fontWeight: 900,
    fontStyle: "Black",
    lineHeight: "26px",

    fontFamily: "Ostrich Sans Black",
  },
  mobileview: {
    height: "60px",
    width: "350px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddig: "8px",
    alignItems: "center",
    background: theme.palette.reaction.black80,
    borderRadius: "90px",
    zIndex: 9999,
    bottom: "10px",
    position: "fixed",
    display: "none",
    [theme.breakpoints.down(700)]: {
      display: "block",
      height: "60px",
      width: "350px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddig: "8px",
      alignItems: "center",
      background: theme.palette.reaction.black80,
      borderRadius: "90px",
      zIndex: 9999,
      bottom: "10px",
      position: "fixed",
    },
  },
  mobileviewfixed: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-evenly",
    justifyContent: "sapce-between",
  },
  mobileviewfixedText: {
    color: "#ffffff",
  },
  imagess: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const Preloved = (props) => {
  const classes = useStyles();
  const router = useRouter();
  // console.log("all props....", props.nodes);

  var res = props?.nodes?.reduce((acc, item, index) => {
    acc[`page${index}`] = item;
    return acc;
  }, {});

  const clickHandler = (id) => {
    router.push("/en/categories/" + id);
  };
  console.log(res, "sssss");

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={6} sm={12} lg={6} className={classes.carts}>
          <img src="/preloved/preloved1.svg" className={classes.imagess} />

          <div className={classes.cart}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page1.displayTitle}
            </Typography>
            <div className={classes.buttonshop} onClick={() => clickHandler(res?.page0._id)}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6} className={classes.carts}>
          <img src={res?.page5.heroMediaUrl}  className={classes.imagess} />
          <Element name="target-element"></Element>
          <div className={classes.cart}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page5.displayTitle}
            </Typography>
            <div className={classes.buttonshop} onClick={() => clickHandler(res?.page0._id)}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow4() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={5} sm={12} lg={5} className={classes.carts}>
          <img src={res?.page2.heroMediaUrl} className={classes.imagess} />

          <div className={classes.cart2}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page2.displayTitle}
            </Typography>
            <div className={classes.buttonshop}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7} sm={12} lg={7} className={classes.carts}>
          <img src="/preloved/preloved4.svg" className={classes.imagess} />

          <div className={classes.cart2}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page2.displayTitle}
            </Typography>
            <div className={classes.buttonshop}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={6} sm={12} lg={6} className={classes.carts}>
          <img src={res?.page3.heroMediaUrl} className={classes.imagess} />

          <div className={classes.cart}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page3.displayTitle}
            </Typography>
            <div className={classes.buttonshop}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6} className={classes.carts}>
          <img src={res?.page0.heroMediaUrl} className={classes.imagess} />

          <div className={classes.cart}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page0.displayTitle}
            </Typography>
            <div className={classes.buttonshop}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={12} container className={classes.carts}>
          <img src={res?.page4.heroMediaUrl} className={classes.imagess} />

          <div className={classes.cart}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page4.displayTitle}
            </Typography>
            <div className={classes.buttonshop}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <>
      <Container className={classes.PrelovedHeader}>
        <Typography variant="h1">Share Your</Typography>
        <Container className={classes.PrelovedHeader2}>
          <Typography variant="h2">Pre-Loved</Typography>
          <Typography variant="h1">Fashion</Typography>
        </Container>
      </Container>
      <div className={classes.root2}>
        <Box className={classes.subtitle}>
          <Typography variant="h4" className={classes.subtitlet}>
            Now you can revamp your daily wear wardrobe every month while saving more than 50% from your monthly budget!
          </Typography>
        </Box>
        <div className={classes.mobileview}>
          <div className={classes.mobileviewfixed}>
            <img src="/app-section/home.svg" />
            <Typography variant="h5" className={classes.mobileviewfixedText}>
              {" "}
              Home{" "}
            </Typography>
          </div>
          <div className={classes.mobileviewfixed}>
            {" "}
            <img src="/app-section/search.svg" />
            <Typography variant="h5" className={classes.mobileviewfixedText}>
              {" "}
              Sell
            </Typography>
          </div>
          <div className={classes.mobileviewfixed}>
            {" "}
            <img src="/app-section/explore.svg" />
            <Typography variant="h5" className={classes.mobileviewfixedText}>
              {" "}
              Explore
            </Typography>
          </div>
        </div>
      </div>

      <Container className={classes.mobileicon} display={{ lg: "block", xl: "none", sm: "none" }}>
        <img src="/preloved/preloved-mobile.svg" />
      </Container>
      <div>
        <Grid container>
          <Grid container item xs={12} md={12} sm={12} lg={12}>
            <FormRow1 />
          </Grid>
          <Grid container item xs={12} md={8} sm={12} lg={8}>
            <FormRow4 />
            <FormRow3 />
          </Grid>
          <Grid container item xs={12} md={4} sm={12} lg={4}>
            <FormRow2 />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Preloved;
