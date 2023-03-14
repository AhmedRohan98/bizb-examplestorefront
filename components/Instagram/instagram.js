import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
const Instagram = (props) => {
  console.log("instagram props", props.feed);
  const data=props.feed.data
 const images = data.filter((media) => media.media_type === "IMAGE").slice(0, 6);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    gridroot: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      
      position: "relative",
    },
    image: {
      width: "382px",
      height: "auto",
      marginBottom:"20px"
    },

    mainheading: {
      paddingTop: "30px",
      paddingLeft: "50px",
    },
    text: {
      position: "absolute",
  
      top: "40px",
      left: "40px",
      width: "382px",
      height: "auto",


      color: "white",
      padding: "1rem",

      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  }));
const lastImageIndex = images.length - 1;
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainheading}>
        <Typography variant="h3">Instagram</Typography>
      </div>
      <div className={classes.root}>
        <Grid container xs={12} spacing={10} alignItems="center" justify="center">
          {images.map((item, i) => (
            <Grid item className={classes.gridroot}>
              <a href={item.permalink}>
                <img src={item.media_url} className={classes.image} />
                {i === lastImageIndex ? <img className={classes.text} src="/Instagram/instagramSeeMore.svg"></img> : null}
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Instagram;
