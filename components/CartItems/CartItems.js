import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@reactioncommerce/components/Button/v1";
import CartItemsList from "../../reaction-plugins/reaction-component-library/package/src/components/CartItems/v1";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core//Table";
import TableBody from "@material-ui/core//TableBody";
import TableCell from "@material-ui/core//TableCell";
import TableContainer from "@material-ui/core//TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const styles = (theme) => ({
  loadMore: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  popper: {
    marginTop: "0.5rem",
    marginRight: "1rem",
  },
  cart: {
    backgroundColor: theme.palette.common.white,
  },
  emptyCart: {
    display: "flex",

    border: "green",
  },
  badge: {
    width: 20,
    height: 20,
    top: 10,
    left: 20,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    width: "468px",
    position: "absolute",
    top: "0px",
    right: "0px",

    border: "",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  cartmodal: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",

    borderBottom: "1px solid #E5E5E5",
  },
  cartitems: {
    height: "60vh",
    overflowY: "auto",
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
    width: "400px",
    position: "absolute",
    top: "0px",
    right: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  cartitem: {
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cartimage: {
    height: "140px !important",
    width: "130px !important",

    borderRadius: "10px",
  },
  cartitemtext: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  cartprice: {
    paddingTop: theme.spacing(1),
    color: theme.palette.secondary.selected,
  },
  cartpric: {
    paddingTop: theme.spacing(1),
  },
  total: {
    borderTop: "1px solid #E5E5E5",
    position: "fixed",
    width: "390px",
    padding: theme.spacing(2),
    bottom: "10px",
  },
  total1: {
    display: "flex",
    justifyContent: "space-between",
  },
  cart1: {
    height: "48px",
    width: "140px",
    borderRadius: "40px",
    background: theme.palette.reaction.black,
    display: "flex",

    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "10px",
  },
  cart: {
    height: "48px",
    width: "140px",
    borderRadius: "40px",
    marginTop: "10px",
    background: theme.palette.secondary.selected,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  carttext: {
    color: theme.palette.primary.contrastText,
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "15vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  emptycart: {
    marginTop: theme.spacing(5),
    width: "239px",
    height: "58px",
    textAlign: "center",
  },
  cfXPgA: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  carttitle: {
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  cartitemsheader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartitemsheadermain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cartitemsheaderinner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

class CartItems extends Component {
  static propTypes = {
    classes: PropTypes.object,
    hasMoreCartItems: PropTypes.bool,
    isMiniCart: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        attributes: PropTypes.arrayOf(PropTypes.object),
        currencyQuantity: PropTypes.number,
        imageUrl: PropTypes.string,
        isLowInventoryQuantity: PropTypes.bool,
        price: PropTypes.shape({
          displayPrice: PropTypes.string,
          compareAtPrice: PropTypes.string,
        }),
        productSlug: PropTypes.string,
        title: PropTypes.string,
        quantity: PropTypes.number,
      }),
    ).isRequired,
    onChangeCartItemQuantity: PropTypes.func.isRequired,
    onLoadMoreCartItems: PropTypes.func,
    onRemoveItemFromCart: PropTypes.func.isRequired,
    productURLPath: PropTypes.string,
  };

  static defaultProps = {
    onChangeCartItemQuantity() {},
    onRemoveItemFromCart() {},
  };

  handleItemQuantityChange = (quantity, _id) => {
    const { onChangeCartItemQuantity } = this.props;

    onChangeCartItemQuantity(quantity, _id);
  };

  handleRemoveItem = async(_id) => {
    const { onRemoveItemFromCart } = this.props;
console.log("id",_id)
  await  onRemoveItemFromCart(_id);
    console.log("item clicked", onRemoveItemFromCart);
  };

  render() {
    const { classes, items, isMiniCart, isReadOnly, hasMoreCartItems, onLoadMoreCartItems } = this.props;

    return (
      <Fragment>
        {/* <CartItemsList
          isMiniCart={isMiniCart}
          isReadOnly={isReadOnly}
          items={items}
          onChangeCartItemQuantity={this.handleItemQuantityChange}
          onRemoveItemFromCart={this.handleRemoveItem}
          productURLPath="/api/detectLanguage/product/"
        /> */}{" "}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "auto" }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <div className={classes.cartitemsheaderinner}>
                    <Typography variant="h4" className={classes.headingtop}>
                      Products
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div className={classes.cartitemsheaderinner}>
                    <Typography variant="h4" className={classes.headingtop}>
                      Price
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <div className={classes.cartitemquantity}>
                    <Typography variant="h4" className={classes.headingtop}>
                      Quantity
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <div className={classes.cartitemsheaderinner}>
                    <Typography variant="h4" className={classes.headingtop}>
                      Subtotal
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.title}>
                  <TableCell>
                    <div className={classes.cartitemtext}>
                      {item?.metafields ? (
                        <img src={item?.metafields[0]?.value} alt={item.title} className={classes.cartimage}></img>
                      ) : (
                        ""
                      )}{" "}
                      <div className={classes.carttitle}>
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="h4" className={classes.cartpric}>
                          Store:{item?.productVendor}
                        </Typography>{" "}
                      </div>
                      <img
                        style={{ cursor: "pointer" }}
                        src="/cart/icon.svg"
                        alt={item.title}
                        onClick={() => this.handleRemoveItem(item._id)}
                      />
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography variant="h4" className={classes.cartprice}>
                      RS: {item?.price?.amount}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography variant="h4">{item.quantity}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4" className={classes.cartprice}>
                      RS: {item?.price?.amount}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CartItems);
