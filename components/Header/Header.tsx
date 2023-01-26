import React from "react";
import inject from "hocs/inject";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import dynamic from 'next/dynamic'
const DynamicSlider = dynamic(() => import('./sliderdata'))
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
import Ipl from "./sliderdata"
const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      textTransform: "uppercase",
      background: "transparent",
      // background: "linear-gradient(180deg, #000000 34.9%, rgba(0, 0, 0, 0.7) 100%)",
      // opacity: "0.7",
      height: "170px"
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
      // alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "50px"
    },
    dark: {
      color: "#333333"
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

const Header: any = ({ classes, shop, uiStore, headerType }) => {
  
  const handleNavigationToggleClick = () => {
    uiStore.toggleMenuDrawerOpen();
  };
  return (
    <DynamicSlider/ >
  );
};

export default withStyles(styles)(inject("uiStore")(Header));
