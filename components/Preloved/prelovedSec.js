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
   
    bottom: "50%",
    left: "10px",
    position: "absolute",
  },
  cart2: {
    height: "35px",
    width: "84px",
  
   
    bottom: "50%",
    right: "70px",
    position: "absolute",
  },
  imagec:{
    width:"100%"
  },
  mobileicon:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:theme.spacing(3),
    [theme.breakpoints.up(900)]: {
   display:"none"
    }
    
  },
  text:{
    color :theme.palette.primary.contrastText,
    textTransform: "uppercase",
  },
  buttonshop:{
    background:theme.palette.secondary.selected,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"150px",
    height:"35px",
   right:"50px",
    borderRadius:"40px",
  
 
  },
  buttonshopt:{
 
    fontSize: "22px",
    color:"#000000",
  fontWeight:900,
    fontStyle: "Black",
    lineHeight:"26px",

      fontFamily: "Ostrich Sans",
  },
  mobileview:{
    height:"60px",
    width:"350px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddig:"8px",
    alignItems:"center",
    background:theme.palette.reaction.black80,
    borderRadius:"90px",
    zIndex: 9999,
   bottom:"10px",
    position:"fixed",
    display:"none",
    [theme.breakpoints.down(700)]: {
      display:"block",
      height:"60px",
      width:"350px",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      paddig:"8px",
      alignItems:"center",
      background:theme.palette.reaction.black80,
      borderRadius:"90px",
      zIndex: 9999,
     bottom:"10px",
      position:"fixed",
         
             },
  },
  mobileviewfixed:{
    display:"flex",
    flexDirection: "row",
    alignItems: "space-evenly",
    justifyContent: "sapce-between",
  },
  mobileviewfixedText:{
    color:"#ffffff"
  }
}));
const itemData = [
  {
    image: "/preloved/preloved1.svg",
    id: 1,
    title: "Causal",
    name:"CAUSAL"
  },

  {
    image: "/preloved/preloved2.svg",
    title: "Causal",
    id: 2,
    name:"WESTREN"
  },


  {
    image: "/preloved/preloved3.svg",
    id: 3,
    title: "Juniors",
    name:"PARTY"
  },
  {
    image: "/preloved/preloved5.svg",
    id: 5,
    title: "Causal",
    name:"SHOES",
  },
  {
    image: "/preloved/preloved6.svg",
    id: 6,
    title: "Causal",
    name:"Assesories"
  },
  {
    image: "/preloved/preloved4.svg",
    id: 4,
    title: "Juniors",
    name:"Bridal"
  },

 
  {
    image: "/preloved/preloved7.svg",
    id: 7,
    title: "Causal",
 
    name:"JUNIORS"
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
        <div className={classes.mobileview}>
          <div className={classes.mobileviewfixed}>
            <img src="/app-section/home.svg" />
            <Typography variant="h5" className={classes.mobileviewfixedText}> Home </Typography>
          </div>
          <div className={classes.mobileviewfixed} >     <img src="/app-section/search.svg"  />
          <Typography variant="h5" className={classes.mobileviewfixedText}> Sell</Typography>
          </div>
          <div className={classes.mobileviewfixed}>    <img src="/app-section/explore.svg"  />
          <Typography variant="h5" className={classes.mobileviewfixedText}> Explore</Typography>
          </div>
        </div>
      </div>
     
      <Container className={classes.mobileicon}  display={{ lg: 'block', xl: 'none' ,sm:"none" }}>
      <img src="/preloved/preloved-mobile.svg"  />
        </Container>
   
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
        <Masonry>
          {itemData.map((item) => (
            <>
              <div className={classes.carts}>
                <img src={item.image} className={classes.imagec} />

                <div className={item.title === "Causal" ? classes.cart : classes.cart2}>
            
                  <Typography gutterBottom variant="h3"  className={classes.text}>
                   {item.name}
                  </Typography>
                  <div className={classes.buttonshop}>  <h4  className={classes.buttonshopt}>SHOP NOW</h4></div>
                 
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
