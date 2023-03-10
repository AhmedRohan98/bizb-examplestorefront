import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Box  from '@material-ui/core/Box';
import Link from 'next/link'
import Typography from "@material-ui/core/Typography";
const  Instagram = () => {

    const instadata = [
        {
          image: '/Instagram/instagram1.svg',
       id:1,
       title:"Causal",
       link:"https://www.instagram.com/p/Cfa2xUIIUl5/?_ga=2.165363711.1777879844.1678284719-495360532.1678082373",
        },
        {
            image: '/Instagram/instagram2.svg',
          title:"westran",
          link:"https://www.instagram.com/p/Cfa2xUIIUl5/?_ga=2.165363711.1777879844.1678284719-495360532.1678082373",
       id:2
        },
        {
            image: '/Instagram/instagram3.svg',
            link:"https://www.instagram.com/p/Cfa2xUIIUl5/?_ga=2.165363711.1777879844.1678284719-495360532.1678082373",
          id:3,
          title:"Bridal",
        },
        {
            image: '/Instagram/instagram1.svg',
            link:"https://www.instagram.com/p/Cfa2xUIIUl5/?_ga=2.165363711.1777879844.1678284719-495360532.1678082373",
          id:4,
          title:"Party Wear",
        },
        {
            image: '/Instagram/instagram4.svg',
            link:"https://www.instagram.com/p/Cfa2xUIIUl5/?_ga=2.165363711.1777879844.1678284719-495360532.1678082373",
          id:5,
          title:"Juniors",
        },
        {
            image: '/Instagram/instagram5.svg',
            link:"https://www.instagram.com/p/Cfa2xUIIUl5/?_ga=2.165363711.1777879844.1678284719-495360532.1678082373",
          id:6,
          title:"Shoes",
        },
       
      ];
  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
       
      },
      gridroot: {
      
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
      },
   image:{
    width:"382px",
    height:"auto"
   },
  
  mainheading:{
    paddingTop:"30px",
   paddingLeft:"50px"
   }
    
  }))
  
  
  const classes = useStyles();
  return (
  <>
      <div className={classes.mainheading}><Typography variant="h3" >
  Instagram
      </Typography>
    
      </div> 
      <div className={classes.root}>
    <Grid container  className={classes.gridroot} xs={12} md={12}  
  spacing={10}
  alignItems="center"
  justify="center"
>
        {instadata.map((item,i)=>(
              <Grid item  >
             <Grid item  >
     <a href={item.link} >  
     <img src={item.image} className={classes.image}/>
     
</a>
              </Grid>  
              </Grid>  
        ))}
    
    </Grid>
   
  </div>
  </>
  );
};

export default Instagram;