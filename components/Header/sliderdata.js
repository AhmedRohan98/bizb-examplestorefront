
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


import { useRef,useCallback } from "react";
import { Pagination, Navigation } from "swiper";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Appsec from "../Appsection/appsec"
import BizbCalloborators  from "../BizbCalloborators/ bcallobrators"
const MainSlider = () => {
 
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
  const classes = useStyles();
 
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
  
  };

  return (
    <div>
     
     <div>
      <Swiper ref={sliderRef}
       pagination={pagination}
    modules={[Pagination]}
 >

        {ITEMS.map((item) => (
            <SwiperSlide>
            <Item item={item} />
            </SwiperSlide>
          ))}
      
      </Swiper>
      <div className="prev-arrow" onClick={handlePrev} ><ArrowBackIos/></div>
      <div className="next-arrow" onClick={handleNext} ><ArrowForwardIos/></div>
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