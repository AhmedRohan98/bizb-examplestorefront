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
      right: "50px",

      transition: "all 0.2s linear",
      "&:hover": {
        transform: "scale(1.08)",
        transition: "left 0.2s linear",
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
      right: "2%",
      bottom: "8%",
      cursor: "pointer",
      display: "block",
      fontFamily: "Ostrich Sans Black",
      [theme.breakpoints.down(1100)]: {
        display: "none",
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
      [theme.breakpoints.down(1100)]: {
        display: "none",
      },
      marginRight: "100px",
    },
    cart2: {
      width: "10%",
      height: "6%",
      position: "absolute",
      right: "7%",
      bottom: "8%",
      cursor: "pointer",
      display: "block",
      fontFamily: "Ostrich Sans Black",
      [theme.breakpoints.down(1100)]: {
        display: "none",
      },
      // marginLeft:"160px",
    },
  }));

  const classes = useStyles();
  return (
    <Box display={{ xs: "block", lg: "block", xl: "block" }} style={{ position: "relative" }}>
      <Hidden smDown>
        <Grid
          container
          xs={12}
          style={{ position: "absolute", zIndex: 999, bottom: "100px", left: "40px", maxWidth: "90%" }}
        >
          <Grid item xs={4} style={{}}>
            <div className={classes.collobarotors}>
              <a href="https://instagram.com/fartashia.asim?igshid=MzRlODBiNWFlZA==">
                <div className={classes.cart1}>
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
              <a href="https://instagram.com/amalusman?igshid=MzRlODBiNWFlZA==">
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
              <a href="https://instagram.com/hajra_sheikhh?igshid=MzRlODBiNWFlZA==">
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
      </Hidden>
      <Grid container xs={12}>
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
        </div>
      </Grid>
    </Box>
  );
};

export default BizbCalloborators;
