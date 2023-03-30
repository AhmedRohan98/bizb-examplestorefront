/* eslint-disable react/no-multi-comp */


import { useMutation } from "@apollo/client";
import Router from "translations/i18nRouter";


import { Grid, TextField, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import { makeStyles } from "@material-ui/core/styles";

import { placeOrderQuery } from "../../hooks/orders/query";
const useStyles = makeStyles((theme) => ({
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
    marginLeft:theme.spacing(2)
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
  summary:{
    display:"flex",
    flexDirection:"column",
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
}));

const CheckoutActions = (prop) => {
  const { cart, apolloClient, cartStore } = prop;

  const { fulfillmentTotal, itemTotal, surchargeTotal, taxTotal, total } = cart.checkout.summary;
  const cartId = cartStore.hasAccountCart ? cartStore.accountCartId : cartStore.anonymousCartId;
  console.log(cart.checkout.summary.itemTotal.amount + 10, "prop");
  const [checkedEmail, setCheckedEmail] = React.useState(true);
  const [placeOrder] = useMutation(placeOrderQuery);

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [address,SetAddress] = useState("");
  const [error, setError] = useState("");

  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const handleNotes = (event) => {
    setNotes(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
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

  const handleAddress = (event) => {
    SetAddress(event.target.value);
  };

  const items = cart.items.map((item) => ({
    addedAt: item.addedAt,
    price: item.price.amount,
    productConfiguration: item.productConfiguration,
    quantity: item.quantity,
  }));

  const handlepay = async () => {
    try {
      // const { data } = apolloClient.mutate({
      //   mutation: placeOrderMutation,
      //   variables: {
      //     input: {
      //       order: {
      //         cartId: cart._id,
      //         currencyCode: cart.shop.currency.code,
      //         email: cart.email,
      //         fulfillmentGroups: [
      //           {
      //             data: {
      //               shippingAddress: {
      //                 address1: notes,
      //                 address2: notes,
      //                 city: city,
      //                 company: null,
      //                 country: "pakistan",
      //                 fullName: fullname,
      //                 isBillingDefault: false,
      //                 isCommercial: false,
      //                 isShippingDefault: false,
      //                 phone: phonenumber,
      //                 postal: "pak",
      //                 region: "pandi",
      //               },
      //             },
      //             items,
      //             selectedFulfillmentMethodId: cs8nCaD32Sqyw5MiP,
      //             shopId: cart.shop._id,
      //             totalPrice: cart.checkout.summary.total.displayAmount,
      //             type: "shipping",
      //           },
      //         ],
      //         shopId: cart.shop._id,
      //       },
      //       payments: [
      //         {
      //           amount: cart.checkout.summary.total.displayAmount,
      //           billingAddress: {
      //             address1: notes,
      //             address2: notes,
      //             city: city,
      //             company: null,
      //             country: "pakistan",
      //             fullName: fullname,
      //             isBillingDefault: false,
      //             isCommercial: false,
      //             isShippingDefault: false,
      //             phone: phonenumber,
      //             postal: "rawlpandi",
      //             region: "pandi",
      //           },

      //           method: "none",
      //         },
      //       ],
      //     },
      //   },
      // });
      const data = await placeOrder({
        variables: {
          order: {
            cartId: cartStore.accountCartId,
            currencyCode: cart.shop.currency.code,

            email: cart.account.emailRecords[0].address,

            fulfillmentGroups: [
              {
                data: {
                  shippingAddress: {
                    address1: address,
                    address2: address,
                    city: city,
                    company: null,
                    country: "pakistan",
                    fullName: "sardar umer javed",
                    isBillingDefault: false,
                    isCommercial: false,
                    isShippingDefault: false,
                    phone: phonenumber,
                    postal: "pak",
                    region: "pandi",
                  },
                },
                items,
                // displayShipping: fulfillmentTotal && fulfillmentTotal.displayAmount,
                // displaySubtotal: itemTotal.displayAmount,
                // displaySurcharge: surchargeTotal.displayAmount,
                // displayTotal: total.displayAmount,
                // displayTax: taxTotal && taxTotal.displayAmount,
                shopId: cart.shop._id,
                totalPrice: cart.checkout.summary.itemTotal.amount + 10,
                type: "shipping",
                selectedFulfillmentMethodId: "cmVhY3Rpb24vZnVsZmlsbG1lbnRNZXRob2Q6Zm1YU1FFM2dKbzM4V2NvZGUy",
              },
            ],
            shopId: cart.shop._id,
          },
          payments: [
            {
              amount: cart.checkout.summary.itemTotal.amount + 10,

              method: "iou_example",
            },
          ],
          total: cart.checkout.summary.itemTotal.amount + 10,
          totalItemQuantity: 1,
        },
      });

      // cartStore.clearAnonymousCartCredentials();
      // clearAuthenticatedUsersCart();

      // // Also destroy the collected and cached payment input
      // cartStore.resetCheckoutPayments();

     

      // Send use r to order confirmation page
      Router.push(`/checkout/order`).catch(
      
      );
      // Send user to order confirmation pageQ
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={9}>
        <Typography variant="h3" className={classes.mainheading}>
          Shipping Details
        </Typography>

        <form className={classes.root} noValidate>
          <Grid container xs={12}>
            <Grid xs={12} item>
              <label className={classes.label} required variant="h4">
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
                  onChange={handleAddress}
                  inputProps={{ style: { color: "black" } }}
                  value={address}
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
                  onChange={handleCity}
                  inputProps={{ style: { color: "black" } }}
                  value={city}
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
                onChange={handleNotes}
                value={notes}
              />
            </label>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={3}>
        <Grid container xs={12} className={classes.summary}>
          <>
            <Typography variant="h3" className={classes.mainheading}>
              PAYMENT
            </Typography>
            <div className={classes.cartpayment}>
              <img src="/cart/ellipse.svg" />
              <Typography gutterBottom variant="h4" className={classes.cartdelivery}>
                Cash On Delivery
              </Typography>
            </div>
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
                    {cart.checkout.summary.itemTotal.amount}
                  </Typography>
                </div>
                <div className={classes.subtotal}>
                  <Typography gutterBottom variant="h4">
                    Shipping Cost
                  </Typography>
                  <Typography gutterBottom variant="h4" className={classes.subtotalamount}>
                    {10}
                  </Typography>
                </div>
              </div>
              <div className={classes.empty}></div>
              <div className={classes.subtotal}>
                <Typography gutterBottom variant="h4">
                  Total
                </Typography>
                <Typography gutterBottom variant="h4" className={classes.subtotalamount}>
                  {cart.checkout.summary.itemTotal.amount + 10}
                </Typography>
              </div>
              <div className={classes.orderbutn}>
                <Button
                  className={classes.register}
                  InputProps={{ disableUnderline: true }}
                  variant="h6"
                  role="button"
                  type="submit"
                  onClick={() => {
                    handlepay();
                  }}
                >
                  Place Order
                </Button>
              </div>
            </div>
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckoutActions;
