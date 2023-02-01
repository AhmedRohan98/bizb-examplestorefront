
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
const useStyles = makeStyles({


  slider:{
  
 padding:"32px"
  },
  sliderflex:{
    display:"flex",
    alignItems:"flex-start",

  },

  slidercol:{
    display:"flex",
    flexDirection: "column",
   width:"150px",
   marginRight:"32px"
  },
  container1:{
width:"100%",
height:"100%"
  },
  container2:{
    width:"500px",
    height:"600px"
      },
      thumb:{
        height:"600px",
        width:"200px"
      },
      sliderimages:{
        height:"600px",
        width:"100%"
      },
      sliderimage:{
        height:"100%",
        width:"100%",
      
      },
      sliderimage2:{
        height:"600px",
        width:"auto"
      }
     });
 const slides = [
  {
    image: '/cart/cart1.svg',
 id:1,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for ",
 size:"large"
  },
  {
    image: '/cart/cart3.svg',
    title:"Bag for sale",
 id:2,
 price:"Rs 1200",
 newprice:"Rs 600",
 size:"large"
  },
  {
    image: '/cart/cart1.svg',
    id:3,
    price:"Rs 1200",
    newprice:"Rs 600",
    title:"Heels for sale",
    size:"large"
  },

]; 

 function MainSlider() {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
    const classes = useStyles();
  return (
    
      <Box   className={classes.slider}>
      <Grid container spacing={1} className={classes.sliderflex}>
        <Grid item xs={5} md={2} className={classes.slidercol}>
      <div className={classes.thumb}>
    
      <Swiper
                onSwiper={setImagesNavSlider}
                direction="vertical"
                spaceBetween={24}
                slidesPerView={3}
                navigation={{
                  nextEl: ".slider__next",
                  prevEl: ".slider__prev"
                }}
                className={classes.container1}
                breakpoints={{
                  0: {
                    direction: "horizontal"
                  },
                  768: {
                    direction: "vertical",
               
                  }
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
         <Grid item xs={5} md={5} className={classes.sliderimages}>
          <Swiper
              thumbs={{ swiper: imagesNavSlider }}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={32}
              mousewheel={true}
              navigation={{
                nextEl: ".slider__next",
                prevEl: ".slider__prev"
              }}
              breakpoints={{
                0: {
                  direction: "horizontal",
                  thumbs: "false"
                },
                768: {
                  direction: "horizontal"
                }
              }}
              className={classes.container2}
              modules={[Navigation, Thumbs, Mousewheel]}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={classes.sliderimage2}>
                      <img src={slide.image} alt="" className={classes.sliderimage2} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper> 
        </Grid>
     
      </Grid>
    </Box>
     
  );
}



export default MainSlider ;