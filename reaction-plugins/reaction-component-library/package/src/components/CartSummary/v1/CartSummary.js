import React, { Component } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField,   Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  
  mainheading:{
    textTransform: "uppercase",
   },
   ellipse:{
height:"18px",
width:"18px",
borderRadius:"100%"
   },
   cartpayment:{
    display:"flex",
    flexDirection: "row",
   marginTop:theme.spacing(3),
   marginBottom:theme.spacing(5)
   },
   cartdelivery:{
    marginLeft:theme.spacing(2)
   },
   cartcard:{
    height:"391px",
    width:"391px",
    boxShadow: "3px 3px 12px  rgba(0, 0, 0, 0.05)",
    borderRadius:"18px",
    marginTop:theme.spacing(5),
   }
}));
const CartSummary = () => {
  const classes = useStyles();
return(
  <>
 <Typography variant="h3" className={classes.mainheading}>PAYMENT</Typography>  
 <div className={classes.cartpayment}>
 <img src="/cart/ellipse.svg" />
 <Typography gutterBottom variant="h4" className={classes.cartdelivery} >
      Cash On Delivery
          </Typography>
        
 </div>
 <div className={classes.cartcard}>
sARRRRRRRRRRR
</div>
  </>
)


 
  
}
export default CartSummary;
CartSummary.propTypes = {
  /**
   * The text for the "Cart" title text.
   */
  cartTitleText: PropTypes.string,
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,
  /**
   * Discount amount associated with promo code
   */
  displayDiscount: PropTypes.string,
  /**
   * Shipping cost
   */
  displayShipping: PropTypes.string,
  /**
   * Subtotal amount
   */
  displaySubtotal: PropTypes.string.isRequired,
  /**
   * Surcharge amount
   */
  displaySurcharge: PropTypes.string,
  /**
   * Calculated tax amount
   */
  displayTax: PropTypes.string,
  /**
   * Total amount
   */
  displayTotal: PropTypes.string.isRequired,
  /**
   * The text for the "FREE" label text.
   */
  freeText: PropTypes.string,
  /**
   * Dense layout with a transparent background color
   */
  isDense: PropTypes.bool,
  /**
   * If a product qualifies for free shipping, display "FREE" for shipping method
   */
  isFreeShipping: PropTypes.bool,
  /**
   * The text for the "Items" label text.
   */
  itemLabelText: PropTypes.string,
  /**
   * Quantity of products in shopping cart
   */
  itemsQuantity: PropTypes.number,
  /**
   * The text for the "items" header text.
   */
  itemsText: PropTypes.string,
  /**
   * The text for the "Order total" label text.
   */
  orderTotalLabelText: PropTypes.string,
  /**
   * The text for the "Promo code applied" text.
   */
  promoCodeText: PropTypes.string,
  /**
   * The text for the "Shipping" label text.
   */
  shippingLabelText: PropTypes.string,
  /**
   * The text for the "Surcharges" label text.
   */
  surchargesLabelText: PropTypes.string,
  /**
   * The text for the "Tax" label text.
   */
  taxLabelText: PropTypes.string
}

