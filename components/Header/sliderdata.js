
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


import { useRef,useCallback ,useState} from "react";
import { Pagination, Navigation } from "swiper";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Appsec from "../Appsection/appsec"
import BizbCalloborators  from "../BizbCalloborators/ bcallobrators"
const MainSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

console.l
  const useStyles = makeStyles((theme) => ({
    
    image: {
 height:"auto",
 width:"100%"
    },
   
    controls: {
      alignItems: "inherit",
      display: "inherit",
      flex: 1,
    },
    arrow:{
      position:"absolute",
               
      top: "-100px",
      background:"green",

      width:"auto",
      left:"20px",
      
      
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
    <div>
     
     <div>
      <Swiper ref={sliderRef}
       pagination={pagination}
       onRealIndexChange={(element)=>setActiveIndex(element.activeIndex)}
 >

        {ITEMS.map((item) => (
            <SwiperSlide>
            <Item item={item} />
            </SwiperSlide>
          ))}
      <h1>{`0${activeIndex+1}`}</h1>
      <h1>{`0${ITEMS.length}`}</h1>
      </Swiper>
{activeIndex-0?<div  onClick={handlePrev} ><ArrowBackIos/></div>:""}
{  activeIndex < ITEMS.length-1 ?   <div className="next-arrow" onClick={handleNext} ><ArrowForwardIos/></div>:""}
    </div>
 

        
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        customPaging={(i) => (
          <div
          
            className={classes.arrow}
          >
          {`0${i+1}`}
          </div>
        )}

        
        className="mySwiper"

        beforeChange ={handleNext}
        afterChange={handlePrev}

      >
      
        
      
        {ITEMS.map((item) => (
            <SwiperSlide>
            <Item item={item} />
            </SwiperSlide>
          ))}
       
      </Swiper>
   
      <BizbCalloborators />
<Appsec />

    </div>
  );
};

export default MainSlider ;