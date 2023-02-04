import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Box from "@material-ui/core/Box";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
    borderRadius: "40px",
    background: "#FDC114",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: "50%",
    left: "10px",
    position: "absolute",
  },
  cart2: {
    height: "35px",
    width: "84px",
    borderRadius: "40px",
    background: "#FDC114",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: "50%",
    right: "10px",
    position: "absolute",
  },
  imagec:{
    width:"100%"
  },
  mobileicon:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }
}));
const itemData = [
  {
    image: "/preloved/preloved1.svg",
    id: 1,
    title: "Causal",
  },

  {
    image: "/preloved/preloved2.svg",
    title: "Causal",
    id: 2,
  },


  {
    image: "/preloved/preloved3.svg",
    id: 3,
    title: "Causal",
  },
  {
    image: "/preloved/preloved5.svg",
    id: 5,
    title: "Juniors",
  },
  {
    image: "/preloved/preloved6.svg",
    id: 6,
    title: "Juniors",
  },
  {
    image: "/preloved/preloved4.svg",
    id: 4,
    title: "Party Wear",
  },

 
  {
    image: "/preloved/preloved7.svg",
    id: 7,
    title: "Causal",
  },
];

const Preloved = () => {
  const classes = useStyles();
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
      </div>
      <Box className={classes.mobileicon} display={{ xs: 'none', lg: 'none', xl: 'block', md:"block"}}>
      <img src="/preloved/preloved-mobile.svg"  />
        </Box>
   
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
        <Masonry>
          {itemData.map((item) => (
            <>
              <div className={classes.carts}>
                <img src={item.image} className={classes.imagec} />

                <div className={item.title === "Causal" ? classes.cart : classes.cart2}>
                  <img component="img" src="/icons/cart.svg" />
                  <Typography gutterBottom variant="h5" component="h2">
                    + Cart{" "}
                  </Typography>
                </div>
              </div>
            </>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Preloved;
