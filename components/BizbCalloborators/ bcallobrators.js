import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const BizbCalloborators = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.action.main,

      position: "relative",
      width: "100%",
    },
    buttonshop: {
      background: theme.palette.secondary.selected,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      borderRadius: "40px",
      width: "120px",
      height: "48px",
      // right: "50px",

      transition: "all 0.2s linear",
      "&:hover": {
        transform: "scale(1.08)",
        transition: "left 0.2s linear",
      },
      [theme.breakpoints.down(600)]: {
        width: "10px",
        height: "10px",
      },
    },
    buttonshop: {
      background: theme.palette.secondary.selected,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      borderRadius: "40px",
      width: "120px",
      height: "48px",
      right: "50px",

      transition: "all 0.2s linear",
      "&:hover": {
        transform: "scale(1.08)",
        transition: "left 0.2s linear",
      },
      [theme.breakpoints.down(600)]: {
        width: "60px",
        height: "15px",
      },
    },
    buttonshopt: {
      fontSize: "22px",
      fontFamily: "Ostrich Sans Black",
      color: "#000000",
      fontWeight: 900,
      fontStyle: "Black",
      lineHeight: "26px",
      background: "none",
      border: "none",
      [theme.breakpoints.down(600)]: {
        fontSize: "10px",
        lineHeight: "6px",


      },
    },

    image: {
      position: "relative",
      marginTop: "40px",
      width: "100%",
    },
    collobarotors: {
      width: "100%",
      position: "relative",
      marginBottom: "40px",
    },
    cart: {
      width: "2%",
      height: "6%",
      position: "absolute",
      left: "73%",
      // right: "10px",
      bottom: "8%",
      cursor: "pointer",
      display: "block",
      fontFamily: "Ostrich Sans Black",
      [theme.breakpoints.down(600)]: {
        left: "43%",

      },
    },
    cart1: {
      width: "10%",
      height: "6%",
      position: "absolute",
      right: "2%",
      bottom: "8%",
      cursor: "pointer",
      display: "block",
      fontFamily: "Ostrich Sans Black",
      [theme.breakpoints.down(600)]: {
        marginRight: "50px",

      },
      marginRight: "100px",
    },
    cart2: {
      width: "10%",
      height: "6%",
      position: "absolute",
      right: "18%",
      bottom: "8%",
      cursor: "pointer",
      display: "block",
      fontFamily: "Ostrich Sans Black",
      [theme.breakpoints.down(600)]: {
        right: "48%",

      },
      // marginLeft:"160px",
    },
    textclass: {
      height: "6%",
      position: "absolute",
      bottom: "28%",
      marginBottom:"10px",
      cursor: "pointer",
      display: "block",
      left: "20px",
      fontFamily: "Ostrich Sans Black",
      [theme.breakpoints.down(600)]: {
        height:"3%"
      },
    },
    textclass2: {
      height: "6%",
      position: "absolute",
      bottom: "23%",
      display: "block",
      marginBottom:"10px",
      left: "20px",
      fontFamily: "Ostrich Sans Black",
      [theme.breakpoints.down(600)]: {
        bottom: "20%",

      },
    },
    textclass3: {
      width:"87%",
      position: "absolute",
      borderBottom:"3px solid white",
      bottom: "17%",
      display: "block",
      left: "20px",
      [theme.breakpoints.down(600)]: {
        bottom: "16%",
        width:"67%",
        borderBottom:"1px solid white",

      },
    },
  
    text: {
      color: "white",
      textShadow: "2px 2px 2px rgba(0, 0, 0, 1)",
      textTransform: "uppercase",
      fontSize: "30px",
      padding: "1px",
      textAlign: "center",
      [theme.breakpoints.down(600)]: {
        fontSize: "10px",
        padding:0

      },
    },
    text2: {
      color: "#FDC114",
      textShadow: "2px 2px 2px rgba(0, 0, 0, 1)",
      textTransform: "uppercase",
      fontSize: "56px",
      letterSpacing:"1px",
      padding: "1px",
      [theme.breakpoints.down(600)]: {
        fontSize: "13px",
        letterSpacing:"0",
        padding:0
        
      },
    },
    textbg: {
      backgroundColor: "red",
      width: "120%",
    },
  }));

  const classes = useStyles();
  return (
    <Box display={{ xs: "block", lg: "block", xl: "block" }} style={{ position: "relative" }}>
        <Grid
          container
          xs={12}
          // style={{ position: "absolute", zIndex: 999, bottom: "100px", left: "40px", maxWidth: "90%" }}
        >
          <Grid item xs={4} style={{}}>
            <div className={classes.collobarotors}>
              <img src="/BizbCollaborator/11.jpg" className={classes.image} />
              <div className={classes.textclass}>
                <div className={classes.textbg}>
                  <Typography gutterBottom  className={classes.text}>
                    Fashion
                  </Typography>
                </div>
              </div>
              <div className={classes.textclass2}>
                  <Typography gutterBottom  className={classes.text2}>
                    Influencers are choosing sustainable!
                  </Typography>
              </div>
              <div className={classes.textclass3}></div>



              <a href="https://instagram.com/amalusman?igshid=MzRlODBiNWFlZA=="  target="_blank">
                <div className={classes.cart1}>
                  <div className={classes.buttonshop}>
                    <button className={classes.buttonshopt} >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </Grid>
          <Grid item xs={4} style={{}}>
            <div className={classes.collobarotors}>
              <img src="/BizbCollaborator/222.jpg" className={classes.image} />
              <div className={classes.textclass}>
                <div className={classes.textbg}>
                  <Typography gutterBottom  className={classes.text}>
                    Fashion
                  </Typography>
                </div>
              </div>
              <div className={classes.textclass2}>
                  <Typography gutterBottom  className={classes.text2} style={{width:"80%"}}>
                    Buy From Influencer Stores
                  </Typography>
              </div>
              <div className={classes.textclass3}></div>
              <a href="https://instagram.com/fartashia.asim?igshid=MzRlODBiNWFlZA==" target="_blank">

                <div className={classes.cart2}>
                  <div className={classes.buttonshop}>
                    <button className={classes.buttonshopt} variant="h4">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </Grid>
          <Grid item xs={4} style={{}}>
            <div className={classes.collobarotors}>
              <img src="/BizbCollaborator/3.jpg" className={classes.image} />
              <div className={classes.textclass}>
                <div className={classes.textbg}>
                  <Typography gutterBottom  className={classes.text}>
                    Fashion
                  </Typography>
                </div>
              </div>
              <div className={classes.textclass2}>
                  <Typography gutterBottom  className={classes.text2} style={{color:"white"}}>
                    Influencers-de-clutter with bizb!
                  </Typography>
              </div>
              <div className={classes.textclass3}></div>
              <a href="https://instagram.com/hajra_sheikhh?igshid=MzRlODBiNWFlZA=="  target="_blank">
                <div className={classes.cart}>
                  <div className={classes.buttonshop}>
                    <button className={classes.buttonshopt} variant="h4">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </Grid>
        </Grid>
      {/* <Grid container xs={12}>
        <div className={classes.collobarotors}>
          <img src="/BizbCollaborator/sheefa.webp" className={classes.image} />

          {/* <a href="/en/categories/cmVhY3Rpb24vdGFnOnR1VExZUzQ5aEhUQmtoZldF">
            <div className={classes.cart}>
              <div className={classes.buttonshop}>
                <button className={classes.buttonshopt} variant="h4">
                  SHOP NOW
                </button>
              </div>
            </div>
          </a> */}
      {/* </div>
      </Grid> */}
    </Box>
  );
};

export default BizbCalloborators;
