import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Box  from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
const Instagram = () => {

    const instadata = [
        {
          image: '/Instagram/instagram1.svg',
       id:1,
       title:"Causal"
        },
        {
            image: '/Instagram/instagram2.svg',
          title:"westran",
       id:2
        },
        {
            image: '/Instagram/instagram3.svg',
          id:3,
          title:"Bridal",
        },
        {
            image: '/Instagram/instagram1.svg',
          id:4,
          title:"Party Wear",
        },
        {
            image: '/Instagram/instagram4.svg',
          id:5,
          title:"Juniors",
        },
        {
            image: '/Instagram/instagram5.svg',
          id:6,
          title:"Shoes",
        },
       
      ];
  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
       
      },
   image:{
    width:"382px",
    height:"auto"
   },
   gridroot: {
      
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainheading:{
    paddingTop:"30px",
   paddingLeft:"50px"
   }
    
  }))
  
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.mainheading}><Typography variant="h3" >
  Instagram
      </Typography>
      </div> 
    <Grid container spacing={3} className={classes.gridroot}>
        {instadata.map((item,i)=>(
              <Grid item  >
        <img src={item.image} className={classes.image}/>
              </Grid>  
        ))}
    
    </Grid>
   
  </div>
  );
};

export default Instagram;