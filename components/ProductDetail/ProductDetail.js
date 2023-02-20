import React, { Component,useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import inject from "hocs/inject";
import Breadcrumbs from "components/Breadcrumbs";
import ProductDetailAddToCart from "components/ProductDetailAddToCart";
import ProductDetailTitle from "components/ProductDetailTitle";
import VariantList from "components/VariantList";
import ProductDetailVendor from "components/ProductDetailVendor";
import ProductDetailDescription from "components/ProductDetailDescription";
import ProductDetailPrice from "components/ProductDetailPrice";
import MediaGallery from "components/MediaGallery";
import Router from "translations/i18nRouter";
import priceByCurrencyCode from "lib/utils/priceByCurrencyCode";
import variantById from "lib/utils/variantById";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel, Pagination } from "swiper";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { useRef,useCallback ,useState} from "react";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const styles = (theme) => ({
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
width:"90vh",
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
  cartimage:{
    height:"16px",
    width:"14px"
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
alignItems:"center",

    marginTop: theme.spacing(3),
    marginBottom:theme.spacing(3)
  },
  carttext:{
    width:"450px"
  }
  ,sliderimage2:{
    position:"realtive", 
  }
,thumbimage:{
  borderRadius:"18px"
},
carttex:{
  fontSize: "18px",
  color: "#333333",
  fontFamily: "Ostrich Sans",
  fontStyle: "normal",
  fontWeight: 900,
  lineHeight: "22px",
}

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
    image: "/justin/justin1.svg",
    id: 1,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for ",
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

const  ProductDetail = ({ ...props }) => {
 
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // componentDidMount() {
  //   const { product } = this.props;

  //   // Select first variant by default
  //   this.selectVariant(product.variants[0]);
  // }
  useEffect(() => {
    const { product } = props;

    // Select first variant by default
    selectVariant(product.variants[0]);
  }, [])
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
 const  handleAddToCartClick = async (quantity) => {
    const {
      addItemsToCart,
      currencyCode,
      product,
      uiStore: { openCartWithTimeout, pdpSelectedOptionId, pdpSelectedVariantId },
      width
    } = props;

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
            amount: price.price,
            currencyCode
          },
          productConfiguration: {
            productId: product.productId, // Pass the productId, not to be confused with _id
            productVariantId: selectedVariantOrOption.variantId // Pass the variantId, not to be confused with _id
          },
          quantity
        }
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
      width
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

    const productPrice = determineProductPrice();
    const compareAtDisplayPrice = (productPrice.compareAtPrice && productPrice.compareAtPrice.displayAmount) || null;



console.log(pdpMediaItems)
    return (
      <>
      <Box className={classes.slider}>
      <Grid container spacing={2} className={classes.sliderflex} xs={12} md={12} sm={12} lg={12} 


  alignItems="center"
  justifyContent="center"
      >
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
                      <img src={slide.image} alt="" className={classes.thumbimage} />
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
             
            {slide.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                   <div className={classes.controller}>
                  <img src={slide.image} alt="" className={classes.sliderimage2} />
                 

{  activeIndex < slides.length-1 ?   <ArrowForwardIos className={classes.iconforwad} style={{fill: "#FDC114"}} onClick={handleNext}/>:""}
{activeIndex-0?<ArrowBackIos className={classes.iconback} style={{fill: "#FDC114"}}  onClick={handlePrev}/>:""}
</div>
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
            <Typography  variant="h4" className={classes.offr}>
              Large
            </Typography>
          </div>
          <div className={classes.cart}>
            <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
            <Typography  variant="h4">
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

      <Fragment>
        <Grid container spacing={5}>
          <Grid item className={classes.breadcrumbGrid} xs={12}>
            <Breadcrumbs isPDP tagId={routingStore.tagId} product={product} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.section}>
            <MediaGallery mediaItems={pdpMediaItems} />
            </div> 
          </Grid>

          <Grid item xs={12} sm={6}>
            <ProductDetailTitle pageTitle={product.pageTitle} title={product.title} />
            <div className={classes.info}>
              <ProductDetailVendor>{product.vendor}</ProductDetailVendor>
            </div>
            <div className={classes.info}>
              <ProductDetailPrice className={classes.bottomMargin} compareAtPrice={compareAtDisplayPrice} price={productPrice.displayPrice} />
            </div>
            <div className={classes.info}>
              <ProductDetailDescription>{product.description}</ProductDetailDescription>
            </div>
            <VariantList
              onSelectOption={handleSelectOption}
              onSelectVariant={handleSelectVariant}
              product={product}
              selectedOptionId={pdpSelectedOptionId}
              selectedVariantId={pdpSelectedVariantId}
              currencyCode={currencyCode}
              variants={product.variants}
            />
            <ProductDetailAddToCart
              onClick={handleAddToCartClick}
              selectedOptionId={pdpSelectedOptionId}
              selectedVariantId={pdpSelectedVariantId}
              variants={product.variants}
            />
          </Grid>
        </Grid>
      </Fragment>
      </>
    );
  
}

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
  width: PropTypes.string.isRequired
};
export default withWidth({ initialWidth: "md" })(withStyles(styles, { withTheme: true })(inject("routingStore", "uiStore")(ProductDetail)));

