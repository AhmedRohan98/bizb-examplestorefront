import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import SwiperCore, { Autoplay } from "swiper";
import useGetAllSeller from "../../hooks/sellers/useGetAllSeller";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const Caloborators = () => {
  const [sellers, loading, refetch] = useGetAllSeller();
  const [activeIndex, setActiveIndex] = useState(0);

  SwiperCore.use([Autoplay]);
  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.reaction.gradient,
      position: "relative",
      margin: "50px",
    },
    image: {
      height: "100px",
      display: "flex",
      allignItems: "center",
      justifyContent: "center",
      width: "100px",
      margin: "10px",
      borderRadius: "100%",
      transition: ".3s ease-in-out",
      "&:hover": {
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        transition: ".3s ease-in-out",
        margin: "0px",
        marginBottom: "10px",
        height: "110px",
        width: "110px",
      },
    },
    controller: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconforwad: {
      cursor: "pointer",
      position: "absolute",
      bottom: "90px",
      right: "20px",
      background: "#333333",
      color: "FDC114",
      borderRadius: "4px",
      cursor: "pointer",
      zIndex: 1251,
    },
    iconback: {
      position: "absolute",
      bottom: "90px",
      left: "20px",
      borderRadius: "4px",
      color: "FDC114",
      background: "#333333",
      cursor: "pointer",
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
      allignItems: "start",
      justifyContent: "start",
      width: "122px",
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
    swiperslide: {
      display: "flex",
      allignItems: "center",
      justifyContent: "center",
    },
  }));

  function Item({ item }) {
    const classes = useStyles();
    return (
      <>
        <SwiperSlide>
          <div className={classes.box}>
            <img
              src={!item?.picture || !item?.picture ? "/stories/story2.svg" : item?.picture}
              className={classes.image}
            />
            <Typography style={{ textAlign: "center", marginBottom:"20px" ,marginTop:"10px"}} variant='h5'>{item.storeName}</Typography>
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
//  console.log("active index is ", activeIndex);
//  console.log("active index sellerlength", sellers?.length); 
const lastIndex = sellers?.length - 1;

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.mainheading}>
        <Typography variant="h3">Collaborators</Typography>
      </div>

      <div className={classes.root}>
        <Swiper
          ref={sliderRef}
          autoplay={{ delay: 3000 }}
          loop={false}
          breakpoints={{
            1600: {
              width: 1600,
              slidesPerView: 7,
            },
            1200: {
              width: 1200,
              slidesPerView: 6,
            },
            1000: {
              width: 1000,
              slidesPerView: 5,
            },

            800: {
              width: 800,
              slidesPerView: 5,
            },
            600: {
              width: 800,
              slidesPerView: 4,
            },
            400: {
              width: 800,
              slidesPerView: 3,
            },
          }}
          onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
        >
          <div className={classes.controller}>
            { lastIndex -1 && (
              <ArrowForwardIos className={classes.iconforwad} style={{ fill: "#FDC114" }} onClick={handleNext} />
            )}

            {activeIndex - 0 ? (
              <ArrowBackIos className={classes.iconback} style={{ fill: "#FDC114" }} onClick={handlePrev} />
            ) : (
              ""
            )}
          </div>
          {sellers?.map((item) => (
            <SwiperSlide key={item.id} className={classes.swiperslide}>
              <Item item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Caloborators;
