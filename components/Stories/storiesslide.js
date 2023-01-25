import Slider from "react-slick";


import { useRef } from "react";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const Storyslider = () => {
  const sliderRef = useRef(null);

  const useStyles = makeStyles((theme) => ({
    
    image: {
 height:"231px",
 width:"312px",
 borderRadius:"5px"
 
    },
    
    controls: {
      alignItems: "inherit",
      display: "inherit",
      flex: 1,
    },
    title: {
      color: theme.palette.reaction.reactionBlue,
      marginRight: theme.spacing(),
      borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`,
    },
    toolbar: {
      // alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "50px"
    },
    dark: {
      color: "#333333"
    },
  }))
  
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
  
  function Item({ item }) {
    const classes = useStyles();

    return (
      <>
         <img
          component="img"
          alt="Contemplative Reptile"
          height="213"
          width="312"
          src={item.image}
          title="Contemplative Reptile"
          className={classes.image}
        />
        <Typography gutterBottom variant="h5" component="h2">
           {item.title}
          </Typography>
         <span>size</span>
          
          <span>{`:${item.size}`}</span>
 </>
    );
  }
  return (
    <div>
     
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
      
        <div style={{ display: "flex" }}>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
           <ArrowBackIos />
          </ButtonBase>
          
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          dots={false}
       
          ref={sliderRef}
          slidesToShow={4}
          slidesToScroll={1}
          
       
          
        >
          
          {itemData.map((item) => (
            <Item item={item} key={item.id}/>
        
          ))}
       
        </Slider>
        <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
               <ArrowForwardIos />
          </ButtonBase>
      </div>
 
    </div>
  );
};

export default Storyslider;