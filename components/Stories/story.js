import Slider from "react-slick";
import { useRef } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from 'react';
import Storyslider from "./storiesslide";
const Story = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeSlide2, setActiveSlide2] = useState(0)
  const [disableNext, setDisabledNext] = useState(false)
  const [disableprevios, setDisabledPrevious] = useState(true)
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

  const beforeChangeHandler = (current, next) => {
    setActiveSlide(next)
   
    if(current !== 0 && current === next) {
      setDisabledNext(true)
      setDisabledPrevious(false)

    }
    else if(current=== 0 && next ===0){
      setDisabledPrevious(true)
    }
    else {
      setDisabledNext(false)
      setDisabledPrevious(false)
  
    }

    
  }

  const afterChangeHandler = (current, next) => {
    setActiveSlide2(current);
      
    console.log('current slide...', current)
    console.log('next slide...', next)  
    if(next == undefined && current === undefined) {
      setDisabledPrevious(true)
    }
    else {
      setDisabledPrevious(false)
     
    }
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
       { !disableprevios &&  <ButtonBase
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
            disabled={disableprevios}
            onClick={() => {sliderRef.current.slickPrev();console.log(sliderRef.current.innerSlider.state)}}
          >
           
           <ArrowBackIos />
         
          </ButtonBase>}
          
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          dots={false}
       
          ref={sliderRef}
          slidesToShow={8}
          slidesToScroll={1}
          infinite= {false}
          beforeChange ={beforeChangeHandler}
          afterChange={afterChangeHandler}
        >
          
          {ITEMS.map((item) => (
            <Item item={item} />
          ))}
       
        </Slider>
        
       {
        !disableNext &&  <ButtonBase
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
        disabled={disableNext}

        onClick={() => {sliderRef.current.slickNext();console.log(sliderRef.current.innerSlider.state)}}
      >
           <ArrowForwardIos />
      </ButtonBase>
       }
      </div>
 <Storyslider/>
    </div>
  );
};

export default Story;