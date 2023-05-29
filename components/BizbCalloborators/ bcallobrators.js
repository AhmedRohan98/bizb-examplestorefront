import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Box  from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
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
    buttonshopt: {
      fontSize: "16px",
      color: "#000000",
      fontWeight: 900,
      fontStyle: "Black",
      lineHeight: "26px",
      background: "none",
      border: "none",
    },
    image: {
      position: "relative",
      marginTop:"100px",
      width: "100%",
    },
    collobarotors: {
      width: "100%",
      position: "relative",
      marginBottom:"60px"
    },
    cart: {
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
    },
  }));
  
  
  const classes = useStyles();
  return (
    <Box display={{ xs: "block", lg: "block", xl: "block" }}>
      <Grid container xs={12}>
        <div className={classes.collobarotors}>
          <img src="/BizbCollaborator/sheefa.webp" className={classes.image} />

          <a href="/en/categories/cmVhY3Rpb24vdGFnOnR1VExZUzQ5aEhUQmtoZldF">
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
    </Box>
  );
};

export default BizbCalloborators;