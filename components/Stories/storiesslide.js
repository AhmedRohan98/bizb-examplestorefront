import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState,useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Box from "@material-ui/core/Box";

const Storyslider = ({ itemData ,cart,sellerss}) => {
 
 
 
   
   const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const updatedItems = cart?.item?.map((item) => {
      const isItemInCart = sellerss?.some((product) => {
        return item.productConfiguration?.productId === product?.node.product?.productId;
      });
      return {
        ...item,
        disabled: item.inCart || isItemInCart,
      };
    });
    console.log(updatedItems, "all");
    // do something with updatedItems
  }, [cart?.item, sellerss]);
  const useStyles = makeStyles((theme) => ({
  
   
    typography: {
      background: "#333333",
      opacity: "15%",
      height: "4px",

      width: "200px",
    },
    main: {
      margin: "3vh",
    },
    text: {
      position: "absolute",
      bottom: 60,
    },
    header: {
      height: "50px",
    },

    headermain: {
      display: "flex",
      justifyContent: "space-between",
    },
    image: {
      width: "290px",
      borderRadius: "10px",
    },
    size: {
      display: "flex",
      flexDirection: "row",
    },
    price: {
      marginLeft: "20px",
    },
    rootimg: {
      position: "relative",
    },
    cart: {
      height: "35px",
      width: "84px",
      borderRadius: "40px",
      background: "#FDC114",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      bottom: "15px",
      left: "10px",
      position: "absolute",
      transition: "all 0.2s linear",
      "&:hover": {
        transform: "scale(1.08)",
        transition: "left 0.2s linear",
        background: "#FDC114",
      },
    },
    controller: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconforwad: {
      position: "absolute",
      bottom: "332px",
      right: "10px",
      background: "#333333",
      color: "FDC114",
      borderRadius: "4px",
      cursor: "pointer",
      zIndex: 1251,
    },
    iconback: {
      position: "absolute",
      bottom: "332px",
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
    },
    dark: {
      color: "#333333",
    },
    main: {
      width: "100%",
      padding: "75px",
      [theme.breakpoints.down("xs")]: {
        padding: "0",
      },
    },
    cardaction: {
      height: 312,
      width: 312,
    },
    root: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    gridroot: {
      width: "100%",
      display: "flex",
      alignItems: "baseline",
      position: "relative",
      justifyContent: "space-between",
    },
    typography: {
      background: "#333333",
      opacity: "15%",
      height: "8px",
      width: "180px",
    },
    text: {
      position: "absolute",
      bottom: 60,
    },
    header: {
      height: "50px",
      position: "relative",
    },
    headermain: {
      display: "flex",
      justifyContent: "space-between",
    },
    image: {
      width: "312px",
      maxHeight: "450px",
      objectFit: "cover",
      borderRadius: "10px",
      cursor: "pointer",
    },
    size: {
      display: "flex",
      flexDirection: "row",
      marginLeft: theme.spacing(1),
    },
    cartimage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    carttitle: {
      display: "flex",
      marginLeft: theme.spacing(1),
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    price: {
      marginLeft: "20px",
      fontWeight: "700",
      fontSize: "20px",
    },
    rootimg: {
      position: "relative",
      display: "inline-grid",
      width: "312px",

      maxWidth: "312px",
      marginLeft: "10px",
      marginRight: "10px",
    },
    cartbackground: {
      background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
      borderRadius: "0px 0px 16px 16px",
      alignItems: "center",
      justifyContent: "initial",
      height: "75px",
      width: "100%",
      bottom: "20%",
      display: "inline-grid",
      width: "100%",
      marginTop: " -75px",
      padding: "13px 20px",
    },
    cart: {
      height: "35px",
      width: "84px",
      borderRadius: "40px",
      background: "#FDC114",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderColor: "none",
      zIndex: 1200,
      transition: "all 0.2s linear",
      "&:hover": {
        transform: "scale(1.08)",
        transition: "left 0.2s linear",
        background: "#FDC114",
      },
    },
    explore: {
      position: "absolute",
      top: "6px",
      right: "10px",
      color: "#FDC114",
      zIndex: 900,
    },
    maintitle: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "312px",
      flexDirection: "column",
    },
    spanofnextword: {
      color: "#FDC114",
    },
    toast: {
      background: "green",
      color: "white",
    },
  }));

  // console.log(itemData, "nwwwwwwwwwwwwwwwww");

  function Item({ item }) {
    const classes = useStyles();

    return (
      <>
      
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
    <div className={classes.root}>
      <Swiper
        ref={sliderRef}
        breakpoints={{
          1500: {
            width: 1500,
            slidesPerView: 4,
          },
          1200: {
            width: 1200,
            slidesPerView: 4,
          },
          1000: {
            width: 1000,
            slidesPerView: 3,
          },

          800: {
            width: 800,
            slidesPerView: 2,
          },
          600: {
            width: 600,
            slidesPerView: 1,
          },
        }}
        onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
      >
        {" "}
        <div className={classes.controller}>
          {activeIndex - 0 ? (
            <ArrowBackIos className={classes.iconback} style={{ fill: "#FDC114" }} onClick={handlePrev} />
          ) : (
            ""
          )}
        </div>
        <Grid />
        <div className={classes.root}>
          <Grid
            container
            className={classes.gridroot}
            align="center"
            justify="space-between"
            alignItems="center"
          ></Grid>
          {sellerss ? sellerss?.map((item) => {
            const cartitem = cart?.items;
            const isDisabled = cartitem?.some((data) => {
              return data.productConfiguration.productId === item?.node?.product?.productId;
            });
            // console.log(item?.node?.product?.productId, "ssss", cart?.items[0]?.productConfiguration?.productId);
            const optionTitle = item?.node?.product?.variants[0]?.optionTitle;
            const validOptionTitle = optionTitle ? optionTitle?.replace(/'/g, '"') : null;
            const size = validOptionTitle ? JSON?.parse(validOptionTitle)?.size : null;
            return (
              <SwiperSlide key={item.id}>
                <Grid item lg={3} sm={6} md={4} xs={12} className={classes.rootimg}>
                  <Link
                    href={item.node.product.slug && "en/product/[...slugOrId]"}
                    as={item.node.product.slug && `en/product/${item.node.product.slug}`}
                  >
                    <img
                      src={
                        !item?.node?.product?.media || !item?.node?.product?.media[0]?.URLs
                          ? "/justin/justin4.svg"
                          : item?.node?.product?.media[0]?.URLs?.large
                      }
                      className={classes.image}
                      key={item?.node?.product?.id}
                      alt={"hhhh"}
                    />
                  </Link>
                  <div className={classes.cartbackground}>
                    <Button
                      className={classes.cart}
                      onClick={() => handleOnClick(item?.node?.product, item?.node?.product?.variants[0])}
                      disabled={isDisabled}
                    >
                      {/* {isLoading && <PageLoading />} */}
                      <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                      <Typography
                        style={{ fontFamily: "Ostrich Sans Black", fontSize: "18px" }}
                        variant="h5"
                        component="h2"
                      >
                        {isDisabled ? "Added" : "+ Cart"}
                      </Typography>
                    </Button>
                  </div>
                  <Box className={classes.maintitle}>
                    <Typography
                      style={{ fontWeight: "700", fontSize: "24px" }}
                      gutterBottom
                      variant="h4"
                      component="h2"
                      className={classes.carttitle}
                    >
                      {item.node.product.title}
                    </Typography>
                    <div className={classes.size}>
                      <Typography
                        style={{ fontWeight: "700", fontSize: "24px", fontFamily: "lato" }}
                        gutterBottom
                        variant="h4"
                      >
                        Size :
                      </Typography>
                      <Typography
                        style={{ fontWeight: "700", fontSize: "24px", fontFamily: "lato", marginLeft: "10px" }}
                        gutterBottom
                        variant="h4"
                      >
                        {size}
                      </Typography>
                    </div>
                    <div className={classes.size}>
                      {" "}
                      <strike>
                        {item?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice.displayAmount
                          ?.replace(/\.00$/, "")
                          .replace(/\$/g, "RS ")}
                      </strike>
                      <Typography gutterBottom variant="h5" className={classes.price}>
                        {item?.node?.product?.variants[0]?.pricing[0]?.displayPrice
                          ?.replace(/\.00$/, "")
                          .replace(/\$/g, "RS ")}
                      </Typography>
                    </div>
                  </Box>
                </Grid>
              </SwiperSlide>
            );
          }) : ""}
        </div>
      </Swiper>
      {/* {activeIndex <sellerss?.length + 1 ? (
        <ArrowForwardIos className={classes.iconforwad} style={{ fill: "#FDC114" }} onClick={handleNext} />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Storyslider;
