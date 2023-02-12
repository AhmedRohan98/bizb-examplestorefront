import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const Caloborators = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.reaction.gradient,
      position: "relative",
      margin: "50px",
    },
    image: {
      height: "80px",
      width: "80px",
      borderRadius: "100%",
    },
    controller: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconforwad: {
      position: "absolute",
      bottom: "82px",
      right: "20px",
      background: "#333333",
      color: "FDC114",
      borderRadius: "4px",

      zIndex: 1251,
    },
    iconback: {
      position: "absolute",
      bottom: "82px",
      left: "20px",
      borderRadius: "4px",
      color: "FDC114",
      background: "#333333",

      zIndex: 1251,
    },

    title: {
      color: theme.palette.reaction.reactionBlue,
      marginRight: theme.spacing(),
      borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`,
    },
    box: {
      display: "flex",
      flexDirection: "column",
    },
    dark: {
      color: "#333333",
    },
    main: {
      width: "100%",
    },
    mainheading: {
      paddingTop: "30px",
      paddingLeft: "50px",
    },
  }));
  const ITEMS = [
    {
      image: "/stories/story.svg",
      id: 1,
      title: "Charizma Store",
    },
    {
      image: "/stories/story1.svg",
      id: 2,
      title: "Charizma Store",
    },
    {
      image: "/stories/story2.svg",
      id: 3,
      title: "Charizma Store",
    },
    {
      image: "/stories/story.svg",
      id: 4,
      title: "Charizma store",
    },
    {
      image: "/stories/story.svg",
      id: 5,
      title: "Charizma Store",
    },
    {
      image: "/stories/story2.svg",
      id: 6,
      title: "Charizma Store",
    },
    {
      image: "/stories/story2.svg",
      id: 7,
      title: "Charizma Store",
    },
    {
      image: "/stories/story.svg",
      id: 8,
      title: "Charizma Store",
    },
    {
      image: "/stories/story.svg",
      id: 9,
      title: "Charizma Store",
    },
    {
      image: "/stories/story2.svg",
      id: 10,
      title: "Charizma Store",
    },
  ];

  function Item({ item }) {
    const classes = useStyles();
    return (
      <>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={item.image} className={classes.image} />
            <h4>{item.title}</h4>
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
  return (
    <div className={classes.main}>
      <div className={classes.mainheading}>
        <Typography variant="h3">Collaborators</Typography>
      </div>
      <div className={classes.root}>
        <Swiper
          ref={sliderRef}
          breakpoints={{
            1200: {
              width: 1200,
              slidesPerView: 8,
            },
            1000: {
              width: 1000,
              slidesPerView: 7,
            },

            800: {
              width: 800,
              slidesPerView: 5,
            },
            600: {
              width: 800,
              slidesPerView: 3,
            },
          }}
          onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
        >
          {" "}
          <div className={classes.controller}>
            {activeIndex < ITEMS.length - 1 ? (
              <ArrowForwardIos className={classes.iconforwad} style={{ fill: "#FDC114" }} onClick={handleNext} />
            ) : (
              ""
            )}
            {activeIndex - 0 ? (
              <ArrowBackIos className={classes.iconback} style={{ fill: "#FDC114" }} onClick={handlePrev} />
            ) : (
              ""
            )}
          </div>
          {ITEMS.map((item) => (
            <SwiperSlide key={item.id}>
              <Item item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Caloborators;
