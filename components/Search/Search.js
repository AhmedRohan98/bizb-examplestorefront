import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { InputAdornment, IconButton, TextField } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";

import withCatalogItems from "containers/catalog/withCatalogItems";
const useStyles = makeStyles((theme) => ({
  inputrootdiv: {
    padding: "47px",
    borderRadius: "18px",
  },
  inputRoot: {
    "& .MuiOutlinedInput-root": {
      outline: "none",
      borderColor: "none",
    },
    "& .MuiInputBase-root": {
      fontFamily: "Lato",
      color: "green",
    },
    width: "100%",
    borderRadius: "18px",
    "& div.MuiFormControl-root": {
      width: "100%",
      borderRadius: "18px",
    },
    "& :focus": {
      outline: "none",
      color: "blue",
    },
  },
  input: {
    borderRadius: "18px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    textTransform: "none",
    "& .MuiInputBase-root": {
      fontFamily: "Lato",
      color: "green",
    },
    "&.MuiOutlinedInput-root": {
      outline: "none",
      borderColor: "none",
    },
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "none !important",
      },
      "&:hover fieldset": {
        borderColor: "none",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent !important",
      },
    },
  },
  // paper: {
  //   position: "absolute",
  //   outline: "none",
  //   width: "92%",
  //   height: "",
  //   borderRadius: "18px",
  //   backgroundColor: "transparent",
  //   // transform: "translate(-50%, -50%)",
  //   top: "170px",
  //   left: "62px",
  // },
  // icon: {
  //   cursor: "pointer",
  //   "&:hover": {
  //     transform: "scale(1.08)",
  //     transition: "left 0.2s linear",
  //   },
  // },
  CloseIcon: {
    cursor: "pointer",
    height: "33px",
    width: "33px",
    color: "black",
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
    },
  },
  pricing: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginBottom: theme.spacing(2),
  },
  cartitem: {
    padding: theme.spacing(1),
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    borderBottom: "1px solid #e5e5e5 !important",
  },
  // cartimage: {
  //   height: "188px",
  //   width: "254px",
  //   borderRadius: "10px",
  // },
  cartitemtext: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.1rem",
    textTransform: "capitalize"
  },
  cartprice: {
    color: theme.palette.secondary.selected,
    fontSize: "1.1rem",
  },
  totatlproducts: {
    color: theme.palette.secondary.selected,
    fontSize: "1.1rem",
    padding: theme.spacing(4),
  },

  storeName: {
    paddingTop: "10px",
    fontSize: "0.9rem",
    "&:hover": {
      color: "#FDC114",
      cursor: "pointer",
      textDecoration: "underline"
    }

  },
  cartpric: {
    paddingTop: "10px",
    fontSize: "0.9rem",

  },
  price: {
    fontSize: "1.1rem",

    marginLeft: theme.spacing(2),
  },
  image: {
    width: "254px",
    height: "188px",
    objectFit: "contain",
    borderRadius: "18px",
    cursor: "pointer",
  },
  filteritemsfromsearch: {
    backgroundColor: "white",
    marginRight: "47px",
    marginLeft: "47px",
    borderRadius: "18px",
    overflowY: "auto",
    [theme.breakpoints.down(1600)]: {
      overflowY: "auto",
      minHeight: "600px",
      maxHeight: "600px",
    },
  },
}));
const Search = ({ modalFlag, setModalFlag, catalogItems, searchQuery, uiStore }) => {
  const [searchLocal, setSearchLocal] = useState();
  // fetch products and update catalogItems
  const router = useRouter();
  const filteredItems = catalogItems?.filter((product) => {
    const title = product?.node?.product.title.trim().toLowerCase();
    return title.includes(searchLocal) || title.indexOf(searchLocal) !== -1;
  });

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // prevent default submit action
    const trimmedValue = searchLocal?.trim(); // remove leading/trailing spaces
    if (trimmedValue) {
      uiStore?.setSearchItems(trimmedValue);
      // console.log(trimmedValue, "query2");
    }
  };
  const handleSearchChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchLocal(searchQuery);
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'Ecommerce',
      eventAction: 'product_search',
      eventLabel: searchQuery,
    });
  };

  const handleProductDetail = (productSlug) => {

    const url = `/en/product/${productSlug}`;
    const newWindow = window.open(url, "_blank");
    newWindow.opener.focus();
  }





  const classes = useStyles();
  // IF ITS NOT WORKIS THEN I HAVE TO ADD '\"'+searchTitle+'\"';
  // console.log(searchLocal, "query");
  return (
    <>
      <></>
      <Modal open={modalFlag} onClose={() => setModalFlag(false)}>
        <div>
          {/* <form onSubmit={handleSearchSubmit}>
              <input type="text" value={searchLocal} onChange={handleSearchChange} onKeyUp={handleSearchSubmit} />
              <button type="submit" onClick={() => setModalFlag(false)}>
                Search
              </button>
            </form> */}
          <form onSubmit={handleSearchSubmit}>
            <div className={classes.inputrootdiv}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "18px",
                  height: "65px",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                }}
                className={classes.inputRoot}
              >
                <TextField
                  type="text"
                  id="outlined-basic"
                  variant="outlined"
                  value={searchLocal}
                  className={classes.input}
                  onInput={handleSearchChange}
                  onKeyUp={handleSearchSubmit}
                  placeholder="what are you looking for" // add placeholder text
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <img
                            style={{ height: "33px", width: "33px" }}
                            src="/images/searchIconDark.svg"
                            className="headerlogo"
                            onClick={() => setModalFlag(false)}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <CloseIcon onClick={() => setModalFlag(false)} className={classes.CloseIcon} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </form>
          {filteredItems?.length > 0 ? (
            <div
              className={classes.filteritemsfromsearch}
            >
              <div style={{ display: "flex" }}>
                <div style={{ marginTop: "20px" }}>
                  <ul>
                    {filteredItems?.slice(0, 3)?.map((product) => {
                      // console.log(filteredItems, "fil");
                      return (
                        <div key={product.node.product.id} className={classes.cartitem} onClick={() => handleProductDetail(product?.node?.product?.slug)}>
                          <img
                            src={product?.node?.product?.media[0]?.URLs?.large}
                            alt={product?.title}
                            className={classes.image}
                          ></img>
                          <div className={classes.cartitemtext}>
                            <Typography variant="h4">{product?.node?.product?.title}</Typography>
                            <Link href={`/en/profile/${product?.node?.product?.variants[0]?.uploadedBy?.userId}`} >
                              <a style={{ color: "#FDC114" }}>

                                <Typography variant="h4" className={classes.cartpric}>
                                  Store: <span className={classes.storeName} >{product?.node?.product?.vendor ? product?.node?.product?.vendor : product?.node?.product?.variants[0]?.uploadedBy?.storeName}
                                  </span></Typography>
                              </a>
                            </Link>
                            <div className={classes.pricing}>
                              {" "}
                              <strike className={classes.cartprice}>
                                {product?.node?.product?.variants[0]?.pricing[0]?.compareAtPrice?.displayAmount
                                  ?.replace(/\.00$/, "")
                                  .replace(/\$/g, "Rs. ")}
                              </strike>
                              <Typography gutterBottom variant="h4" className={classes.price}>
                                {product?.node?.product?.variants[0]?.pricing[0]?.displayPrice
                                  ?.replace(/\.00$/, "")
                                  .replace(/\$/g, "Rs. ")}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <h1></h1>
              <Typography variant="h4" className={classes.totatlproducts}>
                <Link href={`/en/search/${searchLocal}`}>
                  <a style={{ color: "#FDC114" }}> {`See all results (${filteredItems?.length})`}</a>
                </Link>
              </Typography>
            </div>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </>
  );
};

export default withCatalogItems(Search);
