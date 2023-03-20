import { useRouter } from "next/router";
import { fetchAllCategories, fetchTags } from "../../../staticUtils/tags/fetchAllTags";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from "@material-ui/core/Paper";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Select, { components } from "react-select";
import CloseIcon from "@material-ui/icons/Close";

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FormLabel from '@material-ui/core/FormLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Slider from "@material-ui/core/Slider";
import Checkbox from '@material-ui/core/Checkbox';

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
    width: 'auto',
  },
  checkbox:{
    fontSize: "20px",
    color: "#333333",
    fontFamily: "Lato",
    fontWeight: 500,

    lineHeight: "24px",
    fontStyle: "normal",
    color:theme.palette.secondary.selected,
    "& .MuiTypography-body1":{
      fontSize: "20px",
      color: "#333333",
      fontFamily: "Lato",
      fontWeight: 500,
  
      lineHeight: "24px",
      fontStyle: "normal",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked":{
      color:theme.palette.secondary.selected,
    },
    "& .MuiCheckbox-colorSecondary":{
      color:"#333333",
    }
 
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
    fontFamily: "Ostrich Sans",
    fontWeight: 900,

    lineHeight: "58px",
    fontStyle: "normal",
  },
  image: {},
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    display: "inline-grid",
  },
  cart: {
    height: "35px",
    width: "84px",
    borderRadius: "40px",
    background: "#FDC114",

    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: "20px",
    left: "20px",

    position: "absolute",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    border:"none",
    "&:focus": {
      outline: "none"
    }
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
  paper:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center",
    marginTop:theme.spacing(2),
    marginRight :"2vh",
  boxShadow:"none",
    width:"255px",
height:"48px",
borderRadius:"6px",
background:"#F7F7F9",
"& .MuiInput-underline:before":{
borderBottom:"none"
},
'.MuiOutlinedInput-notchedOutline': { border: 0 }
  },
  maingrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  categorytoggle: {
    marginLeft: theme.spacing(2),
  },
  massonary: {
    width: "92%",
    margin: "8%",
  },
  loadmore: {
    width: "305px",
    height: "50px",
    borderRadius: "40px",
    border: "none",
    display: "flex",
    fontSize: "28px",
    color: "#333333",
    lineHeight: "32px",
    fontFamily: "Ostrich Sans",
    fontWeight: 900,
    fontStyle: "normal",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.selected,
    "&:hover": {
      background: theme.palette.secondary.selected,
    },
  },
  modalitems: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "0.5px dotted #0101013b",
  },
  loadmorediv: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  vector:{
    marginRight:theme.spacing(2),
    marginTop:theme.spacing(2),
  },
  categoryavatar: {
    marginTop: theme.spacing(2),
  },
  catgorytitle: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    "&:hover": {
      color: theme.palette.secondary.selected,
    },
  },
  selectDesktop:{
marginRight:theme.spacing(3),
  },

  main: {
    width: "100%",
  },
  filters:{
    display:"flex",
    justifyContent:"space-between",
    padding:theme.spacing(4),
    height:"100px",
    background: "#333333"

  },
  close:{
    color:"#ffffff"
  },
  filtersTitle:{
    color:"#ffffff"
  },
  slider:{
color:"black",
width:"257px",

height:"2px",
"& > span > span": {
  color: "#FDC114",
  width:"100px",
  fontWeight: 800
},
"& .PrivateValueLabel-thumb":{
width:"100px"
},
'& .MuiSlider-track': {
  border: 'none',
},
'& .MuiSlider-thumb': {
  width:"16px",
  height: "16px",
  backgroundColor: '#fff',
  border:"0.5px solid #9E9E9E",
  '&:before': {
    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
  },
  '&:hover, &.Mui-focusVisible, &.Mui-active': {
    boxShadow: 'none',
  },
},
  },

  filternames:{
    borderBottom:"2px solid #000000",
    marginLeft:theme.spacing(3),
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:theme.spacing(1),
    marginTop:theme.spacing(1),
    width:"62px"
  },
  slidervalues:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"300px",
    flexDirection:"row"
  },
  slidervaluesmain:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"100%"
  },
  filternames2:{
    borderBottom:"2px solid #000000",
    marginLeft:theme.spacing(3),
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:theme.spacing(1),
    marginTop:theme.spacing(1),
    width:"92px"
  },
  colorsmain:{
    display:"flex",
    flexDirection: "row",
   marginTop:theme.spacing(1),
   marginLeft:theme.spacing(3)

  },
  colortitle:{
    marginLeft:theme.spacing(1),
  },
  slidervalue:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
