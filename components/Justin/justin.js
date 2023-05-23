import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import variantById from "lib/utils/variantById";
import { useState, useEffect, useContext } from "react";
import priceByCurrencyCode from "lib/utils/priceByCurrencyCode";
import inject from "hocs/inject";
import CloseIcon from "@material-ui/icons/Close";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PageLoading from "../PageLoading";
import { JSON } from "global";
import { CircularProgress } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import { UIContext } from "../../context/UIContext.js";

const useStyles = makeStyles((theme) => ({
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

  gridroot: {},
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
    width: "315px",
    height: "387px",
    borderRadius: "5px 5px 0px 0px",
    objectFit: "cover",

    cursor: "pointer",
  },
  image4: {
    width: "315px",
    height: "387px",
    borderRadius: "5px 5px 0px 0px",
    objectFit: "cover",

    cursor: "pointer",
  },
  image2: {
    width: "315px",
    height: "231px",
    objectFit: "cover",
    borderRadius: "10px",
    cursor: "pointer",
  },
  image3: {
    width: "315px",
    height: "231px",
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
  carttitle2: {
    display: "flex",
    
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
    zIndex: 1,
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
    height: "501px",
    width: "315px",
    borderRadius: "5px",
    marginBottom: "20px",
    border: "0.5px solid #9C9C9C",
    gridRowEnd: "span 1",
    flexBasis: "calc(33.33% - 10px)", // Adjust the percentage based on your desired layout
    marginBottom: "10px",
  },
  boxcontairproduct4: {
    height: "501px",
    width: "315px",
    borderRadius: "5px",
    marginBottom: "20px",
    border: "0.5px solid #9C9C9C",
    gridRowEnd: "span 1",
    flexBasis: "calc(33.33% - 10px)", // Adjust the percentage based on your desired layout
    marginBottom: "10px",
  },
  boxcontairproduct3: {
    height: "333px",
    width: "315px",
    borderRadius: "5px",
    flexBasis: "calc(33.33% - 10px)", // Adjust the percentage based on your desired layout
    marginBottom: "10px",
    marginBottom: "20px",
    gridRowEnd: "span 2",
    border: "0.5px solid #9C9C9C",
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
  strikethrough: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxcontairproduct2: {
    height: "333px",
    width: "315px",
    borderRadius: "5px",
    gridRowEnd: "span 2",
    flexBasis: "calc(33.33% - 10px)", // Adjust the percentage based on your desired layout
    marginBottom: "10px",
    marginBottom: "20px",
    border: "0.5px solid #9C9C9C",
  },
}));

const Justin = (props) => {
  // const UIContextJustInPage = useContext(UIContext);

  const catalogdata = props?.catalogItems;
  // console.log(catalogdata,"cat")
const [soldOutProducts, setSoldOutProducts] = useState([]);

  const { uiStore } = props;
  const [found, setFound] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState({});
// 

  // console.log(cart, "cartx");

  useEffect(() => {
    uiStore?.setPageSize(15);
  
  }, []);
  // useEffect(() => {
  //   if (cart?.items?.length) {
  //     const filteredProducts = catalogdata?.filter((product) => {
  //       const productTags = product?.productId;
  //       if (!productTags) {
  //         return false;
  //       }
  //       console.log("------------------------------------------------------------------------------------");
  //       console.log(productTags, "nweee");
  //       return cart.items.find((tag) => tag?.productConfiguration.productId === filteredProducts);
  //     });
  //     console.log(filteredProducts, "rrrrrrrrr");
  //   }

  // }, [cart, cart.items, catalogdata]);
  // console.log(catalogdata,"data")
  useEffect(() => {
    const updatedItems = props?.cart?.items?.map((item) => {
      const isItemInCart = catalogdata?.some((product) => {
        return item?.productConfiguration?.productId === product?.node.product?.productId;
      });

      // setpageSize(20);
      return {
        ...item,
        disabled: item?.inCart || isItemInCart,
      };
    });
    const soldOutProducts = catalogdata?.filter((product) => product?.node?.product?.isSoldOut);
    setSoldOutProducts(soldOutProducts);
    
    // console.log(updatedItems, "all");
    // do something with updatedItems
  }, [props?.cart?.items, catalogdata]);
  function selectVariant(variant, optionId) {
    const { product, uiStore, cart } = props;

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

    // Select the variant, and if it has options, the first option
    const variantId = variant._id;
    let selectOptionId = optionId;
    if (!selectOptionId && variant.options && variant.options.length) {
      selectOptionId = variant.options[0]._id;
    }

    uiStore.setPDPSelectedVariantId(variantId, selectOptionId);

    Router.replace("/product/[...slugOrId]", `/product/${product.slug}/${selectOptionId || variantId}`);
  }

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
          amount:price,
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
  const CustomCloseButton = () => <CloseIcon Style={{ backgroundColor: "#FDC114", color: "black", height: "15px" }} />;

  //  const notify = () => toast("Wow so easy!");
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton={<CustomCloseButton />}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        background="green"
        toastStyle={{
          backgroundColor: "#FDC114",
          color: "black",
          fontSize: "16px",
          fontFamily: "Lato",
          textTransform: "capitalize",
        }}
      />
      <div className={classes.headermain}>
        {/* <button onClick={notify}>Notify!</button>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeButton={<CustomCloseButton />}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          background="green"
          toastStyle={{ backgroundColor: "#FDC114", color: "black", fontSize: "18px" }}
        /> */}
        <Typography variant="h3">
          JUST <span className={classes.spanofnextword}>IN</span>
        </Typography>
        <div className={classes.header}>
          <h1 className={classes.typography}></h1>
          <a href="/en/categories/cmVhY3Rpb24vdGFnOjdKWVRGeGlZNXlKQkNwNENj">
            <Typography gutterBottom variant="body1" className={classes.explore}>
              Explore More
            </Typography>
          </a>
        </div>
      </div>
      <div className={classes.root}>
        <Grid container className={classes.gridroot}>
          <Masonry columnsCount={4} gutter="10px">
            {catalogdata?.map((item, index) => {
              console.log(index, "nodde");
              const cartitem = props?.cart?.items;
              const isDisabled = cartitem?.some((data) => {
                return data.productConfiguration.productId === item?.node?.product?.productId;
              });
              // console.log(item?.node?.product?.productId, "ssss", props.cart.items[0]?.productConfiguration?.productId);
              const optionTitle = item?.node?.product?.variants[0]?.optionTitle;
              const validOptionTitle = optionTitle ? optionTitle?.replace(/'/g, '"') : null;
              const size = validOptionTitle ? JSON?.parse(validOptionTitle)?.size : null;
              const str = item.node.product.title;
              const words = str.match(/[a-zA-Z0-9]+/g);
              const firstThreeWords = words.slice(0, 3).join(" ");
const displayPrice = item?.node?.product?.variants[0]?.pricing[0]?.displayPrice?.replace(/[^0-9.]/g, "");

const compareAtPrice = item?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice.displayAmount?.replace(
  /[^0-9.]/g,
  "",
);

const parsedDisplayPrice = parseFloat(displayPrice);
const parsedCompareAtPrice = parseFloat(compareAtPrice);

const percentage = Math.floor(((parsedCompareAtPrice - parsedDisplayPrice) / parsedCompareAtPrice) * 100);

              // console.log(optionTitle, "fil");
              return (
                <>
                  <Grid item lg={3} sm={6} md={4} xs={12} className={classes.rootimg}>
                    <div
                      className={
                        index % 8 < 4
                          ? index % 2 === 0
                            ? classes.boxcontairproduct
                            : classes.boxcontairproduct2
                          : index % 2 === 0
                          ? classes.boxcontairproduct3
                          : classes.boxcontairproduct4
                      }
                    >
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
                            className={
                              index % 8 < 4
                                ? index % 2 === 0
                                  ? classes.image
                                  : classes.image2
                                : index % 2 === 0
                                ? classes.image3
                                : classes.image4
                            }
                            key={item?.node?.product?.id}
                            alt={"hhhh"}
                          />
                        </a>
                      </Link>
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "18px",
                          fontFamily: "lato",
                          marginTop: "20px",
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
                          .replace(/\$/g, "RS ")}
                      </Typography>
                      <div className={classes.strikethroughoff}>
                        <strike className={classes.strikethrough}>
                          {item?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice.displayAmount
                            ?.replace(/\.00$/, "")
                            .replace(/\$/g, "RS ")}
                        </strike>
                        <Typography
                          style={{
                            fontWeight: "600",
                            fontSize: "18px",
                            fontFamily: "lato",

                            left: "12px",
                          }}
                          variant="h4"
                          component="h2"
                          className={classes.carttitle2}
                        >{`${percentage}%`}</Typography>
                      </div>
                      <div className={classes.cartbackground}>
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
                  </Grid>
                </>
              );
            })}
          </Masonry>
        </Grid>
      </div>
    </div>
  );
};

export default inject("routingStore", "uiStore")(Justin);
