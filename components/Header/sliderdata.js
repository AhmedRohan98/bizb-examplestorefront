import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { useRef, useCallback, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Story from "../Stories/story";
import Justin from "../Justin/justin";
import Typography from "@material-ui/core/Typography";
import Preloved from "../Preloved/prelovedSec";
import Appsec from "../Appsection/appsec";
import Instagram from "../Instagram/instagram";
import OurBlogs from "../Ourblogs/ourblog";
import Caloborators from "../Calloborators/calloborators";
import BizbCalloborators from "../BizbCalloborators/ bcallobrators";
import TopSelling from "../TopSelling/topselling";
const MainSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const useStyles = makeStyles((theme) => ({
   main: {
      
    marginTop: "-170px"
      
    },
    root: {
      position: "relative",
      
    },
    image: {
      height: "95vh",
      width: "100%",
      objectPosition: "top",
      objectFit: "cover",
    },
    controller: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    controllera: {
      position: "absolute",

      display: "flex",
      flexDirection: "row",
      gap: "4vh",

      right: "5vh",
    },
    controllert: {
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      gap: "5px",

      left: "5vh",
      bottom: "20px",
    },

    title: {
      color: theme.palette.reaction.reactionBlue,
      marginRight: theme.spacing(),
      borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`,
    },
    top: {
      // alignItems: "center",
      display: "flex",

      marginTop: "200px",
    },
    text: {
      fontSize: "18px",
      color: "white",
      Fontfamily: " Circular Std",
    },
    dark: {
      color: "#333333",
    },
    iconforwad: {
      height: "auto",
      color: "white",
    },
    iconback: {
      height: "auto",
      color: "white",
    },
    arrowc: {
      height: "auto",
      color: "white",
    },
    sliderr:{
      display:"none",
      [theme.breakpoints.up(900)]: {
        display:"block",
       
         }
    },
    imagedesktop:{
      display:"block",

      [theme.breakpoints.up(900)]: {
        display:"none",
 
       
         }
    },mobileima:{
      marginTop:theme.spacing(6),
      width:"100%"
    }
  }));
  const ITEMS = [
 
    {
      image: "/Desktop-images/desktop2.svg",
      id: 1,
    },
    {
      image: "/Desktop-images/desktop2.svg",
      id: 2,
    },
    {
      image: "/Desktop-images/desktop3.svg",
      id: 3,
    },
    {
      image: "/Desktop-images/desktop4.svg",
      id: 4,
    },

    {
      image: "/Desktop-images/desktop6.svg",
      id: 6,
    },
  ];
  function Item({ item }) {
    const classes = useStyles();
    return (
      <>
        <SwiperSlide>
          <img src={item.image} className={classes.image} />

          <div className={classes.controller}>
            <div className={classes.controllert}>
              {" "}
              <img src="/icons/home.svg" className={classes.ie} />
              <Typography className={classes.text}>Scroll to discover more</Typography>
            </div>
            <div className={classes.controllera}>
              {activeIndex - 0 ? <ArrowBackIos className={classes.iconback} onClick={handlePrev} /> : ""}

              <h1 className={classes.arrowc}>{`0${activeIndex + 1}`}</h1>
              <h1 className={classes.arrowc}>|</h1>
              <h1 className={classes.arrowc}>{`0${ITEMS.length}`}</h1>
              {activeIndex < ITEMS.length - 1 ? (
                <ArrowForwardIos className={classes.iconforwad} onClick={handleNext} />
              ) : (
                ""
              )}
            </div>
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
  var menu = ["Slide 1", "Slide 2", "Slide 3"];
  const classes = useStyles();
  const pagination = {
    renderCustom: (_, current, total) => {
      return <div>{`0${current + 1}`}</div>;
    },
  };

  return (
    <>
    <div className={classes.main}>
      <div className={classes.root}>
        <div className={classes.sliderr}>
        <Swiper ref={sliderRef} onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}>
          {ITEMS.map((item) => (
            <SwiperSlide>
              <Item item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className={classes.imagedesktop}><img src="/Desktop-images/mobile.svg" className={classes.mobileima} /></div>
        </div>
     
        </div>
    
    
        <Preloved />
   
  <Justin />      

     

<Story />

<BizbCalloborators />

<Appsec />

<Caloborators />
<OurBlogs />
<Instagram /> 

    </>
  );
};

export default MainSlider;




