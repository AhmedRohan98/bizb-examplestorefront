import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PageLoading from "components/PageLoading/PageLoading";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withCart from "containers/cart/withCart";
import PageStepper from "components/PageStepper/PageStepper";
import Select, { components } from "react-select";
import Slider from "@material-ui/core/Slider";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { withApollo } from "lib/apollo/withApollo";
import useShop from "hooks/shop/useShop";
import withCatalogItems from "containers/catalog/withCatalogItems";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import variantById from "lib/utils/variantById";
import { makeStyles } from "@material-ui/core/styles";
import inject from "hocs/inject";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress, Hidden } from "@material-ui/core";
import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";
import { locales } from "translations/config";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import formatSize from "../../lib/utils/formatSize";
function Explore(props) {
  console.log("props", props);
  const { uiStore, routingStore, cart, addItemsToCart, catalogItemsPageInfo, sortBy } = props;
  const [state, setState] = useState();
  const [soldOutProducts, setSoldOutProducts] = useState([]);
  const [isLoading, setIsLoading] = useState({});

  const [found, setFound] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  const [price, setPrice] = useState([500, 10000]);
  const [selectedOption, setSelectedOption] = useState(null);
  const setSortBy = (sortBy) => {
    routingStore.setSearch({ sortby: sortBy });
    uiStore.setSortBy(sortBy);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    setState(!state);
  };

  const handleChangeChecksize = (event) => {
    const selectedSize = event.target.name;
    const updatedFilters = uiStore.filters
      .filter((filter) => filter.name !== "size")
      .concat({ name: "size", value: selectedSize });
    uiStore.setFilters(updatedFilters);
  };
  const handleFilterChange = (event, newValue, minFilterName, maxFilterName) => {
    setPrice(newValue);
    const { value } = event.target;
    const updatedFilters = uiStore.filterPrice
      .filter((filter) => filter.name !== minFilterName && filter.name !== maxFilterName)
      .concat({ name: minFilterName, value: newValue[0] })
      .concat({ name: maxFilterName, value: newValue[1] });

    uiStore.setFilterPrice(updatedFilters);
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src="/colors/vector.svg" />
      </components.DropdownIndicator>
    );
  };
  const customStyles = {
    indicatorSeparator: () => ({
      height: "48px",
      color: "black",
    }),
    control: (provided, state) => ({
      ...provided,
      height: "48px",
      marginTop: "10px",
      background: "#F7F7F9",
      borderRadius: "6px",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",
      width: "255px", // Change this to the desired width
    }),
    menu: (provided, state) => ({
      ...provided,
      // Set the width of the menu to the full viewport width
      maxWidth: "none",

      // Ensure that the menu can extend beyond the width of the container
    }),
    menuList: (provided, state) => ({
      ...provided,
      border: "none",
    }),
    option: (provided, state) => ({
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: state.isFocused ? 800 : 500,
      fontSize: "14px",
      lineHeight: "19px",
      textTransform: "capitalize",
      letterSpacin: "0.05em",
      padding: "13px",
      borderBottom: state.isLastOption ? "none" : "1px solid #01010136",
      color: state.isFocused ? "#000000" : "#989898",
      "&:hover": {
        color: "#FDC114",
      },
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      icon: state.isFocused ? "url('/colors/vectordark.svg')" : "url('/colors/vectoryellow.svg')",
      "&:hover": {
        color: "green",
      },
    }),
    input: (provided) => ({
      ...provided,
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "19px",
        textTransform: "capitalize",
        color: "#969696",
        "&:hover": {
          color: "blue",
        },
      };
    },
  };
  const options = [
    { value: "updatedAt-desc", label: "New Arrivals" },
    { value: "minPrice-asc", label: "Price Low To High" },
    { value: "minPrice-desc", label: "Price High To Low" },
  ];
  const handleChangeSortBy = (selectedOption) => {
    setSortBy(selectedOption.value);
  };
  const useStyles = makeStyles((theme) => ({
    main: {
      width: "100%",
      padding: "75px",

      [theme.breakpoints.down("xs")]: {
        padding: "0",
      },
    },
    list: {
      width: "379px",
    },
    fullList: {
      width: "auto",
    },
    checkbox: {
      fontSize: "20px",
      color: "#333333",
      fontFamily: "Lato",
      fontWeight: 500,
      marginTop: "10px",
      lineHeight: "24px",
      fontStyle: "normal",
      color: theme.palette.secondary.selected,
      "& .MuiTypography-body1": {
        fontSize: "20px",
        color: "#000000",
        fontFamily: "Lato",
        fontWeight: 500,
        marginTop: "10px",
        marginLeft: "10px",
        lineHeight: "24px",
        fontStyle: "normal",
      },
      "& .MuiCheckbox-colorSecondary.Mui-checked": {
        color: theme.palette.secondary.selected,
        outline: "none",
      },
      "& .MuiCheckbox-colorSecondary": {
        outline: "1px solid #333333",
      },
      "& .MuiCheckbox-root": {
        outline: "1px solid #333333",
        marginLeft: "20px",
        marginRight: "10px",
        marginTop: "10px",

        borderRadius: 0,
        width: 21,
        height: 21,
      },
    },
    mainimage: {
      position: "relative",
      display: "inline-grid",
    },
    categoriestext: {
      position: "absolute",
      top: "30px",
      left: "50px",
    },
    categoriestexts: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    categoriesname: {
      fontSize: "48px",
      color: "#ffffff",
      fontFamily: "Ostrich Sans Black",
      fontWeight: 900,

      lineHeight: "58px",
      fontStyle: "normal",
    },
    image: {
      width: "312px",
      maxHeight: "450px",
      objectFit: "cover",
      borderRadius: "10px",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        width: "150px", // Reduced by 1px to create space for the border
        height: "200px",
      },
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

    size: {
      display: "flex",
      flexDirection: "row",
      marginLeft: theme.spacing(1),
    },

    main: {
      width: "100%",
      padding: "25px",
      [theme.breakpoints.down("xs")]: {
        padding: "0",
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
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.spacing(10),
      border: "none",
      "&:focus": {
        outline: "none",
      },
    },

    images: {
      minHeigth: "201px",
      maxHeight: "355px",
      width: "310px",
      marginTop: theme.spacing(2),
      display: "inline-grid",
      position: "relative",
      [theme.breakpoints.down(700)]: {
        width: "185px",
        minHeigth: "145px",
        maxHeight: "230px",
      },
    },
    cartText: {
      fontSize: "18px",

      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    paper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing(2),
      marginRight: "2vh",
      boxShadow: "none",
      width: "255px",
      height: "48px",
      borderRadius: "6px",
      background: "#F7F7F9",
      "& .MuiInput-underline:before": {
        borderBottom: "none",
      },
      ".MuiOutlinedInput-notchedOutline": { border: 0 },
    },
    maingrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    categorytoggle: {
      marginLeft: theme.spacing(2),
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.08)",
        transition: "left 0.2s linear",
      },
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

    modalitems: {
      display: "flex",
      flexDirection: "row",
    },
    modalitemsimage: {
      display: "flex",
      flexDirection: "column",
    },
    modalitemstitle: {
      display: "flex",
      width: "90%",

      flexDirection: "column",
    },
    loadmorediv: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.spacing(2),
    },
    vector: {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    categoryavatar: {
      marginTop: "13px",
      height: "34px",
      width: "27px",
      marginBottom: theme.spacing(1),
    },
    catgorytitle: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(3),
      width: "80%",
      borderBottom: "0.5px dotted #0101013b",
      "&:hover": {
        color: theme.palette.secondary.selected,
      },
    },
    selectDesktop: {
      marginRight: theme.spacing(3),
    },

    filters: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(4),
      height: "100px",
      background: "#333333",
    },
    close: {
      color: "#ffffff",
    },
    filtersTitle: {
      color: "#ffffff",
    },
    slider: {
      color: "black",
      width: "257px",

      height: "2px",
      "& > span > span": {
        color: "#FDC114",
        width: "100px",
        fontWeight: 800,
      },
      "& .PrivateValueLabel-thumb": {
        width: "100px",
      },
      "& .MuiSlider-track": {
        border: "none",
      },
      "& .MuiSlider-thumb": {
        width: "13px",
        height: "13px",

        backgroundColor: "#fff",
        border: "0.5px solid #9E9E9E",
        "&:before": {
          boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
        },
        "&:hover, &.Mui-focusVisible, &.Mui-active": {
          boxShadow: "none",
        },
      },
    },
    loadmore: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
    filternames: {
      borderBottom: "2px solid #000000",
      marginLeft: theme.spacing(3),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      width: "62px",
    },
    slidervalues: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "300px",
      flexDirection: "row",
    },
    slidervaluesmain: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    filternames2: {
      borderBottom: "2px solid #000000",
      marginLeft: theme.spacing(3),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      width: "75px",
    },
    colorsmain: {
      display: "flex",
      flexDirection: "row",
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(3),
    },
    colortitle: {
      marginLeft: theme.spacing(1),
    },
    slidervalue: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    filternameprice: {
      marginTop: theme.spacing(3),
      color: "#989898",
      lineHeight: "19px",
      fontWeight: 400,
      marginBottom: "0px",
    },
    topheader: {
      display: "flex",
      justifyContent: "flex-end",

      [theme.breakpoints.down(700)]: {
        display: "none",
      },
      reactselect: {
        height: "120px",
        width: "100px",
      },
    },

    sizesfiltes: {
      marginLeft: "5px",
    },
    mobilefilters: {
      topheader: {
        display: "flex",
        justifyContent: "flex-end",
        display: "none",
        [theme.breakpoints.down(700)]: {
          display: "block",
        },
      },
    },
    mainimageofcategory: {
      height: "900px",
      width: "700px",
      objectFit: "cover",
    },
    gridroot: {
      width: "100%",
      display: "flex",
      alignItems: "baseline",
      position: "relative",
      justifyContent: "space-between",
    },
    grid1: {
      marginTop: theme.spacing(6),
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
    topheader: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "60px",

      [theme.breakpoints.down(700)]: {
        display: "none",
      },
      reactselect: {
        height: "120px",
        width: "100px",
      },
    },
    profilebaner: {
      width: "100%",

      marginBottom: "60px",
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
    progressBar: {
      [theme.breakpoints.down("sm")]: {
        size: "10px",
        marginLeft: theme.spacing(3),
      },

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
  }));
  // console.log(props.totalcount, "propertiese");

  useEffect(() => {
    // uiStore?.setPageSize(15);
  }, []);
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
  useEffect(() => {
    // Simulate an asynchronous data loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);
  const shop = useShop();
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

        <img src="/profile/explore.webp" className={classes.profilebaner} />

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
        <Box className={classes.topheader}>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <img
                src="/categoriestypes/Vector.svg"
                alt="vector"
                className={classes.vector}
                onClick={toggleDrawer(anchor, true)}
              />
              <Drawer anchor="left" open={state} onClose={toggleDrawer()}>
                <div className={classes.filters}>
                  {" "}
                  <Typography variant="h3" className={classes.filtersTitle}>
                    FILTER
                  </Typography>
                  <CloseIcon
                    onClick={() => {
                      setState(!state);
                    }}
                    className={classes.close}
                  />
                </div>
                <div className={clsx(classes.list)} role="presentation">
                  <List>
                    <Typography variant="h4" className={classes.filternames}>
                      SIZE
                    </Typography>
                    {["Small", "Medium", "Large", "Extra Large"].map((text, index) => (
                      <ListItem button key={text}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChangeChecksize}
                              name={text}
                              variant="h6"
                              className="size-checkbox"
                            />
                          }
                          label={text}
                          className={classes.checkbox}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Divider />

                  <Divider />
                  <List>
                    <Typography variant="h4" className={classes.filternames2}>
                      PRICE
                    </Typography>
                    <div className={classes.slidervaluesmain}>
                      <div className={classes.slidervalues}>
                        <Typography variant="h5" className={classes.filternameprice}>
                          RS. 500
                        </Typography>
                        <Typography variant="h5" className={classes.filternameprice}>
                          RS. 10,000
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.slidervalue}>
                      <Slider
                        value={price}
                        aria-labelledby="range-slider"
                        min={500}
                        max={10000}
                        onChange={(event, newValue) => handleFilterChange(event, newValue, "minPrice", "maxPrice")}
                        className={classes.slider}
                        valueLabelDisplay="auto"
                      />
                    </div>
                  </List>
                </div>
              </Drawer>
            </React.Fragment>
          ))}
          <div className={classes.selectDesktop}>
            <Select
              defaultValue={selectedOption}
              placeholder="Sort by"
              components={{ DropdownIndicator }}
              styles={customStyles}
              options={options}
              onChange={handleChangeSortBy}
              value={options.find((option) => option.value === sortBy)}
              className={classes.reactselect}
            />
          </div>
        </Box>
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
                const validOptionTitle = optionTitle ? optionTitle?.replace(`None`,`'none'`).replace('None',`none`).replace(/''/g, '"').replace(/'/g, '"') : null;
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
                      <img
                        src={
                          !item?.node?.product?.media || !item?.node?.product?.media[0]?.URLs
                            ? "/justin/justin4.svg"
                            : item?.node?.product?.media[0]?.URLs?.large
                        }
                        className={classes.image}
                        key={item?.node?.product?.id}
                        onClick={() => clickHandler(item.node.product.slug)}
                        alt={item?.node?.product?.title}
                      />

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
                              fontSize: "18px",
                              fontFamily: "lato",
                              color: "#FDC114",
                              left: "12px",
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
                              fontSize: "0.8rem",
                              fontFamily: "lato",
                              left: "5px",
                            }}
                            variant="h4"
                            component="h2"
                            className={classes.carttitle}
                          >
                            Size:{" "}
                            <span className={classes.sizes}>
                              {formatSize(size, true)}
                            </span>
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
          {catalogItemsPageInfo?.hasNextPage && <PageStepper pageInfo={catalogItemsPageInfo}></PageStepper>}
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps({ params: { lang } }) {
  const primaryShop = await fetchPrimaryShop(lang);
  // console.log(primaryShop,"prim")
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  // console.log("data is ", data);

  const feed = await data.json();
  // console.log("new feed", feed);

  if (!primaryShop?.shop) {
    return {
      props: {
        shop: null,
      },
      // eslint-disable-next-line camelcase
      unstable_revalidate: 1, // Revalidate immediately
    };
  }

  return {
    props: {
      ...primaryShop,

      feed,
    },
    // eslint-disable-next-line camelcase
    unstable_revalidate: 120, // Revalidate each two minutes
  };
}

/**
 *  Static paths for the main layout
 *
 * @returns {Object} the paths
 */
export async function getStaticPaths() {
  return {
    paths: locales.map((locale) => ({ params: { lang: locale } })),
    fallback: false,
  };
}

export default withApollo()(withCart(withCatalogItems(inject("routingStore", "uiStore")(Explore))));
