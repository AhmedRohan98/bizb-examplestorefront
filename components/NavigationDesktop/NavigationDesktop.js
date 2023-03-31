import React, { Component } from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { NavigationItemDesktop } from "components/NavigationDesktop";
import Link from "components/Link/Link";

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
            <Link href="/">
              <span
                className="hoverable"
                style={{
                  marginRight: "40px",
                  cursor: "pointer",
                  padding: "9px 11px",
                  marginLeft: "30px",
                  fontSize: "18px",
                  fontFamily: '"Ostrich Sans Black',
                  fontWeight: 900,
                }}
              >
                Home
              </span>
            </Link>
            <span
              className="hoverable"
              style={{
                marginRight: "40px",
                padding: "9px 11px",
                marginLeft: "30px",
                fontSize: "18px",
                fontFamily: '"Ostrich Sans Black"',
                fontWeight: 900,
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
                fontFamily: '"Ostrich Sans Black"',
                fontWeight: 900,
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
                fontFamily: '"Ostrich Sans Black"',
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
