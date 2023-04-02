import React, { Component, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import inject from "hocs/inject";
import Router from "translations/i18nRouter";
import priceByCurrencyCode from "lib/utils/priceByCurrencyCode";
import variantById from "lib/utils/variantById";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Mousewheel, Pagination } from "swiper";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { useRef, useCallback, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
SwiperCore.use([Navigation, Thumbs, Mousewheel, Pagination]);
const styles = (theme) => ({
  slider: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down(700)]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(2),
    },
  },
  sliderflex: {
    display: "flex",
    alignItems: "flex-start",
  },

  slidercol: {
    display: "flex",
    flexDirection: "column",

    display: "contents",
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

  thumb: {
    height: "600px",
    justifySelf: "end",
    width: "200px",
    "& .swiper-slide": {
      opacity: 0.5,
    },
  },
  controller: {
    // width: "90vh",
    position: "relative",
    display: "inline-grid",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconforwad: {
    cursor:"pointer",
    position: "absolute",
    right: "0",
    top: "50%",
    background: "#333333",
    color: "FDC114",
    borderRadius: "4px",

    zIndex: 1251,
  },
  iconback: {
    position: "absolute",
    cursor:"pointer",
    top: "50%",
    borderRadius: "4px",
    color: "FDC114",
    background: "#333333",

    zIndex: 1251,
  },

  size: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  size2: {
    display: "flex",
    flexDirection: "row",
  },
  price: {
    marginLeft: theme.spacing(3),
  },
  price2: {
    color: "#333333",
    opacity: 0.5,
  },
  offer: {
    display: "flex",
    // marginRight: theme.spacing(10),
    background: "#E16452",
    padding: "4px",
    borderBotom: "1px solid red",
    color: "#ffffff",
  },
  cartimage: {
    height: "16px",
    width: "14px",
  },
  sizeimage: {
    display: "flex",
    marginTop: theme.spacing(3),
    borderBottom: "1px solid #E5E5E5",
    marginBottom: theme.spacing(3),
    justifyContent: "space-between",
  },
  tabs: {
    borderBottom: "1px solid #E5E5E5",
    "& .MuiTab-root": {
      textTransform: "none",
    },
    "& .tabs-active": {
      borderBottom: "1px solid #FDC114",
    },
  },
  cart: {
    height: "35px",
    width: "100%",
    borderRadius: "40px",
    background: "#FDC114",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  carttext: {
    justifySelf: "end",
    width: "533px",
  },

  sliderimage2: {
    borderRadius: "18px",
    position: "relative",
    // display: "inlie-grid",
    margin: "0 auto",
    // width: "507px",
    minHeight: "600px",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "600px",
    maxWidth: "600px",
    objectFit: "contain",
  },
  thumbimage: {
    borderRadius: "18px",
    height: "180px",
    width: "180px",
    paddingTop: "10px",
  },
  carttex: {
    fontSize: "18px",
    color: "#333333",
    fontFamily: "Ostrich Sans Black",
    fontStyle: "normal",
    fontWeight: 900,
    lineHeight: "22px",
  },
  swiperimag: {
    display: "flex",
    // position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
});

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
    image: "/cart/cart3.svg",
    title: "Bag for sale",
    id: 2,
    price: "Rs 1200",
    newprice: "Rs 600",
    size: "large",
  },
];
const slide = [
  {
    image: "/cart/cartlarge.svg",
    id: 1,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for ",
    size: "large",
  },
  {
    image: "/cart/cartlarge.svg",
    title: "Bag for sale",
    id: 2,
    price: "Rs 1200",
    newprice: "Rs 600",
    size: "large",
  },
  {
    image: "/cart/cartlarge.svg",
    id: 1,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for ",
    size: "large",
  },
];

