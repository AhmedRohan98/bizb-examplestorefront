import React from "react";
import ReactImageMagnify from "react-image-magnify";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Mousewheel, Pagination } from "swiper";
const MagnifyImage = ({ product, ...rimProps }) => {
  SwiperCore.use([Navigation, Thumbs, Mousewheel, Pagination]);
  console.log("rim",{...rimProps})
  return (
    <div
     
    >
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={32}
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
        className="swiperss"
       
        modules={[Navigation, Thumbs, Mousewheel, Pagination]}
      >
        {product?.variants[0].media.map((slide, index) => {
          return (
            <SwiperSlide>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Versace",
                    isFluidWidth: true,
                    src: slide.URLs.large,
                  },
                  largeImage: {
                    src: slide.URLs.large,
                    width: 1426,
                    height: 2000,
                  },
                  lensStyle: {
                    backgroundColor: "rgba(0,0,0,.6)",
                  },
                }}
                enlargedImagePortalId="portal"
                enlargedImageContainerDimensions={{
                  width: "200%",
                  height: "150%",
                }}
              />
              {/* <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src:"/justin/justin4.svg" ,
                          },
                          largeImage: {
                           src:"/justin/justin4.svg"  ,
                            width: 1200,
                            height: 1800,
                          },
                        }}
                      /> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
  
   
  
};

export default MagnifyImage;
   