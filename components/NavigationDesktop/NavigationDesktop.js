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

    if (navItems && navItems.items) {
      return (
        <>
          <nav>
            <div className={headerType ? classNames(light) : classNames(dark)}>
              <span style={{ marginRight: "40px", marginLeft: "30px" }}>Home</span>
              <span style={{ marginRight: "40px", marginLeft: "30px" }}>Explore</span>
              <span style={{ marginRight: "40px", marginLeft: "30px" }}>Byol</span>
              <span style={{ marginRight: "40px", marginLeft: "30px" }}>Sell</span>
            </div>
          </nav>
        </>
      );
    }

    // If navItems.items aren't available, skip rendering of navigation
    return null;
  }
}

export default withStyles(styles)(inject("navItems")(NavigationDesktop));
