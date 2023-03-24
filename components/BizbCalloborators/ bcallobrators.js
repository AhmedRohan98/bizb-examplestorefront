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
      width: "100%",
      borderRadius:"10vh",
      height: "100%",
      right: "50px",

      transition: "all 0.2s linear",
      "&:hover": {
        transform: "scale(1.08)",
        transition: "left 0.2s linear",
      },
    },
    buttonshopt: {
      fontSize: "2vh",
      color: "#000000",
      fontWeight: 900,
      fontStyle: "Black",
      lineHeight: "26px",

      fontFamily: "Ostrich Sans Black",
    },
    image: {
      position: "relative",
      width: "100%",
    },
    collobarotors: {
      width: "100%",
      position: "relative",
    },
    cart: {
      width: "10%",
      height: "6%",
      position: "absolute",
      right: "2%",
      bottom: "8%",
      cursor:"pointer"
    },
  }));
  
  
  const classes = useStyles();
  return (
    <Box display={{ xs: "none", lg: "block", xl: "none" }}>
      <Grid container xs={12}>
        <div className={classes.collobarotors}>
          <img src="/BizbCollaborator/saheefa.jpg" className={classes.image} />

          <div className={classes.cart}>
            <div className={classes.buttonshop}>
              <h4 className={classes.buttonshopt}>SHOP NOW</h4>
            </div>
          </div>
        </div>
      </Grid>
    </Box>
  );
};

export default BizbCalloborators;