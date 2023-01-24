import Slider from "react-slick";


import { useRef } from "react";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Caloborators = () => {
  const sliderRef = useRef(null);

  const useStyles = makeStyles((theme) => ({
    
    image: {
 height:"80px",
 width:"80px",
 borderRadius: "100%",
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
  const ITEMS = [
    {
      image: '/stories/story.svg',
   id:1,
   title:"Charizma Store"
    },
    {
      image: '/stories/story1.svg',
   id:2,
   title:"Charizma Store"
    },
    {
      image: '/stories/story2.svg',
      id:3,
      title:"Charizma Store"
    },
    {
      image: '/stories/story.svg',
      id:4,
      title:"Charizma Store"
    },
    {
      image: '/stories/story.svg',
      id:5,
      title:"Charizma Store"
    },
    {
      image: '/stories/story2.svg',
      id:6,
      title:"Charizma Store"
    },
    {
        image: '/stories/story2.svg',
        id:7,
        title:"Charizma Store"
      },
      {
        image: '/stories/story.svg',
        id:8,
        title:"Charizma Store"
      },
      {
        image: '/stories/story.svg',
        id:9,
        title:"Charizma Store"
      },
      {
        image: '/stories/story2.svg',
        id:10,
        title:"Charizma Store"
      },
  ];
  
  
  function Item({ item }) {
    const classes = useStyles();
    return (
      <>
        
          <dev>
            <div >
              <img src={item.image} className={classes.image}/>
              <Typography variant="h5" >
                {item.title}
              </Typography>
            </div>
          </dev>
    
     
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
          slidesToShow={8}
          slidesToScroll={1}
          
       
          
        >
          
          {ITEMS.map((item) => (
            <Item item={item} />
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

export default Caloborators;