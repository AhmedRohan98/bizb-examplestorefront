import { fetchAllCategories, fetchTags } from "../../../staticUtils/tags/fetchAllTags";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import InputBase from "@material-ui/core/InputBase";
import PageLoading from "components/PageLoading";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { CircularProgress } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import withCatalogItems from "containers/catalog/withCatalogItems";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Select, { components } from "react-select";
import CloseIcon from "@material-ui/icons/Close";
import PageStepper from "../../../components/PageStepper/PageStepper";
import { useRouter } from "next/router";
import SortBySelector from "../../../components/SortBySelector/SortBySelector";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import FormLabel from "@material-ui/core/FormLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import withCart from "containers/cart/withCart";
import { useState } from "react";
import Popover from "@material-ui/core/Popover";
import { withApollo } from "lib/apollo/withApollo";
import useShop from "hooks/shop/useShop";
import variantById from "../../../lib/utils/variantById";
import inject from "../../../hocs/inject";
import Layout from "../../../components/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    top: "10px",
    left: "20px",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "#ffffff",

    border: "none",

    boxShadow: 24,
    p: 2,
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
const ITEMScategory = [
  {
    image: "/categoriestypes/junior.svg",
    id: 1,
    title: "Casual",
  },
  {
    image: "/categoriestypes/causal.svg",
    id: 2,
    title: "Western",
  },
  {
    image: "/categoriestypes/party.svg",
    id: 3,
    title: "Shoes",
  },
  {
    image: "/categoriestypes/shoes.svg",
    id: 4,
    title: "Bridal",
  },
  {
    image: "/categoriestypes/asseso.svg",
    id: 5,
    title: "Party Wear",
  },
  {
    image: "/categoriestypes/westrn.svg",
    id: 6,
    title: "Accessories",
  },
];

