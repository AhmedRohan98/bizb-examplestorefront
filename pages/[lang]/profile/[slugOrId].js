import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
import { makeStyles } from "@material-ui/core/styles";
import inject from "../../../hocs/inject";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress, Hidden } from "@material-ui/core";
import fetchPrimaryShop from "../../../staticUtils/shop/fetchPrimaryShop";
function SellerPublicProfile(props) {
  console.log("propssssssssssssssssssssss", props);
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
      maxHeight: "400px",
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
  }));
  console.log(props.totalcount, "propertiese");
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
  return (
    <Layout shop={shop}>
      <div className={classes.main}>
        <div className="sellerProfile">
          <Typography className="SELLERpROFILE__mainHeading" variant="h5">
            Profile
          </Typography>
          <Grid container className="publicProfile__profileInfoWrapper">
            <Grid xs={12} item className="publicProfile__profileInfoSection">
              <div
                className="sellerProfile__img"
                style={{
                  backgroundImage: profile
                    ? profile.image
                      ? "URL(" + profile.profilePhoto + ")"
                      : "URL(" + "/images/sellerProfile.jpg" + ")"
                    : "URL(" + "/images/sellerProfile.jpg" + ")",
                }}
              >
                {/* <div className="sellerProfile__badge"> 
                          <img src={profile ? profile.profilePhoto?profile.profilePhoto:"/icons/medal.svg":"/icons/medal.svg"} />
                        </div> */}
              </div>
              <div className="publicProfile__infoContainer">
                <div className="sellerProfile__infoRow publicProfile__infoRow">
                  <Typography className="publicProfile__name" variant="h5">
                    <span>{profile && profile?.name ? profile?.name : profile?.name}</span>
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
                        <div className="sellerProfile__infoMetaRow">
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
                        </div>
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
                      <div className="sellerProfile__infoMetaRow">
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
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </div>
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
            fontFamily: "lato",
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
        </div>
        <div className={classes.root}>
          <Grid container className={classes.gridroot} align="center" justify="space-between" alignItems="center">
            {props?.catalogItems?.map((item, key) => {
              const cartitem = cart?.items;
              const isDisabled = cartitem?.some((data) => {
                return data.productConfiguration.productId === item?.node?.product?.productId;
              });
              // console.log(cart?.items, "item");
              // console.log(item?.node?.product?.productId, "ssss", props.cart.items[0]?.productConfiguration?.productId);
              const optionTitle = item?.node?.product?.variants[0]?.optionTitle;
              const validOptionTitle = optionTitle ? optionTitle?.replace(/'/g, '"') : null;
              const size = validOptionTitle ? JSON?.parse(validOptionTitle)?.size : null;
              const str = item.node.product.title;
              const words = str.match(/[a-zA-Z0-9]+/g);
              const firstThreeWords = words.slice(0, 3).join(" ");
              return (
                <>
                  <Grid item lg={3} sm={6} md={4} xs={12} className={classes.rootimg}>
                    <img
                      src={
                        !item?.node?.product?.media || !item?.node?.product?.media[0]?.URLs
                          ? "/justin/justin4.svg"
                          : item?.node?.product?.media[0]?.URLs?.large
                      }
                      className={classes.image}
                      key={item?.node?.product?.id}
                      alt={"hhhh"}
                      onClick={() => clickHandler(item.node.product.slug)}
                    />

                    <div className={classes.cartbackground}>
                      {isLoading[item?.node?.product?.productId] ? (
                        <CircularProgress />
                      ) : (
                        <Button
                          className={classes.cart}
                          onClick={() => handleOnClick(item?.node?.product, item?.node?.product?.variants[0])}
                          disabled={isDisabled || item?.node?.product?.isSoldOut}
                        >
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
                              fontFamily: "lato",
                            }}
                          />{" "}
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
                    <Box className={classes.maintitle} onClick={() => clickHandler(item.node.product.slug)}>
                      <Typography
                        style={{ fontWeight: "700", fontSize: "24px" }}
                        gutterBottom
                        variant="h4"
                        component="h2"
                        className={classes.carttitle}
                      >
                        {firstThreeWords}
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
                          {size == 0
                            ? "Extra Large"
                            : "Small" || size == 1
                            ? "Large"
                            : "Small" || size == 2
                            ? "Medium"
                            : "Small" || size == 3
                            ? "Small"
                            : "Small"}
                        </Typography>
                      </div>
                      <div className={classes.pricing}>
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
                </>
              );
            })}
          </Grid>
        </div>

        <div className={classes.loadmore}>
          {sellerCatalogItemsPageInfo?.hasNextPage && <PageStepper pageInfo={sellerCatalogItemsPageInfo}></PageStepper>}
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ params, query }) {
  console.log("obj is ", params, query);
  const { lang, allresults, filteredItemsLength } = params;
  return {
    props: {
      ...(await fetchPrimaryShop(lang)),
    },
  };
}
export default withApollo()(withCart(SellersCatalogItems(inject("routingStore", "uiStore")(SellerPublicProfile))));