filternameprice:{
  marginTop:theme.spacing(4),
  color:"#989898",
  lineHeight:"19px",
  fontWeight:400,
  marginBottom:"0px"
},
topheader:{
   display: "flex", 
   justifyContent: "flex-end" ,
   
   [theme.breakpoints.down(700)]: {
display:"none"
  },
reactselect:{
  height:"120px",
  width:"100px"
}
},

sizesfiltes:{
  marginLeft:"5px"
},
mobilefilters:{
  topheader:{
    display: "flex", 
    justifyContent: "flex-end" ,
    display:"none",
    [theme.breakpoints.down(700)]: {
      display:"block",
   },

}},
}));
function Categories(props) {
  const [state, setState] = React.useState();
  const [price, setPrice] = React.useState([0, 5000]);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [selectedOptionMobS, setSelectedOptionMobS] = React.useState(null);
  const [selectedOptionMobSize, setSelectedOptionMobSize] = React.useState(null);
  const [selectedOptionMobColor, setSelectedOptionMobColor] = React.useState(null);
  const options = [
    { value: 'Recommend', label: 'Recommend' },
    { value: 'New Arrivals', label: 'New Arrivals' },
    { value: 'Price Low To High', label: 'Price Low To High' },
    { value: 'Price High To Low', label: 'Price High To Low' },
  ];
  const Optionsize = [
    { value: 'Medium', label: 'Medium' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
    { value: 'Extra-Large', label: 'Extra-Large' },
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

  const  Colors = [
    {
      image: "/colors/black.svg",
      id: 1,
      title: "Black",
    },
    {
      image: "/colors/blue.svg",
      id: 2,
      title: "Blue",
    },
    {
      image: "/colors/green.svg",
      id: 3,
      title: "Green",
    },
    {
      image: "/colors/red.svg",
      id: 4,
      title: "Red",
    },
    {
      image: "/colors/yellow.svg",
      id: 5,
      title: "Yellow",
    },
    {
      image: "/colors/orange.svg",
      id: 6,
      title: "Orange",
    },
  ]
  
  const ITEMS = [
    {
      image: "/categories/categoriestoggle.svg",
      id: 1,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 8,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 9,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub5.svg",
      id: 10,
      price: "Rs 12c00",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub6.svg",
      id: 10,
      price: "Rs 12c00",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
  ];
  
  const ITEMScategory = [
    {
      image: "/categoriestypes/cat1.svg",
      id: 1,
      title: "Causal",
    },
    {
      image: "/categoriestypes/cat2.svg",
      id: 2,
      title: "Westren",
    },
    {
      image: "/categoriestypes/cat3.svg",
      id: 3,
      title: "Shoes",
    },
    {
      image: "/categoriestypes/cat4.svg",
      id: 4,
      title: "Bridal",
    },
    {
      image: "/categoriestypes/cat5.svg",
      id: 5,
      title: "Party Wear",
    },
    {
      image: "/categoriestypes/cat6.svg",
      id: 6,
      title: "Accessories",
    },
    {
      image: "/categoriestypes/cat7.svg",
      id: 6,
      title: "Junior",
    },
  ];
  const ITEMS2 = [
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub1.svg",
      id: 2,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub2.svg",
      id: 3,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
    {
      image: "/categories/sub3.svg",
      id: 4,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub4.svg",
      id: 5,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },

    {
      image: "/categories/sub5.svg",
      id: 6,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "small",
    },
    {
      image: "/categories/sub6.svg",
      id: 7,
      price: "Rs 1200",
      newprice: "Rs 600",
      title: "floral shirt for",
      size: "large",
    },
  ];
  const data = ITEMS.splice(0, 5);
  const data2 = ITEMS.splice(5, ITEMS.length);

  const [products, setProducts] = React.useState([]);
  const [displayedProducts, setDisplayedProducts] = React.useState([]);
  const [value, setValue] = React.useState([]);
   const handleChange =(e)=>{
    setValue(e.target.value)
   }
  var firstarray = data.reduce((acc, item, index) => {
    acc[`names${index}`] = item;
    return acc;
  }, {});
  const router = useRouter();
  const classes = useStyles();
  if (router.isFallback) {
    return "loading...";
  }
  const [catalogItems, setCatalogItems] = React.useState(
    props.category.catalogItems.edges.map((item) => item.node?.product),
  );
  console.log(catalogItems);

  const groupedImages = ITEMS2.reduce((acc, image) => {
    if (!acc[image.size]) {
      acc[image.size] = [];
    }
    acc[image.size].push(image);
    return acc;
  }, {});

  const interLeavedImages = [];
  let largeImages = groupedImages["large"];
  let smallImages = groupedImages["small"];
  let counter = 0;

  while (largeImages.length || smallImages.length) {
    if (counter === 4) {
      counter = 0;
      [largeImages, smallImages] = [smallImages, largeImages];
    }
    if (largeImages.length) {
      interLeavedImages.push(largeImages.shift());
      counter++;
    }
    if (smallImages.length) {
      interLeavedImages.push(smallImages.shift());
      counter++;
    }
  }

  useEffect(() => {
    // Fetch products from API or any data source

    setProducts(interLeavedImages);
    setDisplayedProducts(interLeavedImages.slice(0, 20));
  }, []);
  const loadMoreProducts = () => {
    const currentIndex = displayedProducts.length;
    const nextProducts = products.slice(currentIndex, currentIndex + 10);
    setDisplayedProducts([...displayedProducts, ...nextProducts]);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "20%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "#ffffff",

    border: "none",

    boxShadow: 24,
    p: 2,
  };


 
  const customStylesMobSize = {
    indicatorSeparator: () => ({
display:"none"}),
    control: (provided, state) => ({
      ...provided,
    
      marginTop:"7px",
      background:"#F7F7F9",
      borderRadius:"6px",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",
   
      width: '100%'       // Change this to the desired width
    }),
    menu: (provided, state) => ({
      ...provided,
       // Set the width of the menu to the full viewport width
  
      height:"191px",
     border:"none",
     marginTop:"1px",
    
     // Ensure that the menu can extend beyond the width of the container
    }),
    menuPortal: base => ({
      ...base,
      zIndex: 9999,
      width:"100vw",
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }),
    menuList: (provided, state) => ({
      ...provided,
      border: 'none',
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
  
    width:"90%",
    }),
    option: (provided, state) => ({
      border:state.isFocused ?"1px solid #FDC114":"1px solid #9E9E9E",
    display:"flex",
    flexDirection:"row",
    marginLeft:"20px",
    marginTop:"10px",
      fontFamily: 'Lato',
         fontStyle: "normal",
         borderRadius:"6px",
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         fontWeight: state.isFocused ?400:400,
         fontSize: "16px",
         lineHeight: "19px" ,
         textTransform: "capitalize" ,
         letterSpacin:"0.05em",
        paddingLeft:'8px',
        paddingRight:"8px",
        paddingTop:"5px",
        paddingBottom:"5px",
        width:'auto',
        borderBottom: state.isFocused ? "1px solid #FDC114":"1px solid #9E9E9E",
       color: state.isFocused ?"#000000" :"#989898",
         "&:hover": {
           color: "#000000"
         },
       }),
    dropdownIndicator: (base, state) => ({
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
      color: state.isFocused ? "#FDC114" : "#000000",
      "&:hover": {
          display:"flex",
     justifyContent:"center",
     alignItems:"center",
        color: "#FDC114",
           marginTop:"2px",
        transform:"scale(1.2)"
      }
    }),
   
   
      placeholder: (base, state) => ({
        ...base,
        fontFamily: 'Lato',
          fontStyle: "normal",
          fontWeight: state.isFocused ?900:700,
          fontSize: "14px",
          lineHeight: "17px" ,
          textTransform: "capitalize" ,
          color: state.isFocused ? "#FDC114" : "#000000",
       
          "&:hover": {
            
            fontFamily: 'Lato',
            fontStyle: "normal",
            fontWeight: 900,
            fontSize: "14px",
            lineHeight: "17px" ,
            textTransform: "capitalize" ,
            color: "#FDC114",
          }
          } )
      
  }
  

  const colorOptions = Colors.map(color => ({
    value: color.id,
    label: (
   <div>
        <img src={color.image} alt={color.title} height="10" width="10" />
        <span className={classes.sizesfiltes}>{color.title}</span>
        </div>
    ),
  }));
 
  const customStyles = {
    indicatorSeparator: () => ({
  height:"48px" ,
color:"black"}),
    control: (provided, state) => ({
      ...provided,
      height:"48px",
      marginTop:"10px",
      background:"#F7F7F9",
      borderRadius:"6px",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",
      width: '255px', // Change this to the desired width
    }),
    menu: (provided, state) => ({
      ...provided,
      // Set the width of the menu to the full viewport width
      maxWidth: 'none',
  
     // Ensure that the menu can extend beyond the width of the container
    }),
    menuList: (provided, state) => ({
      ...provided,
      border: 'none',
    }),
    option: (provided, state) => ({
      fontFamily: 'Lato',
         fontStyle: "normal",
         fontWeight: state.isFocused ?800:500,
         fontSize: "14px",
         lineHeight: "19px" ,
         textTransform: "capitalize" ,
         letterSpacin:"0.05em",
        padding:'13px',
        borderBottom: state.isLastOption ? 'none' : '1px solid #01010136',
       color: state.isFocused ?"#000000" :"#989898",
         "&:hover": {
           color: "#000000"
         },
       }),
    dropdownIndicator: (base, state) => ({
      ...base,
      icon: state.isFocused ? "url('/colors/vectordark.svg')" : "url('/colors/vectoryellow.svg')",
      "&:hover": {
        color: "green"
      }
    }),
    input: (provided) => ({
      ...provided,
    }),
    placeholder: (defaultStyles) => {
      return {
          ...defaultStyles,
          fontFamily: 'Lato',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "19px" ,
          textTransform: "capitalize" ,
          color: "#969696",
          "&:hover": {
            color: "blue"
          }
      }
  }
  };
  const customStylesMobS = {
    indicatorSeparator: () => ({
display:"none"}),
    control: (provided, state) => ({
      ...provided,
      height:"48px",
     
      background:"#F7F7F9",
      borderRadius:"6px",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",
      width: '100%',
       // Change this to the desired width
    }),
    menu: (provided, state) => ({
      ...provided,
      width: '100vw', // Set the width of the menu to the full viewport width
      maxWidth: 'none',
      height:"191px",
     border:"none",
     marginTop:"1px",
     // Ensure that the menu can extend beyond the width of the container
    }),
    menuList: (provided, state) => ({
      ...provided,
      border: 'none',
    }),
    option: (provided, state) => ({
      fontFamily: 'Lato',
         fontStyle: "normal",
         fontWeight: state.isFocused ?800:500,
         fontSize: "14px",
         lineHeight: "19px" ,
         textTransform: "capitalize" ,
         letterSpacin:"0.05em",
        padding:'13px',
        borderBottom: state.isLastOption ? 'none' : '1px solid #01010136',
       color: state.isFocused ?"#000000" :"#989898",
         "&:hover": {
           color: "#000000"
         },
       }),
    dropdownIndicator: (base, state) => ({
      color: state.isFocused ? "#FDC114" : "#000000",
      "&:hover": {
        color: "#FDC114",
        transform:"scale(1.2)"
      }
    }),
      placeholder: (base, state) => ({
        ...base,
        fontFamily: 'Lato',
          fontStyle: "normal",
          fontWeight: state.isFocused ?900:700,
          fontSize: "14px",
          lineHeight: "17px" ,
          textTransform: "capitalize" ,
          color: state.isFocused ? "#FDC114" : "#000000",
          "&:hover": {
            fontFamily: 'Lato',
            fontStyle: "normal",
            fontWeight: 900,
            fontSize: "14px",
            lineHeight: "17px" ,
            textTransform: "capitalize" ,
            color: "#FDC114",
          }
          } )
  }

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
       <img src="/colors/vector.svg"/>
      </components.DropdownIndicator>
    );
  };
const [frequency, setFrequency] = React.useState("");
  return (
    <>
      {typeof window !== "undefined" && (
        <div className={classes.main}>
      <Grid container  xs={12} className={classes.mobilefilters}>
        <Grid item xs={3}>
        <Select
        defaultValue={selectedOptionMobS}
        onChange={setSelectedOptionMobS}
        placeholder="Sort"
        styles={customStylesMobS}
        options={options}
        className={classes.reactselect}
      />
        </Grid>
        <Grid item xs={3}>
        <Select
        defaultValue={selectedOptionMobColor}
        onChange={setSelectedOptionMobColor}
        placeholder="Colour"
      
        menuPortalTarget={document.body}

        dropdownIndicator
        styles={customStylesMobSize}
        options={colorOptions}
        className={classes.reactselect}
      />
  
        
        </Grid>
        <Grid item xs={3}>
          
        <Select
        defaultValue={selectedOptionMobSize}
        onChange={setSelectedOptionMobSize}
        placeholder="Size"
        menuPortalTarget={document.body}
        styles={customStylesMobSize}
        options={Optionsize}
        className={classes.reactselect}
      />
        </Grid>
        <Grid item xs={3}>
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        placeholder="Sort by"
        components={{  DropdownIndicator }}
        styles={customStylesMobSize}
        options={options}
        className={classes.reactselect}
      />
        </Grid>
      </Grid>
        <Box className={classes.topheader}>

            {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
                    <img src="/categoriestypes/Vector.svg" alt="vector"  className={classes.vector}  onClick={toggleDrawer(anchor, true)}/>
          <Drawer anchor="left"  open={state} onClose={toggleDrawer()}>
          <div className={classes.filters}> <Typography variant="h3" className={classes.filtersTitle}>FILTER</Typography>
    <CloseIcon onClick={(()=>{
      setState(!state) })} className={classes.close}  /></div>
       <div
      className={clsx(classes.list)}
      role="presentation" >
      <List>
      <Typography variant="h4" className={classes.filternames} >SIZE</Typography>
        {['Small', 'Medium', 'large', 'Extra-Large'].map((text, index) => (
          <ListItem button key={text}>
              <FormControlLabel
            control={
              <Checkbox  onChange={handleChangeCheck} name={text}  variant="h6" />
            }
            label={text}
            className={classes.checkbox} 
          />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      <Typography variant="h4" className={classes.filternames2} >COLOR</Typography>
    { Colors.map((text, index) => (

         <div className={classes.colorsmain}>
             <img src={text.image} />
             <Typography variant="h4" className={classes.colortitle} >{text.title}</Typography>
             </div>
        ))}
      </List>
      <Divider />
      <List>
      <Typography variant="h4" className={classes.filternames2} >PRICE</Typography>
      <div className={classes.slidervaluesmain}>
      <div className={classes.slidervalues}>
      <Typography variant="h5" className={classes.filternameprice} >RS 500</Typography>
      <Typography variant="h5" className={classes.filternameprice} >RS 1000</Typography>
      </div>
      </div>
     <div className={classes.slidervalue}>

    
            <Slider
              value={price}
              onChange={priceHandler}
           
              aria-labelledby="range-slider"
              min={0}
              max={5000}
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
        onChange={setSelectedOption}
        placeholder="Sort by"
        components={{  DropdownIndicator }}
        styles={customStyles}
        options={options}
        className={classes.reactselect}
        
       
      />
      </div>
          </Box>
          <Grid
            container
            lg={12}
            sm={12}
            md={12}
            align="center"
            justify="center"
            alignItems="center"
            className={classes.grid1}
          >
            <Grid item lg={6} xs={12} sm={6} md={12}>
              <div className={classes.mainimage}>
                <div className={classes.categoriestext}>
                  <div className={classes.categoriestexts}>
                    <Typography variant="h1" className={classes.categoriesname}>
                      Western
                    </Typography>
                    <img src={firstarray.names0.image} className={classes.categorytoggle} onClick={handleOpen} />
                  </div>
                </div>
                <img src="/categories/mainCategory.svg" className={classes.image} />
                <Modal
                  
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                 
                >
                  <Box sx={style}>
                    {ITEMScategory.map((item) => (
                      <div className={classes.modalitems}>
                        <img src={item.image} className={classes.categoryavatar} />
                        <Typography variant="h4" className={classes.catgorytitle}>
                          {" "}
                          {item.title}
                        </Typography>
                      </div>
                    ))}
                  </Box>
                </Modal>
              </div>
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              md={12}
              xs={12}
              container
              className={classes.maingrid}
              direction="row"
              justifyContent="space-evenly"
            >
              <Grid item lg={6} sm={6} md={6} xs={6}>
                <div className={classes.rootimg}>
                  <img src={firstarray.names2.image} className={classes.images} />
                  <div className={classes.cart}>
                    <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                    <Typography variant="h5" component="h2">
                      + Cart{" "}
                    </Typography>
                  </div>
                </div>
                <Box className={classes.maintitle}>
                  <Typography gutterBottom variant="h4" component="h2" className={classes.carttitle}>
                    {firstarray.names1.title}
                  </Typography>
                  <div className={classes.size}>
                    <Typography gutterBottom variant="h4">
                      size
                    </Typography>
                    <Typography gutterBottom variant="h4">{`:${firstarray.names1.size}`}</Typography>
                  </div>
                  <div className={classes.size}>
                    {" "}
                    <strike>{firstarray.names1.price}</strike>
                    <Typography gutterBottom variant="h5" className={classes.price}>
                      Rs 600
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item lg={6} sm={6} md={6} xs={6}>
                <div className={classes.rootimg}>
                  <img src={firstarray.names3.image} className={classes.images} />
                  <div className={classes.cart}>
                    <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                    <Typography variant="h5" component="h2">
                      + Cart{" "}
                    </Typography>
                  </div>
                </div>

                <Box className={classes.maintitle}>
                  <Typography gutterBottom variant="h4" component="h2" className={classes.carttitle}>
                    {firstarray.names1.title}
                  </Typography>
                  <div className={classes.size}>
                    <Typography gutterBottom variant="h4">
                      size
                    </Typography>
                    <Typography gutterBottom variant="h4">{`:${firstarray.names1.size}`}</Typography>
                  </div>
                  <div className={classes.size}>
                    {" "}
                    <strike>{firstarray.names1.price}</strike>
                    <Typography gutterBottom variant="h5" className={classes.price}>
                      Rs 600
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </Grid>

            <Grid
              item
              lg={3}
              sm={6}
              md={12}
              xs={12}
              container
              className={classes.maingrid}
              direction="row"
              justifyContent="space-evenly"
            >
              <Grid item lg={6} sm={6} md={6} xs={6}>
                <div className={classes.rootimg}>
                  <img src={firstarray.names2.image} className={classes.images} />
                  <div className={classes.cart}>
                    <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                    <Typography variant="h5" component="h2">
                      + Cart{" "}
                    </Typography>
                  </div>
                </div>
                <Box className={classes.maintitle}>
                  <Typography gutterBottom variant="h4" component="h2" className={classes.carttitle}>
                    {firstarray.names1.title}
                  </Typography>
                  <div className={classes.size}>
                    <Typography gutterBottom variant="h4">
                      size
                    </Typography>
                    <Typography gutterBottom variant="h4">{`:${firstarray.names1.size}`}</Typography>
                  </div>
                  <div className={classes.size}>
                    {" "}
                    <strike>{firstarray.names1.price}</strike>
                    <Typography gutterBottom variant="h5" className={classes.price}>
                      Rs 600
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item lg={6} sm={6} md={6} xs={6}>
                <div className={classes.rootimg}>
                  <img src={firstarray.names3.image} className={classes.images} />
                  <div className={classes.cart}>
                    <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                    <Typography variant="h5" component="h2">
                      + Cart{" "}
                    </Typography>
                  </div>
                </div>

                <Box className={classes.maintitle}>
                  <Typography gutterBottom variant="h4" component="h2" className={classes.carttitle}>
                    {firstarray.names1.title}
                  </Typography>
                  <div className={classes.size}>
                    <Typography gutterBottom variant="h4">
                      size
                    </Typography>
                    <Typography gutterBottom variant="h4">{`:${firstarray.names1.size}`}</Typography>
                  </div>
                  <div className={classes.size}>
                    {" "}
                    <strike>{firstarray.names1.price}</strike>
                    <Typography gutterBottom variant="h5" className={classes.price}>
                      Rs 600
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.massonary}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 1200: 4 }}>
              <Masonry>
                {displayedProducts.map((item) => (
                  <>
                    <div className={classes.rootimg}>
                      <img src={item.image} className={classes.images} />
                      <div className={classes.cart}>
                        <img component="img" src="/icons/cart.svg" className={classes.cartimage} />
                        <Typography variant="h5" component="h2">
                          + Cart{" "}
                        </Typography>
                      </div>
                    </div>
                    <Box className={classes.maintitle}>
                      <Typography gutterBottom variant="h4" component="h2" className={classes.carttitle}>
                        {firstarray.names1.title}
                      </Typography>
                      <div className={classes.size}>
                        <Typography gutterBottom variant="h4">
                          size
                        </Typography>
                        <Typography gutterBottom variant="h4">{`:${firstarray.names1.size}`}</Typography>
                      </div>
                      <div className={classes.size}>
                        {" "}
                        <strike>{firstarray.names1.price}</strike>
                        <Typography gutterBottom variant="h5" className={classes.price}>
                          Rs 600
                        </Typography>
                      </div>
                    </Box>
                  </>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          <div className={classes.loadmorediv}>
            <button onClick={loadMoreProducts} className={classes.loadmore}>
              Load More
            </button>
          </div> 
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const tags = await fetchTags("cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==");
  let paths = tags.tags.nodes.map((tag) => ({
    params: {
      lang: "en",
      tagId: tag._id,
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { lang, tagId } }) {
  const categories = await fetchAllCategories(["cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg=="], [tagId]);

  console.log(categories);
  return {
    props: {
      category: categories,
    },
  };
}
export default Categories;