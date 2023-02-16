import React, { Component, Fragment, useState } from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import { withStyles } from "@material-ui/core/styles";
import MiniCartComponent from "../../old-reaction/reaction-component-library/package/src/components/MiniCart/v1";
import CartItems from "components/CartItems";
import CartEmptyMessage from "@reactioncommerce/components/CartEmptyMessage/v1";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Backdrop from '@material-ui/core/Backdrop';
import Router from "translations/i18nRouter";
import Badge from "@material-ui/core/Badge";

import withCart from "containers/cart/withCart";

const styles = (theme) => ({
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
    height: "100vh",
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
    height: "130px",
    width: "120px",

    borderRadius: "10px",
  },
  cartitemtext: {
    display: "flex",
    flexDirection: "column",
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
  continue: {
    width: "250px",
    height: "48px",
    borderRadius: "40px",
    marginTop: theme.spacing(5),
    border: "none",
    display: "flex",
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.selected,
    "&:hover": {
      background: theme.palette.secondary.selected,
    },
    "&.MuiButton-root": {
      fontSize: "20px",
      color: "#333333",
      fontFamily: "Ostrich Sans",
      fontWeight: 900,

      lineHeight: "24px",
      fontFamily: "Ostrich Sans",
    },
  },
});

const MiniCart = ({ ...props }) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [open, setOpen] = useState(false);
 


 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleCheckoutButtonClick = () => {
  
    Router.push("/cart/checkout");
  };





  const handleOnClick = () => {
    const { closeCart } = props.uiStore;
  
    Router.push("/cart");
  };



  const handleRemoveItem = async (itemId) => {
    const { onRemoveCartItems } = props;
    await onRemoveCartItems(itemId);
  };

  function renderMiniCart() {
    const { cart, classes, hasMoreCartItems, loadMoreCartItems } = props;

    if (cart && Array.isArray(cart.items) && cart.items.length) {
      return (
        <MiniCartComponent
          cart={cart}
          onCheckoutButtonClick={handleCheckoutButtonClick}
          components={{
            QuantityInput: "div",
            CartItems: (cartItemProps) => (
            <>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
   <div className={classes.cartmodal}> <Typography variant="subtitle1">Cart</Typography>
    <CloseIcon onClick={handleClose} /></div>
    <div className={classes.cartitems}>  
      {cart.items.map((item)=>
      <div className={classes.cartitem}>
      <img src="/cart/cart1.svg" alt={item.title} className={classes.cartimage}></img>
      <div  className={classes.cartitemtext}>      <Typography variant="h4">{item.title}</Typography>
      <Typography variant="h4" className={classes.cartpric}>Store:mariamz</Typography>      <Typography variant="h4" className={classes.cartprice}>RS: { item?.price?.amount }</Typography></div>

      <img src="/cart/icon.svg" alt={item.title}  onClick={handleRemoveItem } />
      </div>
      )}
    </div>
    <div className={classes.total}>
<div className={classes.total1} >
      <Typography variant="h4" >Subtotal</Typography>
    <Typography variant="h4" >RS: { cart?.checkout?.summary?.total?.amount }</Typography>
</div>
<div className={classes.total1} >
<div className={classes.cart1}>
      
      <Typography gutterBottom variant="h5" component="h2" className={classes.carttext} onClick={handleOnClick}>
VIEW CART          </Typography>
    </div>  
    <div className={classes.cart}>
      
      <Typography gutterBottom variant="h5" component="h2"  onClick={handleCheckoutButtonClick}>
    CHECKOUT        </Typography>
    </div>  
</div>
    </div>
          </div>
        </Fade>
      </Modal>
</>
            ),
          }}
        />
      );
    }
  
    return (
      <>
        {" "}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          // closeAfterTransition
          // BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className={classes.cartmodal}>
                {" "}
                <Typography variant="subtitle1">Cart</Typography>
                <CloseIcon onClick={handleClose} />
              </div>
              <div className={classes.paper2}>
                <img src="/cart/empty.svg" alt="empty cart" />
                <div className={classes.emptycart}>
                  <Typography variant="h4">You haven’t added any pre-loved item</Typography>
                </div>
                <Button className={classes.continue} InputProps={{ disableUnderline: true }} variant="h6">
                  {" "}
                  Continue Shopping
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </>
    );
  }

  const { cart, classes, uiStore, headerType } = props;

  return (
    <Fragment>
      <div>
        <IconButton
          color="inherit"
     
          onClick={handleOpen}
        >
          {cart && cart.totalItemQuantity > 0 ? (
            <Badge badgeContent={cart.totalItemQuantity} color="primary" classes={{ badge: classes.badge }}>
              <span>
                {headerType ? <img src="/images/cartIconLight.svg" /> : <img src="/images/cartIconDark.svg" />}
              </span>
            </Badge>
          ) : (
            <span>{headerType ? <img src="/images/cartIconLight.svg" /> : <img src="/images/cartIconDark.svg" />}</span>
          )}
        </IconButton>
      </div>
{renderMiniCart()}

   
    </Fragment>
  );
};

MiniCart.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
    checkout: PropTypes.shape({
      itemTotal: PropTypes.shape({
        displayAmount: PropTypes.string,
      }),
      taxTotal: PropTypes.shape({
        displayAmount: PropTypes.string,
      }),
    }),
  }),
  classes: PropTypes.object.isRequired,
  hasMoreCartItems: PropTypes.bool,
  loadMoreCartItems: PropTypes.func,
  onChangeCartItemsQuantity: PropTypes.func,
  onRemoveCartItems: PropTypes.func,
  uiStore: PropTypes.shape({
    isCartOpen: PropTypes.bool.isRequired,
    openCart: PropTypes.func.isRequired,
    closeCart: PropTypes.func.isRequired,
  }),
};

export default withStyles(styles, { name: "SkMiniCart" })(withCart(inject("uiStore")(MiniCart)));

