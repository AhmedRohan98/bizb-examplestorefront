import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Checkbox from '@material-ui/core/Checkbox';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { Grid, TextField, Button,  Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',

    flexDirection: "row",
 
  },
  paper: {

   height:"931px",
   width:"1074"
  

  },
  label:{
    display: 'flex',
   
    flexDirection: "column",
 
  },
  image:{
    height:"530px"
  },
  image2:{
    height:"50px",
    display:"flex",
    marginTop:theme.spacing(3),
    
    justifyContent:"center",
    alignItems:"center"
  
  },
  grid1:{

    display:"flex",
    flexDirection: "column",
    
  },
  ".MuiInputBase-root":{
    color:"green",
  },

  input:{
    width:"347px",
    height:"48px",
    borderRadius:"6px",
    background:"#F7F7F9",
    borderBottomColor:"none",
    color:"green",
   
  },
 
"  && .MuiInput-root:hover::before" :{
    borderColor: "green"
  }

,
register:{
  width:"214px",
  height:"48px",
  borderRadius:"40px",
  border:"none",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  background:theme.palette.secondary.selected,
  "&.MuiButton-root:hover" :{
    background:theme.palette.secondary.selected,
}
}
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [checkedEmail, setCheckedEmail] = React.useState(true);
 
  const handleChangeEmail = (event) => {
    setCheckedEmail(event.target.checked);
  };
  return (
    <div>
          

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
        
        <Grid container  xs={12}>
        <Grid item xs={6} className={classes.grid1}>
        <img src='/authentication/signup2.svg' alt='Login-SignUP' className={classes.image2} />
        <img src='/authentication/login-siginup.svg' alt='Login-SignUP' className={classes.image} />
        </Grid>
        <Grid item xs={6}>
        <img src='/images/logoDark.svg' alt='Login-SignUP' className={classes.image2} />
        <Typography variant="body1">REGISTRATION </Typography>
        <form>
              <Grid container spacing={0.2}>
                <Grid xs={12}  item>
                <label className={classes.label}>FullName
                <TextField placeholder="Enter last name"   InputProps={{ disableUnderline: true }}   className={classes.input} />
                </label>
                </Grid>
                <Grid xs={12} item>
                  <label className={classes.label}>Email
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
              <FormControlLabel
        control={
          <Checkbox
            checked={checkedEmail}
            onChange={handleChangeEmail}
            color="primary"
          />
        }
        label="Aggree Terms & conditions"
      />
     
            </form>
            <Button className={classes.register} InputProps={{ disableUnderline: true }} variant="h6"> Register</Button>
        </Grid>
       
        
       
      </Grid>

          </div>
        </Fade>
     
      </Modal>
    </div>
  );
}