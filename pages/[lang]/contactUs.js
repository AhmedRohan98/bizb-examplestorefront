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
    marginTop: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    marginBottom: theme.spacing(3),
  },
  mainheading: {
    width: "90%",
   marginTop:theme.spacing(1),
   marginBottom:theme.spacing(5)
  },
  orderThankYoupara: {
    fontSize: "24px",
    color: "#333333",
    fontWeight: 500,
    marginTop: theme.spacing(2),

    fontFamily: "Lato",
    fontStyle: "normal",
    textAlign: "start",
    lineHeight: "29px",
  },
  sociallinks: {
    marginTop: theme.spacing(2),
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
    marginRight:theme.spacing(2),

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
    width: "331px",
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
    width: "331px",
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
    width: "170px",
    height: "48px",
    borderRadius: "40px",
    marginTop:theme.spacing(10),
    border: "none",
    display: "flex",
    justifyContent: "flex-start",
   
  
  },
  socialmedia2: {
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
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
  inputorder: {
    width: "331px",
    height: "137px",
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
  coneect:{
    marginLeft:theme.spacing(2)
  }
}));

const CheckoutComplete =() =>{
 

  const classes = useStyles();

 const sendmail = Yup.object({
   FullName: Yup.string().min(3).max(25).required("Please enter your Full name"),
   email: Yup.string().email().required("Please enter your email"),
   orderNotes: Yup.string().min(5).max(50).required("Please enter your message "),
 });
 const initialValues = {
   FullName: "",
   email: "",
   orderNotes: "",
  
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
              <Grid container xs={12}>
                <Grid item xs={6}>
                  <Typography variant="h3">Let’s Talk</Typography>
                  <div className={classes.mainheading}>
                    <Typography variant="h4" className={classes.orderThankYoupara}>
                      {" "}
                      Fill up the form and our team will get back to you within 24 hours.
                    </Typography>
                  </div>
                  <div className={classes.sociallinks}>
                    <img src="/icons/email.svg" className={classes.email} alt="thanyou"></img>
                    <Typography className={classes.coneect} variant="h5">
                      Hello@bizb.store
                    </Typography>
                  </div>
                  <div className={classes.sociallinks}>
                    <img src="/icons/phone.svg" className={classes.email} alt="thanyou"></img>
                    <Typography className={classes.coneect} variant="h5">
                      +92 312 5253680
                    </Typography>
                  </div>
                  <div className={classes.socialmediafo}>
                    <img src="/cart/facebook.svg" className={classes.imges} alt="thanyou"></img>
                    <img src="/cart/insta.svg" className={classes.imges} alt="thanyou"></img>
                    <img src="/cart/twitter.svg" className={classes.imges} alt="thanyou"></img>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <form className={classes.root} onSubmit={handleSubmit}>
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
                        <label className={classes.label} variant="h4" htmlFor="orderNotes">
                          <span className={classes.labelSpan}>
                            Message<span style={{ color: "#FD1010" }}>*</span>
                          </span>
                          <TextField
                            placeholder="Type your message here..."
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
                          />
                        </label>
                        {errors.orderNotes && touched.orderNotes ? (
                          <p className={classes.formerror}>{errors.orderNotes}</p>
                        ) : null}
                      </Grid>
                    </Grid>

                    <div className={classes.socialmedia2}>
                      <Button
                        className={classes.register}
                        InputProps={{ disableUnderline: true }}
                        variant="h5"
                        type="submit"
                        role="button"
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </form>
                </Grid>
              </Grid>
            </div>
          </>
        )}
      </>
    );
      
}

export default CheckoutComplete
