import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Modal from "@material-ui/core/Modal";
import useStores from "hooks/useStores";
import Login from "../Entry/Login";
import SignUp from "../Entry/SignUp";
import ChangePassword from "../Entry/ChangePassword";
import ForgotPassword from "../Entry/ForgotPassword";
import ResetPassword from "../Entry/ResetPassword";

import CloseIcon from "@material-ui/icons/Close";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",

    flexDirection: "row",
    justifyContent: "center",
    background: "green",
  },
  paper: {
    height: "80vh",
    width: "847px",
    borderRadius: "4px",
    padding: theme.spacing(2, 2, 3),
    boxSizing: "initial",
    position: "absolute",
    zIndex: 7,
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  image: {
    height: "60vh",
  },
  image2: {
    height: "96px",
    display: "flex",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center",
  },
  image3: {
    height: "105",
    width: "304px",

    marginTop: theme.spacing(2),
  },
  grid1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    background: theme.palette.secondary.selected,
  },
  grid2: {
    display: "flex",
    flexDirection: "column",
    background: theme.palette.background.default,

    paddingLeft: theme.spacing(3),
  },
  icon: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  topheader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  papers: {
    width: 343,

    backgroundColor: theme.palette.background.paper,
    border: "0px",

    boxShadow: "none",
    padding: theme.spacing(2, 3, 3),
    top: "100px",

    display: "flex",
    display: "none",

    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 2, 3),
      boxSizing: "initial",

      display: "block",
      width: "100%",
      top: "-100px",
      height: "100%",
      overflow: "scroll",
    },
  },
}));

const EntryModal = ({ onClose, resetToken }) => {
  const classes = useStyles();
  const { uiStore } = useStores();

  const matches = useMediaQuery("(min-width:600px)");

  const { entryModal, setEntryModal } = uiStore;

  const openModal = (value) => {
    setEntryModal(value);
  };

  const closeModal = () => {
    setEntryModal(null);
    onClose();
  };

  const modalStyles = {
    top: "50px"
  }

  // eslint-disable-next-line react/no-multi-comp
  const getModalComponent = () => {
    let comp = Login;
    if (entryModal === "signup") {
      comp = SignUp;
    } else if (entryModal === "change-password") {
      comp = ChangePassword;
    } else if (entryModal === "forgot-password") {
      comp = ForgotPassword;
    } else if (entryModal === "reset-password") {
      comp = ResetPassword;
    }
    return React.createElement(comp, { closeModal, openModal, resetToken });
  };

  return (
    <>
      <Modal  open={Boolean(entryModal)}  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
        {matches ? (
          <div className={classes.paper}>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.grid1}>
                <img src="/authentication/signup2.svg" alt="Login-SignUP" className={classes.image3} />
                <img src="/authentication/login-siginup.svg" alt="Login-SignUP" className={classes.image} />
              </Grid>
              <Grid item xs={6} className={classes.grid2}>
                <div className={classes.topheader}>
                  <img src="/images/logoDark.svg" alt="Login-SignUP" className={classes.image2} />
                  <CloseIcon onClick={closeModal} className={classes.icon} />
                </div>
                {getModalComponent()}
              </Grid>
            </Grid>
          </div>
        ) : (
          <div className={classes.papers}>{getModalComponent()}</div>
        )}
      </Modal>
      {/* <Modal open={Boolean(entryModal)}  aria-labelledby="entry-modal" aria-describedby="entry-modal">
    <div className={classes.papers}>
          

         
   
          {getModalComponent()}
        
  
        
       
        
      </div>
    </Modal>
    */}
    </>
  );
};

EntryModal.propTypes = {
  onClose: PropTypes.func,
  resetToken: PropTypes.string,
};

EntryModal.defaultProps = {
  onClose: () => null,
};

export default EntryModal;