const ProductDetail = ({ ...props }) => {
  console.log(props, "new");
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
  const [value, setValue] = React.useState("1");
  const [activeIndex, setActiveIndex] = useState(0);
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const { product } = props;

    selectVariant(product.variants[0]);
  }, []);
  function selectVariant(variant, optionId) {
    const { product, uiStore } = props;

    // Select the variant, and if it has options, the first option
    const variantId = variant._id;
    let selectOptionId = optionId;
    if (!selectOptionId && variant.options && variant.options.length) {
      selectOptionId = variant.options[0]._id;
    }

    uiStore.setPDPSelectedVariantId(variantId, selectOptionId);

    Router.replace("/product/[...slugOrId]", `/product/${product.slug}/${selectOptionId || variantId}`);
  }

  /**
   * @name handleSelectVariant
   * @summary Called when a variant is selected in the variant list
   * @private
   * @ignore
   * @param {Object} variant The variant object that was selected
   * @returns {undefined} No return
   */
  const handleSelectVariant = (variant) => {
    selectVariant(variant);
  };

  /**
   * @name handleAddToCartClick
   * @summary Called when the add to cart button is clicked
   * @private
   * @ignore
   * @param {Number} quantity - A positive integer from 0 to infinity, representing the quantity to add to cart
   * @returns {undefined} No return
   */

  const handleAddToCartClick = async (quantity) => {
    const {
      addItemsToCart,
      currencyCode,
      product,
      uiStore: { openCartWithTimeout, pdpSelectedOptionId, pdpSelectedVariantId },
      width,
    } = props;
    // console.log(pdpSelectedVariantId, "star");
    // console.log(product.variants, "op");
    // Get selected variant or variant option
    const selectedVariant = variantById(product.variants, pdpSelectedVariantId);
    const selectedOption = variantById(selectedVariant.options, pdpSelectedOptionId);
    const selectedVariantOrOption = selectedOption || selectedVariant;

    if (selectedVariantOrOption) {
      // Get the price for the currently selected variant or variant option
      const price = priceByCurrencyCode(currencyCode, selectedVariantOrOption.pricing);

      // Call addItemsToCart with an object matching the GraphQL `CartItemInput` schema
      await addItemsToCart([
        {
          price: {
            amount:price.price,
            currencyCode,
          },

          metafields: [
            {
              key: "media",
              value: product?.media[0]?.URLs?.large,
            },
          ],
          productConfiguration: {
            productId: product.productId, // Pass the productId, not to be confused with _id
            productVariantId: selectedVariantOrOption.variantId, // Pass the variantId, not to be confused with _id
          },
          quantity,
        },
      ]);
    }
  };

  /**
   * @name handleSelectOption
   * @summary Called when an option is selected in the option list
   * @private
   * @ignore
   * @param {Object} option The option object that was selected
   * @returns {undefined} No return
   */
  const handleSelectOption = (option) => {
    const { product, uiStore } = props;

    // If we are clicking an option, it must be for the current selected variant
    const variant = product.variants.find((vnt) => vnt._id === uiStore.pdpSelectedVariantId);

    selectVariant(variant, option._id);
  };

  /**
   * @name determineProductPrice
   * @description Determines a product's price given the shop's currency code. It will
   * use the selected option if available, otherwise it will use the selected variant.
   * @returns {Object} An pricing object
   */
  function determineProductPrice() {
    const { currencyCode, product } = props;
    const { pdpSelectedVariantId, pdpSelectedOptionId } = props.uiStore;
    const selectedVariant = variantById(product.variants, pdpSelectedVariantId);
    let productPrice = {};

    if (pdpSelectedOptionId && selectedVariant) {
      const selectedOption = variantById(selectedVariant.options, pdpSelectedOptionId);
      productPrice = priceByCurrencyCode(currencyCode, selectedOption.pricing);
    } else if (!pdpSelectedOptionId && selectedVariant) {
      productPrice = priceByCurrencyCode(currencyCode, selectedVariant.pricing);
    }

    return productPrice;
  }

  const {
    classes,
    currencyCode,
    product,
    routingStore,
    uiStore: { pdpSelectedOptionId, pdpSelectedVariantId },
    width,
  } = props;

  // Set the default media as the top-level product's media
  // (all media on all variants and objects)
  let pdpMediaItems = product.media;

  // If we have a selected variant (we always should)
  // check to see if media is available, and use this media instead
  // Revert to original media if variant doesn't have specific media
  const selectedVariant = product.variants.find((variant) => variant._id === pdpSelectedVariantId);
  if (selectedVariant) {
    if (selectedVariant.media && selectedVariant.media.length) {
      pdpMediaItems = selectedVariant.media;
    }

    // If we have a selected option, do the same check
    // Will revert to variant check if no option media is available
    if (Array.isArray(selectedVariant.options) && selectedVariant.options.length) {
      const selectedOption = selectedVariant.options.find((option) => option._id === pdpSelectedOptionId);
      if (selectedOption) {
        if (selectedOption.media && selectedOption.media.length) {
          pdpMediaItems = selectedOption.media;
        }
      }
    }
  }

  const handleOnClick = async () => {
    // Pass chosen quantity to onClick callback
    await handleAddToCartClick(addToCartQuantity);

    // Scroll to the top
  };
  const productPrice = determineProductPrice();
  const compareAtDisplayPrice = (productPrice.compareAtPrice && productPrice.compareAtPrice.displayAmount) || null;

  // console.log(product, "produ");
  return (
    <>
      <Box className={classes.slider}>
        <Grid
          container
          spacing={2}
          className={classes.sliderflex}
          xs={12}
          md={12}
          sm={12}
          lg={12}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={0} md={0} sm={0} lg={0}></Grid>
          <Grid style={{ display: "content" }} item xs={0} md={2} sm={0} lg={2} className={classes.slidercol}>
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
                        <img src={product?.media[0].URLs.small} alt="" className={classes.thumbimage} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Grid>
          <Grid item xs={12} md={10} sm={7} lg={3} className={`${classes.sliderimages} swiper_slider`}>
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
              onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
            >
              {slide.map((slide, index) => {
                return (
                  <SwiperSlide key={index} className={classes.swiperimag}>
                    <div className={classes.controller}>
                      <img src={product?.media[0].URLs.large} alt="" className={classes.sliderimage2} />

                      {activeIndex < slides.length - 1 ? (
                        <ArrowForwardIos
                          className={classes.iconforwad}
                          style={{ fill: "#FDC114" }}
                          onClick={handleNext}
                        />
                      ) : (
                        ""
                      )}
                      {activeIndex - 0 ? (
                        <ArrowBackIos className={classes.iconback} style={{ fill: "#FDC114" }} onClick={handlePrev} />
                      ) : (
                        ""
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>

          <Grid style={{ display: "grid" }} item xs={11} md={10} sm={6} lg={4}>
            <div className={classes.carttext}>
              <Typography style={{ fontWeight: "700" }} variant="subtitle1">
                {product?.title}
              </Typography>
              <div className={classes.size}>
                {" "}
                <div className={classes.size2}>
                  {" "}
                  <strike>
                    {" "}
                    <Typography
                      style={{ fontWeight: "500", padding: "4px" }}
                      gutterBottom
                      variant="h4"
                      className={classes.price2}
                    >
                      {product?.variants[0]?.pricing[0]?.compareAtPrice.displayAmount?.replace(/\$/g, "RS ")}
                    </Typography>
                  </strike>
                  <Typography
                    style={{ fontWeight: "700", padding: "4px" }}
                    gutterBottom
                    variant="h4"
                    className={classes.price}
                  >
                    {product?.variants[0]?.pricing[0]?.displayPrice?.replace(/\$/g, "RS ")}
                  </Typography>
                </div>
                <Typography gutterBottom variant="h4" className={classes.offer}>
                  50 % off
                </Typography>
              </div>
              <div className={classes.sizeimage}>
                <img src="/cart/available.svg" alt="available" />
                <Typography style={{ fontWeight: "700" }} variant="h4" className={classes.offr}>
                  {product?.variants[0]?.media[0]?.optionTitle?.json.parse(size)}
                </Typography>
              </div>
              <div className={classes.cart}>
                <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                <Typography
                  style={{ fontFamily: "Ostrich Sans Black", fontSize: "18px" }}
                  variant="h4"
                  onClick={handleOnClick}
                >
                  + Cart{" "}
                </Typography>
              </div>
              <TabContext value={value}>
                <TabList onChange={handleChange} className={classes.tabs}>
                  <Tab label="Description" value="1" />
                  <Tab label="Size chart" value="2" />
                </TabList>

                <TabPanel value="1">{product?.description}</TabPanel>

                <TabPanel value="2">
                  ffffffffffffffffffff voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TabPanel>
              </TabContext>
            </div>
          </Grid>
          <Grid item xs={0} md={0} sm={0} lg={1}></Grid>
        </Grid>
      </Box>

   
    </>
  );
};

ProductDetail.propTypes = {
  /**
   * Function to add items to a cart.
   * Implementation may be provided by addItemsToCart function from the @withCart decorator
   *
   * @example addItemsToCart(CartItemInput)
   * @type Function
   */
  addItemsToCart: PropTypes.func,
  classes: PropTypes.object,
  currencyCode: PropTypes.string.isRequired,
  product: PropTypes.object,
  routingStore: PropTypes.object.isRequired,
  shop: PropTypes.object.isRequired,
  theme: PropTypes.object,
  uiStore: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};
export default withWidth({ initialWidth: "md" })(
  withStyles(styles, { withTheme: true })(inject("routingStore", "uiStore")(ProductDetail)),
);
