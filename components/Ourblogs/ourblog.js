import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
const OurBlogs = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "50px",
    },
    look: {
      height: "225px",
      width: "426px",
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadious: "0px",
      backgroundColor: theme.palette.reaction.blog1,
      transition: "left 0.8s linear",
      [theme.breakpoints.down(600)]: {
        width: "100vw",
        paddingRight: "0",
        paddingLeft: "0",
      },
    },
    wardrobe: {
      height: "225px",
      width: "426px",
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadious: "0px",
      backgroundColor: theme.palette.reaction.blog2,
      [theme.breakpoints.down(600)]: {
        width: "100vw",
        paddingRight: "0",
        paddingLeft: "0",
      },
    },
    trend: {
      height: "225px",
      width: "426px",
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadious: "0px",
      backgroundColor: theme.palette.reaction.blog3,
      [theme.breakpoints.down(600)]: {
        width: "100vw",
        paddingRight: "0",
        paddingLeft: "0",
      },
    },
    mainheading: {
      paddingTop: "30px",
    },

    blogtext: {
      padding: "20px",
    },
    blogtextr: {
      color: theme.palette.secondary.selected,
    },
    gridroot: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    spanofnextword: {
      color: "#FDC114",
      marginLeft: "10px",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.mainheading}>
        <Typography variant="h3">
          Our
          <span className={classes.spanofnextword}>Blogs</span>
        </Typography>
      </div>
      <Grid container spacing={0} className={classes.gridroot}>
        <Grid item>
          <Box className={classes.look}>
            <Typography variant="h4" className={classes.blogtext}>
              Get the perfect Look
            </Typography>

            <Typography variant="h6" className={classes.blogtext}>
              Constantly hustling day in day out and still putting a smile on your face is what makes you a Queen. But
              even the queen needs some…{" "}
              <a href="https://bizb.store/making-sustainability-stylish-breaking-cliches-about-buying-second-hand-apparel/">
                <span className={classes.blogtextr}>Read More</span>
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.wardrobe}>
            <Typography variant="h4" className={classes.blogtext}>
              Get the perfect Look
            </Typography>
            <Typography variant="h6" className={classes.blogtext}>
              Constantly hustling day in day out and still putting a smile on your face is what makes you a Queen. But
              even the queen needs some…{" "}
              <a href="https://bizb.store/making-sustainability-stylish-breaking-cliches-about-buying-second-hand-apparel/">
                <span className={classes.blogtextr}>Read More</span>
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.trend}>
            <Typography variant="h4" className={classes.blogtext}>
              Get the perfect Look
            </Typography>
            <Typography variant="h6" className={classes.blogtext}>
              Constantly hustling day in day out and still putting a smile on your face is what makes you a Queen. But
              even the queen needs some…
              <a href="https://bizb.store/making-sustainability-stylish-breaking-cliches-about-buying-second-hand-apparel/">
                <span className={classes.blogtextr}>Read More</span>
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurBlogs;
