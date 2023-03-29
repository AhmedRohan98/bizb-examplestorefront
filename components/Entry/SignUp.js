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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, , refetch] = useViewer();
  const { passwordClient } = getAccountsHandler();
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const [resetpassword, setResetPassword] = useState("");
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

  const registerUser = async () => {
    try {
      // Creating user will login also
      await passwordClient.createUser({ email, password: hashPassword(password) });
      closeModal();
      await refetch();
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Typography variant="body1">REGISTRATION </Typography>
      <form className={classes.root} noValidate>
        <Grid container>
          <Grid xs={12} item>
            <label className={classes.label} required>
              <span className={classes.labelSpan}>
                Full Name <span style={{ color: "#FD1010" }}>*</span>
              </span>
              <TextField
                placeholder="Enter Your User Name"
                InputProps={{ disableUnderline: true }}
                className={classes.input}
                onChange={handleFullname}
                value={fullname}
              />
            </label>
          </Grid>
          <Grid xs={12} item>
            <label className={classes.label} variant="h6">
              <span className={classes.labelSpan}>
                Email <span style={{ color: "#FD1010" }}>*</span>
              </span>
              <TextField
                placeholder="Enter Your Email Address"
                InputProps={{ disableUnderline: true }}
                required
                className={classes.input}
                onChange={handleEmailChange}
                value={email}
                type="email"
              />
            </label>
          </Grid>

          <Grid item xs={12}>
            <label className={classes.label}>
              <span className={classes.labelSpan}>
                Phone Number <span style={{ color: "#FD1010" }}>*</span>
              </span>
              <TextField
                placeholder="Enter Your Phone Number"
                InputProps={{ disableUnderline: true }}
                required
                className={classes.input}
                onChange={handlephonenumber}
                value={phonenumber}
              />
            </label>
          </Grid>
          <Grid item xs={12}>
            <label className={classes.label}>
              <span className={classes.labelSpan}>
                Password <span style={{ color: "#FD1010" }}>*</span>
              </span>
              <TextField
                placeholder="Enter Your Password"
                InputProps={{ disableUnderline: true }}
                required
                className={classes.input}
                onChange={handlePasswordChange}
                value={password}
              />
            </label>
          </Grid>

          <Grid item xs={12}>
            <label className={classes.label}>
              <span className={classes.labelSpan}>
                Re-Enter Password <span style={{ color: "#FD1010" }}>*</span>
              </span>
              <TextField
                placeholder="Re-Enter Your Password"
                InputProps={{ disableUnderline: true }}
                required
                className={classes.input}
                onChange={handleresetpsssword}
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
            onClick={registerUser}
          >
            {" "}
            Register
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: "15px", fontSize: "16px" }}>OR</div>
        <div className={classes.socialmediaAuth}>
          <Box className={classes.socialmedia}>
            <img style={{ marginLeft: "15px" }} src="/authentication/signup3.svg" alt="Login-SignUP" />
            <Typography variant="h5" className={classes.register2}>
              {" "}
              Register With Google
            </Typography>
          </Box>
          <Box className={classes.socialmedia}>
            <img style={{ marginLeft: "15px" }} src="/authentication/signup4.svg" alt="Login-SignUP" />
            <Typography variant="h5" className={classes.register2}>
              {" "}
              Register With Facebook
            </Typography>
          </Box>
        </div>

        {!!error && <div className={classes.error}>{error}</div>}
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
