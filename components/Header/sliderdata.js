
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
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
        width:"200px",
        "& .swiper-slide":{
          opacity:0.5,
          "&.swiper-slide-visible":{
            opacity:0.5,
       
              "&.swiper-slide-thumb-active":{
                opacity:1,
              
            }
          },
        
    //  "& .swiper-slide-thumb":{
    //   "& .swiper-slide-next":{
    //     "& .swiper-slide-thumb-active":{
    //       opacity:1,
          
    //               },
    //   }
    //  }
         
      
               
        },
      
        
        
      },
   
      sliderimages:{
        height:"600px",
        width:"100%",
     
      },
      sliderimage:{
        height:"100%",
        width:"100%",
        
      
      },
      sliderimage2:{
        height:"600px",
        width:"auto"
      },
      size:{
   
        display:"flex",
        flexDirection: "row",
        
          },
          price:{
          
           marginLeft:"20px"
             },
             offer:{
              display:"flex",
              marginLeft: "170px",
              background:"#E16452",
              padding:"4px",
              borderBotom:"1px solid red",
              color:"#ffffff"
             },
             sizeimage:{
              display:"flex",
              marginTop:"10px",
              borderBottom: "1px solid #E5E5E5" ,
              marginBottom:"10px",
              justifyContent:"space-between"            
            
            },
            tabs:{
              borderBottom: "1px solid #E5E5E5" ,  
            },
            cart:{
              height:"35px",
              width:"100%",
              borderRadius:"40px",
              background:"#FDC114",
              display:"flex",
              justifyContent:"center",
          
              padding:"3px"
   
              
               },
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
    image: '/justin/justin1.svg',
 id:1,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for ",
 size:"large"
  },


]; 

 function MainSlider() {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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
                        <img src={slide.image} alt=""  />
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
        
                      <img src={slide.image} alt="" className={classes.sliderimage2} />
                    
                  </SwiperSlide>
                );
              })}
            </Swiper> 
          
        </Grid>
        <Grid item xs={4} md={4} className={classes.carttext} >
<Typography  variant="subtitle1">Floral Shirt in yellow color for sale
on Bizb</Typography>
<div className={classes.size}>    <strike variant="h4">Rs 600</strike> 
          
          <Typography gutterBottom variant="h4" className={classes.price}>
          Rs 600
            </Typography>
            <Typography gutterBottom variant="h4"  className={classes.offer}>
                50 % OFF
                   </Typography>
            </div>
          <div  className={classes.sizeimage} >
            <img src="/cart/available.svg" alt="available" />
            <Typography gutterBottom variant="h4"  className={classes.offr}>
              Large
                   </Typography>
          </div>
          <div className={classes.cart}>
        <img
          component="img"
         
        src="/icons/cart.svg"
        />
          <Typography gutterBottom variant="h4" >
          + Cart          </Typography>
        </div> 
        <TabContext value={value} >
        <TabList onChange={handleChange} className={classes.tabs}>
            <Tab label="Description" value="1" />
            <Tab label="size chart" value="2" />
         
          </TabList>
        
        <TabPanel value="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TabPanel>
       
        <TabPanel value="2">ffffffffffffffffffff voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TabPanel>
      </TabContext>
        </Grid>
      </Grid>
    </Box>
     
  );
}



export default MainSlider ;