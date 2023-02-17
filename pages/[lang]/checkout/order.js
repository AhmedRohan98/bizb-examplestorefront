import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Button, Box,  Typography} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles((theme) => ({
  orderThankYou: {
 
    display:"flex",
    marginTop:theme.spacing(25),
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "column",
  },
  img: {
    marginBottom: theme.spacing(3)
  },
  mainheading:{
width:"334px",
height:"58px"
  },
  orderThankYoupara:{
    fontSize: "24px",
    color: "#333333",
    fontWeight: 500,
marginTop:theme.spacing(2),
    fontFamily: "Lato",
    fontStyle: "normal",
    textAlign: "center",
    lineHeight: "29px",
  },
   orderThankYouconnect:{
    marginTop:theme.spacing(25),
   },
   connect:{
    fontSize: "34px",
    color: "#333333",
    fontWeight: 700,
marginTop:theme.spacing(2),
    fontFamily: "Lato",
    fontStyle: "normal",
    textAlign: "center",
    lineHeight: "41px",
   },
   socialmedia:{
     
    display:"flex",
    marginTop:theme.spacing(2),
    justifyContent:"space-between",
    width:"260px",
    alignItems:"center",
    flexDirection: "row",
    marginBottom:theme.spacing(5)
   },
   look: {
    height: "197px",
    width: "409px",
marginTop:theme.spacing(2),
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
   borderRadious:"0px",
   backgroundColor:"#F7F7F9",
    
  },
  imagemobile:{
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(2),
  },
  register:{
    width:"263px",
    height:"48px",
    borderRadius:"40px",
    border:"none",
    marginBottom:theme.spacing(10),
    display:"flex",
    marginTop:theme.spacing(4),
    justifyContent:"center",
    alignItems:"center",
    background:theme.palette.secondary.selected,
    "&:hover": {
  
      background:theme.palette.secondary.selected,
  }},
reviews:{
  display:"flex",
  marginTop:theme.spacing(2),
  justifyContent:"space-between",


  flexDirection: "row",

}
}));

const CheckoutComplete =() =>{
 

  const classes = useStyles();

  
    return (
    <>
    <div className={classes.orderThankYou}>
      <img src="/cart/thankyou.svg"  className={classes.img} alt="thanyou"></img>
      <Typography  variant="h3" >Your order is confirmed</Typography>
      <div className={classes.mainheading}>
        <Typography variant="h4" className={classes.orderThankYoupara}> Thank You for making fashion sustainable with us.</Typography>
      </div>
      <div className={classes.orderThankYouconnect}>
         <Typography className={classes.connect}>
         Connect With Our Community
         </Typography>
      </div>
<div className={classes.socialmedia}>
<img src="/cart/facebook.svg"  className={classes.imges} alt="thanyou"></img>
<img src="/cart/insta.svg"  className={classes.imges} alt="thanyou"></img>
<img src="/cart/twitter.svg"  className={classes.imges} alt="thanyou"></img>
</div>
<Typography className={classes.connect}>
       Facebook Reviews
         </Typography>

         <Box className={classes.look}>
          <div className={classes.reviews}>
            <div>
              <img src="/cart/avatar.svg" />
            </div>
            <div>
            <Typography variant="h4" className={classes.blogtext}>Get the perfect Look</Typography>
            <Typography variant="h6" className={classes.blogtext} >Constantly hustling day in day out and still putting a smile on your face is what makes you a Queen. But even the queen needs some… <span className={classes.blogtextr}>Read More</span></Typography>
            </div>
          </div>
  

  

  <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
      <Rating name="size-large" defaultValue={2} size="large" />
          </Box>
          <Typography className={classes.connect}>
          Make Your Wardrobe Smart Using Our App
         </Typography>
         <img src="/cart/mobile.svg"  className={classes.imagemobile} alt="thanyou"></img>
         <Button className={classes.register} InputProps={{ disableUnderline: true }} variant="h6"    role="button"
        type="submit"
     href="/"
       >Back To Home</Button>
      </div>
    </>
    )
      
}

export default CheckoutComplete