function Categories(props) {
  const {
    category,
    uiStore,
    routingStore,
    addItemsToCart,
    catalogItems,
    catalogItemsPageInfo,
    sortBy,
    cart,
    tags,
    isLoadingCatalogItems,
  } = props;
  const [isLoading, setIsLoading] = useState({});
  const [soldOutProducts, setSoldOutProducts] = useState([]);

  const router = useRouter();
  const { tagId } = router.query;
  const setSortBy = (sortBy) => {
    routingStore.setSearch({ sortby: sortBy });
    uiStore.setSortBy(sortBy);
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
  const filteredProducts = tags?.nodes.filter((product) => product?._id === tagId);

  // console.log(filteredProducts, "catalogItems3");
  // console.log("catalogItems", catalogItems);

  // console.log(category, "ffff");
  const [anchorEl, setAnchorEl] = useState(null);
  const [frequency, setFrequency] = useState("");
  const [state, setState] = useState();
  const [fourpro, setFourpro] = useState();
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  const shop = useShop();
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState([500, 10000]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionMobS, setSelectedOptionMobS] = useState(null);
  const [selectedOptionMobSize, setSelectedOptionMobSize] = useState(null);
  const [selectedOptionMobColor, setSelectedOptionMobColor] = useState(null);
  const CustomCloseButton = () => <CloseIcon Style={{ backgroundColor: "#FDC114", color: "black", height: "15px" }} />;

  useEffect(() => {
    uiStore?.setPageSize(20);
  }, []);

  const options = [

    { value: "updatedAt-desc", label: "New Arrivals" },
    { value: "minPrice-asc", label: "Price Low To High" },
    { value: "minPrice-desc", label: "Price High To Low" },
  ];
  const handleChangeSortBy = (selectedOption) => {
    setSortBy(selectedOption.value);
  };
  const Optionsize = [
    { value: "Medium", label: "Medium" },
    { value: "Medium", label: "Medium" },
    { value: "Large", label: "Large" },
    { value: "Extra-Large", label: "Extra Large" },
  ];
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    setState(!state);
  };

  const [checkbox, setCheckbox] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChangeCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  // console.log("end", uiStore?.endCursor);
  const handleAddToCartClick = async (quantity, product, variant) => {
    // console.log(pdpSelectedVariantId, "star");

    const selectedVariant = variantById(product.variants, variant._id);
    if (selectedVariant) {
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
    }
  };

  const { categorySlug, productSlug } = router.query;
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
  };

  useEffect(() => {
    console.log("catalog items in tag", catalogItems);
  }, [catalogItems]);

  const firstfour = catalogItems?.slice(0, 4);
  const allproducts = catalogItems?.slice(4, catalogItems.length);

  const [products, setProducts] = React.useState([]);
  const [displayedProducts, setDisplayedProducts] = React.useState([]);
  const [value, setValue] = React.useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    uiStore.setEndCursor(tagId);
  }, []);

  //  const fourproduc=fourprouduts.reduce((acc, item, index) => {
  //     acc[`products${index}`] = item;
  //     return acc;
  //   }, {});

  //  const fourproduc=fourprouduts.reduce((acc, item, index) => {
  //     acc[`products${index}`] = item;
  //     return acc;
  //   }, {});

  const classes = useStyles();
  if (router.isFallback) {
    return <PageLoading />;
  }

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handlePopOverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopOverClose = () => {
    setAnchorEl(null);
  };
  const style = {
    borderRadius: "8px",
    marginTop: "12px",
    left: "15%",
    width: 330,
    bgcolor: "#ffffff",
    outline: "none",
    boxShadow: 24,
    p: 2,
    minHeight: "0",
  };

  const customStylesMobSize = {
    indicatorSeparator: () => ({
      display: "none",
    }),
    control: (provided, state) => ({
      ...provided,

      marginTop: "7px",
      background: "#F7F7F9",
      borderRadius: "6px",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",

      width: "100%", // Change this to the desired width
    }),
    menu: (provided, state) => ({
      ...provided,
      // Set the width of the menu to the full viewport width

      height: "191px",
      border: "none",
      marginTop: "1px",

      // Ensure that the menu can extend beyond the width of the container
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
      width: "100vw",
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }),
    menuList: (provided, state) => ({
      ...provided,
      border: "none",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",

      width: "90%",
    }),
    option: (provided, state) => ({
      border: state.isFocused ? "1px solid #FDC114" : "1px solid #9E9E9E",
      display: "flex",
      flexDirection: "row",
      marginLeft: "20px",
      marginTop: "10px",
      fontFamily: "Lato",
      fontStyle: "normal",
      borderRadius: "6px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: state.isFocused ? 400 : 400,
      fontSize: "16px",
      lineHeight: "19px",
      textTransform: "capitalize",
      letterSpacin: "0.05em",
      paddingLeft: "8px",
      paddingRight: "8px",
      paddingTop: "5px",
      paddingBottom: "5px",
      width: "auto",
      borderBottom: state.isFocused ? "1px solid #FDC114" : "1px solid #9E9E9E",
      color: state.isFocused ? "#000000" : "#989898",
      "&:hover": {
        color: "#000000",
      },
    }),
    dropdownIndicator: (base, state) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: state.isFocused ? "#FDC114" : "#000000",
      "&:hover": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FDC114",
        marginTop: "2px",
        transform: "scale(1.2)",
      },
    }),

    placeholder: (base, state) => ({
      ...base,
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: state.isFocused ? 900 : 700,
      fontSize: "14px",
      lineHeight: "17px",
      textTransform: "capitalize",
      color: state.isFocused ? "#FDC114" : "#000000",

      "&:hover": {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: 900,
        fontSize: "14px",
        lineHeight: "17px",
        textTransform: "capitalize",
        color: "#FDC114",
      },
    }),
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
  const customStylesMobS = {
    indicatorSeparator: () => ({
      display: "none",
    }),
    control: (provided, state) => ({
      ...provided,
      height: "48px",

      background: "#F7F7F9",
      borderRadius: "6px",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",
      width: "100%",
      // Change this to the desired width
    }),
    menu: (provided, state) => ({
      ...provided,
      width: "100vw", // Set the width of the menu to the full viewport width
      maxWidth: "none",
      height: "191px",
      border: "none",
      marginTop: "1px",
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
        color: "#000000",
      },
    }),
    dropdownIndicator: (base, state) => ({
      color: state.isFocused ? "#FDC114" : "#000000",
      "&:hover": {
        color: "#FDC114",
        transform: "scale(1.2)",
      },
    }),
    placeholder: (base, state) => ({
      ...base,
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: state.isFocused ? 900 : 700,
      fontSize: "14px",
      lineHeight: "17px",
      textTransform: "capitalize",
      color: state.isFocused ? "#FDC114" : "#000000",
      "&:hover": {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: 900,
        fontSize: "14px",
        lineHeight: "17px",
        textTransform: "capitalize",
        color: "#FDC114",
      },
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src="/colors/vector.svg" />
      </components.DropdownIndicator>
    );
  };
  const clickHandler = (item) => {
    const productSlug = item;

    const url = `/en/product/${productSlug}`;
    const newWindow = window.open(url, "_blank");
    newWindow.opener.focus();
  };

  useEffect(() => {
    const updatedItems = cart?.items?.map((item) => {
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
    const soldOutProducts = catalogItems?.filter((product) => product?.node?.product?.isSoldOut);
    setSoldOutProducts(soldOutProducts);
  }, [cart?.items]);


  // console.log(category, "dis");
  return (
    <Layout shop={shop} tagId={tagId}>
      {typeof window !== "undefined" && (
        <div className={classes.main}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeButton={
              <CustomCloseButton style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
            }
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
                      {["Small", "Medium", "Large", "Extra-Large"].map((text, index) => (
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
                            RS. 1,00000
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
          <Grid
            container
            lg={12}
            sm={12}
            md={12}
            // align="center"
            // justify="center"
            // alignItems="center"
            className={classes.grid1}
          >
            <Grid style={{ display: "flex", justifyContent: "end" }} item lg={6} xs={12} sm={6} md={12}>
              <div className={classes.mainimage}>
                <div className={classes.categoriestext}>
                  <div className={classes.categoriestexts}>
                    <Typography variant="h1" className={classes.categoriesname}>
                      {filteredProducts[0]?.displayTitle}
                    </Typography>
                    <img
                      src="/categories/categoriestoggle.svg"
                      className={classes.categorytoggle}
                      onClick={handlePopOverClick}
                    />
                    {/* <img
                      src={firstarray.names0.image}
                      className={classes.categorytoggle}
                      onClick={handlePopOverClick}
                    /> */}
                  </div>
                </div>
                <img
                  style={{ borderRadius: "16px" }}
                  src={filteredProducts[0]?.heroMediaUrl}
                  className={classes.mainimageofcategory}
                />
                <Popover
                  anchorEl={anchorEl}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handlePopOverClose}
                  style={{ marginTop: "210px" }}
                >
                  <Box sx={style}>
                    <div className={classes.modalitems}>
                      <div className={classes.modalitemsimage}>
                        {ITEMScategory.map((item) => (
                          <img src={item.image} className={classes.categoryavatar} />
                        ))}
                      </div>

                      <div className={classes.modalitemstitle}>
                        {tags?.nodes?.slice(0, 6)?.map((itemtitle) => (
                          <a href={itemtitle._id}>
                            <Typography variant="h4" className={classes.catgorytitle}>
                              {itemtitle.displayTitle}
                            </Typography>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Box>
                </Popover>
              </div>
            </Grid>
            <Grid
              item
              lg={6}
              xs={12}
              sm={6}
              md={12}
            // align="center"
            // justify="center"
            // alignItems="center"
            >
              <div className={classes.gridroot}>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 900: 2, 1050: 2, 1420: 2, 1750: 2, 1920: 2 }}
                  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <Masonry columnsCount={4} style={{ display: "flex", justifyContent: "flex-start" }}>
                    {firstfour?.map((item, key) => {
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

                      // console.log(optionTitle, "fil");
                      return (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <div className={classes.boxcontairproduct}>

                            {/* {console.log("Images", item?.node)} */}
                            <img
                              onClick={() => clickHandler(item.node.product.slug)}
                              src={
                                !item?.node?.product?.media || !item?.node?.product?.media[0]?.URLs
                                  ? "/justin/justin4.svg"
                                  : item?.node?.product?.media[0]?.URLs?.large
                              }
                              className={classes.image}
                              key={item?.node?.product?.id}
                              alt={"hhhh"}
                            />


                            <div className={classes.cartcontent}>
                              <div className={classes.cartcontenttext}>
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
                        </div>
                      );
                    })}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </Grid>
          </Grid>
          {/* Products Below Image   */}
          <div className={classes.main}>
            <div className={classes.gridroot}>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 900: 2, 1050: 3, 1420: 4, 1750: 5, 1920: 5 }}
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <Masonry columnsCount={4} style={{ display: "flex", justifyContent: "flex-start" }}>
                  {allproducts?.map((item, index) => {
                    // console.log(index, "nodde");
                    const cartitem = props?.cart?.items;
                    const isDisabled = cartitem?.some((data) => {
                      return data.productConfiguration.productId === item?.node?.product?.productId;
                    });

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

                    // console.log(optionTitle, "fil");
                    return (
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className={classes.boxcontairproduct}>
                          <a target="_blank">
                            {/* {console.log("Images", item?.node)} */}
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
                          </a>

                          <div className={classes.cartcontent}>
                            <div className={classes.cartcontenttext}>
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
                      </div>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
          {/* <div className={classes.massonary}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 1200: 4 }}>
              <Masonry>
                
              </Masonry>
            </ResponsiveMasonry>
          </div> */}
          <div className={classes.loadmore}>
            {catalogItemsPageInfo?.hasNextPage && (
              <PageStepper pageInfo={catalogItemsPageInfo} loading={isLoadingCatalogItems}></PageStepper>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

Categories.propTypes = {
  catalogItems: PropTypes.array,
  classes: PropTypes.object,
  currencyCode: PropTypes.string.isRequired,
  isLoadingCatalogItems: PropTypes.bool,
  pageInfo: PropTypes.shape({
    startCursor: PropTypes.string,
    endCursor: PropTypes.string,
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
    loadNextPage: PropTypes.func,
    loadPreviousPage: PropTypes.func,
  }),
  pageSize: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};
export async function getStaticPaths() {
  const tags = await fetchTags(process.env.SHOP_ID);
  let paths = [];

  if (tags && tags.tags && tags.tags.nodes) {
    paths = tags?.tags?.nodes?.map((tag) => ({
      params: {
        lang: "en",
        tagId: tag._id,
      },
    }));
  }
  // add this line
  // console.log(paths,"end");
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { lang, tagId }, ...context }) {
  const primaryShop = await fetchPrimaryShop(lang);
  const categories = await fetchAllCategories([process.env.SHOP_ID], [tagId]);

  return {
    props: {
      ...primaryShop,
      tagId,
      category: categories,
      ...(await fetchTags(process.env.SHOP_ID)),
    },
  };
}

export default withApollo()(withCart(withCatalogItems(inject("routingStore", "uiStore")(Categories))));
