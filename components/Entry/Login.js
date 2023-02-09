
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button,  Typography } from '@material-ui/core';
import React, { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
 }
}));



export default function Login() {
  const [checkedEmail, setCheckedEmail] = React.useState(true);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
console.log(email)
  const classes = useStyles();
  const handleChangeEmail = (event) => {
    setCheckedEmail(event.target.checked);
  };
  return (
   <>

<Typography variant="body1">REGISTRATION </Typography>
        <form>
              <Grid container >
                <Grid xs={12}  item>
                {/* <span>*</span> */}
                <label className={classes.label}  required >FullName 
                <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}   className={classes.input}   
  />
                </label>
                </Grid>
                <Grid xs={12} item>
                  <label className={classes.label} variant="h6">Email
                <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}  required className={classes.input}  onChange={handleEmailChange} value={email}
          type="email"/>
                </label>
                </Grid>
         
                <Grid item xs={12}>
                <label className={classes.label}>Phone Number
                <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}  required className={classes.input} />
                </label>
                </Grid>
                <Grid item xs={12}>
                <label className={classes.label}>Password
                <TextField placeholder="Enter last name"  InputProps={{ disableUnderline: true }}   required className={classes.input} />
                </label>
                </Grid>
              
                <Grid item xs={12}>
                <label className={classes.label}>Re-Enter Password
                <TextField placeholder="Enter last name"  InputProps={{ disableUnderline: true }}   required className={classes.input} />
                </label>
                </Grid>

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
  <Button className={classes.register} InputProps={{ disableUnderline: true }} variant="h5"> Register</Button>
  </div>
            </form>
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
   </>
  );
}


