import React, { Component } from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { NavigationItemDesktop } from "components/NavigationDesktop";

const styles = (theme) => ({
  light: {
    color: "#FFFFFF",
    cursor: "pointer",
    zIndex: 1200,
  },
  dark: {
    color: "#333333",
    cursor: "pointer",
    zIndex: 1200,
  },
});

class NavigationDesktop extends Component {
  static propTypes = {
    classes: PropTypes.object,
    navItems: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
    navItems: {},
    headerType: false,
  };

  renderNavItem(navItem, index) {
    return <NavigationItemDesktop key={index} navItem={navItem} />;
  }

  render() {
    const {
      classes: { primaryNavItem, dark, light },
      navItems,
      headerType,
    } = this.props;

    return (
      <>
        <nav>
          <div className={headerType ? classNames(light) : classNames(dark)}>
            <span
              className="hoverable"
              style={{
                marginRight: "40px",
                padding: "9px 11px",
                marginLeft: "30px",
                fontSize: "18px",
                fontFamily: '"Ostrich Sans Black !important',
              }}
            >
              Home
            </span>
            <span
              className="hoverable"
              style={{
                marginRight: "40px",
                padding: "9px 11px",
                marginLeft: "30px",
                fontSize: "18px",
                fontFamily: '"Ostrich Sans Black !important',
              }}
            >
              Explore
            </span>
            <span
              className="hoverable"
              style={{
                marginRight: "40px",
                padding: "9px 11px",
                marginLeft: "30px",
                fontSize: "18px",
                fontFamily: '"Ostrich Sans Black !important',
              }}
            >
              Byol
            </span>
            <span
              className="hoverable"
              style={{
                marginRight: "40px",
                padding: "9px 11px",
                marginLeft: "30px",
                fontSize: "18px",
                fontFamily: '"Ostrich Sans Black !important',
                fontWeight: 900,
              }}
            >
              Sell
            </span>
          </div>
        </nav>
      </>
    );
  }
}

export default withStyles(styles)(inject("navItems")(NavigationDesktop));
