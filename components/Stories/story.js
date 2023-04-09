import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState, useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import useGetAllSeller from "../../hooks/sellers/useGetAllSeller";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Storyslider from "./storiesslide";
const Story = (props) => {
  // console.log("all props....", props);
  const [sellers, loading, refetch] = useGetAllSeller();
  useEffect(() => {
    console.log("Sellers All", sellers);
  }, [sellers]);
  const catagories = props?.nodes;
  const catgormobile = catagories?.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);
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
      position: "absolute",
      bottom: "60px",
      right: "20px",
      background: "#333333",
      color: "FDC114",
      borderRadius: "4px",
      cursor: "pointer",
      zIndex: 1251,
    },
    iconback: {
      position: "absolute",
      bottom: "60px",
      left: "20px",
      borderRadius: "4px",
      color: "FDC114",
      background: "#333333",
      cursor: "pointer",
      zIndex: 1251,
    },
    catgorytag: {
      display: "flex",
      flexDirection: "row",
      marginTop: theme.spacing(3),
      [theme.breakpoints.down(700)]: {
        display: "none",
        marginTop: theme.spacing(0),
      },
    },
    catgorytagm: {
      display: "none",

      [theme.breakpoints.down(700)]: {
        display: "flex",
        flexDirection: "row",
        marginTop: theme.spacing(3),
      },
    },
    title: {
      color: theme.palette.reaction.reactionBlue,
      marginRight: theme.spacing(),
      borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`,
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      allignItems: "center",
      width: "120px",
    },
    catagoriesinactive: {
      color: "#000000",
      cursor: "pointer",
      marginRight: theme.spacing(3),
    },
    catagoriesactive: {
      color: "#FDC114",
      textDecoration: "line-through",
      WebkitTextDecorationThickness: "4x" /* set thickness to 2 pixels for webkit-based browsers */,
      textDecorationThickness: "4px",
      textDecorationColor: "rgba(51,51,51,0.15)",
      marginRight: theme.spacing(3),
      "&:hover": {
        color: "#FDC114",
      },
    },
    dark: {
      color: "#333333",
    },
    main: {
      background: "#EAE7FF",
      width: "100%",
    },
    mainheading: {
      paddingTop: "30px",
      paddingLeft: "50px",
    },
    heading: {
      display: "flex",
      justifyContent: "center",
      allignItems: "center",
      marginTop: theme.spacing(2),
    },
    storeName:{
      color:"black"
    }
  }));
  const ITEMS = [
    {
      image: "/stories/story.svg",
      id: 1,
      title: "Charizma Store",
      Catagory: "Juniors",
      store: "Charizma Store",
    },
    {
      image: "/stories/story1.svg",
      id: 2,
      title: "Charizma Store",
      Catagory: "Juniors",
      store: "Westrn",
    },
    {
      image: "/stories/story2.svg",
      id: 3,
      title: "Charizma Store",
      Catagory: "Casuals",
      store: "Charizma Store",
    },
    {
      image: "/stories/story.svg",
      id: 4,
      title: "Charizma store",
      Catagory: "Party Wear",
      store: "Charizma Store",
    },
    {
      image: "/stories/story.svg",
      id: 5,
      title: "Charizma Store",
      Catagory: "Shoes",
      store: "Charizma Store",
    },
    {
      image: "/stories/story2.svg",
      id: 6,
      title: "Charizma Store",
      Catagory: "Accessories",
      store: "Charizma Store",
    },
    {
      image: "/stories/story2.svg",
      id: 7,
      title: "Westrn",
      Catagory: "Western",
      store: "Charizma Store",
    },
    {
      image: "/stories/story.svg",
      id: 8,
      title: "Westrn",
      Catagory: "Western",
      store: "Charizma Store",
    },
    {
      image: "/stories/story.svg",
      id: 9,
      title: "Charizma Store",
      Catagory: "Western",
      store: "Western",
    },
    {
      image: "/stories/story2.svg",
      id: 10,
      title: "Western",
      store: "Western",
      Catagory: "Westrn",
    },
  ];
  const itemData = [
    {
      image: "/justin/justin1.svg",
      store: "Westrn",
      id: 1,
      title: "new",

      size: "large",
    },
    {
      image: "/justin/justin2.svg",
      title: "jwellry",
      store: "Westrn",
      id: 2,
      size: "large",
    },
    {
      image: "/justin/justin3.svg",
      id: 3,
      title: "Heels for sale",
      store: "Charizma Store",
      size: "large",
    },
    {
      image: "/justin/justin4.svg",
      id: 4,
      title: "floral shirt for",
      store: "Charizma Store",
      size: "large",
    },
    {
      image: "/justin/justin1.svg",
      id: 5,
      title: "floral shirt for",
      store: "Charizma Store",
      size: "large",
    },
    {
      image: "/justin/justin2.svg",
      id: 6,
      title: "Bag for sale",
      store: "Charizma Store",
      size: "large",
    },
    {
      image: "/justin/justin3.svg",
      id: 7,
      title: "Heels for sale",
      store: "Charizma Store",
      size: "large",
    },
    {
      image: "/justin/justin4.svg",
      id: 8,
      title: "floral shirt for",
      store: "Charizma Store",
      size: "large",
    },
    {
      image: "/justin/justin1.svg",
      id: 9,
      title: "floral shirt for",
      size: "large",
      store: "Charizma Store",
    },
    {
      image: "/justin/justin2.svg",
      id: 10,
      title: "Bag for sale",
      store: "Charizma Store",
      size: "large",
    },
    {
      image: "/justin/justin3.svg",
      id: 11,
      title: "Heels for sale",
      store: "Westrn",
      size: "large",
    },
    {
      image: "/justin/justin4.svg",
      id: 12,
      title: "floral shirt for",
      store: "Westrn",
      size: "large",
    },
    {
      image: "/justin/justin1.svg",
      store: "Westrn",
      id: 13,
      title: "floral shirt for",
      size: "large",
    },
    //   {
    //     image: '/justin/justin2.svg',
    //  id:14,
    //  title:"Bag for sale",
    //  store:"Westrn",
    //  size:"large",
    //  size:"large"
    //   },
    //   {
    //     image: '/justin/justin3.svg',
    //  id:15,
    //  title:"Heels for sale",

    //  store:"Westrn",
    //  size:"large"
    //   },
    //   {
    //     image: '/justin/justin4.svg',
    //  id:16,
    //  title:"floral shirt for",
    //  store:"Westrn",
    //  size:"large"
    //   },
  ];

  function Filter({ name, onClick, active }) {
    return (
      <Typography
        onClick={onClick}
        variant="h4"
        className={active ? classes.catagoriesactive : classes.catagoriesinactive}
      >
        {name}
      </Typography>
    );
  }
  const [resouce, setResource] = useState("OUR PRODUCTS");
  const [filter, setFilter] = useState(catagories?.[0]?.displayTitle || catgormobile?.[0]?.displayTitle);
  const [filterproducts, setFilterProducts] = useState(null);
  const filteredItems = !filter ? ITEMS : ITEMS.filter((item) => item.Catagory.includes(filter));
  const filteredproducts = !filterproducts ? itemData : itemData.filter((item) => item.store.includes(filterproducts));
  // console.log(filteredItems, "dddddddddddddddddddddd");
  function Item({ item }) {
    const classes = useStyles();
    console.log(item.storeName,"name")
    return (
      <>
        <SwiperSlide>
          <div className={classes.box}>
            <img
              src={!item?.picture || !item?.picture ? "/stories/story2.svg" : item?.picture}
              className={classes.image}
            />
            <Typography style={{ marginLeft: "10px" }} variant="h4" className="storename">
              {item.storeName}
            </Typography>
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
        <Typography variant="h3">STORES</Typography>
        <div className={classes.catgorytag}>
          {catagories?.map((filterName) => (
            <Filter
              name={filterName.displayTitle}
              onClick={() => setFilter(filterName.displayTitle) + setResource(filterName.displayTitle)}
              active={filterName.displayTitle === filter}
            />
          ))}
        </div>
        <div className={classes.catgorytagm}>
          {sellers?.map((filterName) => (
            <Filter
              name={filterName.displayTitle}
              onClick={() => setFilter(filterName.displayTitle) + setResource(filterName.displayTitle)}
              active={filterName.displayTitle === filter}
            />
          ))}
        </div>
      </div>

      <div className={classes.root}>
        <Swiper
          ref={sliderRef}
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
          {sellers.map((item) => (
            <SwiperSlide
              key={item.id}
              onClick={() => setFilterProducts(item.store)}
              active={item.store === filterproducts}
            >
              <Item item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Storyslider itemData={filteredproducts} />
      </div>
    </div>
  );
};

export default Story;
