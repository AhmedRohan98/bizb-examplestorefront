import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

import Typography from "@material-ui/core/Typography";
const Instagram = (props) => {
  // console.log("instagram props", props.feed);
  const data = props?.feed?.data;
  const images = data?.filter((media) => media.media_type === "IMAGE").slice(0, 6);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    maindiv: {
      maxWidth: "1300px",
      marginTop: "60px",
    },
    gridroot: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      position: "relative",
    },
    image: {
      maxWidth: "440px",
      maxHeight: "640px",

      [theme.breakpoints.down(600)]: {
        width: "32vw",
        paddingRight: "0",
        paddingLeft: "0",
        marginBottom: "0",
      },
    },

    mainheading: {
      display: "flex",
      marginTop: "60px",
      marginBottom: "60px",
      justifyContent: "center",
      textTransform: "uppercase",
      position: "relative",
      width: "100%",
    },
    spanline: {
      marginTop: "20px",
      bottom: 0,
      left: 0,
      height: "5px",
      marginLeft: "10px",
      width: "50px",
      backgroundColor: "#FDC114",
    },
    mainheadings: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      allignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    text: {
      position: "absolute",
      top: "8px",
      left: "8px",
      width: "440px",
      height: "440px",
      color: "white",
      padding: "1rem",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      [theme.breakpoints.down(600)]: {
        width: "32vw",
        height: "auto",
        paddingRight: "0",
        paddingLeft: "0",
        top: "0",
        padding: "0",
        left: "0",
      },
    },
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      marginBottom: "60px",
      marginTop: "100px",
      width: "100%",
    },
    instagramdiv: {
      maxWidth: "1390px",
    },
  }));

  const lastImageIndex = images?.length - 1;
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.mainheadings}>
        <Typography variant="h3" className={classes.mainheading}>
          instagram <span className={classes.spanline}></span>
        </Typography>
      </div>
      <div className={classes.root}>
        <Hidden smDown>
          <div className={classes.instagramdiv}>
            <Grid container xs={12} spacing={2} alignItems="center" justify="center" maxWidth={1260}>
              {images?.map((item, i) => (
                <Grid item className={classes.gridroot} xs={4}>
                  <a target="_blank" href={item.permalink}>
                    <img src={item.media_url} className={classes.image} />
                    {i === lastImageIndex ? (
                      <img className={classes.text} src="/Instagram/instagramSeeMore.svg"></img>
                    ) : null}
                  </a>
                </Grid>
              ))}
            </Grid>
          </div>
        </Hidden>
        <Hidden mdUp>
          <Grid container xs={12} alignItems="center" justify="center" className={classes.maindiv}>
            {images?.map((item, i) => (
              <Grid item className={classes.gridroot}>
                <a target="_blank" href={item.permalink}>
                  <img src={item.media_url} className={classes.image} />
                  {i === lastImageIndex ? (
                    <img className={classes.text} src="/Instagram/instagramSeeMore.svg"></img>
                  ) : null}
                </a>
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </div>
    </div>
  );
};

export default Instagram;
