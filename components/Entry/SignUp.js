import useViewer from "hooks/viewer/useViewer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";
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
  labelSpan: {
    paddingLeft: theme.spacing(2),
  },

  switchEntryMode: {
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
    justifyContent: "space-between",
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
    lineHeight: "55px",
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
    marginRight: "15px",
    color: "#333333",
    fontFamily: "Ostrich Sans Black",
    fontWeight: 900,

    lineHeight: "24px",
    fontStyle: "normal",
    // marginLeft: "15px",
  },
  socialmedia2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  socialmediaAuth: {
    display: "flex",
    justifyContent: "space-between",
  },
  switchaccout: {
    color: "#FDC114",
  },
  formerror: {
    paddingLeft: theme.spacing(1),
    margin: "0px",
    fontSize: "14px",
    color: "#b22b27",
    fontFamily: "Lato",
  },
}));

/**
 * Component to render when user tries to signup.
 * @param {Object} props of structure { closeModal: func, openModal: func }
 * @returns {Object} jsx
 */
export default function SignUp(props) {
  const [checkedEmail, setCheckedEmail] = React.useState(true);

  const { closeModal, openModal } = props;
  const classes = useStyles();

  const [error, setError] = useState("");
  const [, , refetch] = useViewer();
  const { passwordClient } = getAccountsHandler();

  const handleChangeEmail = (event) => {
    setCheckedEmail(event.target.checked);
  };

  const handleOpenLogIn = () => {
    openModal("login");
  };

  // const registerUser = async () => {
  //   try {
  //     // Creating user will login also
  //     await passwordClient.createUser({ email, password: hashPassword(password) });
  //     closeModal();
  //     await refetch();
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const initialValues = {
    FullName: "",
    email: "",
    password: "",
    confirm_password: "",
    phonenumber: "",
  };
  const signUpSchema = Yup.object({
    FullName: Yup.string().min(3).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phonenumber: Yup.string()
      .matches(/^[0-9]+$/, "Please enter a valid mobile number")
      .required("Phone number is required"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });
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
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: async (values, action) => {
      await registerUser2(values, action);
      //// to get rid of all the values after submitting the form
      action.resetForm();
    },
  });

  return (
    <>
      <Typography variant="body1">REGISTRATION </Typography>
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
            {touched.FullName && errors.FullName ? <p className={classes.formerror}>{errors.FullName}</p> : null}
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
            {errors.password && touched.password ? <p className={classes.formerror}>{errors.password}</p> : null}
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
            control={<Checkbox checked={checkedEmail} onChange={handleChangeEmail} className={classes.checkbox} />}
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
      </form>
    </>
  );
}

SignUp.propTypes = {
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
};
