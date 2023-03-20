/* eslint-disable react/no-multi-comp */

import PropTypes from "prop-types";
import { isEqual, result } from "lodash";
import { useMutation } from "@apollo/client";
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
import AccountCircle from "@material-ui/icons/AccountCircle";

import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { placeOrderMutation } from "../../hooks/orders/placeOrder.gql";
import { makeStyles } from "@material-ui/core/styles";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
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
    fontFamily: "Ostrich Sans",
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
}));

const CheckoutActions = (prop) => {
  const { cart, apolloClient } = prop;
  console.log(cart, "prop");
  const [checkedEmail, setCheckedEmail] = React.useState(true);
  const [placeOrder] = useMutation(placeOrderQuery);

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const items = cart.items.map((item) => ({
    addedAt: item.addedAt,
    price: item.price.amount,
    productConfiguration: item.productConfiguration,
    quantity: item.quantity,
  }));

  const handlepay = async () => {
    try {
      console.log("payments.............");
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
            cartId: cart._id,
            currencyCode: cart.shop.currency.code,
            email: "sardar@gmail.com",
            fulfillmentGroups: [
              {
                data: {
                  shippingAddress: {
                    address1: "Address 1",
                    address2: "Address 1",
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

                shopId: cart.shop._id,
                totalPrice: 0.0,
                type: "shipping",
                selectedFulfillmentMethodId: "pHk3xmXeWHyZ2tPMn - Free",
              },
            ],
            shopId: cart.shop._id,
          },
          payments: [
            {
              amount: 0.0,
              billingAddress: {
                address1: "dsfff",
                address2: "ssff",
                city: city,
                company: null,
                country: "pakistan",
                fullName: "sardar umer javed",
                isBillingDefault: false,
                isCommercial: false,
                isShippingDefault: false,
                phone: phonenumber,
                postal: "rawlpandi",
                region: "pandi",
              },
              method: "stripe_payment_intent",
            },
          ],
        },
      });

      console.log("placeorder result", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography variant="h3" className={classes.mainheading}>
        Shipping Details
      </Typography>
      <button onClick={() => handlepay()}>ggg</button>

      <form className={classes.root} noValidate>
        <Grid container>
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
      <CheckoutSummary hello={"hello"}></CheckoutSummary>
    </>
  );
};

export default CheckoutActions;
