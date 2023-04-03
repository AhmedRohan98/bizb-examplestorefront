import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useViewer from "hooks/viewer/useViewer";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import getAccountsHandler from "../../lib/accountsServer.js";
import hashPassword from "../../lib/utils/hashPassword";
import * as Yup from "yup";
import { useFormik } from "formik";
const useStyles = makeStyles((theme) => ({
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
  socialmedia: {
    width: "250px",
    height: "48px",
    borderRadius: "40px",
    border: "none",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "10px",
    background: theme.palette.secondary.selected,
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
export default function Login(props) {
  const { closeModal, openModal } = props;
  const classes = useStyles();

  const [error, setError] = useState("");
  const [viewer, , refetch] = useViewer();
  const { passwordClient } = getAccountsHandler();

  const handleOpenSignUp = () => {
    openModal("signup");
  };
 const signUpSchema = Yup.object({
   
   email: Yup.string().email().required("Please enter your email"),

   password: Yup.string().min(5).required("Please enter your password"),
 
 });
 const registerUser = async (values, action) => {
const { email, password } = values;
   try {
     await passwordClient.login({
       user: {
         email,
       },

       password: password,
     });
    closeModal();
     await refetch();
   } catch (err) {
     setError(err.message);
   }
 };

  const handleForgotPasswordClick = () => {
    openModal("forgot-password");
  };
const registerUser2 = async (values, action) => {
  try {
    // Creating user will login also
    await passwordClient.createUser({ email: values.email, password: hashPassword(values.password) });
    action.resetForm(); // to get rid of all the values after submitting the form
    closeModal();
    await refetch();
  } catch (err) {
    setError(err.message);
  }
};
 const initialValues = {
   email: "",
   password: "",
 };
const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
  initialValues,
  validationSchema: signUpSchema,
  validateOnChange: true,
  validateOnBlur: false,
  //// By disabling validation onChange and onBlur formik will validate on submit.
  onSubmit: async (values, action) => {
    await registerUser(values, action);
    //// to get rid of all the values after submitting the form
   
  },
});
  return (
    <>
      <>
        <Typography variant="body1">WELCOME BACK ! </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container>
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
              <label className={classes.label} htmlFor="password">
                <span className={classes.labelSpan} htmlFor="password">
                  Password <span style={{ color: "#FD1010" }}>*</span>
                </span>
                <TextField
                  placeholder="Enter Your Password"
                  InputProps={{ disableUnderline: true }}
                  style={{ fontFamily: "Lato" }}
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={classes.password}
                />
              </label>
              {errors.password && touched.password ? <p className={classes.formerror}>{errors.password}</p> : null}
            </Grid>
            <div
              className={classes.forgotPassword}
              onClick={handleForgotPasswordClick}
              onKeyDown={handleForgotPasswordClick}
              role="button"
              tabIndex={0}
            >
              Forgot Password?
            </div>
          </Grid>
          {!!error && <div className={classes.error}>{error}</div>}
          <div className={classes.socialmedia2}>
            <Button
              className={classes.register}
              style={{ fontFamily: "Ostrich Sans Black", fontSize: "20px" }}
              InputProps={{ disableUnderline: true }}
              variant="h5"
              role="button"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
        <div style={{ textAlign: "center", marginTop: "15px", fontSize: "16px" }}>OR</div>
        <div className={classes.socialmediaAuth}>
          <Box className={classes.socialmedia}>
            <img style={{ marginLeft: "20px" }} src="/authentication/signup3.svg" alt="Login-SignUP" />
            <Typography
              style={{ fontFamily: "Ostrich Sans Black", fontSize: "20px" }}
              variant="h5"
              className={classes.register2}
            >
              {" "}
              Login With Google
            </Typography>
          </Box>
          <Box className={classes.socialmedia}>
            <img style={{ marginLeft: "20px" }} src="/authentication/signup4.svg" alt="Login-SignUP" />
            <Typography
              style={{ fontFamily: "Ostrich Sans Black", fontSize: "20px" }}
              variant="h5"
              className={classes.register2}
            >
              {" "}
              Login With Facebook
            </Typography>
          </Box>
        </div>
        <div
          className={classes.switchEntryMode}
          onClick={handleOpenSignUp}
          onKeyDown={handleOpenSignUp}
          role="button"
          tabIndex={0}
        >
          <Typography variant="h5">
            {" "}
            Don't have an account? <span className={classes.switchaccout}> Sign Up</span>
          </Typography>
        </div>
      </>
    </>
  );
}

Login.propTypes = {
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
};
