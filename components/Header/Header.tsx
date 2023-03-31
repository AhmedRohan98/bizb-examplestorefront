//@ts-ignore
//@ts-nocheck
import React from "react";
import inject from "hocs/inject";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles } from "@material-ui/core/styles";
import { NavigationDesktop } from "components/NavigationDesktop";
import {
  NavigationMobile,
  NavigationToggleMobile,
} from "components/NavigationMobile";
import LocaleDropdown from "components/LocaleDropdown";
import AccountDropdown from "components/AccountDropdown";
import ShopLogo from "@reactioncommerce/components/ShopLogo/v1";
import Link from "components/Link";
import MiniCart from "components/MiniCart";

import type { FC } from "react";
import type { WithStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      textTransform: "uppercase",
      height: "170px",
      width: "100%",
      background: "none",
      display: "flex",
      zIndex: 1200,
      "& .MuiAppBar-colorPrimary": {
        backgroud: "green",
        width: "100%",
      },
    },
    controls: {
      alignItems: "inherit",
      display: "inherit",
      flex: 1,
    },
    title: {
      color: theme.palette.reaction.reactionBlue,
      marginRight: theme.spacing(),
      borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "20px",
      height: "170px",
      zIndex: 1200,
    },
    light: {
      color: "#FFFFFF",
      cursor: "pointer",
      zIndex: 1200,
    },
    dark: {
      color: "#333333",
      backgroundImage: "none !important",
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  shop: {
    name: string;
  };
  uiStore: {
    toggleMenuDrawerOpen: Function;
  };
  viewer: any;
}

{
  /* @ts-ignore TODO: Refactor link to address type error */
}
const Header: any = ({ classes, shop, uiStore, headerType }) => {
  const handleNavigationToggleClick = () => {
    uiStore.toggleMenuDrawerOpen();
  };
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* @ts-ignore TODO: Refactor link to address type error */}
        <div className={classes.dark}>
          <Hidden mdUp>
            <NavigationToggleMobile onClick={handleNavigationToggleClick} />
          </Hidden>
        </div>
        {/* <Hidden mdUp>
          <NavigationToggleMobile onClick={handleNavigationToggleClick} />
        </Hidden> */}
        {/* @ts-ignore TODO: Refactor link to address type error */}
        <div className={classes.controls}>
          <Typography className={classes.title} color="inherit" variant="h6">
            {/* @ts-ignore TODO: Refactor link to address type error */}
            {/* <Link route="/">
              {shop ? <ShopLogo shopName={shop.name} /> : "Example Storefront"}
            </Link> */}
          </Typography>
          {/* @ts-ignore TODO: Refactor link to address type error */}
          <Hidden smDown>
            <NavigationDesktop headerType={headerType} />
          </Hidden>
          {/* @ts-ignore TODO: Refactor link to address type error */}
        </div>
        {/* @ts-ignore TODO: Refactor link to address type error */}
        <div
          style={{
            zIndex: -1,
            width: "98%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          {/* @ts-ignore TODO: Refactor link to address type error */}
          {headerType ? (<Link href="/">
            <img
              style={{ zIndex: 0, width: "50px", width: "95px" }}
              src="/images/logoLight.svg"
              className="headerlogo"
            /></Link>
          ) : (<Link href="/">
            <img
              style={{ zIndex: 0, width: "50px", width: "95px" }}
              src="/images/logoDark.svg"
              className="headerlogo"
            /></Link>
          )}
        </div>

        <AccountDropdown
          headerType={headerType}
          style={{ marginRight: "25px", marginLeft: "25px" }}
        />
        {/* @ts-ignore TODO: Refactor link to address type error */}
        <span style={{ marginRight: "25px", marginLeft: "25px" }}>
          {/* @ts-ignore TODO: Refactor link to address type error */}
          {headerType ? (
            <img src="/images/searchIconLight.svg" className="headerlogo" />
          ) : (
            <img src="/images/searchIconDark.svg" className="headerlogo" />
          )}
        </span>
        {/* @ts-ignore TODO: Refactor link to address type error */}
        <MiniCart
          headerType={headerType}
          style={{ marginRight: "25px", marginLeft: "25px" }}
          className="headerlogo"
        />
        {/* @ts-ignore TODO: Refactor link to address type error */}
        {/* <LocaleDropdown /> */}
        {/* @ts-ignore TODO: Refactor link to address type error */}
        {/* <AccountDropdown />
        <span><img src="/images/searchIcon.svg"/></span>
        <MiniCart /> */}
      </Toolbar>
      {/* @ts-ignore TODO: Refactor link to address type error */}
      <NavigationMobile shop={shop} />
    </AppBar>
  );
};

export default withStyles(styles)(inject("uiStore")(Header));
