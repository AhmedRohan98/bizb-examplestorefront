import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
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
import { Link } from "react-scroll";

const MainSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const products = props?.catalogItems;
  SwiperCore.use([Autoplay]);
  // console.log(props, "new products");
  const useStyles = makeStyles((theme) => ({
    main: {
      marginTop: "-170px",
    },

    root: {
      position: "relative",
    },
    // scroll: {

    // } ,

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
      Fontfamily: "Circular Std",
    },
    dark: {
      color: "#333333",
    },
    iconforwad: {
      cursor: "pointer",
      height: "auto",
      color: "white",
    },
    iconback: {
      cursor: "pointer",
      height: "auto",
      color: "white",
    },
    arrowc: {
      height: "auto",
      color: "white",
    },
    sliderr: {
      display: "none",
      [theme.breakpoints.up(900)]: {
        display: "block",
      },
    },
    imagedesktop: {
      display: "block",
      [theme.breakpoints.up(900)]: {
        display: "none",
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

          <div className={classes.controller}>
            <div className={classes.topheaderfor}></div>
            <div className={classes.controllert}>
              <Link to="target-element" smooth={true} duration={2000}>
                {" "}
                <div style={{ display: "flex", cursor: "pointer" }}>
                  <img style={{ marginRight: "12px" }} src="/icons/home.webp" className={classes.ie} />
                  <Typography style={{ fontFamily: "Circular Std" }} className={classes.text}>
                    Scroll to discover more
                  </Typography>
                </div>
              </Link>
            </div>
            <div className={classes.controllera}>
              {activeIndex - 0 ? <ArrowBackIos className={classes.iconback} onClick={handlePrev} /> : ""}
              <div style={{ display: "flex" }}>
                <h1 className={classes.arrowc}>{`0${activeIndex + 1}`}</h1>
                <h1 style={{ marginRight: "5px", marginLeft: "5px" }} className={classes.arrowc}>
                  |
                </h1>
                <h1 className={classes.arrowc}>{`0${ITEMS.length}`}</h1>
              </div>

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
            <Swiper ref={sliderRef} onRealIndexChange={(element) => setActiveIndex(element.activeIndex)} autoplay>
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

      <Justin {...props} />

      {/* <Story {...props} /> */}

      {/* <BizbCalloborators /> */}

      <Appsec />

      {/* <Caloborators /> */}
      {/* <OurBlogs /> */}
      {/* <Instagram {...props} /> */}
    </>
  );
};

export default MainSlider;
