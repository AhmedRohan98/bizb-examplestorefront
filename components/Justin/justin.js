import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import variantById from "lib/utils/variantById";
import { useState, useEffect } from "react";
import priceByCurrencyCode from "lib/utils/priceByCurrencyCode";
import inject from "hocs/inject";
import CloseIcon from "@material-ui/icons/Close";
import { JSON } from "global";
import { ToastContainer, toast } from "react-toastify";
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

const Justin = (props) => {
  const catalogdata = props?.catalogItems;
  const [found, setFound] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  const { cart } = props;
  console.log(cart, "cartx");
  const {items}=cart
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
  console.log(catalogdata,"data")
useEffect(() => {
  const updatedItems = items.map((item) => {
    const isItemInCart = catalogdata?.some((product) => {
      return item.productConfiguration?.productId === product?.node.product?.productId;
    });
    return {
      ...item,
      disabled: item.inCart || isItemInCart,
    };
  });
  console.log(updatedItems, "all");
  // do something with updatedItems
}, [items, catalogdata]);
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

    // console.log("selected variant..", selectedVariantOrOption);
    if (!selectedVariant || !cart) {
      return "Invalid parameters";
    }

    if (cart?.items?.length === 0) {
      // If cart is empty, add the new item
      // console.log("added");
      await addItemsToCart([
        {
          price: {
            amount: product.variants[0]?.pricing[0]?.minPrice,
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
    } else {
      let itemAdded = false;
      // Check if the selected variant is already in the cart
      for (let i = 0; i < cart?.items?.length; i++) {
        // console.log(cart.items[i].productConfiguration.productId, "id in cart");
        // console.log(product.productId, "id without cart");
        if (cart.items[i].productConfiguration.productId === product.productId) {
          // If variant is already in the cart, update the quantity
          itemAdded = true;
          setFound(true);
          // console.log("Already ");
          break;
        }
      }
      // If variant is not already in the cart, add the new item
      if (!itemAdded) {
        // console.log("addednn");
        setFound(true);
        await addItemsToCart([
          {
            price: {
              amount: product.variants[0]?.pricing[0]?.minPrice,
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
      }
    }
    return "Item added to cart";
  };

  const handleOnClick = async (product, variant) => {
    // Pass chosen quantity to onClick callback
    // console.log("handle click");
    await handleAddToCartClick(addToCartQuantity, product, variant);

    // Scroll to the top
  };
  const CustomCloseButton = () => <CloseIcon Style={{ backgroundColor: "#FDC114", color: "black", height: "15px" }} />;

  //  const notify = () => toast("Wow so easy!");
  const classes = useStyles();
  return (
    <div className={classes.main}>
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
          <Typography gutterBottom variant="body1" className={classes.explore}>
            Explore More
          </Typography>
        </div>
      </div>
      <div className={classes.root}>
        <Grid container className={classes.gridroot} align="center" justify="space-between" alignItems="center">
          {catalogdata?.map((item, key) => {
            const cartitem = props?.cart?.items;
            const isDisabled = cartitem?.some((data) => {
              return data.productConfiguration.productId === item?.node?.product?.productId;
            });
            console.log(item?.node?.product?.productId, "ssss", props.cart.items[0]?.productConfiguration?.productId);
           const optionTitle = item?.node?.product?.variants[0]?.optionTitle;
           const validOptionTitle = optionTitle ? optionTitle?.replace(/'/g, '"') : null;
           const size = validOptionTitle ? JSON?.parse(validOptionTitle)?.size : null;

            return (
              <>
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
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default inject("routingStore", "uiStore")(Justin);
