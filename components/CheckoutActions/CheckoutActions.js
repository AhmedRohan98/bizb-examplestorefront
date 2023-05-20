/* eslint-disable react/no-multi-comp */

import { useMutation } from "@apollo/client";
import Router from "translations/i18nRouter";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ToastContainer, toast } from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select, { components } from "react-select";
import { placeOrderQuery } from "../../hooks/orders/query";
const useStyles = makeStyles((theme) => ({
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
  toast: {
    background: "yellow",
    color: "black",
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
  inputitem: {
    width: "440px",
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

    background: theme.palette.secondary.selected,
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
      background: "#FDC114",
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
    width: "380px",
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
  mainheadingp: {
    textTransform: "lowercase",
    alignItems: "center",
    width: "380px",
  },

  phone: {
    color: "#333333",
    fontSize: "17px",
  },
  mainheading: {
    textTransform: "uppercase",
    alignItems:"center",
    width: "100%",
  },
  ellipse: {
    height: "18px",
    width: "18px",
    borderRadius: "100%",
  },
  cartpayment: {
    display: "flex",
    width: "380px",
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
    width: "320px",
    display: "flex",
    marginLeft: "75px",
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  saveinfoordernotes: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  labelSpan: {
    width: "300px",
  },
  register: {
    width: "261px",
    height: "48px",
    borderRadius: "40px",
    border: "none",

    display: "flex",
    marginTop: theme.spacing(4),

    background: theme.palette.secondary.selected,
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
      background: "#FDC114",
    },
  },
  Gridmain: {
    display: "flex",

    justifyContent: "center",
  },
}));

const CheckoutActions = (prop) => {
  const { cart, apolloClient, cartStore } = prop;
  const CustomCloseButton = () => <CloseIcon Style={{ backgroundColor: "#FDC114", color: "black", height: "15px" }} />;

  const [selectedOption, setSelectedOption] = useState(null);
  const { fulfillmentTotal, itemTotal, surchargeTotal, taxTotal, total } = cart.checkout.summary;
  const cartId = cartStore.hasAccountCart ? cartStore.accountCartId : cartStore.anonymousCartId;
  // console.log(cart.checkout.summary.itemTotal.amount + 10, "prop");
  const [checkedEmail, setCheckedEmail] = React.useState(false);
  const [placeOrder] = useMutation(placeOrderQuery);

  const classes = useStyles();

  const [error, setError] = useState("");

  const handleChangeEmail = (event) => {
    setCheckedEmail(event.target.checked);
  };

  const items = cart.items.map((item) => ({
    addedAt: item.addedAt,
    price: item.price.amount,
    productConfiguration: item.productConfiguration,
    quantity: item.quantity,
  }));
console.log(cart)
  const handlepay = async (values, action) => {
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
      const {data} = await placeOrder({
        variables: {
          order: {
            cartId: cartStore.accountCartId,
            currencyCode: cart.shop.currency.code,

            email: values.email,

            fulfillmentGroups: [
              {
                data: {
                  shippingAddress: {
                    address1: values.CompleteAddress,
                    address2: values.orderNotes,
                    city: values.city,
                    company: null,
                    country: "pakistan",
                    fullName: values.FullName,
                    isBillingDefault: false,
                    isCommercial: false,
                    isShippingDefault: false,
                    phone: values.phonenumber,
                    postal: "pak",
                    region: "pandi",
                  },
                },
                //                  const initialValues = {
                //    email: "",
                //    FullName: "",
                //    phonenumber: "",
                //    CompleteAddress: "",
                //    orderNotes: "",

                //    city:"",
                //  };
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

     

      const {
        placeOrder: { orders, token },
      } = data;
 toast.success("Order placed successfully!");

      // Send user to order confirmation page
      Router.push(`/checkout/order?orderId=${orders[0].referenceId}${token ? `&token=${token}` : ""}`);
  
 cartStore.clearAnonymousCartCredentials();
 clearAuthenticatedUsersCart();

 // Also destroy the collected and cached payment input
 cartStore.resetCheckoutPayments();

    } catch (error) {
      console.log(error);
    }
  };
  const initialValues = {
    email: "",
    FullName: "",
    phonenumber: "",
    CompleteAddress: "",
    orderNotes: "",

    city: "",
  };
  const addressSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),

    FullName: Yup.string().min(3).max(25).required("Please enter your Full name"),
    phonenumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Please Enter 10 digits phone Number")
      .required("Phone number is required"),

    city: Yup.string().min(5).required("Please Enter Your City"),
    CompleteAddress: Yup.string().min(5).required("Please enter your address"),
    orderNotes: Yup.string(),
  });
  
  const { values, handleBlur, handleChange, handleSubmit, errors, touched, setFieldValue } = useFormik({
    initialValues,
    validationSchema: addressSchema,
    validateOnChange: true,
    validateOnBlur: false,

    onSubmit: async (values, action) => {
      await handlepay(values, action);
      action.resetForm();


  
    },
  });
  const customStyles = {
    indicatorSeparator: () => ({
      height: "48px",

      color: "black",
    }),
    control: (provided, state) => ({
      ...provided,
      height: "48px",
      width: "430px",
      marginTop: "10px",
      background: "#F7F7F9",
      borderRadius: "6px",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",
      // Change this to the desired width
    }),
    menu: (provided, state) => ({
      ...provided,
      // Set the width of the menu to the full viewport width
      maxWidth: "none",
      width: "430px",

      // Ensure that the menu can extend beyond the width of the container
    }),
    menuList: (provided, state) => ({
      ...provided,
      width: "430px",
      border: "none",
    }),
    option: (provided, state) => ({
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: state.isFocused ? 800 : 500,
      color: "#969696",
      fontSize: "16px",
      fontFamily: "lato",
      padding: "opx",
      width: "430px",
      letterSpacin: "0.05em",
      padding: "13px",
      borderBottom: state.isLastOption ? "none" : "1px solid #01010136",
      color: state.isFocused ? "#000000" : "#989898",
      "&:hover": {
        color: "#000000",
      },
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      icon: state.isFocused ? "url('/colors/vectordark.svg')" : "url('/colors/vectoryellow.svg')",
      "&:hover": {
        color: "green",
      },
    }),
    input: (provided) => ({
      width: "430px !important",
      color: "#969696",
      color: "#969696",
      fontSize: "16px",
      fontFamily: "lato",
      padding: "opx",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        fontFamily: "Lato",
        fontStyle: "normal",
        color: "#969696",
        fontSize: "16px",
        fontFamily: "lato",
        padding: "opx",

        color: "#969696",
        "&:hover": {
          color: "#FDC114",
        },
      };
    },
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src="/colors/vector.svg" />
      </components.DropdownIndicator>
    );
  };
  const options = [
    { value: "Lahore", label: "Lahore" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Karachi", label: "Karachi" },
    { value: "Rawalpandi", label: "Rawalpandi" },
  ];
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container xs={12} justifyContent="center" className={classes.Gridmain}>
          <Grid item xs={6} lg={6} justifyContent="center">
            <div className={classes.summary}>
              <Typography variant="h3" className={classes.mainheading}>
                Shipping Details
              </Typography>

              <Grid container xs={12} className={classes.root}>
                <Grid xs={12} item className={classes.inputitem}>
                  <label className={classes.label} htmlFor="FullName">
                    <span className={classes.labelSpan} htmlFor="FullName">
                      Full Name <span style={{ color: "#FD1010" }}>*</span>
                    </span>
                    <TextField
                      placeholder="Enter Your User Name"
                      InputProps={{ disableUnderline: true }}
                      className={classes.input}
                      type="text"
                      autoComplete="off"
                      name="FullName"
                      id="FullName"
                      value={values.FullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  {touched.FullName && errors.FullName ? <p className={classes.formerror}>{errors.FullName}</p> : null}
                </Grid>
                <Grid xs={12} item className={classes.inputitem}>
                  <label className={classes.label} htmlFor="phonenumber">
                    <span className={classes.labelSpan} htmlFor="phonenumber">
                      Phone Number <span style={{ color: "#FD1010" }}>*</span>
                    </span>
                    <TextField
                      placeholder="Enter your name"
                      type="tel"
                      InputProps={{
                        style: { color: "black" },
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start" className={classes.phone}>
                            +92
                          </InputAdornment>
                        ),
                      }}
                      name="phonenumber"
                      id="phonenumber"
                      value={values.phonenumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.input}
                    />
                  </label>
                  {touched.phonenumber && errors.phonenumber ? (
                    <p className={classes.formerror}>{errors.phonenumber}</p>
                  ) : null}
                </Grid>
                <Grid xs={12} item className={classes.inputitem}>
                  <label className={classes.label} variant="h6" htmlFor="email">
                    <span className={classes.labelSpan}>
                      Email <span style={{ color: "#FD1010" }}>*</span>
                    </span>
                    <TextField
                      placeholder="Enter Your Email Address"
                      InputProps={{ disableUnderline: true }}
                      className={classes.input}
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  {errors.email && touched.email ? <p className={classes.formerror}>{errors.email}</p> : null}
                </Grid>
                <Grid item xs={12} className={classes.inputitem}>
                  <label className={classes.label} variant="h6" htmlFor="CompleteAddress">
                    <span className={classes.labelSpan}>
                      Complete Address <span style={{ color: "#FD1010" }}>*</span>
                    </span>
                    <TextField
                      placeholder="Enter your complete address"
                      InputProps={{ disableUnderline: true }}
                      autoComplete="off"
                      type="text"
                      name="CompleteAddress"
                      id="CompleteAddress"
                      value={values.CompleteAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.input}
                      inputProps={{ style: { color: "black" } }}
                    />
                  </label>
                  {errors.CompleteAddress && touched.CompleteAddress ? (
                    <p className={classes.formerror}>{errors.CompleteAddress}</p>
                  ) : null}
                </Grid>

                <Grid item xs={12} className={classes.inputitem}>
                  <label className={classes.label} variant="h4">
                    <span className={classes.labelSpan}>
                      City <span style={{ color: "#FD1010" }}>*</span>
                    </span>
                    <TextField
                      placeholder="Please Enter Your City Name"
                      InputProps={{ disableUnderline: true }}
                      autoComplete="off"
                      type="text"
                      name="city"
                      id="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.input}
                      inputProps={{ style: { color: "black" } }}
                    />
                  </label>
                  {errors.city && touched.city ? <p className={classes.formerror}>{errors.city}</p> : null}
                </Grid>
              </Grid>
              <div className={classes.inputitem}>
                <div className={classes.checkboxdiv}>
                  <FormControlLabel
                    control={
                      <Checkbox checked={checkedEmail} onChange={handleChangeEmail} className={classes.checkbox} />
                    }
                  />

                  <Typography variant="body2" className={classes.terms}>
                    Save this Information for next time
                  </Typography>
                </div>
                <Grid item xs={12} className={classes.inputitem}>
                  <label className={classes.label} variant="h4" htmlFor="orderNotes">
                    <span className={classes.labelSpan}>Order Notes</span>
                    <TextField
                      placeholder="Enter additional notes here."
                      InputProps={{ disableUnderline: true }}
                      className={classes.inputorder}
                      inputProps={{ style: { color: "black" } }}
                      autoComplete="off"
                      type="text"
                      name="orderNotes"
                      id="orderNotes"
                      value={values.orderNotes}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      multiline={true}
                      maxRows={4}
                    />
                  </label>
                  {errors.orderNotes && touched.orderNotes ? (
                    <p className={classes.formerror}>{errors.orderNotes}</p>
                  ) : null}
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sm={12} md={6} justifyContent="center">
            <Grid container xs={12} className={classes.summary} justifyContent="center">
              <>
                <Typography variant="h3" className={classes.mainheadingp}>
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
                </div>
                <div className={classes.orderbutn}>
                  <Button
                    className={classes.register}
                    InputProps={{ disableUnderline: true }}
                    variant="h6"
                    type="submit"
                    role="button"
                  >
                    Place Order
                  </Button>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeButton={<CustomCloseButton />}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    background="green"
                    toastStyle={{
                      backgroundColor: "#FDC114",
                      color: "black",
                      fontSize: "16px",
                      fontFamily: "Lato",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              </>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default CheckoutActions;
