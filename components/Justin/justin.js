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
  
  },
 

 root:{
display:"flex",
alignItems: "center",
flexDirection: "column",
justifyContent: "center"
 },
 gridroot:{
  display:"flex",
  alignItems: "center",
  flexDirection: "row",
  margin:"20px",
  justifyContent: "center"
   }
});
const itemData = [
  {
    image: '/justin/justin1.svg',
 id:1,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for ",
 size:"large"
  },
  {
    image: '/justin/justin2.svg',
    title:"Bag for sale",
 id:2,
 price:"Rs 1200",
 newprice:"Rs 600",
 size:"large"
  },
  {
    image: '/justin/justin3.svg',
    id:3,
    price:"Rs 1200",
    newprice:"Rs 600",
    title:"Heels for sale",
    size:"large"
  },
  {
    image: '/justin/justin4.svg',
    id:4,
    price:"Rs 1200",
    newprice:"Rs 600",
    title:"floral shirt for",
    size:"large"
  },
  {
    image: '/justin/justin1.svg',
 id:5,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin2.svg',
 id:6,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"Bag for sale",
 size:"large"
  },
  {
    image: '/justin/justin3.svg',
 id:7,
 price:"Rs 1200",
 newprice:"Rs 600",
  title:"Heels for sale",
 size:"large"
  },
  {
    image: '/justin/justin4.svg',
 id:8,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin1.svg',
 id:9,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin2.svg',
 id:10,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"Bag for sale",
 size:"large"
  },
  {
    image: '/justin/justin3.svg',
 id:11,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"Heels for sale",
 size:"large"
  },
  {
    image: '/justin/justin4.svg',
 id:12,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin1.svg',
 id:13,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for",
 size:"large"
  },
  {
    image: '/justin/justin2.svg',
 id:14,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"Bag for sale",
 size:"large",
 size:"large"
  },
  {
    image: '/justin/justin3.svg',
 id:15,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"Heels for sale",
 size:"large"
  },
  {
    image: '/justin/justin4.svg',
 id:16,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for",
 size:"large"
  },
];

const Justin = () => {
  const classes = useStyles();
  return (
  <>
    <Typography variant="h3">
         JUST IN
    </Typography>
  <div className={classes.root} >
 <Grid container gap={3} className={classes.gridroot}>
  { itemData.map((item)=>
      <>
     <Grid item lg={3} sm={6} md={4} xs={12} >
   <img
          component="img"
          alt="Contemplative Reptile"
        src={item.image}
          title="Contemplative Reptile"
          className={classes.image}
        />
      <Typography gutterBottom variant="h5" component="h2">
           {item.title}
          </Typography>
        <span>size</span>
         <span>{`:${item.size}`}</span>
          <strike>{item.price}</strike>
          </Grid>
      </>
  )
     }
      
     </Grid>
    
      </div>
  </>
  );
}


export default Justin;