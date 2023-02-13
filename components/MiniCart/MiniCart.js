import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import { withStyles } from "@material-ui/core/styles";
import MiniCartComponent from "../../reaction-plugins/reaction-component-library/package/src/components/MiniCart/v1";
import CartItems from "components/CartItems";
import CartEmptyMessage from "@reactioncommerce/components/CartEmptyMessage/v1";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';


import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Router from "translations/i18nRouter";
import Badge from "@material-ui/core/Badge";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import withCart from "containers/cart/withCart";

const useStyles = makeStyles((theme) => ({

  modal: {
    display: 'flex',
  paper: {
    backgroundColor: theme.palette.background.paper,
    height:"100vh",
    width:"468px",
    position:"absolute",
        top:"0px",
        right:"0px",
  
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
overflowY:"auto",
 
   
  },
  paper2:{
    backgroundColor: theme.palette.background.paper,
    height:"100vh",
    width:"400px",
    position:"absolute",
        top:"0px",
        right:"0px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
    
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  cartitem:{
    padding: theme.spacing(1),
  total:{
    borderTop: "1px solid #E5E5E5",
    position:"fixed",
    width:"390px",
    padding:theme.spacing(2),
    bottom:"10px"
  },
       },
       carttext:{
        color:theme.palette.primary.contrastText,
       }
     ,  paper2:{
      backgroundColor: theme.palette.background.paper,
   marginTop:"15vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "column",
    
    },
    emptycart:{
      marginTop:theme.spacing(5),
      width:"239px",
      height:"58px",
      textAlign: "center"
    },
    continue:{
      width:"250px",
      height:"48px",
      borderRadius:"40px",
      marginTop:theme.spacing(5),
      border:"none",
      display:"flex",
      textTransform: "uppercase",
      justifyContent:"center",
      alignItems:"center",
      background:theme.palette.secondary.selected,
      "&:hover": {
    
        background:theme.palette.secondary.selected,
    },
    "&.MuiButton-root":{
      fontSize: "20px",
      color:"#333333",
      fontFamily:"Ostrich Sans",
        fontWeight: 900,
       
        lineHeight:"24px",
        fontFamily: "Ostrich Sans",
    }
  }
}));

const MiniCart = (props,headerType) =>
  {
    const propTypes = {
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
  
    
  
  
  
  
   
  
    const handleClick = () => Router.push("/");
  
   const handleCheckoutButtonClick = () => {
      this.handleLeavePopper();
      Router.push("/cart/checkout");
    };
  
  
  
  
   const handleOnClick = () => {
      const { closeCart } = props.uiStore;
      closeCart();
      Router.push("/cart");
    };
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
   const handleItemQuantityChange = (quantity, cartItemId) => {
      const { onChangeCartItemsQuantity } = this.props;
  
      onChangeCartItemsQuantity({ quantity, cartItemId });
    };
  
   const handleRemoveItem = async (itemId) => {
      const { onRemoveCartItems } = props;
      await onRemoveCartItems(itemId);
    };
    const { cart, classes, hasMoreCartItems, loadMoreCartItems } = props;
   const renderMiniCart=()=> {
     
  console.log(cart)
      if (cart && Array.isArray(cart.items) && cart.items.length) {
        return (
          <MiniCartComponent
            cart={cart}
            onCheckoutButtonClick={this.handleCheckoutButtonClick}
            components={{
              QuantityInput: "div",
              CartItems: (cartItemProps) => (
                <CartItems
                  {...cartItemProps}
                  hasMoreCartItems={hasMoreCartItems}
                  onRemoveItemFromCart={handleRemoveItem}
                  onChangeCartItemQuantity={handleItemQuantityChange}
                  onLoadMoreCartItems={loadMoreCartItems}
                />
              ),
            }}
          />
        );
      }
  
      return (
        <div >
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
    <div className={classes.paper2}> 
   <img src="/cart/empty.svg" alt="empty cart" />
<div className={classes.emptycart}>
  <Typography  variant="h4">
  You haven’t added any
pre-loved item
  </Typography>
</div>
<Button className={classes.continue} InputProps={{ disableUnderline: true }} variant="h6"> Continue Shopping</Button>
    </div>
   </div>
        </Fade>
      </Modal>

        </div>
      );
    }
  
  
    
      return (
        <Fragment>
          <div >
            <IconButton
              color="inherit"
            onClick={handleOpen}
            >
              {cart && cart.totalItemQuantity > 0 ? (
                <Badge badgeContent={cart.totalItemQuantity} color="primary" >
                  <span>
                    {headerType ? <img src="/images/cartIconLight.svg" /> : <img src="/images/cartIconDark.svg"  />}
                  </span>
                </Badge>
              ) : (
                <span>
  
                  
                  {headerType ? <img src="/images/cartIconLight.svg" /> : <img src="/images/cartIconDark.svg" onClick={handleOpen}/>}
                </span>
              )}
            </IconButton>
          </div>
  
          <Popper
          
       
            
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps}>
                <div className={classes.cart}>{renderMiniCart()}</div>
              </Fade>
            )}
          </Popper>
        </Fragment>
      );
    
            }
  

export default MiniCart;
