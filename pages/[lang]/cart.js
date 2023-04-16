import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import inject from "hocs/inject";
import Grid from "@material-ui/core/Grid";
import { Button }from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CartEmptyMessage from "@reactioncommerce/components/CartEmptyMessage/v1";
import CartSummary from "@reactioncommerce/components/CartSummary/v1";
import withCart from "containers/cart/withCart";
import CartItems from "components/CartItems";

import withCatalogItems from "../../containers/catalog/withCatalogItems";
import Link from "next/link";
import Layout from "components/Layout";
import Router from "translations/i18nRouter";
import PageLoading from "components/PageLoading";
import { withApollo } from "lib/apollo/withApollo";

import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";
import fetchTranslations from "staticUtils/translations/fetchTranslations";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     margin: theme.spacing(4),
//   },
//   topimage: {
//     width: "100%",
//     height: "100%",
//     position: "relative",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     opacity: 0.6,
//   },
//   topheading: {
//     position: "absolute",
//     top: "5px",
//     left: "50%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",

//     justifyContent: "center",
//   },
//   heading: {
//     color: theme.palette.primary.contrastText,
//     margin: theme.spacing(2),
//   },
//   topgrid: {
//     margin: theme.spacing(4),
//     display: "flex",

//     justifyContent: "center",
//   },
//   headingtop: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderBottom: "1px solid #E5E5E5",
//   },
//   cartitem: {
//     padding: theme.spacing(1),
//     display: "flex",

//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cartimage: {
//     height: "130px",
//     width: "120px",

