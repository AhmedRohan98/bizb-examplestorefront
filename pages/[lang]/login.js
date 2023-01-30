import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',
  },
  paper: {

    border: '2px solid #000',
  

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
        </Grid>
       
        
       
      </Grid>

          </div>
        </Fade>
     
      </Modal>
    </div>
  );
}