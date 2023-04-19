import React, { Component } from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import { NavigationItemDesktop } from "components/NavigationDesktop";
import Link from "components/Link/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
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
  modalitems: {
    display: "flex",
    flexDirection: "row",
  },
  modalitemsimage: {
    display: "flex",
    flexDirection: "column",
  },
  modalitemstitle: {
    display: "flex",
    width: "90%",

    flexDirection: "column",
  },
});

class NavigationDesktop extends Component {
  static propTypes = {
    classes: PropTypes.object,
    navItems: PropTypes.object,
    tags: PropTypes.arrayOf(),
  };

  static defaultProps = {
    classes: {},
    navItems: {},
    headerType: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  // function that updates the anchorEl state
  setAnchorEl = (value) => {
    this.setState({ anchorEl: value });
  };

  handlePopOverClose = () => {
    this.setAnchorEl(null);
  };

  handlePopOverClick = (event) => {
    this.setAnchorEl(event.currentTarget);
  };

  renderNavItem(navItem, index) {
    return <NavigationItemDesktop key={index} navItem={navItem} />;
  }

  render() {
    const {
      classes,
      navItems,
      tags,

      headerType,
    } = this.props;
    console.log(tags, "tags in deskyop");
    const style = {
      position: "fixed",
      borderRadius: "8px",
      marginTop: "12px",
      left: "15%",
      width: 330,
      bgcolor: "#ffffff",
      outline: "none",
      boxShadow: 24,
      p: 2,
      minHeight: "0",
    };
    const { anchorEl } = this.state;

    return (
      <>
        <nav>
          <div className={headerType ? classNames(classes.light) : classNames(classes.dark)}>
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
              onClick={this.handlePopOverClick}
            >
              Explore
            </span>
            <Popover
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={this.handlePopOverClose}
            >
              <Box sx={style}>
                <div className={classes.modalitems}>
                  <div className={classes.modalitemsimage}></div>

                  <div className={classes.modalitemstitle}>
                    {tags?.nodes?.slice(0, 6)?.map((itemtitle) => (
                      <a href={`/en/categories/${itemtitle._id}`}>
                        <Typography variant="h4" className={classes.catgorytitle}>
                          {itemtitle.displayTitle}
                        </Typography>
                      </a>
                    ))}
                  </div>
                </div>
              </Box>
            </Popover>
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
