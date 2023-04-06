import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Box, Typography, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import Rating from '@material-ui/lab/Rating';
import useViewer from "hooks/viewer/useViewer";


import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";
import getAccountsHandler from "../../lib/accountsServer.js";
import hashPassword from "../../lib/utils/hashPassword";
const useStyles = makeStyles((theme) => ({
  orderThankYou: {
    display: "flex",
    marginTop: theme.spacing(25),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    marginBottom: theme.spacing(3),
  },
  mainheading: {
    width: "334px",
    height: "58px",
  },
  orderThankYoupara: {
    fontSize: "24px",
    color: "#333333",
    fontWeight: 500,
    marginTop: theme.spacing(2),
    fontFamily: "Lato",
    fontStyle: "normal",
    textAlign: "center",
    lineHeight: "29px",
  },
  sociallinks: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "row",
  },
  connect: {
    fontSize: "34px",
    color: "#333333",
    fontWeight: 700,
    marginTop: theme.spacing(2),
    fontFamily: "Lato",
    fontStyle: "normal",
    textAlign: "center",
    lineHeight: "41px",
  },
  socialmedia: {
    display: "flex",
    marginTop: theme.spacing(2),
    justifyContent: "space-between",
    width: "190px",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: theme.spacing(5),
  },
  look: {
    height: "197px",
    width: "409px",
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",

    borderRadious: "0px",
    backgroundColor: "#F7F7F9",
  },
  imagemobile: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  register: {
    width: "263px",
    height: "48px",
    borderRadius: "40px",
    border: "none",
    marginBottom: theme.spacing(10),
    display: "flex",
    marginTop: theme.spacing(4),
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.selected,
    "&:hover": {
      background: theme.palette.secondary.selected,
    },
  },
  reviews: {
    display: "flex",
    marginTop: theme.spacing(),

    flexDirection: "row",
  },
  cardimage: {
    marginRight: theme.spacing(1),
  },
  facebookreview: {
    fontSize: "24px",
    color: "#333333",
    fontWeight: 500,

    fontFamily: "Lato",
    fontStyle: "normal",

    lineHeight: "29px",
  },
  ratingtime: {
    display: "flex",
    width: "180px",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  ratingday: {
    fontSize: "16px",
    color: "#969696",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 500,
    weight: 100,
    lineHeight: "19px",
  },
  blogtext: {
    fontSize: "16px",
    color: "#333333",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 500,
    marginTop: theme.spacing(1),
    lineHeight: "19px",
  },
  blogtextr: {
    color: theme.palette.secondary.selected,
  },
  imges: {
    width: "51px",
    height: "51px",
 
    "& .hover": {
      transform: "scale(1.2)",
    },
  },
  label: {
    display: "flex",
    marginTop: theme.spacing(1),
    color: "#333333",
    flexDirection: "column",
  },
  formerror: {
    paddingLeft: theme.spacing(1),
    fontSize: "16px",
    cursor: "pointer",
    color: "#b22b27",
    fontFamily: "Lato",
  },
  labelSpan: {
    paddingLeft: theme.spacing(2),
  },
  input: {
    width: "387px",
    borderRadius: "6px",
    color: "red",
    justifyContent: "center",
    background: "#F7F7F9",
    borderBottomColor: "none",
    "& .MuiInputBase-input": {
      height: "48px",
      borderRadius: "6px",
      paddingLeft: theme.spacing(2),
      color: "#969696",
      fontSize: "17px",
      padding: "0px",
    },
    "& .MuiInputBase-root": {
      fontFamily: "Lato",
    },
  },
  password: {
    width: "387px",
    fontFamily: "Lato !important",
    borderRadius: "6px",
    color: "red",
    justifyContent: "center",
    background: "#F7F7F9",
    borderBottomColor: "none",
    "& .MuiInputBase-input": {
      height: "48px",
      borderRadius: "6px",
      paddingLeft: theme.spacing(2),
      color: "#969696",
      fontSize: "17px",
      padding: "0px",
    },
    "& .MuiInputBase-root": {
      fontFamily: "Lato",
    },
  },
  register: {
    width: "214px",
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
  },
  register2: {
    fontSize: "18px",
    color: "#333333",
    marginRight: "20px",
    fontFamily: "Ostrich Sans Black",
    fontWeight: 900,
    lineHeight: "24px",
    fontStyle: "normal",
  },
  socialmediafo: {
    width: "250px",
    height: "48px",
    borderRadius: "40px",
    border: "none",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "10px",
  },
  socialmedia2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  switchEntryMode: {
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  socialmediaAuth: {
    display: "flex",
    justifyContent: "space-between",
  },
  switchaccout: {
    color: "#FDC114",
  },
}));

const CheckoutComplete =() =>{
 

  const classes = useStyles();

 const sendmail = Yup.object({
   FullName: Yup.string().min(3).max(25).required("Please enter your Full name"),
   email: Yup.string().email().required("Please enter your email"),
   phonenumber: Yup.string()
     .matches(/^[0-9]+$/, "Please enter a valid mobile number")
     .required("Phone number is required"),
   password: Yup.string().min(6).required("Please enter your password"),
   confirm_password: Yup.string()
     .required()
     .oneOf([Yup.ref("password"), null], "Password must match"),
 });
 const initialValues = {
   FullName: "",
   email: "",
   password: "",
   confirm_password: "",
   phonenumber: "",
 };
 const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
   initialValues,
   validationSchema: sendmail,
   validateOnChange: true,
   validateOnBlur: true,
   //// By disabling validation onChange and onBlur formik will validate on submit.
   onSubmit: async (values, action) => {
     await registerUser(values, action);
     //// to get rid of all the values after submitting the form
   },
 });
    return (
      <>
        {typeof window !== "undefined" && (
          <>
            <div className={classes.orderThankYou}>
              <Typography variant="h3">Let’s Talk</Typography>
              <div className={classes.mainheading}>
                <Typography variant="h4" className={classes.orderThankYoupara}>
                  {" "}
                  Fill up the form and our team will get back to you within 24 hours.
                </Typography>
              </div>
              <div className={classes.sociallinks}>
                <img src="/icons/email.svg" className={classes.email} alt="thanyou"></img>
                <Typography className={classes.con} variant="h5">
                  Hello@bizb.store
                </Typography>
              </div>
              <div className={classes.sociallinks}>
                <img src="/icons/phone.svg" className={classes.email} alt="thanyou"></img>
                <Typography className={classes.con} variant="h5">
                  +92 312 5253680
                </Typography>
              </div>
              <div className={classes.socialmediafo}>
                <img src="/cart/facebook.svg" className={classes.imges} alt="thanyou"></img>
                <img src="/cart/insta.svg" className={classes.imges} alt="thanyou"></img>
                <img src="/cart/twitter.svg" className={classes.imges} alt="thanyou"></img>
              </div>
              <Typography className={classes.connect}>Facebook Reviews</Typography>

              <>
                <Typography variant="body1">REGISTRATION </Typography>
                {/* <form className={classes.root} onSubmit={handleSubmit}>
                  <Grid container>
                    <Grid xs={12} item>
                      <label className={classes.label}>
                        <span className={classes.labelSpan} htmlFor="FullName">
                          Full Name <span style={{ color: "#FD1010" }}>*</span>
                        </span>
                        <TextField
                          placeholder="Enter Your User Name"
                          InputProps={{ disableUnderline: true }}
                          className={classes.input}
                          type="FullName"
                          autoComplete="off"
                          name="FullName"
                          id="FullName"
                          value={values.FullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </label>
                      {touched.FullName && errors.FullName ? (
                        <p className={classes.formerror}>{errors.FullName}</p>
                      ) : null}
                    </Grid>
                    <Grid xs={12} item>
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

                    <Grid item xs={12}>
                      <label className={classes.label} htmlFor="phonenumber">
                        <span className={classes.labelSpan}>
                          Phone Number <span style={{ color: "#FD1010" }}>*</span>
                        </span>
                        <TextField
                          placeholder="Enter Your Phone Number"
                          InputProps={{ disableUnderline: true }}
                          className={classes.input}
                          type="number"
                          autoComplete="off"
                          name="phonenumber"
                          id="phonenumber"
                          value={values.phonenumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </label>
                      {touched.phonenumber && errors.phonenumber ? (
                        <p className={classes.formerror}>{errors.phonenumber}</p>
                      ) : null}
                    </Grid>
                    <Grid item xs={12}>
                      <label className={classes.label} htmlFor="password">
                        <span className={classes.labelSpan}>
                          Password <span style={{ color: "#FD1010" }}>*</span>
                        </span>
                        <TextField
                          placeholder="Enter Your Password"
                          InputProps={{ disableUnderline: true }}
                          className={classes.input}
                          type="password"
                          autoComplete="off"
                          name="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </label>
                      {errors.password && touched.password ? (
                        <p className={classes.formerror}>{errors.password}</p>
                      ) : null}
                    </Grid>

                    <Grid item xs={12}>
                      <label className={classes.label} htmlFor="confirm_password">
                        <span className={classes.labelSpan}>
                          Re-Enter Password <span style={{ color: "#FD1010" }}>*</span>
                        </span>
                        <TextField
                          placeholder="Re-Enter Your Password"
                          InputProps={{ disableUnderline: true }}
                          required
                          className={classes.input}
                          type="password"
                          autoComplete="off"
                          name="confirm_password"
                          id="confirm_password"
                          value={values.confirm_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </label>
                      {errors.confirm_password && touched.confirm_password ? (
                        <p className={classes.formerror}>{errors.confirm_password}</p>
                      ) : null}
                    </Grid>
                  </Grid>
                  <div className={classes.checkboxdiv}>
                    <FormControlLabel
                      control={
                        <Checkbox  className={classes.checkbox} />
                      }
                    />
                    <Typography variant="body2" className={classes.terms}>
                      {" "}
                      Agree Term & Conditions
                    </Typography>
                  </div>
                  <div className={classes.socialmedia2}>
                    <Button
                      className={classes.register}
                      InputProps={{ disableUnderline: true }}
                      variant="h5"
                      type="submit"
                      role="button"
                    >
                      Register
                    </Button>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "10px", fontSize: "16px" }}>OR</div>
                  <div className={classes.socialmediaAuth}>
                    <Box className={classes.socialmedia}>
                      <img style={{ marginLeft: "15px" }} src="/authentication/signup3.svg" alt="Login-SignUP" />
                      <Typography variant="h5" className={classes.register2}>
                        Register With Google
                      </Typography>
                    </Box>
                    <Box className={classes.socialmedia}>
                      <img style={{ marginLeft: "15px" }} src="/authentication/signup4.svg" alt="Login-SignUP" />
                      <Typography variant="h5" className={classes.register2}>
                        Register With Facebook
                      </Typography>
                    </Box>
                  </div>

                  {!!error && <div className={classes.formerror}>{error}</div>}
                  <div
                    className={classes.switchEntryMode}
                    onClick={handleOpenLogIn}
                    onKeyDown={handleOpenLogIn}
                    role="button"
                    tabIndex={0}
                  >
                    <Typography variant="h5">
                      Don't have an account ? <span className={classes.switchaccout}>Login</span>
                    </Typography>
                  </div>
                </form> */}
              </>
              <Typography className={classes.connect}>Make Your Wardrobe Smart Using Our App</Typography>
              <img src="/cart/mobile.svg" className={classes.imagemobile} alt="thanyou"></img>
              <Button
                className={classes.register}
                InputProps={{ disableUnderline: true }}
                variant="h6"
                role="button"
                type="submit"
                href="/"
              >
                Back To Home
              </Button>
            </div>
          </>
        )}
      </>
    );
      
}

export default CheckoutComplete
