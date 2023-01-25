import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Box  from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
const OurBlogs = () => {


  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding:"40px",
       
      },
      look: {
        height: "225px",
        width: "360px",
   
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
       borderRadious:"0px",
       backgroundColor:theme.palette.reaction.blog1,
        
      },
      wardrobe: {
        height: "225px",
        width: "360px",
   
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
       borderRadious:"0px",
       backgroundColor:theme.palette.reaction.blog2,
        
      },
      trend: {
        height: "225px",
        width: "360px",
   
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
       borderRadious:"0px",
       backgroundColor:theme.palette.reaction.blog3,
        
      },
      blogtext: {
      
        padding:"20px"
      },
     gridroot: {
      
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
      },
    
  }))
  
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container spacing={3} className={classes.gridroot}>
      <Grid item  >
        <Box className={classes.look}>
  
<Typography variant="h4" className={classes.blogtext}>Get the perfect Look</Typography>
<Typography variant="h6" className={classes.blogtext} >Constantly hustling day in day out and still putting a smile on your face is what makes you a Queen. But even the queen needs some… Read More</Typography>
        </Box>
      </Grid>
      <Grid item  >
      <Box className={classes.wardrobe}>
  
  <Typography variant="h4" className={classes.blogtext}>Get the perfect Look</Typography>
  <Typography variant="h6" className={classes.blogtext} >Constantly hustling day in day out and still putting a smile on your face is what makes you a Queen. But even the queen needs some… Read More</Typography>
          </Box>
      </Grid>
      <Grid item  >
      <Box className={classes.trend}>
  
  <Typography variant="h4" className={classes.blogtext}>Get the perfect Look</Typography>
  <Typography variant="h6" className={classes.blogtext} >Constantly hustling day in day out and still putting a smile on your face is what makes you a Queen. But even the queen needs some… Read More</Typography>
          </Box>
      </Grid>
    </Grid>
   
  </div>
  );
};

export default OurBlogs;