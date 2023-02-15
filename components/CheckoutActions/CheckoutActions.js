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

import { Grid, TextField, Button,  Typography } from '@material-ui/core';
import React, { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { placeOrderMutation } from "../../hooks/orders/placeOrder.gql";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
 
 
  label:{
    display: 'flex',
    marginTop:theme.spacing(1),
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
    width:"387px",
    height:"48px",
    borderRadius:"6px",
     color:"red",
    
     justifyContent:"center",
   paddingLeft:theme.spacing(2),
    background:"#F7F7F9",
    borderBottomColor:"none",
    "& .MuiInputBase-input": {
      color: "#969696",
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
 }
 
}));

const CheckoutActions = () => {


const [checkedEmail, setCheckedEmail] = React.useState(true);


const classes = useStyles();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


const [fullname, setFullname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const [resetpassword, setResetPassword] = useState("");
const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

    const handleresetpsssword= (event) => {
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

};

return(
  <>
         
         <Typography variant="body1">REGISTRATION </Typography>     
    <form className={classes.root} noValidate>
    <Grid container >
    <Grid xs={12}  item>

                   <label className={classes.label}  required >FullName 
                    <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}   className={classes.input}   onChange={handleFullname} value={fullname}
      />
                    </label>
                    </Grid>
      <Grid xs={12} item>
                      <label className={classes.label} variant="h6">Email
                    <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}  required className={classes.input}  onChange={handleEmailChange} value={email}  type="email"
             />
                    </label>
                    </Grid>
                   
                    <Grid item xs={12}>
                   <label className={classes.label}>Phone Number
                   <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}  required className={classes.input} onChange={handlephonenumber} value={phonenumber}/>
                   </label>
                    </Grid>
                    <Grid item xs={12}>
                    <label className={classes.label}>Password
                    <TextField placeholder="Enter last name"  InputProps={{ disableUnderline: true }}   required className={classes.input} onChange={handlePasswordChange} value={password}/>
                    </label>
                    </Grid>
                  
                     <Grid item xs={12}>
                    <label className={classes.label}>Re-Enter Password
                    <TextField placeholder="Enter last name"  InputProps={{ disableUnderline: true }}   required className={classes.input} onChange={handleresetpsssword} value={resetpassword}/>
    
                   </label>                     </Grid>
    
                    </Grid>
                    <div className={classes.checkboxdiv}>
                 <FormControlLabel
            control={
              <Checkbox
                checked={checkedEmail}
                onChange={handleChangeEmail}
                className={classes.checkbox}
              />
            }
         
          />
           <Typography variant="body2" className={classes.terms}> Aggree With term and conditions</Typography>
    
     
          </div>
                    <div className={classes.socialmedia2}>
      <Button className={classes.register} InputProps={{ disableUnderline: true }} variant="h5"  type="submit"  onClick={registerUser}> Register</Button>
      </div>
      <div className={classes.socialmedia2}>
            
            <Box className={classes.socialmedia}>
            <img src='/authentication/signup3.svg' alt='Login-SignUP' />
            <Typography variant="h5" className={classes.register2}> Register With Google</Typography>
       </Box>
       <Box className={classes.socialmedia}>
            <img src='/authentication/signup4.svg' alt='Login-SignUP'  />
            <Typography variant="h5" className={classes.register2}> Register With Facebook</Typography>
            
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
            <Typography variant="h5">Don't have an account ? <span className={classes.switchaccout}>Login</span></Typography>
        
      </div>
    </form>
    </>
)
}

export default CheckoutActions;
