import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel, Pagination } from "swiper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useRef,useCallback ,useState} from "react";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  slider: {
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down(700)]: {
      paddingTop: theme.spacing(0),
    },
  
  },
  sliderflex: {
    display: "flex",
    alignItems: "flex-start",
  },

  slidercol: {
    display: "flex",
    flexDirection: "column",
    width: "150px",
  
    display: "block",
    [theme.breakpoints.down(1100)]: {
      display: "none",

      width: "0px",
      height: "0px",
    },
  },
  container1: {
    width: "100%",
    height: "100%",
  },
  container2: {
    width: "500px",
    height: "600px",
  },
  thumb: {
    height: "600px",
    width: "200px",
    "& .swiper-slide": {
      opacity: 0.5,
      "&.swiper-slide-visible": {
        opacity: 0.5,

        "&.swiper-slide-thumb-active": {
          opacity: 1,
        },
      },
  
    },
  },
  controller:{
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
   
},
iconforwad:{
  position:"absolute",
  top:"50%",
  right:"10px",
  background:"#333333",
  color: "FDC114",
  borderRadius:"4px",
  
  zIndex: 1251
  },
  iconback:{
    position:"absolute",
    top:"50%",
    left:"10px",
    borderRadius:"4px",
  color:"FDC114",
  background:"#333333",
  
    zIndex: 1251
    },
  sliderimages: {
    height: "600px",
    width: "100%",
  },
  sliderimage: {
    height: "100%",
    width: "100%",
  },
  sliderimage2: {
    height: "600px",
    width: "507px",
  },
  size: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  size2:{
    display: "flex",
    flexDirection: "row",
  },
  price: {
    marginLeft: theme.spacing(3),
  },
  price2: {
     color:"#333333",
     opacity: 0.5,
  },
  offer: {
    display: "flex",
  marginRight:theme.spacing(10),
    background: "#E16452",
    padding: "4px",
    borderBotom: "1px solid red",
    color: "#ffffff",
  },
  sizeimage: {
    display: "flex",
    marginTop: theme.spacing(3),
    borderBottom: "1px solid #E5E5E5",
    marginBottom: theme.spacing(3),
    justifyContent: "space-evenly",
  },
  tabs: {
    borderBottom: "1px solid #E5E5E5",
  "& .tabs-active":{
    borderBottom: "1px solid #FDC114",
  }
  },
  cart: {
    height: "35px",
    width: "100%",
    borderRadius: "40px",
    background: "#FDC114",
    display: "flex",
    justifyContent: "center",

    marginTop: theme.spacing(3),
    marginBottom:theme.spacing(3)
  },
  carttext:{
    width:"450px"
  }

}));
const slides = [
  {
    image: "/cart/cart1.svg",
    id: 1,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for ",
    size: "large",
  },
  {
    image: "/cart/cart3.svg",
    title: "Bag for sale",
    id: 2,
    price: "Rs 1200",
    newprice: "Rs 600",
    size: "large",
  },
  {
    image: "/justin/justin1.svg",
    id: 1,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for ",
    size: "large",
  },
];

function MainSlider() {
  const sliderRef = useRef(null);

 
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.slider}>
      <Grid container spacing={2} className={classes.sliderflex} xs={12} md={12} sm={12} lg={12} 


  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
        <Grid item xs={0} md={2} sm={0} lg={2} className={classes.slidercol}>
          <div className={classes.thumb}>
            <Swiper
              onSwiper={setImagesNavSlider}
              direction="vertical"
              spaceBetween={24}
              slidesPerView={3}
              navigation={{
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
              }}
              className={classes.container1}
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                768: {
                  direction: "vertical",
                },
              }}
              modules={[Navigation, Thumbs]}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={classes.thumbimage}>
                      <img src={slide.image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} md={10} sm={7} lg={5} className={`${classes.sliderimages} swiper_slider`}>
          <Swiper
            thumbs={{ swiper: imagesNavSlider }}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={32}
            ref={sliderRef}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            navigation={{
              nextEl: ".slider__next",
              prevEl: ".slider__prev",
            }}
            breakpoints={{
              0: {
                direction: "horizontal",
                thumbs: "false",
              },
              768: {
                direction: "horizontal",
              },
            }}
            className={classes.container2}
            modules={[Navigation, Thumbs, Mousewheel, Pagination]}
            onRealIndexChange={(element)=>setActiveIndex(element.activeIndex)}
          >
                    <div className={classes.controller}>

{  activeIndex < slides.length-1 ?   <ArrowForwardIos className={classes.iconforwad} style={{fill: "#FDC114"}} onClick={handleNext}/>:""}
{activeIndex-0?<ArrowBackIos className={classes.iconback} style={{fill: "#FDC114"}}  onClick={handlePrev}/>:""}
</div>
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={slide.image} alt="" className={classes.sliderimage2} />
                </SwiperSlide>
              );
            })}
     
          </Swiper>
        </Grid>
        
        <Grid item xs={11} md={10} sm={6} lg={3}  >
          <div className={classes.carttext}>
          <Typography variant="subtitle1">Floral Shirt in yellow color for sale on Bizb</Typography>
          <div className={classes.size}>
            {" "}
           
           <div className={classes.size2}> <strike > <Typography gutterBottom variant="h4" className={classes.price2}>
              Rs 600
            </Typography></strike>
            <Typography gutterBottom variant="h4" className={classes.price}>
              Rs 600
            </Typography></div>
            <Typography gutterBottom variant="h4" className={classes.offer}>
              50 % OFF
            </Typography>
          </div>
          <div className={classes.sizeimage}>
            <img src="/cart/available.svg" alt="available" />
            <Typography gutterBottom variant="h4" className={classes.offr}>
              Large
            </Typography>
          </div>
          <div className={classes.cart}>
            <img component="img" src="/icons/cart.svg" />
            <Typography gutterBottom variant="h4">
              + Cart{" "}
            </Typography>
          </div>
          <TabContext value={value}>
            <TabList onChange={handleChange} className={classes.tabs}>
              <Tab label="Description" value="1" />
              <Tab label="size chart" value="2" />
            </TabList>

            <TabPanel value="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TabPanel>

            <TabPanel value="2">
              ffffffffffffffffffff voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TabPanel>
          </TabContext>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainSlider;
