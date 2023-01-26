import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root2: {
    height:312,
    width:312,
   
  },
  cardaction:{
    height:312,
    width: 312,
  },
  Justin: {
    padding:"200px",
    margin:"200px",
    display:"flex",
    flexwrap:"wrap"
  },
 
  image:{
height:431,
width:312
  },
 
});
const itemData = [
  {
    image: '/justin/justin1.svg',
 id:1,
 title:"floral shirt for ",
 size:"large"
  },
  {
    image: '/justin/justin2.svg',
    title:"Bag for sale",
 id:2,
 size:"large"
  },
  {
    image: '/justin/justin3.svg',
    id:3,
    title:"Heels for sale",
    size:"large"
  },
  {
    image: '/justin/justin4.svg',
    id:4,
    title:"floral shirt for",
    size:"large"
  },
  {
    image: '/justin/justin1.svg',
 id:5,
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin2.svg',
 id:6,
 title:"Bag for sale",
 size:"large"
  },
  {
    image: '/justin/justin3.svg',
 id:7,
 title:"Heels for sale",
 size:"large"
  },
  {
    image: '/justin/justin4.svg',
 id:8,
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin1.svg',
 id:9,
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin2.svg',
 id:10,
 title:"Bag for sale",
 size:"large"
  },
  {
    image: '/justin/justin3.svg',
 id:11,
 title:"Heels for sale",
 size:"large"
  },
  {
    image: '/justin/justin4.svg',
 id:12,
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin1.svg',
 id:13,
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin2.svg',
 id:14,
 title:"Bag for sale",
 size:"large",
 size:"large"
  },
  {
    image: '/justin/justin3.svg',
 id:15,
 title:"Heels for sale",
 size:"large"
  },
  {
    image: '/justin/justin4.svg',
 id:16,
 title:"floral shirt for",
 size:"large"
  },
];

const Justin = () => {
  const classes = useStyles();
  return (
  <>
  <div className={classes.Justin}>
  <Typography variant="h3">
         JUST IN
          </Typography>
          <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
  <Card className={classes.root2}>
  
     { itemData.map((item)=>
      <>
      <Container         className={classes.cardation}>
    
 
      
        <img
          component="img"
          alt="Contemplative Reptile"
          height="213"
          width="312"
          src={item.image}
          title="Contemplative Reptile"
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {item.title}
          </Typography>
       
        </CardContent>
     
        <span>size</span>
          
          <span>{`:${item.size}`}</span>
        
      </Container>
      </>
  )
     }
       </Card>
       </Grid>
       </Grid>
      </div>
  </>
  );
}


export default Justin;