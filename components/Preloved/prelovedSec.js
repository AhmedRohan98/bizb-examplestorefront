import React from "react";
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography";

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Box from '@material-ui/core/Box';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    marginBottom: theme.spacing(6)
 
  },
  PrelovedHeader:{
    display:"flex",
    justifyContent: "center",


    flexDirection: "column" ,
    alignItems: "center",
  },
  PrelovedHeader2:{
    display:"flex",
    justifyContent: "center",
    flexDirection: "row" ,
    alignItems: "center",
  
  },


  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
subtitle:{
  width:"543px",
  height:"87px",
  display:"flex",
  align:"center",
  justifyContent:"center",
  alignItems:"center"
},
subtitlet:{
 color:"#1F1F1F",
 fontSize: "24px",

 fontFamily: "Lato",
 
   lineHeight:"100%"
 
}
}))
const itemData = [
 
  {
    image: '/preloved/preloved1.svg',
 id:1,
 title:"Causal"
  },


  {
    image: '/preloved/preloved2.svg',
    title:"westran",
 id:2
  },
 
  {
    image: '/preloved/preloved3.svg',
    id:3,
    title:"Bridal",
  },
  {
    image: '/preloved/preloved6.svg',
    id:6,
    title:"Juniors",
  },
  {
    image: '/preloved/preloved4.svg',
    id:4,
    title:"Party Wear",
  },

  {
    image: '/preloved/preloved5.svg',
    id:5,
    title:"Juniors",
  },
 
   
 {
    image: '/preloved/preloved7.svg',
    id:7,
    title:"Juniors",
  },
  
 
];

const Preloved = () => {
  const classes = useStyles();
  return (
 <>
 <Container className={classes.PrelovedHeader}>
 <Typography variant="h1" >Share Your 
 </Typography>
<Container  className={classes.PrelovedHeader2}>
<Typography variant="h2" >
Pre-Loved 
 </Typography>
 <Typography variant="h1" >
Fashion
 </Typography>

</Container>

</Container>
  <div className={classes.root2}>
<Box className={classes.subtitle}>

<h6 className={classes.subtitlet}>
 Now you can revamp your daily wear wardrobe
every month while saving more than 50% from
your monthly budget!
 </h6>
 </Box>
 </div>
<ResponsiveMasonry
  
  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
>
<Masonry>
{itemData.map((item)=>(
<>
<img src={item.image} />

</>
)

)}
</Masonry>
</ResponsiveMasonry>
 </>


  );
}


export default Preloved;
