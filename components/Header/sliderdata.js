import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Story from "../Stories/story";
import Justin from "../Justin/justin";
import Typography from "@material-ui/core/Typography";
import Preloved from "../Preloved/prelovedSec";
import Appsec from "../Appsection/appsec";
import Instagram from "../Instagram/instagram";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import OurBlogs from "../Ourblogs/ourblog";
import ScrollingMessage from "../ScrollingMessage/ScrollingMessage";

import Caloborators from "../Calloborators/calloborators";
import BizbCalloborators from "../BizbCalloborators/ bcallobrators";
import TopSelling from "../TopSelling/topselling";
import { Link } from "react-scroll";

const MainSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const products = props?.catalogItems;
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  // console.log(props, "new products");
  const useStyles = makeStyles((theme) => ({
    main: {
      marginTop: "25px",
    },
    root: {
      position: "relative",
    },
    image: {
      height: "100%",
      width: "100%",
      objectPosition: "top",
      objectFit: "cover",
    },
    controller: {
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      mixBlendMode: "pass-through",
      zIndex: 2,
      opacity: 1,
      width: "100%",
      bottom: "5px",
      height: "170px",
    },
    controllert: {
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      zIndex: 9998,
      // width: "300px",
      bottom: "40px",
      [theme.breakpoints.down(900)]: {
        top: "84%",
        left:"30%"
      },
    },
    text: {
      fontSize: "18px",
      color: "white",
      [theme.breakpoints.down(900)]: {
        fontSize: "12px",
        alignSelf:"center"
      },
    },
    sliderr: {
      display: "none",
      position: "relative",
      width: "100%",

      display: "block",
      position: "relative",
      width: "100%",
    },
    imagedesktop: {
      display: "block",
      [theme.breakpoints.up(900)]: {
        display: "none",
      },
    },
    swiperPagination: {
      "& .swiper-pagination": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        marginLeft: "60px",
        justifyContent: "center",
        transition: "0.3s opacity",
        zIndex: 10,
      },
      "& .swiper-pagination-bullet": {
        width: "20px",
        marginTop: "12px",
        marginBottom: "12px",
        height: "20px",
        background: "none",
        color: "none",
        border: "1px solid black",
        opacity: 1,
        [theme.breakpoints.down("xs")]: {
          display: "none",
        },
        // Add spacing at the top
      },
      "& .swiper-pagination-bullet-active": {
        width: "20px",
        height: "20px",
        marginTop: "12px",
        marginBottom: "12px",
        transition: "width 0.5s",
        background: "black",
        opacity: 1,
      },
    },
    mobileima: {
      marginTop: theme.spacing(6),
      width: "100%",
    },
  }));
  const ITEMS = [
    {
      image: "/profile/seller2.jpg",
      id: 1,
    },
    {
      image: "/Desktop-images/desktop11.png",
      id: 2,
    },
    {
      image: "/Desktop-images/desktop2.png",
      id: 3,
    },
   
    {
      image: "/Desktop-images/desktop4.jpg",
      id: 4,
    },
  ];
  function Item({ item }) {
    const classes = useStyles();
    return (
      <>
        <SwiperSlide>
          <img src={item.image} className={classes.image} alt="image"/>
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
  return (
    <>
      <div className={classes.main}>
        <div className={classes.root}>
          <div className={classes.sliderr}>
            <div className={classes.controller}>
              <div className={classes.controllert}>
                <Link to="target-element" smooth={true} duration={2000}>
                  {" "}
                  <div style={{ display: "flex", cursor: "pointer" }}>
                    <img style={{ marginRight: "12px" }} src="/icons/scrolltodiscovermore.webp"  alt="icons"/>
                    <Typography style={{ fontFamily: "Circular Std" }} className={classes.text}>
                      Scroll to discover more
                    </Typography>
                  </div>
                </Link>
              </div>
            </div>
            <Swiper
              onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
              autoplay={{
                delay: 2000,
              }}
              ref={sliderRef}
              // direction="vertical"
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ clickable: true }}
              className={classes.swiperPagination}
            >
              {ITEMS.map((item) => (
                <SwiperSlide>
                  <Item item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className={classes.imagedesktop}>
            <img src="/Desktop-images/mobile.webp" className={classes.mobileima} />
          </div> */}
        </div>
      </div>
      <Preloved {...props} />
      <Justin {...props} />
      <Story {...props} />
      <BizbCalloborators />
      <Appsec />
      {/* <Caloborators /> */}
      <OurBlogs />
      <Instagram {...props} />
    </>
  );
};
export default MainSlider;
