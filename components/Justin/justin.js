import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import variantById from "lib/utils/variantById";
import { useEffect, useState } from "react";
import priceByCurrencyCode from "lib/utils/priceByCurrencyCode";
import inject from "hocs/inject";
const useStyles = makeStyles((theme) => ({
  main: {
    padding: "3vh",
    width: "100%",

    padding: theme.spacing(4),
  },
  cardaction: {
    height: 312,
    width: 312,
  },

  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gridroot: {
    width: "100%",
    display: "flex",
    alignItems: "center",

    position: "relative",
    justifyContent: "center",
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
    borderRadius: "10px",
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
    bottom: "40%",
    right: "36%",
    right: "64%",
    position: "absolute",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
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
}));
const itemData = [
  {
    image: "/justin/justin1.svg",
    id: 1,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for ",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin2.svg",
    title: "Bag for sale",
    slug: "beechtree 3 piece",
    id: 2,
    price: "Rs 1200",
    newprice: "Rs 600",
    size: "large",
  },
  {
    image: "/justin/justin3.svg",
    id: 3,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "Heels for sale",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin4.svg",
    id: 4,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin1.svg",
    id: 5,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin2.svg",
    id: 6,
    price: "Rs 1200",
    newprice: "Rs 600",
    slug: "beechtree 3 piece",
    title: "Bag for sale",
    size: "large",
  },
  {
    image: "/justin/justin3.svg",
    id: 7,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "Heels for sale",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin4.svg",
    id: 8,
    price: "Rs 1200",
    newprice: "Rs 600",
    slug: "beechtree 3 piece",
    title: "floral shirt for",
    size: "large",
  },
  {
    image: "/justin/justin1.svg",
    id: 9,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin2.svg",
    id: 10,
    price: "Rs 1200",
    newprice: "Rs 600",
    slug: "beechtree 3 piece",
    title: "Bag for sale",
    size: "large",
  },
  {
    image: "/justin/justin3.svg",
    id: 11,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "Heels for sale",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin4.svg",
    id: 12,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for",
    slug: "beechtree 3 piece",
    size: "large",
  },

  {
    image: "/justin/justin1.svg",
    id: 13,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin2.svg",
    id: 14,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "Bag for sale",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin3.svg",
    id: 15,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "Heels for sale",
    slug: "beechtree 3 piece",
    size: "large",
  },
  {
    image: "/justin/justin4.svg",
    id: 16,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for",
    slug: "beechtree 3 piece",
    size: "large",
  },
];

const Justin = (props) => {
  const catalogdata = props?.catalogItems;
  // useEffect(() => {
  //   const { product } = props;

  //   selectVariant(product.variants[0]);
  // }, []);
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
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);

  const handleAddToCartClick = async (quantity, product, variant) => {
    const {
      addItemsToCart,
      currencyCode,

      uiStore: { openCartWithTimeout, pdpSelectedOptionId, pdpSelectedVariantId, setPDPSelectedVariantId },
    } = props;

    console.log(pdpSelectedVariantId, "star");

    // Get selected variant or variant option
    const selectedVariant = variantById(product.variants, variant._id);
    // const selectedOption = variantById(selectedVariant.options, variantId);
    // const selectedVariantOrOption = selectedOption || selectedVariant;
    console.log("selected variant..", product, selectedVariant);
    if (selectedVariant) {
      // Get the price for the currently selected variant or variant option
      const price = priceByCurrencyCode(currencyCode, product.pricing);
      console.log("price...", price);
      // Call addItemsToCart with an object matching the GraphQL `CartItemInput` schema
      await addItemsToCart([
        {
          price: {
            amount: 0,
            currencyCode,
          },
          productConfiguration: {
            productId: product.productId, // Pass the productId, not to be confused with _id
            productVariantId: selectedVariant.variantId, // Pass the variantId, not to be confused with _id
          },
          quantity,
        },
      ]);
    }
  };

  const handleOnClick = async (product, variant) => {
    // Pass chosen quantity to onClick callback
    console.log("handle click");
    await handleAddToCartClick(addToCartQuantity, product, variant);

    // Scroll to the top
  };

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.headermain}>
        <Typography variant="h3">JUST IN</Typography>
        <div className={classes.header}>
          <h1 className={classes.typography}></h1>
          <Typography gutterBottom variant="body1" className={classes.explore}>
            Explore More
          </Typography>
        </div>
      </div>
      <div className={classes.root}>
        <Grid container className={classes.gridroot} align="center" justify="center" alignItems="center">
          {catalogdata?.map((item, key) => (
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
                <div className={classes.cart}>
                  <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                  <Typography
                    variant="h5"
                    component="h2"
                    onClick={() => handleOnClick(item?.node?.product, item?.node?.product?.variants[0])}
                  >
                    + Cart{" "}
                  </Typography>
                </div>

                <Box className={classes.maintitle}>
                  <Typography gutterBottom variant="h4" component="h2" className={classes.carttitle}>
                    {item.node.product.title}
                  </Typography>
                  <div className={classes.size}>
                    <Typography gutterBottom variant="h4">
                      size
                    </Typography>
                    {/* <Typography gutterBottom variant="h4">{`:${item.size}`}</Typography> */}
                  </div>
                  <div className={classes.size}>
                    {" "}
                    {/* <strike>{item.price}</strike> */}
                    <Typography gutterBottom variant="h5" className={classes.price}>
                      Rs 600
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default inject("routingStore", "uiStore")(Justin);
