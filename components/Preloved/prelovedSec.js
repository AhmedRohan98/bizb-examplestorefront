import React from "react";
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography";

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from "@material-ui/core/styles";
import Story from "../Stories/story"
const useStyles = makeStyles((theme) => ({
  root: {
   width:450,
   height:500,
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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "auto",

    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  image:{
width:"auto",
height:"auto"

  },

  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },

}))
const itemData = [
  {
    image: '/preloved/preloved1.svg',
 id:"1",
 title:"Causal"
  },
  {
    image: '/preloved/preloved2.svg',
    title:"westran",
 id:"2"
  },
  {
    image: '/preloved/preloved3.svg',
    id:"3",
    title:"Bridal",
  },
  {
    image: '/preloved/preloved4.svg',
    id:"4",
    title:"Party Wear",
  },
  {
    image: '/preloved/preloved5.png',
    id:"5",
    title:"Juniors",
  },
  {
    image: '/preloved/preloved6.png',
    id:"6",
    title:"Shoes",
  },
  {
    image: '/preloved/preloved7.png',
    id:"6",
    title:"Causal",
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
      Share Your 
      </Typography>
   </Container>
    </Container>
    <div  className={classes.root}>
    <ImageList rowHeight={164} gap={8} className={classes.imageList} variant="mansonary" >
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.image} alt={item.title}  className={classes.image}/>
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton aria-label={`star ${item.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    <Story />
      </div>
  </>
  );
}


export default Preloved;
