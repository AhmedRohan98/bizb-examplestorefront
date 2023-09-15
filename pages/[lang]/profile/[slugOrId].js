import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PageLoading from "../../../components/PageLoading/PageLoading";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withCart from "containers/cart/withCart";
import PageStepper from "../../../components/PageStepper/PageStepper";
import { withApollo } from "lib/apollo/withApollo";
import useShop from "hooks/shop/useShop";
import SellersCatalogItems from "containers/catalog/withSellerCatalogItem";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import variantById from "../../../lib/utils/variantById";

import formatSize from "../../../lib/utils/formatSize";
import { makeStyles } from "@material-ui/core/styles";
import inject from "../../../hocs/inject";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress, Hidden } from "@material-ui/core";
import fetchPrimaryShop from "../../../staticUtils/shop/fetchPrimaryShop";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ReactGA from "react-ga4";

function SellerPublicProfile(props) {
  // console.log("props", props);
  const { uiStore, routingStore, cart, addItemsToCart, sellerCatalogItemsPageInfo } = props;
  const [soldOutProducts, setSoldOutProducts] = useState([]);
  const [isLoading, setIsLoading] = useState({});

  const [found, setFound] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);

  const useStyles = makeStyles((theme) => ({
    main: {
      width: "100%",
      padding: "75px",

      [theme.breakpoints.down("xs")]: {
        padding: "0",
      },
    },
    profilebaner: {
      width: "100%",
    },

    gridroot: {
      maxWidth: "100%",
      justifyContent: "space-between",
    },

    typography: {
      background: "#333333",
      opacity: "15%",
      height: "8px",
      width: "180px",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "60px",
      height: "50px",
      position: "relative",
    },
    image: {
      width: "275px", // Reduced by 1px to create space for the border
      maxHeight: "600px",
      marginTop: "1px",
      borderRadius: "10px",
      marginRight: "2px",
      marginLeft: "1px",
      objectFit: "cover",
      cursor: "pointer",
      [theme.breakpoints.up("lg")]: {
        width: "275px", // Reduced by 1px to create space for the border
      },
      [theme.breakpoints.down("lg")]: {
        width: "calc(15rem - 0.5vw)", // Reduced by 1px to create space for the border
      },
      [theme.breakpoints.down("sm")]: {
        width: "150px", // Reduced by 1px to create space for the border
        height: "200px",
      },
    },
    // image: {
    //   width: "275px", // Reduced by 1px to create space for the border
    //   maxHeight: "600px",
    //   marginTop: "1px",
    //   borderRadius: "10px",
    //   marginRight: "2px",
    //   marginLeft: "1px",
    //   objectFit: "cover",
    //   cursor: "pointer",
    // },

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

    cartsize: {
      display: "flex",
      marginLeft: theme.spacing(0.5),
      justifyContent: "end",
      alignItems: "center",
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
      paddingBottom: "10px",
      overflow: "hidden",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        paddingBottom: "5px",
      },
    },
    cartcontenttext: {
      display: "flex",
      flexDirection: "column",
      marginRight: "30px",
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
      [theme.breakpoints.down("sm")]: {
        width: "34px", // Reduced by 1px to create space for the border
        height: "20px",
        marginLeft: theme.spacing(2),
      },
    },
    explore: {
      position: "absolute",
      top: "25px",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#FDC114",
      zIndex: 900,
    },
    boxcontairproduct: {
      maxHeight: "700px",
      width: "315px",
      borderRadius: "5px",

      // border: "1px solid #9C9C9C",
      gridRowEnd: "span 1",
      flexBasis: "calc(33.33% - 10px)", // Adjust the percentage based on your desired layout
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        marginBottom: "10px",
      },
    },
    cartText: {
      fontSize: "18px",

      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },

    price: {
      marginLeft: "12px",
    },
    strikethroughoff: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "110px",
      marginLeft: "0px",
    },
    cartbackground: {
      marginRight: "8px",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        marginRight: "2px",
      },
    },
    strikethrough: {
      display: "flex",
      fontSize: "12px",
      color: "#9C9C9C",
      justifyContent: "center",
      alignItems: "center",
    },

    mainheading: {
      display: "flex",
      marginTop: "60px",
      marginBottom: "60px",
      justifyContent: "center",
      textTransform: "uppercase",
      position: "relative",
      width: "100%",
    },
    spanline: {
      marginTop: "20px",
      bottom: 0,
      left: 0,
      height: "5px",
      marginLeft: "10px",
      width: "50px",
      backgroundColor: "#FDC114",
    },
    mainheadings: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      allignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    progressBar: {
      [theme.breakpoints.down("sm")]: {
        size: "10px",
        marginLeft: theme.spacing(3),
      },
    },
  }));
  // console.log(props.totalcount, "propertiese");
  const router = useRouter();

  const shop = useShop();
  const { slugOrId } = router.query;
  useEffect(() => {
    uiStore?.setPageSize(15);

    uiStore?.setsellerId(slugOrId);
  }, [slugOrId]);
  useEffect(() => {
    const updatedItems = props?.cart?.items?.map((item) => {
      const isItemInCart = props?.catalogItems.some((product) => {
        return item?.productConfiguration?.productId === product?.node.product?.productId;
      });

      // setpageSize(20);
      return {
        ...item,
        disabled: item?.inCart || isItemInCart,
      };
    });
    const soldOutProducts = props?.catalogItems?.filter((product) => product?.node?.product?.isSoldOut);
    setSoldOutProducts(soldOutProducts);

    // console.log(updatedItems, "all");
    // do something with updatedItems
  }, [props?.cart?.items, props?.catalogItems]);
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
    ReactGA.event({
      category: "Ecommerce",
      action: "add_to_cart",
      label: product?.productId,
      value: product?.variants[0]?.pricing[0]?.displayPrice,
    });
    const addToCartData = {
      event: 'addToCart',
      ecommerce: {
        add: {
          products: [
            {
              id: product.productId,
              name: product.title,
              price: product?.variants[0]?.pricing[0]?.displayPrice,
              quantity: 1, // You can adjust this based on your needs
            },
          ],
        },
      },
    };
    
    TagManager.dataLayer({
      dataLayer: addToCartData,
    });
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
  const classes = useStyles();
  const profile = props.catalogItems[0]?.node?.product?.variants[0]?.uploadedBy;
  const clickHandler = (item) => {
    const productSlug = item;

    const url = `/en/product/${productSlug}`;
    const newWindow = window.open(url, "_blank");
    newWindow.opener.focus();
  };
  useEffect(() => {
    // Simulate an asynchronous data loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);
  return (
    <Layout shop={shop}>
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
        <img src="/profile/profilebanner.webp" className={classes.profilebaner} />
        <div className="sellerProfile">
          <Grid container className="publicProfile__profileInfoWrapper">
            <Grid xs={12} item className="publicProfile__profileInfoSection">
              <div
                className="sellerProfile__img"
                style={{
                  backgroundImage: profile
                    ? profile.image
                      ? "URL(" + profile.profilePhoto + ")"
                      : "URL(" + "/images/seller-placeholder.png" + ")"
                    : "URL(" + "/images/seller-placeholder.png" + ")",
                }}
              >
                {/* <div className="sellerProfile__badge"> 
                          <img src={profile ? profile.profilePhoto?profile.profilePhoto:"/icons/medal.svg":"/icons/medal.svg"} />
                        </div> */}
              </div>
              <div className="publicProfile__infoContainer">
                <div className="sellerProfile__infoRow publicProfile__infoRow">
                  <Typography className="publicProfile__name" variant="h1">
                    <span>
                      {profile && profile?.storeName
                        ? profile?.storeName
                        : profile?.name
                        ? profile?.name
                        : profile?.name}
                    </span>
                    {profile && profile && <img src="/icons/tickIcon.png" />}
                  </Typography>
                </div>
                <Hidden xsDown>
                  <>
                    {profile && profile?.name && (
                      <Typography className="sellerProfile__status" variant="h5">
                        {profile.uname}
                      </Typography>
                    )}
                  </>
                </Hidden>
                <Hidden xsDown>
                  <Grid container>
                    <Grid item xs={12} md={8} lg={6} xl={4}>
                      <div className="publicProfile__infoMeta">
                        <div className="sellerProfile__infoMetaRow">
                          <Typography className="sellerProfile__infoMetaContent" variant="h5">
                            {props.totalcount}
                          </Typography>
                          <Typography className="sellerProfile__infoMetaTitle" variant="h5">
                            {" "}
                            Products
                          </Typography>
                        </div>
                        {/* <div className="sellerProfile__infoMetaRow">
                          <Typography className="sellerProfile__infoMetaContent" variant="h5">
                            o
                          </Typography>
                          <Typography className="sellerProfile__infoMetaTitle" variant="h5">
                            {" "}
                            Followers
                          </Typography>
                        </div>
                        <div className="sellerProfile__infoMetaRow">
                          <Typography className="sellerProfile__infoMetaContent" variant="h5">
                            0
                          </Typography>
                          <Typography className="sellerProfile__infoMetaTitle" variant="h5">
                            {" "}
                            Following
                          </Typography>
                        </div> */}
                      </div>
                    </Grid>
                  </Grid>
                </Hidden>
              </div>
            </Grid>
            <Grid xs={12}>
              <Hidden smUp>
                <Grid container>
                  <Grid item xs={12} md={8} lg={6} xl={4}>
                    <div className="publicProfile__infoMeta">
                      <div className="sellerProfile__infoMetaRow">
                        <Typography className="sellerProfile__infoMetaContent" variant="h5">
                          {props.totalcount}
                        </Typography>
                        <Typography className="sellerProfile__infoMetaTitle" variant="h5">
                          {" "}
                          Products
                        </Typography>
                      </div>
                      {/* <div className="sellerProfile__infoMetaRow">
                        <Typography className="sellerProfile__infoMetaContent" variant="h5">
                          0
                        </Typography>
                        <Typography className="sellerProfile__infoMetaTitle" variant="h5">
                          {" "}
                          Followers
                        </Typography>
                      </div>
                      <div className="sellerProfile__infoMetaRow">
                        <Typography className="sellerProfile__infoMetaContent" variant="h5">
                          0
                        </Typography>
                        <Typography className="sellerProfile__infoMetaTitle" variant="h5">
                          {" "}
                          Following
                        </Typography>
                      </div> */}
                    </div>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </div>

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
        </div>
        <div className={classes.gridroot}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 900: 2, 1050: 3, 1280: 4, 1400: 5, 1750: 6, 1920: 6 }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Masonry columnsCount={4} style={{ display: "flex", justifyContent: "flex-start" }}>
              {props?.catalogItems?.map((item, key) => {
                const cartitem = cart?.items;
                const isDisabled = cartitem?.some((data) => {
                  return data.productConfiguration.productId === item?.node?.product?.productId;
                });
                // console.log(cart?.items, "item");
                // console.log(item?.node?.product?.productId, "ssss", props.cart.items[0]?.productConfiguration?.productId);
                const optionTitle = item?.node?.product?.variants[0]?.optionTitle;
                const validOptionTitle = optionTitle
                  ? optionTitle
                      ?.replace(`None`, `'none'`)
                      .replace("None", `none`)
                      .replace(/''/g, '"')
                      .replace(/'/g, '"')
                  : null;
                const size = validOptionTitle ? JSON.parse(validOptionTitle)?.size : null;
                const str = item.node.product.title;
                const words = str.match(/[a-zA-Z0-9]+/g);
                const firstThreeWords = words.slice(0, 3).join(" ");
                const displayPrice = item?.node?.product?.variants[0]?.pricing[0]?.displayPrice?.replace(
                  /[^0-9.]/g,
                  "",
                );

                const compareAtPrice =
                  item?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice?.displayAmount?.replace(/[^0-9.]/g, "");

                const parsedDisplayPrice = parseFloat(displayPrice);
                const parsedCompareAtPrice = parseFloat(compareAtPrice);

                const percentage = Math.floor(
                  ((parsedCompareAtPrice - parsedDisplayPrice) / parsedCompareAtPrice) * 100,
                );

                // console.log(optionTitle, "fil");
                return (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={classes.boxcontairproduct}>
                      {/* {console.log("Images", item?.node)} */}
                      <Link
                        href={item.node.product.slug && `/en/product/${item.node.product.slug}`}
                        as={item.node.product.slug && `/en/product/${item.node.product.slug}`}
                      >
                        <a target="_blank">
                          <img
                            src={
                              !item?.node?.product?.media || !item?.node?.product?.media[0]?.URLs
                                ? item?.node?.product?.media[0]?.URLs?.thumbnail
                                : item?.node?.product?.media[0]?.URLs?.large
                            }
                            className={classes.image}
                            key={item?.node?.product?.id}
                            // onClick={() => clickHandler(item.node.product.slug)}
                            alt={item?.node?.product?.title}
                          />
                        </a>
                      </Link>

                      <div className={classes.cartcontent}>
                        <div className={classes.cartcontenttext}>
                          <Typography
                            style={{
                              fontWeight: "600",
                              fontSize: "1rem",
                              fontFamily: "lato",
                              // marginTop: "10px",
                              textTransform: "capitalize",
                              marginLeft: "0px",
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
                              fontSize: "1rem",
                              fontFamily: "lato",
                              color: "#FDC114",
                              marginLeft: "0px",
                            }}
                          >
                            {item?.node?.product?.variants[0]?.pricing[0]?.displayPrice
                              ?.replace(/\.00$/, "")
                              .replace(/\$/g, "Rs. ")}
                          </Typography>
                          <div className={classes.strikethroughoff}>
                            <strike className={classes.strikethrough}>
                              {item?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice?.displayAmount
                                ?.replace(/\.00$/, "")
                                .replace(/\$/g, "Rs. ")}
                            </strike>
                            <Typography
                              style={{
                                fontWeight: "600",
                                fontSize: "0.9rem",
                                fontFamily: "lato",
                                marginLeft: "0px",
                              }}
                              variant="h4"
                              component="h2"
                              className={classes.carttitle2}
                            >
                              {item?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice &&
                                `-${Math.abs(percentage)}%`}
                            </Typography>
                          </div>
                        </div>
                        <div className={classes.cartbackground}>
                          <Typography
                            style={{
                              fontWeight: "600",
                              fontSize: "0.8rem",
                              fontFamily: "lato",
                              left: "5px",
                            }}
                            variant="h4"
                            component="h2"
                            className={classes.cartsize}
                          >
                            Size <span className={classes.sizes}>{formatSize(size, true)}</span>
                          </Typography>
                          {isLoading[item?.node?.product?.productId] ? (
                            <CircularProgress className={classes.progressBar} />
                          ) : (
                            <Button
                              className={classes.cart}
                              onClick={() => handleOnClick(item?.node?.product, item?.node?.product?.variants[0])}
                              disabled={isDisabled || item?.node?.product?.isSoldOut}
                            >
                              <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                              <Typography
                                style={{ fontFamily: "Ostrich Sans Black" }}
                                variant="h5"
                                component="h2"
                                className={classes.cartText}
                              >
                                {isDisabled ? "Added" : item.node.product.isSoldOut ? "Sold" : "+ Cart"}
                              </Typography>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>

        <div className={classes.loadmore}>
          {sellerCatalogItemsPageInfo?.hasNextPage && <PageStepper pageInfo={sellerCatalogItemsPageInfo}></PageStepper>}
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ params, query }) {
  // console.log("obj is ", params, query);
  const { lang, allresults, filteredItemsLength } = params;
  return {
    props: {
      ...(await fetchPrimaryShop(lang)),
    },
  };
}
export default withApollo()(withCart(SellersCatalogItems(inject("routingStore", "uiStore")(SellerPublicProfile))));
