import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button,  Typography } from '@material-ui/core';

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
      fontSize: "14px",
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
  width:"230px",
  height:"48px",
  borderRadius:"40px",
  border:"none",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  margin:"10px",
  padding:"3px",
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
 }
}));



export default function Login() {
  const [checkedEmail, setCheckedEmail] = React.useState(true);
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
                <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}  required className={classes.input} />
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
       <Typography variant="h6" className={classes.terms}> Aggree With term and conditions</Typography>
      </div>
     
     
            </form>
            <Button className={classes.register} InputProps={{ disableUnderline: true }} variant="h6"> Register</Button>
            <Box className={classes.socialmedia}>
            <img src='/authentication/signup3.svg' alt='Login-SignUP' />
            <Typography variant="h6"> Register With Google</Typography>
       </Box>
       <Box className={classes.socialmedia}>
            <img src='/authentication/signup4.svg' alt='Login-SignUP'  />
            <Typography variant="h6"> Register With Facebook</Typography>
       </Box>
     
   </>
  );
}


