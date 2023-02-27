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
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    border:"1px solid red"
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 38,
    margin: 4,
    color:"#969696"
  },
  arrowdropdown:{
    color:"#333333"
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
background:"#F7F7F9"
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
  main: {
    width: "100%",
  },
}));
function Categories(props) {
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

  var firstarray = data.reduce((acc, item, index) => {
    acc[`names${index}`] = item;
    return acc;
  }, {});
  console.log(data2, "fffffffffffsardarffffffffffffffffffsadrtttt");
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSortOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {typeof window !== "undefined" && (
        <div className={classes.main}>
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src="/categoriestypes/Vector.svg" alt="vector"  className={classes.vector}/>
            <Paper component="form" className={classes.paper}>
              <InputBase
                // className={classes.input}
                placeholder="Sort by"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton color="primary" aria-label="directions" onClick={handleSortOpen}>
                <ArrowDropDownIcon className={classes.arrowdropdown} />
              </IconButton>
            </Paper>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleSortClose}>
              <MenuItem onClick={handleClose}>Recomended</MenuItem>
              <MenuItem onClick={handleClose}>categories</MenuItem>
              <MenuItem onClick={handleClose}>new arrivals</MenuItem>
            </Menu>
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
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
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
