import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "context/AuthContext";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
const Appsec = () => {

console.l
  const useStyles = makeStyles((theme) => ({
    
    root: {
      height:"auto",
      width:"100%",
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      padding:"15px",
      justifyContent: "center",
     
    },
   img:{
width :"100%",
display:"flex",
flexDirection: "column",
alignItems: "cente r",
    },
 
    maingrid:{
      width :"100%",
      display:"flex",
    
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
          },
         grid1:{
            
              display:"flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              
                  },
                  title:{
                      width :"60%",
                    
                 
                          },
                          image:{
                            display:"flex",
                            alignItems: "flex-start",
                            padding:"10px",
                            marginTop:"10px",
                            justifyContent: "flex-start",
                          },
                          imae:{
                            display:"flex",
                            width :"100%",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                         
                          }
}))


  const classes = useStyles();
  return (
    <div className={classes.root}>
     <img src="/app-section/appsec1.svg"  className={classes.img}/>
     
            <Grid container className={classes.maingrid} lg={12} sm={12} md={12} >
              <Grid  item  className={classes.grid1} lg={6} xs={6} sm={6} md={6}>
             
                <Typography  variant="h3" className={classes.title} >
                Revamp Your Wardrobe 
Using Our App
                </Typography>
                <img src="/app-section/appsec2.svg"  className={classes.image}/>
                <img src="/app-section/appsec3.svg"  className={classes.image}/>
              </Grid>
              <Grid item lg={6} sm={6} md={6} xs={6} className={classes.grid1}>
             
              <img src="/app-section/appsec4.svg"  className={classes.imae}/>
               
              </Grid>
            </Grid>
            
    </div>
  );
};

export default Appsec;