import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useEffect,useState } from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../../../components/Layout/Layout";
import withCatalogItems from "../../../containers/catalog/withCatalogItems";
import fetchPrimaryShop from "../../../staticUtils/shop/fetchPrimaryShop";
import { withApollo } from "../../../lib/apollo/withApollo";
import useShop from "../../../hooks/shop/useShop";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import variantById from "lib/utils/variantById";
import withCart from "./../../../containers/cart/withCart";
import Link from "next/link";
import inject from "../../../hocs/inject";
import { ToastContainer, toast } from "react-toastify";
import Box from "@material-ui/core/Box";
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

function AllResults(props) {
  console.log(props.cart, "new");
  const { allItems, totalLength, uiStore, catalogItems,cart } = props;
  const {items}=cart
   const [isLoading, setIsLoading] = useState({});
  const { setPageSize, setSearchItems } = uiStore;
    const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  // useEffect(() => {

  //   uiStore?.setPageSize(500);
  // }, []);
    useEffect(() => {
      const updatedItems = items?.map((item) => {
        const isItemInCart = catalogItems?.some((product) => {
          return item?.productConfiguration?.productId === product?.node.product?.productId;
        });
        // setpageSize(20);
        return {
          ...item,
          disabled: item?.inCart || isItemInCart,
        };
      });
      // console.log(updatedItems, "all");
      // do something with updatedItems
    }, [items, catalogItems]);
  useEffect(() => {
    setPageSize(totalLength);
    setSearchItems(allItems);
  }, [allItems, totalLength]);
  const shop = useShop();
    const CustomCloseButton = () => (
      <CloseIcon Style={{ backgroundColor: "#FDC114", color: "black", height: "15px" }} />
    );
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
   toast.success(" added to cart successfully!", {});
   setIsLoading((prevState) => ({
     ...prevState,
     [product.productId]: false,
   }));
   // Scroll to the top
 };
   const router = useRouter();
  const clickHandler = (item) => {
    router.push("/en/product/" + item);
  };
  const classes = useStyles();
  return (
    <Layout shop={shop}>
      {typeof window !== "undefined" && (
        <div className={classes.main}>
          <div className={classes.headermSain}>
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
            {/* Search Results for "Search word Here" */}
            <Typography variant="h3">
              Search <span className={classes.spanofnextword}>Results</span> for
              <span className={classes.spanofnextword}> {totalLength}</span>
            </Typography>
          </div>
          <div className={classes.root}>
            <Grid container className={classes.gridroot} align="center" justify="space-between" alignItems="center">
              {catalogItems?.map((item, key) => {
                const cartitem = props?.cart?.items;
                const isDisabled = cartitem?.some((data) => {
                  return data.productConfiguration.productId === item?.node?.product?.productId;
                });
                // console.log(item?.node?.product?.productId, "ssss", props.cart.items[0]?.productConfiguration?.productId);
                const optionTitle = item?.node?.product?.variants[0]?.optionTitle;
                const validOptionTitle = optionTitle ? optionTitle?.replace(/'/g, '"') : null;
                const size = validOptionTitle ? JSON?.parse(validOptionTitle)?.size : null;
                const str = item?.node.product.title;
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
                            disabled={isDisabled}
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
                              {isDisabled ? "Added" : "+ Cart"}
                            </Typography>
                          </Button>
                        )}
                      </div>
                      <Box className={classes.maintitle}>
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
                            {size}
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
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ params, query }) {
  console.log("obj is ", params, query);
  const { lang, allresults, filteredItemsLength } = params;
  return {
    props: {
      ...(await fetchPrimaryShop(lang)),
      allItems: allresults,
      totalLength: filteredItemsLength,
    },
  };
}
export default withApollo()(withCart(withCatalogItems(inject("routingStore", "uiStore")(AllResults))));
