import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Element} from "react-scroll";
import Link from "next/link";
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
    marginBottom: "70px",
  },
  PrelovedHeader: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    [theme.breakpoints.down(600)]: {
      fontSize: "36px",
    },
  },
  preloved: {
    [theme.breakpoints.down(600)]: {
      fontSize: "36px !important",
    },
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
    width: "200px",
    bottom: "50%",

    left: "20px",
    position: "absolute",
  },
  cart2: {
    height: "35px",
    width: "250px",
    bottom: "50%",
    right: "2%",
    position: "absolute",
    [theme.breakpoints.down(600)]: {
      top: "10%",
      right: "25%",
    },
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
    position:"relative",
    border: "none",
    zIndex:1200,
    right: "50px",
    position: "initial",
    borderRadius: "40px",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
      background: theme.palette.secondary.selected,
    },
  },
  buttonshoptbecome: {
    background: theme.palette.secondary.selected,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "180px",
    height: "35px",
    border: "none",
    
    right: "50px",
    position: "initial",
    borderRadius: "40px",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
      background: theme.palette.secondary.selected,
    },
  },
  buttonshopt: {
    fontSize: "22px",
    color: "#000000",
    fontWeight: 900,
    fontStyle: "Black",
    lineHeight: "26px",
    cursor: "pointer",
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
      width: "90vw",
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
  console.log("all props....", props.nodes);

  var res = props?.nodes?.reduce((acc, item, index) => {
    acc[`page${index}`] = item;
    return acc;
  }, {});

  const clickHandler = (id) => {
    router.push("/en/categories/" + id);
  };
  // console.log(res, "sssss");

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={6} sm={12} lg={6} className={classes.carts}>
          <img src={res?.page1.heroMediaUrl} className={classes.imagess} />
          <div className={classes.cart}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page1.displayTitle}
            </Typography>
            <Button className={classes.buttonshop} onClick={() => clickHandler(res?.page1._id)}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6} className={classes.carts}>
          <img src={res?.page5.heroMediaUrl} className={classes.imagess} />
          <Element name="target-element"></Element>
          <div className={classes.cart}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page5.displayTitle}
            </Typography>
            <Button className={classes.buttonshop} onClick={() => clickHandler(res?.page5._id)}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </Button>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow4() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={5} sm={12} lg={5} className={classes.carts}>
          <img src={res?.page6.heroMediaUrl} className={classes.imagess} />

          <div className={classes.cart2}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page6.displayTitle}
            </Typography>
            <a href="https://play.google.com/store/apps/details?id=com.bizb_store&hl=en&gl=US&pli=1" target="_blank">
              <Button className={classes.buttonshop}>
                <h4 className={classes.buttonshopt}>Sell Now</h4>
              </Button>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={7} sm={12} lg={7} className={classes.carts}>
          <img src={res?.page2.heroMediaUrl} className={classes.imagess} />

          <div className={classes.cart2}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page2.displayTitle}
            </Typography>
            <div className={classes.buttonshop} onClick={() => clickHandler(res?.page2._id)}>
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
            <Button className={classes.buttonshop} onClick={() => clickHandler(res?.page3._id)}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6} className={classes.carts}>
          <img src={res?.page0.heroMediaUrl} className={classes.imagess} />

          <div className={classes.cart}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              {res?.page0.displayTitle}
            </Typography>
            <Button className={classes.buttonshop} onClick={() => clickHandler(res?.page0._id)}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </Button>
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
            <Button className={classes.buttonshop} onClick={() => clickHandler(res?.page4._id)}>
              {" "}
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </Button>
          </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <>
      <Container className={classes.PrelovedHeader}>
        <Typography className={classes.preloved} style={{ fontFamily: "Ostrich Sans Black" }} variant="h1">
          Share Your
        </Typography>
        <Container className={classes.PrelovedHeader2}>
          <Typography
            className={classes.preloved}
            style={{ fontFamily: "Ostrich Sans Black", marginRight: "10px" }}
            variant="h2"
          >
            PRE-LOVED
          </Typography>
          <Typography className={classes.preloved} style={{ fontFamily: "Ostrich Sans Black" }} variant="h1">
            Fashion
          </Typography>
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
            <Typography style={{ marginLeft: "5px" }} variant="h5" className={classes.mobileviewfixedText}>
              {" "}
              Home{" "}
            </Typography>
          </div>
          <div className={classes.mobileviewfixed}>
            {" "}
            <img src="/app-section/sell-icn.svg" />
            <Typography style={{ marginLeft: "5px" }} variant="h5" className={classes.mobileviewfixedText}>
              {" "}
              Sell
            </Typography>
          </div>
          <div className={classes.mobileviewfixed}>
            {" "}
            <img src="/app-section/explore.svg" />
            <Typography style={{ marginLeft: "5px" }} variant="h5" className={classes.mobileviewfixedText}>
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
