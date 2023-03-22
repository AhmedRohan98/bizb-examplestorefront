
import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useViewer from "hooks/viewer/useViewer";
import { Grid, TextField, Button,  Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import getAccountsHandler from "../../lib/accountsServer.js";
import hashPassword from "../../lib/utils/hashPassword";




const useStyles = makeStyles((theme) => ({
 
 
  label:{
    display: 'flex',
    marginTop:theme.spacing(1),
    color:"#333333",
    flexDirection: "column",
 
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
  marginTop:theme.spacing(4),
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
 switchEntryMode: {
  textAlign: "center",
fontSize:"16px",
  cursor: "pointer",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
},
switchaccout:{
  color:"#FDC114"
 }
}));
export default function Login(props) {
  const { closeModal, openModal } = props;
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, , refetch] = useViewer();
  const { passwordClient } = getAccountsHandler();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOpenSignUp = () => {
        openModal("signup");
      };

      const registerUser = async () => {
        try {
          await passwordClient.login({
            user: {
              email
            },
            password: hashPassword(password),
          
          },
       
       
          );
           
          closeModal();
          await refetch();
        } catch (err) {
          setError(err.message);
        }
      };
    
 
  const handleForgotPasswordClick = () => {
    openModal("forgot-password");
  };


  return (
    <>
      <>

<Typography variant="body1">WELCOME BACK ! </Typography>
        <form >
              <Grid container >
              
                <Grid xs={12} item>
                  <label className={classes.label} variant="h6">Email
                <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}  required className={classes.input}   onChange={handleEmailChange} value={email}  type="email"
         />
                </label>
                </Grid>
         
                <Grid item xs={12}>
                <label className={classes.label}>Password
                <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}  required className={classes.input}   onChange={handlePasswordChange}
          value={password}
          type="password"/>
                </label>
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

      <div className={classes.socialmedia2}>
  <Button className={classes.register} InputProps={{ disableUnderline: true }} variant="h5"    role="button"
        type="submit"
        onClick={registerUser}>Login</Button>
  </div>
            </form>
            <div className={classes.socialmedia2}>
            
            <Box className={classes.socialmedia}>
            <img src='/authentication/signup3.svg' alt='Login-SignUP' />
            <Typography variant="h5" className={classes.register2}> Login With Google</Typography>
       </Box>
       <Box className={classes.socialmedia}>
            <img src='/authentication/signup4.svg' alt='Login-SignUP'  />
            <Typography variant="h5" className={classes.register2}> Login With Facebook</Typography>
            
       </Box>
       {!!error && <div className={classes.error}>{error}</div>}
       <div
        className={classes.switchEntryMode}
        onClick={handleOpenSignUp}
        onKeyDown={handleOpenSignUp}
        role="button"
        tabIndex={0}
      >
                <Typography variant="h5">    Don't have an account? <span className={classes.switchaccout}> Sign Up</span></Typography>
      </div>
       </div>
   </>
   
    </>
  );
}

Login.propTypes = {
  closeModal: PropTypes.func,
  openModal: PropTypes.func
};
