import React, { useState, Fragment, useEffect } from "react";
import inject from "hocs/inject";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
// import AccountIcon from "mdi-material-ui/Account";
import Popover from "@material-ui/core/Popover";
import useViewer from "hooks/viewer/useViewer";
import ViewerInfo from "../../reaction-plugins/reaction-component-library/package/src/components/ViewerInfo/v1";
import Link from "components/Link";
import useStores from "hooks/useStores";
import EntryModal from "../Entry/EntryModal";
import getAccountsHandler from "../../lib/accountsServer.js";

const useStyles = makeStyles((theme) => ({
  accountDropdown: {
    boxShadow: " 0 3px 5px 0 #000",
    // zIndex: "99999999",
    width: "150px",
    background: "#fff",
    padding: theme.spacing(2),
    "& .MuiPopover-paper": {
      display: "none",
    },
    "& .MuiPaper-root": {
      display: "none",
    },
  },
  "& .MuiPaper-elevation0": { background: "black" },
  "& .MuiPopover-paper": {
    background: "none",
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  authbutton: {
    background: theme.palette.secondary.selected,
    margin: "5px",
    color: "#ffffff",
    borderRadius: "40px",
    "&:hover": { background: theme.palette.secondary.selected },
  },
  popover: {
    marginTop: "70px",
    "& .MuiPopover-paper": {
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
    },
  },
  profile: {
    color: "#333333",
    cursor: "pointer",
    "&:hover": {
      color: "#fdc114",
    },
  },
}));

const AccountDropdown = ({ headerType }) => {
  const router = useRouter();
  const { uiStore } = useStores();
  const { setEntryModal } = uiStore;
  const resetToken = router?.query?.resetToken;
  const classes = useStyles();
  const [anchorElement, setAnchorElement] = useState(null);
  const [viewer, , refetch] = useViewer();
  const { accountsClient } = getAccountsHandler();
  const isAuthenticated = viewer && viewer._id;

  useEffect(() => {
    // Open the modal in case of reset-password link
    if (!resetToken) {
      return;
    }
    setEntryModal("reset-password");
  }, [resetToken]);

  const onClose = () => {
    setAnchorElement(null);
  };

  const handleSignOut = async () => {
    await accountsClient.logout();
    await refetch();
    onClose();
  };

  const toggleOpen = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleProfile=()=>{
    window.location.href = "https://bizb.store/dashboard/myprofile";
  }
  return (
    <Fragment headerType>
      <EntryModal onClose={onClose} resetToken={resetToken} />
      {isAuthenticated ? (
        <ButtonBase onClick={toggleOpen}>
          <ViewerInfo viewer={viewer} headerType={headerType} />
        </ButtonBase>
      ) : (
        <IconButton
          color="inherit"
          onClick={() => setEntryModal("login")}
          style={{
            background: anchorElement ? "#fdc114" : "",
          }}
        >
          <span>
            {headerType ? (
              <img src="/icons/user.webp" className="headerlogo" />
            ) : (
              <img src="/icons/user.webp" className="headerlogo" />
            )}
          </span>
        </IconButton>
      )}

      <Popover
        className={classes.popover}
        anchorEl={anchorElement}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
          marginTop: "100px",
        }}
        // elevation={0}
        open={Boolean(anchorElement)}
        onClose={onClose}
      >
        <div className={classes.accountDropdown}>
          {isAuthenticated ? (
            <Fragment>
              <div style={{ marginBottom: "20px" }}>
                <div  onClick={handleProfile}>
                  <span className={classes.profile}>Profile</span>
                </div>
              </div>
              <div style={{ cursor: "pointer", marginBottom: "24px" }} onClick={handleSignOut}>
                <span className={classes.profile} style={{ cursor: "pointer" }}>
                  Log out
                </span>
              </div>{" "}
            </Fragment>
          ) : (
            <></>
          )}
        </div>
      </Popover>
    </Fragment>
  );
};

export default inject("authStore")(AccountDropdown);
