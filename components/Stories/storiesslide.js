import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState, useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import Box from "@material-ui/core/Box";
import { CircularProgress } from "@material-ui/core";
import inject from "hocs/inject";
import variantById from "lib/utils/variantById";
import { ToastContainer, toast } from "react-toastify";
const Storyslider = (props) => {
  const { uiStore, routingStore, itemData, cart, sellerss, addItemsToCart, storeId, show } = props;
  console.log(props, "props");
  // const storeId = props.sellerss[0]?.node?._id;
  console.log("storeId", storeId);
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  const [isLoading, setIsLoading] = useState({});
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
  }, [cart?.item, sellerss]);
  const useStyles = makeStyles((theme) => ({
    typography: {
      background: "#333333",
      opacity: "15%",
      height: "4px",
      width: "200px",
    },
    text: {
      position: "absolute",
      bottom: 60,
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "30px",
      height: "50px",
      position: "relative",
    },
    headermain: {
      display: "flex",
      justifyContent: "space-between",
    },
    image2: {
      width: "320px",
      height: "231px",
      objectFit: "cover",
      // objectPosition: "center",
      borderRadius: "10px",
      cursor: "pointer",
    },
    size: {
      display: "flex",
      flexDirection: "row",
      marginLeft: theme.spacing(1),
    },
    sizes: {
      height: "30px",
      width: "30px",
      marginLeft: "12px",
      fontFamily: "lato",
      fontStyle: "semibold",
      fontSize: "12px",
      display: "flex",
      color: "#FDC114",
      justifyContent: "center",
      border: "1px solid #000000",
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
    carttitle2: {
      display: "flex",
    },
    cartcontent: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    cartcontenttext: {
      display: "flex",
      flexDirection: "column",
    },

    explore: {
      position: "absolute",
      top: "25px",
      left: "50%",
      transform: "translate(-50%, -50%)",
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
      background: "yellow",
      color: "black",
    },
    pricing: {
      display: "flex",
      flexDirection: "row",
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    boxcontairproduct: {
      height: "333px",
      width: "315px",
      borderRadius: "5px",
      marginLeft: "20px",
      marginBottom: "20px",
      // border: "0.5px solid #9C9C9C",
      gridRowEnd: "span 1",
      flexBasis: "calc(33.33% - 10px)", // Adjust the percentage based on your desired layout
    },

    price: {
      marginLeft: "12px",
    },
    strikethroughoff: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "110px",
      marginLeft: "12px",
    },
    cartbackground: {
      marginRight: "8px",
    },
    strikethrough: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    main: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    text: {
      position: "absolute",
      bottom: 60,
    },
    // header: {
    //   height: "50px",
    // },

    headermain: {
      display: "flex",
      justifyContent: "space-between",
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
      marginBottom: "60px",
    },
    cart: {
      height: "35px",
      width: "84px",
      borderRadius: "5px",
      background: "#FDC114",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "10px",
      borderColor: "none",
      zIndex: 1,
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
    main: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    root: {
      display: "flex",
      width: "95%",

      justifyContent: "center",
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
    // header: {
    //   height: "50px",
    //   position: "relative",
    // },
    headermain: {
      display: "flex",
      justifyContent: "space-between",
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
    swiperpaggination: {
      // marginBottom: "60px",
      "& .swiper-pagination": {
        position: "absolute",
        bottom: "0px",
        display: "flex",
        flexDirection: "row",

        justifyContent: "center",
        alignItems: "center",
        transition: "0.3s opacity",
        zIndex: 10,
      },
      "& .swiper-pagination-bullet": {
        bottom: "0px",
        width: "20px",
        height: "20px",
        background: "black",
        color: "black",
        border: "none",
        opacity: 1,
        // Add spacing at the top
      },
      "& .swiper-pagination-bullet-active": {
        width: "20px",
        marginTop: "60px",
        marginBottom: "60px",
        height: "20px",
        transition: "width 0.5s",
        border: "1px solid #FDC114",
        background: "#FDC114",
        opacity: 1,
      },
    },
    price: {
      marginLeft: "20px",
      fontWeight: "700",
      fontSize: "20px",
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

  const sliderRef = useRef(null);
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const handleAddToCartClick = async (quantity, product, variant) => {
    const {
      addItemsToCart,
      currencyCode,
      cart,
      uiStore: { openCartWithTimeout, pdpSelectedOptionId, pdpSelectedVariantId, setPDPSelectedVariantId },
    } = props;

    // Disable button after it has been clicked

    // console.log(pdpSelectedVariantId, "star");

    // Get selected variant or variant optiono
    const selectedVariant = variantById(product.variants, variant._id);

    // If variant is not already in the cart, add the new item
    // parseFloat(price.replace(/[^0-9.-]+/g, "")).toFixed(2);
    const price = parseFloat(product.variants[0]?.pricing[0]?.displayPrice?.replace(/[^0-9.-]+/g, ""), 10);
    await addItemsToCart([
      {
        price: {
          amount: price,
          currencyCode: "USD",
        },
        metafields: [
          {
            key: "media",
            value: product.media[0]?.URLs?.large,
          },
        ],
        productConfiguration: {
          productId: product.productId,
          productVariantId: selectedVariant.variantId,
        },
        quantity,
      },
    ]);
  };

  const handleOnClick = async (product, variant) => {
    setIsLoading((prevState) => ({
      ...prevState,
      [product.productId]: true,
    }));

    await handleAddToCartClick(addToCartQuantity, product, variant);
    toast.success(" added to cart successfully!");
    setIsLoading((prevState) => ({
      ...prevState,
      [product.productId]: false,
    }));
    // Scroll to the top
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        <div className={classes.root}>
          <Swiper
            ref={sliderRef}
            className={classes.swiperpaggination}
            modules={[Pagination, Autoplay, Navigation]}
            pagination={false}
            breakpoints={{
              1500: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 3,
              },

              800: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 1,
              },
            }}
            onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
          >
            {" "}
            <Grid />
            <div className={classes.root}>
              <Grid
                container
                className={classes.gridroot}
                align="center"
                justify="space-between"
                alignItems="center"
              ></Grid>
              {sellerss
                ? sellerss?.slice(0, 5)?.map((item) => {
                    const cartitem = cart?.items;
                    const isDisabled = cartitem?.some((data) => {
                      return data.productConfiguration.productId === item?.node?.product?.productId;
                    });
                    // console.log(item?.node?.product?.productId, "ssss", cart?.items[0]?.productConfiguration?.productId);
                    const optionTitle = item?.node?.product?.variants[0]?.optionTitle;
                    const validOptionTitle = optionTitle ? optionTitle?.replace(/'/g, '"') : null;
                    const size = validOptionTitle ? JSON?.parse(validOptionTitle)?.size : null;
                    const str = item.node.product.title;
                    const words = str.match(/[a-zA-Z0-9]+/g);
                    const firstThreeWords = words.slice(0, 3).join(" ");
                    const displayPrice = item?.node?.product?.variants[0]?.pricing[0]?.displayPrice?.replace(
                      /[^0-9.]/g,
                      "",
                    );

                    const compareAtPrice =
                      item?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice.displayAmount?.replace(
                        /[^0-9.]/g,
                        "",
                      );

                    const parsedDisplayPrice = parseFloat(displayPrice);
                    const parsedCompareAtPrice = parseFloat(compareAtPrice);

                    const percentage = Math.floor(
                      ((parsedCompareAtPrice - parsedDisplayPrice) / parsedCompareAtPrice) * 100,
                    );

                    return (
                      <SwiperSlide key={item.id}>
                        <div className={classes.boxcontairproduct}>
                          <Link
                            href={item.node.product.slug && "en/product/[...slugOrId]"}
                            as={item.node.product.slug && `en/product/${item.node.product.slug}`}
                          >
                            <a target="_blank">
                              <img
                                src={
                                  !item?.node?.product?.media || !item?.node?.product?.media[0]?.URLs
                                    ? "/justin/justin4.svg"
                                    : item?.node?.product?.media[0]?.URLs?.large
                                }
                                key={item?.node?.product?.id}
                                alt={"hhhh"}
                                className={classes.image2}
                              />
                            </a>
                          </Link>
                          <div className={classes.cartcontent}>
                            <div className={classes.cartcontenttext}>
                              <Typography
                                style={{
                                  fontWeight: "600",
                                  fontSize: "18px",
                                  fontFamily: "lato",
                                  // marginTop: "20px",
                                  left: "12px",
                                }}
                                variant="h4"
                                component="h2"
                                className={classes.carttitle}
                              >
                                {firstThreeWords}
                              </Typography>
                              <Typography
                                className={classes.price}
                                style={{
                                  fontWeight: "600",
                                  fontSize: "18px",
                                  fontFamily: "lato",
                                  color: "#FDC114",
                                  left: "12px",
                                }}
                              >
                                {item?.node?.product?.variants[0]?.pricing[0]?.displayPrice
                                  ?.replace(/\.00$/, "")
                                  .replace(/\$/g, "Rs.")}
                              </Typography>
                              <div className={classes.strikethroughoff}>
                                <strike className={classes.strikethrough}>
                                  {item?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice.displayAmount
                                    ?.replace(/\.00$/, "")
                                    .replace(/\$/g, "Rs. ")}
                                </strike>
                                <Typography
                                  style={{
                                    fontWeight: "600",
                                    fontSize: "12px",
                                    fontFamily: "lato",
                                    left: "12px",
                                  }}
                                  variant="h4"
                                  component="h2"
                                  className={classes.carttitle2}
                                >{`-${percentage}%`}</Typography>
                              </div>
                            </div>
                            <div className={classes.cartbackground}>
                              <Typography
                                style={{
                                  fontWeight: "600",
                                  fontSize: "18px",
                                  fontFamily: "lato",
                                  // marginTop: "10px",
                                  left: "12px",
                                }}
                                variant="h4"
                                component="h2"
                                className={classes.carttitle}
                              >
                                Size:{" "}
                                <span className={classes.sizes}>
                                  {size == 0
                                    ? "XL"
                                    : "S" || size == 1
                                    ? "L"
                                    : "S" || size == 2
                                    ? "M"
                                    : "S" || size == 3
                                    ? "S"
                                    : "S"}
                                </span>
                              </Typography>
                              {isLoading[item?.node?.product?.productId] ? (
                                <CircularProgress />
                              ) : (
                                <Button
                                  className={classes.cart}
                                  onClick={() => handleOnClick(item?.node?.product, item?.node?.product?.variants[0])}
                                  disabled={isDisabled || item?.node?.product?.isSoldOut}
                                >
                                  <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                                  <Typography
                                    style={{ fontFamily: "Ostrich Sans Black", fontSize: "18px" }}
                                    variant="h5"
                                    component="h2"
                                  >
                                    {isDisabled ? "Added" : item.node.product.isSoldOut ? "Sold" : "+ Cart"}
                                  </Typography>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                : ""}
            </div>
          </Swiper>
          {/* {activeIndex < sellerss?.length + 1 ? (
            <ArrowForwardIos className={classes.iconforwad} style={{ fill: "#FDC114" }} onClick={handleNext} />
          ) : (
            ""
          )} */}
        </div>
      </div>
      {console.log("show", show)}
      {show && (
        <div className={classes.header}>
          <h2 className={classes.typography}></h2>
          <a target="_blank" href={`/en/profile/${storeId}`}>
            <Typography gutterBottom variant="body1" className={classes.explore}>
              Explore More
            </Typography>
          </a>
        </div>
      )}
    </>
  );
};

export default inject("routingStore", "uiStore")(Storyslider);
