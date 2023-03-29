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
    width: "189px",
    height: "135px",
    background: theme.palette.reaction.black80,
    padding: theme.spacing(2),
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
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
    "& .MuiPopover-paper": {
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
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

  return (
    <Fragment headerType>
      <EntryModal onClose={onClose} resetToken={resetToken} />
      {isAuthenticated ? (
        <ButtonBase onClick={toggleOpen}>
          <ViewerInfo viewer={viewer} headerType={headerType} />
        </ButtonBase>
      ) : (
        <IconButton color="inherit" onClick={toggleOpen}>
          <span>
            {headerType ? (
              <img src="/images/accountIconLight.svg" className="headerlogo" />
            ) : (
              <img src="/images/accountIconDark.svg" className="headerlogo" />
            )}
          </span>
        </IconButton>
      )}

      <Popover
        className={classes.popover}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        elevation={0}
        open={Boolean(anchorElement)}
        onClose={onClose}
      >
        <div className={classes.accountDropdown}>
          {isAuthenticated ? (
            <Fragment>
              <div className={classes.authContent}>
                <div className={classes.marginBottom}>
                  <Link href="/profile/address">
                    <Button className={classes.authbutton} fullWidth>
                      Profile
                    </Button>
                  </Link>
                </div>
                <Button color="primary" className={classes.authbutton} fullWidth onClick={handleSignOut}>
                  Sign Out
                </Button>
                {/* <div className={classes.marginBottom}>
                <Button className={classes.authbutton} fullWidth onClick={() => setEntryModal("change-password")}>
                  Change Password
                </Button>
              </div> */}
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className={classes.authContent}>
                <Button
                  className={classes.authbutton}
                  fullWidth
                  variant="contained"
                  onClick={() => setEntryModal("signup")}
                >
                  Register
                </Button>
              </div>
              <Button className={classes.authbutton} fullWidth onClick={() => setEntryModal("login")}>
                Login
              </Button>
            </Fragment>
          )}
        </div>
      </Popover>
    </Fragment>
  );
};

export default inject("authStore")(AccountDropdown);
