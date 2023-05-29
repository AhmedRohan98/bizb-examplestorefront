import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Story from "../Stories/story";
import Justin from "../Justin/justin";
import Typography from "@material-ui/core/Typography";
import Preloved from "../Preloved/prelovedSec";
import Appsec from "../Appsection/appsec";
import Instagram from "../Instagram/instagram";
import SwiperCore, {  Pagination, Autoplay ,Navigation} from "swiper";
import OurBlogs from "../Ourblogs/ourblog";
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
    // scroll: {

    // } ,

    image: {
      height: "80vh",
      width: "100%",
      objectPosition: "top",
      objectFit: "cover",
    },
    controller: {
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",

      background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
      mixBlendMode: "pass-through",
      zIndex: 9999,
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
      width: "300px",
      bottom: "40px",
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

      Fontfamily: "Circular Std",
    },
    dark: {
      color: "#333333",
    },
    iconforwad: {
      cursor: "pointer",
      height: "auto",
      color: "white",
      position: "absolute",
      right: "2px",
    },
    iconback: {
      cursor: "pointer",
      height: "auto",
      color: "white",
      zIndex: 9999,
      position: "absolute",
      left: "2px",
    },
    arrowc: {
      height: "auto",
      color: "white",
    },
    sliderr: {
      display: "none",
      position: "relative",
      width: "100%",
      [theme.breakpoints.up(900)]: {
        display: "block",
        position: "relative",
        width: "100%",
      },
    },
    imagedesktop: {
      display: "block",
      [theme.breakpoints.up(900)]: {
        display: "none",
      },
    },
    swiperpaggination: {
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
    topheaderfor: {
      backgroundImage: "linear-gradient(180deg, #000000 34.9%, rgba(0, 0, 0, 0) 100%) !important",
      opacity: "0.7 !important",
      position: "absolute",
      top: "0vh",
      width: "100%",
      height: "170px",
      zIndex: 1200,
    },
  }));
  const ITEMS = [
    {
      image: "/Desktop-images/desktop1.webp",
      id: 1,
    },
    {
      image: "/Desktop-images/desktop2.webp",
      id: 2,
    },
    {
      image: "/Desktop-images/desktop3.webp",
      id: 3,
    },
    {
      image: "/Desktop-images/desktop4.webp",
      id: 4,
    },

    {
      image: "/Desktop-images/desktop5.webp",
      id: 6,
    },
  ];
  function Item({ item }) {
    const classes = useStyles();

    return (
      <>
        <SwiperSlide>
          <img src={item.image} className={classes.image} />
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
                    <img
                      style={{ marginRight: "12px" }}
                      src="/icons/scrolltodiscovermore.webp"
                      className={classes.ie}
                    />
                    <Typography style={{ fontFamily: "Circular Std" }} className={classes.text}>
                      Scroll to discover more
                    </Typography>
                  </div>
                </Link>
              </div>
            </div>
            <Swiper
              onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
              autoplay
              ref={sliderRef}
              modules={[Pagination, Autoplay, Navigation]}
              pagination={true}
              className={classes.swiperpaggination}
            >
              {ITEMS.map((item) => (
                <SwiperSlide>
                  <Item item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={classes.imagedesktop}>
            <img src="/Desktop-images/mobile.webp" className={classes.mobileima} />
          </div>
        </div>
      </div>

      <Preloved {...props} />

      <Story {...props} />
      <Justin {...props} />

      {/* <Story {...props} />

      <BizbCalloborators />

  

    
      <OurBlogs />
      <Instagram {...props} /> 
     <Caloborators />  */}
    </>
  );
};

export default MainSlider;