//     borderRadius: "10px",
//   },
//   cartprice: {
//     paddingTop: theme.spacing(1),
//     color: theme.palette.secondary.selected,
//   },
// }));
const styles = (theme) => ({
  cartEmptyMessageContainer: {
 display:"flex",
 alignItems:"center",
 marginTop:"10px",
 marginBottom:"60px",

 justifyContent:"center"
  },
  formerror: {
    paddingLeft: theme.spacing(1),
    fontSize: "16px",
    cursor: "pointer",
    color: "#b22b27",
    fontFamily: "Lato",
  },

  label: {
    display: "flex",
    marginTop: theme.spacing(1),

    fontSize: "24px",
    marginBottom: theme.spacing(1),
    color: "#333333",
    flexDirection: "column",
  },
  switchEntryMode: {
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  input: {
    width: "430px",
    height: "48px",
    borderRadius: "6px",
    color: "red",

    justifyContent: "center",
    paddingLeft: theme.spacing(2),
    background: "#F7F7F9",
    borderBottomColor: "none",
    "& .MuiInputBase-input": {
      color: "#969696",
      fontSize: "16px",
      fontFamily: "lato",
      padding: "opx",
    },
    "& .MuiInputBase-input.active": {
      color: "#eeeeeeeeeee6",
      fontSize: "17px",
      padding: "opx",
    },
  },
  inputorder: {
    width: "430px",
    height: "218px",
    borderRadius: "6px",
    color: "red",

    paddingLeft: theme.spacing(2),
    background: "#F7F7F9",
    borderBottomColor: "none",
    "& .MuiInputBase-input": {
      color: "#969696",
      fontSize: "16px",
      fontFamily: "lato",
      padding: "opx",
    },
    "& .MuiInputBase-input.active": {
      color: "#eeeeeeeeeee6",
      fontSize: "17px",
      padding: "opx",
    },
  },

  register: {
    width: "214px",
    height: "48px",
    borderRadius: "40px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.selected,
    "&:hover": {
      background: theme.palette.secondary.selected,
    },
  },
  socialmedia: {
    width: "250px",
    height: "48px",
    borderRadius: "40px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",

    background: theme.palette.secondary.selected,
  },
  topheader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  terms: {
    lineHeight: "100px",
  },

  checkbox: {
    color: "green",
    "& .MuiIconButton-label ": {
      color: theme.palette.secondary.selected,
    },
  },

  checkboxdiv: {
    display: "flex",
    flexDirection: "row",
    width: "430px",
    borderBottom: `solid 1px  #00000030 `,
  },
  register2: {
    fontSize: "18px",
    color: "#333333",
    fontFamily: "Ostrich Sans Black",
    fontWeight: 900,

    lineHeight: "24px",
    fontStyle: "normal",
    marginLeft: "15px",
  },
  socialmedia2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  switchaccout: {
    color: "#FDC114",
  },
  mainheading: {
    textTransform: "uppercase",
  },

  phone: {
    color: "#333333",
    fontSize: "17px",
  },
  mainheading: {
    textTransform: "uppercase",
  },
  ellipse: {
    height: "18px",
    width: "18px",
    borderRadius: "100%",
  },
  cartpayment: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  cartdelivery: {
    fontWeight: 400,

    color: "#333333",
    marginLeft: theme.spacing(2),
  },
  cartdelivery2: {
    width: "350px",
    marginTop: theme.spacing(3),
    fontWeight: 700,
    lineHeight: "39px",
    marginBottom: "10px",
  },
  cartcard: {
    height: "391px",
    width: "391px",
    boxShadow: "3px 3px 12px  rgba(0, 0, 0, 0.05)",
    borderRadius: "18px",
    padding: theme.spacing(2),
  },
  carttotalsummar:{
display:"flex",
width:"100%",
alignItems:"center",
justifyContent:"center"
  },
  shipping: {
    display: "flex",
    flexDirection: "column",
  },
  empty: {
    height: "1px",
    width: "100%",
    marginTop: theme.spacing(3),
    borderBottom: "1px solid #E5E5E5",
    color: "#000000",
    opacity: "1",
  },
  subtotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  subtotalamount: {
    fontWeight: 700,
    lineHeight: "34px",
  },
  orderbutn: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  summary: {
    display: "flex",
    flexDirection: "column",
  },
  register: {
    width: "261px",
    height: "48px",
    borderRadius: "40px",
    border: "none",

    display: "flex",
    marginTop: theme.spacing(4),
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.selected,
    "&:hover": {
      background: theme.palette.secondary.selected,
    },
  },
  checkoutButtonsContainer: {
    backgroundColor: theme.palette.reaction.black02,
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  customerSupportCopy: {
    paddingLeft: `${theme.spacing(4)}px !important`,
  },
  phoneNumber: {
    fontWeight: theme.typography.fontWeightBold,
  },
  topimage: {
    width: "100%",
    height: "100%",

    position: "relative",
  },
  image: {
    width: "100%",

    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
  },
  image2: {
    zIndex: 999,
    left: "50%",
    right: "50%",

    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "center",
  },
  topheading: {
    position: "absolute",
    zIndex: 999,
    background: "rgba(0, 0, 0, 0.6)",
    bottom: "0px",
    top: "0px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "99.2%",
  },
  heading: {
    color: theme.palette.primary.contrastText,
  
  },
  topgrid: {
    display: "flex",

    justifyContent: "center",
  },
  headingtop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #E5E5E5",
  },
  cartitem: {
    padding: theme.spacing(1),
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  cartimage: {
    height: "130px",
    width: "120px",

    borderRadius: "10px",
  },
  cartprice: {
    paddingTop: theme.spacing(1),
    color: theme.palette.secondary.selected,
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  itemWrapper: {
    borderTop: theme.palette.borders.default,
    borderBottom: theme.palette.borders.default,
  },
  register: {
    width: "261px",
    height: "48px",
    borderRadius: "40px",
    border: "none",
    display: "flex",
    marginTop: theme.spacing(4),
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.selected,
    "&:hover": {
      background: theme.palette.secondary.selected,
    },
    
  },
});

class CartPage extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      totalItems: PropTypes.number,
      items: PropTypes.arrayOf(PropTypes.object),
      catalogItems: PropTypes.array,
      checkout: PropTypes.shape({
        fulfillmentTotal: PropTypes.shape({
          displayAmount: PropTypes.string,
        }),
        itemTotal: PropTypes.shape({
          displayAmount: PropTypes.string,
        }),
        taxTotal: PropTypes.shape({
          displayAmount: PropTypes.string,
        }),
      }),
    }),
    classes: PropTypes.object,
    hasMoreCartItems: PropTypes.bool,
    loadMoreCartItems: PropTypes.func,
    onChangeCartItemsQuantity: PropTypes.func,
    onRemoveCartItems: PropTypes.func,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  };

  handleClick = () => Router.push("/");

 
 

  renderCartItems() {
    const { cart, classes, hasMoreCartItems, loadMoreCartItems ,  catalogItems} = this.props;
console.log(catalogItems,"itemssss")
    if (cart && Array.isArray(cart.items) && cart.items.length) {
      return (
        <>
          <Grid item xs={12} md={8}>
            <div className={classes.itemWrapper}>
              <CartItems
                hasMoreCartItems={hasMoreCartItems}
                onLoadMoreCartItems={loadMoreCartItems}
                items={cart.items}
                onChangeCartItemQuantity={this.handleItemQuantityChange}
                onRemoveItemFromCart={this.handleRemoveItem}
              />
            </div>
            <div></div>
          </Grid>
        </>
      );
    }

    return (
      <Grid item xs={12} className={classes.cartEmptyMessageContainer}>
        <Link href="/">
          <Button className={classes.register}>Continue Shopping </Button>
        </Link>
      </Grid>
    );
  }

  renderCartSummary() {
    const { cart, classes } = this.props;

    if (cart && cart.checkout && cart.checkout.summary && Array.isArray(cart.items) && cart.items.length) {
      const { fulfillmentTotal, itemTotal, surchargeTotal, taxTotal, total } = cart.checkout.summary;

      return (
        <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
          <div className={classes.carttotalsummar}>
            <div className={classes.cartcard}>
              <Typography gutterBottom variant="h4" className={classes.cartdelivery2}>
                Cart Totals
              </Typography>
              <div className={classes.empty}></div>
              <div className={classes.shipping}>
                <div className={classes.subtotal}>
                  <Typography gutterBottom variant="h4">
                    Subtotal
                  </Typography>
                  <Typography gutterBottom variant="h4" className={classes.subtotalamount}>
                    RS: {cart.checkout.summary.itemTotal.amount}
                  </Typography>
                </div>
                <div className={classes.subtotal}>
                  <Typography gutterBottom variant="h4">
                    Shipping Cost
                  </Typography>
                  <Typography gutterBottom variant="h4" className={classes.subtotalamount}>
                    RS: {10}
                  </Typography>
                </div>
              </div>
              <div className={classes.empty}></div>
              <div className={classes.subtotal}>
                <Typography gutterBottom variant="h4">
                  Total
                </Typography>
                <Typography gutterBottom variant="h4" className={classes.subtotalamount}>
                  RS: {cart.checkout.summary.itemTotal.amount + 10}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.checkoutButtonsContainer}>
            <a href="/en/cart/checkout">
              <Button
                className={classes.register}
                InputProps={{ disableUnderline: true }}
                variant="h5"
                role="button"
                type="submit"
              >
                Proceed to checkout
              </Button>
            </a>
          </div>
        </Grid>
      );
    }

    return null;
  }

  render() {
    const { cart, classes, shop } = this.props;
    // when a user has no item in cart in a new session, this.props.cart is null
    // when the app is still loading, this.props.cart is undefined
    if (typeof cart === "undefined") return <PageLoading delay={0} />;

    return (
      <>
        <Layout shop={shop}>
          <div className={classes.topimage}>
            <img src="/cart/viewcart.svg" alt="view cart" className={classes.image} />
            <div className={classes.topheading}>
              <img src="/cart/fashionsustainable.svg" alt="view cart" className={classes.heading} />
            </div>
          </div>
          <section>
            <Grid container>
              {this.renderCartItems()}
              {this.renderCartSummary()}
            </Grid>
          </section>
        </Layout>
      </>
    );
  }
}

/**
 *  Server props for the cart route
 *
 * @param {String} lang - the shop's language
 * @returns {Object} props
 */
export async function getServerSideProps({ params: { lang } }) {
  return {
    props: {
      ...await fetchPrimaryShop(lang),
      ...await fetchTranslations(lang, ["common"])
    }
  };
}

export default withApollo()(withStyles(styles)(withCart(withCatalogItems(inject("uiStore")(CartPage)))));
