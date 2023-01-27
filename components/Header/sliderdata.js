
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


import { useRef,useCallback ,useState} from "react";
import { Pagination, Navigation } from "swiper";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Appsec from "../Appsection/appsec"
import Preloved from "../Preloved/prelovedSec"
const MainSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

console.l
  const useStyles = makeStyles((theme) => ({
 root:{
  height:"auto",
  width:"100%",
  display:"flex",
  position:"relative"
 },
    image: {
 height:"auto",

    },
   
    controller:{
      display:"flex",

   background:"green",
      padding:"15px",
    
      position:"absolute",
      zIndex:5,
               
      top: "-20px",


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
      image: '/Desktop-images/desktop2.svg',
   id:1
    },
    {
      image: '/Desktop-images/desktop2.svg',
   id:2
    },
    {
      image: '/Desktop-images/desktop3.svg',
      id:3
    },
    {
      image: '/Desktop-images/desktop4.svg',
      id:4
    },
    {
      image: '/Desktop-images/desktop5.svg',
      id:5
    },
    {
      image: '/Desktop-images/desktop6.svg',
      id:6
    },
  ];
  function Item({ item }) {
    const classes = useStyles();
    return (
      <>
        <SwiperSlide>
         
            <div className="imagf2">
              <img src={item.image} className={classes.image}/>
            </div>
          
    
          </SwiperSlide>
      </>
    );
  }
 
  const sliderRef = useRef(null);

 
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  var menu = ['Slide 1', 'Slide 2', 'Slide 3']
  const classes = useStyles();
    const pagination = {
  
      renderCustom: (_, current, total) => {
       return    <div>{`0${current+1}`}</div>
      },
  
  };


  return (
    <>
     
     <div className={classes.root}>
      <Swiper ref={sliderRef}
       pagination={pagination}
       onRealIndexChange={(element)=>setActiveIndex(element.activeIndex)}
 >

        {ITEMS.map((item) => (
            <SwiperSlide>
            <Item item={item} />
            </SwiperSlide>
          ))}
      
      </Swiper>
      <div className={classes.controller}>
{activeIndex-0?<div  onClick={handlePrev} ><ArrowBackIos className={classes.iconback}/></div>:""}

<h1>{`0${activeIndex+1}`}</h1>
<h1 className={classes.line}>|</h1>
      <h1>{`0${ITEMS.length}`}</h1>
{  activeIndex < ITEMS.length-1 ?   <div className={classes.iconforwad} onClick={handleNext} ><ArrowForwardIos/></div>:""}
    </div>
 
   
        
     

<Preloved/>
</div>
    </>
  );
};

export default MainSlider ;