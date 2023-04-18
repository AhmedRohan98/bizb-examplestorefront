import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../../../components/Layout/Layout";
import withCatalogItems from "../../../containers/catalog/withCatalogItems";
import fetchPrimaryShop from "../../../staticUtils/shop/fetchPrimaryShop";
import { withApollo } from "../../../lib/apollo/withApollo";
import useShop from "../../../hooks/shop/useShop"

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

    lineHeight: "24px",
    fontStyle: "normal",
    color: theme.palette.secondary.selected,
    "& .MuiTypography-body1": {
      fontSize: "20px",
      color: "#333333",
      fontFamily: "Lato",
      fontWeight: 500,

      lineHeight: "24px",
      fontStyle: "normal",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: theme.palette.secondary.selected,
    },
    "& .MuiCheckbox-colorSecondary": {
      color: "#333333",
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
  vector: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
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
  selectDesktop: {
    marginRight: theme.spacing(3),
  },

  main: {
    width: "100%",
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
      width: "16px",
      height: "16px",
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

  filternames: {
    borderBottom: "2px solid #000000",
    marginLeft: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: "92px",
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
    marginTop: theme.spacing(4),
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
}));
function AllResults(props) {
  console.log(props, "new");

  // useEffect(() => {
    
  //   uiStore?.setPageSize(500);
  // }, []);
const shop = useShop();
const classes = useStyles();
  return (
    <Layout shop={shop}>
      {typeof window !== "undefined" && (
        <div>
          {props.catalogItems?.map((product) => {
            
            return (
              <div key={product.node.product.id} className={classes.cartitem}>
                <img
                  src={product?.node?.product?.media[0]?.URLs?.large}
                  alt={product?.title}
                  className={classes.image}
                ></img>
                <div className={classes.cartitemtext}>
                  <Typography variant="h4">{product?.node?.product?.title}</Typography>
                  <Typography variant="h4" className={classes.cartpric}>
                    Store: {product?.node?.product?.vendor}
                  </Typography>
                  <div className={classes.pricing}>
                    {" "}
                    <strike className={classes.cartprice}>
                      {product?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice.displayAmount
                        ?.replace(/\.00$/, "")
                        .replace(/\$/g, "RS ")}
                    </strike>
                    <Typography gutterBottom variant="h4" className={classes.price}>
                      {product?.node?.product?.variants[0]?.pricing[0]?.displayPrice
                        ?.replace(/\.00$/, "")
                        .replace(/\$/g, "RS ")}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
}


export async function getServerSideProps({ params: { lang } }) {
  return {
    props: {
      ...(await fetchPrimaryShop(lang)),
     
    },
  };
}
export default withApollo()(withCatalogItems(AllResults));
