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

import Link from "components/Link";
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
    margin: "80px 0",
  },
  checkoutButtonsContainer: {
    backgroundColor: theme.palette.reaction.black02,
    padding: theme.spacing(2),
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
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
    background: "rgba(0, 0, 0, 0.6)",
  },
  image: {
    width: "100%",

    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
  },
  image2: {
    zIndex: 999,

    position: "absolute",
  },
  topheading: {
    position: "absolute",
    zIndex: 999,
    bottom: "30%",
    width: "auto",
    height: "auto",
    left: "50%",
    right: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "center",
  },
  heading: {
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(2),
  },
  topgrid: {
    margin: theme.spacing(4),
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
    marginTop: "1.6rem",
    marginBottom: "3.1rem",
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
      checkout: PropTypes.shape({
        fulfillmentTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        }),
        itemTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        }),
        taxTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        })
      })
    }),
    classes: PropTypes.object,
    hasMoreCartItems: PropTypes.bool,
    loadMoreCartItems: PropTypes.func,
    onChangeCartItemsQuantity: PropTypes.func,
    onRemoveCartItems: PropTypes.func,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  };

  handleClick = () => Router.push("/");

  handleItemQuantityChange = (quantity, cartItemId) => {
    const { onChangeCartItemsQuantity } = this.props;

    onChangeCartItemsQuantity({ quantity, cartItemId });
  };

  handleRemoveItem = async (itemId) => {
    const { onRemoveCartItems } = this.props;

    await onRemoveCartItems(itemId);
  };

  renderCartItems() {
    const { cart, classes, hasMoreCartItems, loadMoreCartItems } = this.props;

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
          </Grid>
        </>
      );
    }

    return (
      <Grid item xs={12} className={classes.cartEmptyMessageContainer}>
        <CartEmptyMessage onClick={this.handleClick} />
      </Grid>
    );
  }

  renderCartSummary() {
    const { cart, classes } = this.props;

    if (cart && cart.checkout && cart.checkout.summary && Array.isArray(cart.items) && cart.items.length) {
      const { fulfillmentTotal, itemTotal, surchargeTotal, taxTotal, total } = cart.checkout.summary;

      return (
        <Grid item xs={12} md={3}>
          <CartSummary
            displayShipping={fulfillmentTotal && fulfillmentTotal.displayAmount}
            displaySubtotal={itemTotal && itemTotal.displayAmount}
            displaySurcharge={surchargeTotal && surchargeTotal.displayAmount}
            displayTax={taxTotal && taxTotal.displayAmount}
            displayTotal={total && total.displayAmount}
            itemsQuantity={cart.totalItemQuantity}
          />
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
          <Helmet
            title={`Cart | ${shop && shop.name}`}
            meta={[{ name: "description", content: shop && shop.description }]}
          />
          <div className={classes.topimage}>
        
            <img src="/cart/viewcart.svg" alt="view cart" className={classes.image} />
            <div className={classes.topheading}>
              <img src="/cart/fashionsustainable.svg" alt="view cart" className={classes.heading} />
            </div>
          </div>
          <section>
            <Typography className={classes.title} variant="h6" align="center">
              Shopping Cart
            </Typography>
            <Grid container spacing={3}>
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

export default withApollo()(withStyles(styles)(withCart(inject("uiStore")(CartPage))));
