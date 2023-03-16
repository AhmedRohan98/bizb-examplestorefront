/* eslint-disable react/no-multi-comp */

import PropTypes from "prop-types";
import { isEqual } from "lodash";
import styled from "styled-components";
import Actions from "../../reaction-plugins/reaction-component-library/package/src/components/CheckoutActions/v1";
import ShippingAddressCheckoutAction from "../../reaction-plugins/reaction-component-library/package/src/components/ShippingAddressCheckoutAction/v1";
import FulfillmentOptionsCheckoutAction from "../../reaction-plugins/reaction-component-library/package/src/components/FulfillmentOptionsCheckoutAction/v1";
import PaymentsCheckoutAction from "@reactioncommerce/components/PaymentsCheckoutAction/v1";
import FinalReviewCheckoutAction from "@reactioncommerce/components/FinalReviewCheckoutAction/v1";
import { addTypographyStyles } from "@reactioncommerce/components/utils";
import withAddressValidation from "containers/address/withAddressValidation";
import Dialog from "@material-ui/core/Dialog";
import PageLoading from "components/PageLoading";
import Router from "translations/i18nRouter";
import calculateRemainderDue from "lib/utils/calculateRemainderDue";
import AccountCircle from '@material-ui/icons/AccountCircle';


import { Grid, TextField,   Typography} from '@material-ui/core';
import {  useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { placeOrderMutation } from "../../hooks/orders/placeOrder.gql";
import { makeStyles } from "@material-ui/core/styles";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
const useStyles = makeStyles((theme) => ({
 
 
  label:{
    display: 'flex',
    marginTop:theme.spacing(1),

fontSize:"24px",
    marginBottom:theme.spacing(1),
    color:"#333333",
    flexDirection: "column",
 
  },
  switchEntryMode: {
        textAlign: "center",
      fontSize:"16px",
        cursor: "pointer",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
      },
  input:{
    width:"430px",
    height:"48px",
    borderRadius:"6px",
     color:"red",
   
     justifyContent:"center",
   paddingLeft:theme.spacing(2),
    background:"#F7F7F9",
    borderBottomColor:"none",
    "& .MuiInputBase-input": {
      color: "#969696",
      fontSize: "16px",
      fontFamily:"lato",
      padding:"opx",
   
    }
    ,
    "& .MuiInputBase-input.active": {
      color: "#eeeeeeeeeee6",
      fontSize: "17px",
      padding:"opx",
   
    }

  },
  inputorder:{
    width:"430px",
    height:"218px",
    borderRadius:"6px",
     color:"red",
   
    
   paddingLeft:theme.spacing(2),
    background:"#F7F7F9",
    borderBottomColor:"none",
    "& .MuiInputBase-input": {
      color: "#969696",
      fontSize: "16px",
      fontFamily:"lato",
      padding:"opx",
   
    }
    ,
    "& .MuiInputBase-input.active": {
      color: "#eeeeeeeeeee6",
      fontSize: "17px",
      padding:"opx",
   
    }

  },

register:{
  width:"214px",
  height:"48px",
  borderRadius:"40px",
  border:"none",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  background:theme.palette.secondary.selected,
  "&:hover": {

    background:theme.palette.secondary.selected,
}

},
socialmedia:{
  width:"250px",
  height:"48px",
  borderRadius:"40px",
  border:"none",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  margin:"10px",
  
  background:theme.palette.secondary.selected,

},
topheader:{
  display:"flex",
  flexDirection: "row",
  justifyContent: "space-between",
},
terms:{
  lineHeight:"100px"
    
},

checkbox:{
  color:"green",
  "& .MuiIconButton-label ":{
   color:theme.palette.secondary.selected,
  },
  
 },

 checkboxdiv:{
  display:"flex",
  flexDirection: "row",
width:"430px",
  borderBottom: `solid 1px  #00000030 `,

 },
 register2:{
  fontSize: "18px",
      color:"#333333",
      fontFamily:"Ostrich Sans",
        fontWeight: 900,
       
        lineHeight:"24px",
        fontStyle: "normal",
        marginLeft:"15px"
 },
 socialmedia2:{
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexWrap:"wrap"
 },
 switchaccout:{
  color:"#FDC114"
 },
 mainheading:{
  textTransform: "uppercase",
 },
 
phone:{
  color:"#333333",
  fontSize:"17px"
}
 
}));

const CheckoutActions = ({ addressValidationResults, cart, cartStore, checkoutMutations, orderEmailAddress , clearAuthenticatedUsersCart, apolloClient  }) => {
  const [checkedEmail, setCheckedEmail] = React.useState(true);

 
  
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const [resetpassword, setResetPassword] = useState("");
  const [actionAlerts, setActionAlerts] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [hasPaymentError, setHasPaymentError] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [fulfillmentGroup, setFulfillmentGroup] = useState({});
  const [checkoutSummary, setCheckoutSummary] = useState({});
  const [addresses, setAddresses] = useState([]);
  const [payments, setPayments] = useState([]);
  const [remainingAmountDue, setRemainingAmountDue] = useState(null);
  const [PaymentComponent, setPaymentComponent] = useState(PaymentsCheckoutAction);



  const buildData = ({ step, action }) => ({
    action,
    payment_method: paymentMethod,
    shipping_method: shippingMethod,
    step,
  });

  const handleValidationErrors = () => {
    const { validationErrors } = addressValidationResults || [];
    const shippingAlert =
      validationErrors && validationErrors.length
        ? {
            alertType: validationErrors[0].type,
            title: validationErrors[0].summary,
            message: validationErrors[0].details,
          }
        : null;
    setActionAlerts({ 1: shippingAlert });
  };

  const setShippingAddress = async (address) => {
    delete address.isValid;
    const { data, error } = await checkoutMutations.onSetShippingAddress(address);

    if (data && !error && isMounted) {
      setActionAlerts({ 1: {} });
    }
  };

  const setShippingMethod = async (shippingMethod) => {
    const {
      checkout: { fulfillmentGroups },
    } = cart;
    const fulfillmentOption = {
      fulfillmentGroupId: fulfillmentGroups[0]._id,
      fulfillmentMethodId: shippingMethod.selectedFulfillmentOption.fulfillmentMethod._id,
    };

    await checkoutMutations.onSetFulfillmentOption(fulfillmentOption);
  };

  const handlePaymentSubmit = (paymentInput) => {
    cartStore.addCheckoutPayment(paymentInput);

    setHasPaymentError(false);
    setActionAlerts({ 3: {} });
  };

  const handlePaymentsReset = () => {
    cartStore.resetCheckoutPayments();
  };

  const buildOrder = async () => {
    const cartId = cartStore.hasAccountCart ? cartStore.accountCartId : cartStore.anonymousCartId;
    const { checkout } = cart;

    const fulfillmentGroups = checkout.fulfillmentGroups.map((group) => {
      const { data } = group;
      const { selectedFulfillmentOption } = group;

      const items = cart.items.map((item) => ({
        addedAt: item.addedAt,
        price: item.price.amount,
        productConfiguration: item.productConfiguration,
        quantity: item.quantity,
      }));

   
    });
  };

  const paymentMethod = cartStore.checkoutPayments[0]?.payment.method ?? null;

  const shippingMethod =
    cart.checkout.fulfillmentGroups[0].selectedFulfillmentOption?.fulfillmentMethod.displayName ?? null;


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleresetpsssword = (event) => {
    setResetPassword(event.target.value);
  };
  const handlephonenumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleFullname = (event) => {
    setFullname(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setCheckedEmail(event.target.checked);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOpenLogIn = () => {
    openModal("login");
  };

  const registerUser = async () => {};
 const placeOrder = async (order) => {
  console.log(order,"order")
   let remainingAmountDue = order.fulfillmentGroups;
   const payments = cartStore.checkoutPayments.map(({ payment }) => {
     const amount = payment.amount ? Math.min(payment.amount, remainingAmountDue) : remainingAmountDue;
     remainingAmountDue -= amount;
     return { ...payment, amount };
   });

   try {
     const { data } = await apolloClient.mutate({
       mutation: placeOrderMutation,
       
       variables: {
         input: {
           order: {
             cartId: cartEntry.cartId,
             currencyCode: props.currency,
             email: "user@gmail.com",
             fulfillmentGroups: [
               {
                 data: {
                   shippingAddress: {
                     address1: addressShipping.address,
                     address2: addressShipping.address2,
                     city: addressShipping.city,
                     company: null,
                     country: addressShipping.country == null ? "pakistan" : addressShipping.country,
                     fullName: addressShipping.name,
                     isBillingDefault: false,
                     isCommercial: false,
                     isShippingDefault: false,
                     phone: addressShipping.contact,
                     postal: addressShipping.postalCode,
                     region: addressShipping.city,
                   },
                 },
                 items: [
                   {
                     addedAt: cartEntry.product.addedAt,
                     price: props.amount,
                     productConfiguration: { productId: productId, productVariantId: productIdvariant },
                     quantity: 1,
                   },
                 ],
                 selectedFulfillmentMethodId: "cmVhY3Rpb24vZnVsZmlsbG1lbnRNZXRob2Q6ckt4QW5rMjh5blNucVFkdTY=",
                 shopId: SHOP_ID,
                 totalPrice: props.amount,
                 type: "shipping",
               },
             ],
             shopId: SHOP_ID,
           },
           payments: [
             {
               amount: props.amount,
               billingAddress: {
                 address1: addressBilling.address,
                 address2: addressBilling.address2,
                 city: addressBilling.city,
                 company: null,
                 country: addressBilling.country == null ? "pakistan" : addressBilling.country,
                 fullName: addressBilling.name,
                 isBillingDefault: false,
                 isCommercial: false,
                 isShippingDefault: false,
                 phone: addressBilling.contact,
                 postal: addressBilling.postalCode,
                 region: addressBilling.city,
               },
               data: { stripeTokenId: token },
               method: "stripe_card",
             },
           ],
           payments,
         },
       },
     
     });

     cartStore.clearAnonymousCartCredentials();
     clearAuthenticatedUsersCart();
     cartStore.resetCheckoutPayments();
  console.log(variables,"var");
     const {
       placeOrder: { orders, token },
     } = data;

    //  Router.push(`/checkout/order?orderId=${orders[0].referenceId}${token ? `&token=${token}` : ""}`);
   } catch (error) {
     setHasPaymentError(true);
     setIsPlacingOrder(false);
     setActionAlerts({
       3: {
         alertType: "error",
         title: "Payment method failed",
         message: error.toString().replace("Error: GraphQL error:", ""),
       },
     });
   }
 };

 const handlePlaceOrder = () => {
   const order = {
     cartId: cart.cartId,
     currencyCode: cart.checkout.summary.total.currency.code,
     email: cart.orderEmailAddress,
     fulfillmentGroups: cart.fulfillmentGroups,
     shopId: cart.shop._id,
   };

   setIsPlacingOrder(true);
   placeOrder(order);
   console.log(order, "order");
 };
 


  return (
    <>
      <Typography variant="h3" className={classes.mainheading}>
        Shipping Details
      </Typography>
      <form className={classes.root} noValidate>
        <Grid container>
          <Grid xs={12} item>
            <label className={classes.label} required variant="h4">
              <button onClick={handlePlaceOrder}> tttt</button>
              Full Name
              <TextField
                placeholder="Enter your Full name"
                type="text"
                InputProps={{ disableUnderline: true }}
                inputProps={{ style: { color: "black" } }}
                className={classes.input}
                onChange={handleFullname}
                value={fullname}
              />
            </label>
          </Grid>
          <Grid xs={12} item>
            <label className={classes.label} variant="h4">
              Phone
              <TextField
                placeholder="Enter your name"
                type="number"
                InputProps={{
                  style: { color: "black" },
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start" className={classes.phone}>
                      +92
                    </InputAdornment>
                  ),
                }}
                required
                className={classes.input}
                onChange={handleEmailChange}
                value={email}
              />
            </label>
          </Grid>

          <Grid item xs={12}>
            <label className={classes.label} variant="h4">
              Email
              <TextField
                placeholder="Enter your Email Adress"
                InputProps={{ disableUnderline: true }}
                required
                className={classes.input}
                inputProps={{ style: { color: "black" } }}
                onChange={handlephonenumber}
                value={phonenumber}
              />
            </label>
          </Grid>
          <Grid item xs={12}>
            <label className={classes.label} variant="h4">
              Complete Address
              <TextField
                placeholder="Enter your complete address"
                InputProps={{ disableUnderline: true }}
                required
                className={classes.input}
                onChange={handlePasswordChange}
                inputProps={{ style: { color: "black" } }}
                value={password}
              />
            </label>
          </Grid>

          <Grid item xs={12}>
            <label className={classes.label} variant="h4">
              City
              <TextField
                placeholder="Select your city"
                InputProps={{ disableUnderline: true }}
                required
                className={classes.input}
                onChange={handleresetpsssword}
                inputProps={{ style: { color: "black" } }}
                value={resetpassword}
              />
            </label>{" "}
          </Grid>
        </Grid>
        <div className={classes.checkboxdiv}>
          <FormControlLabel
            control={<Checkbox checked={checkedEmail} onChange={handleChangeEmail} className={classes.checkbox} />}
          />
          <Typography variant="body2" className={classes.terms}>
            Save this Information for next time
          </Typography>
        </div>
        <Grid item xs={12}>
          <label className={classes.label} variant="h4">
            Order Notes
            <TextField
              placeholder="Enter additional notes here."
              InputProps={{ disableUnderline: true }}
              required
              className={classes.inputorder}
              inputProps={{ style: { color: "black" } }}
              onChange={handlephonenumber}
              value={phonenumber}
            />
          </label>
        </Grid>
      </form>
      <CheckoutSummary hello={"hello"}></CheckoutSummary>
    </>
  );
};

export default CheckoutActions;
