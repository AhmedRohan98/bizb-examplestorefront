import React, { Component } from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { NavigationItemDesktop } from "components/NavigationDesktop";

const styles = (theme) => ({
  dark: {
    color: "#FFFFFF",
  },
  light: {
    color: "#333333",
  },
  // primaryNavItem: {
  //   textTransform: "uppercase",
  //   background: "linear-gradient(180deg, #000000 34.9%, rgba(0, 0, 0, 0) 100%)",
  //   opacity: "0.7",
  // },
});

class NavigationDesktop extends Component {
  static propTypes = {
    classes: PropTypes.object,
    navItems: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
    navItems: {},
  };

  renderNavItem(navItem, index) {
    return <NavigationItemDesktop key={index} navItem={navItem} />;
  }
  headerParam = () => {
    console.log("reaching funciton");
    console.log(headerPara);
  };
  render() {
    // const { navItems } = this.props;

    const {
      classes: { primaryNavItem, dark, light },
      navItems,
      headerPara,
    } = this.props;
    // navItem,
    // navItem: { navigationItem },
    // console.log(headerPara);
    // if (headerPara) {
    //   console.log(headerPara);
    // }
    function check() {
      console.log("reaching funciton");
      console.log(headerPara);
    }

    if (navItems && navItems.items) {
      return (
        <>
          <nav
          // style={{ height: "170px" }}
          >
            <div className={headerPara ? classNames(dark) : classNames(light)}>
              {headerPara ? this.headerParam() : null}
                <span style={{ marginRight: "40px", marginLeft: "30px" }}>Home</span>
              <span style={{ marginRight: "40px", marginLeft: "30px" }}>Explore</span>
              <span style={{ marginRight: "40px", marginLeft: "30px" }}>Byol</span>
              <span style={{ marginRight: "40px", marginLeft: "30px" }}>Sell</span>
            </div>
          </nav>
          <div>
            <Button style={{ backgroundColor: "red", cursor: "pointer" }} onClick={() => console.log("something")}>
              Check 123
            </Button>
          </div>
        </>
      );
    }

    // If navItems.items aren't available, skip rendering of navigation
    return null;
  }
}

export default withStyles(styles)(inject("navItems")(NavigationDesktop));
