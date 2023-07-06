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
import { Query } from "@apollo/react-components";
import categoryTags from "../../hooks/categoryTags/getTags.gql";
import { sendGraphQLQuery } from "./graphqlUtils";
import Router from 'next/router';

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
  categoryavatar: {

    height: "25px",
    width: "25px",
    marginBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
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

    flexDirection: "column",
  },
  categoryTagsLink: {
    borderBottom: "1px solid #59595940"
  },
  catgorytitle: {
    letterSpacing: "0.85px",
    fontFamily: "Ostrich Sans Black",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: "0px 15px",
    boxShadow: " inset 0 0 0 0 #FDC114",
    color: "black",
    // margin: "0 -.25rem",
    // padding: "0 .25rem",
    transition: "color .3s ease-in-out, box-shadow .3s ease-in-out",

    "&:hover": {
      color: "white",
      boxShadow: "inset 150px 0 0 0 #FDC114"
    },
    // "&:active": {
    //   textDecorationColor: "#FDC114",
    //   textDecorationThickness: "3px", // Adjust the underline thickness
    //   textDecorationLine: "underline", // Add an underline style for compatibility
    // },
  },
  currentCategory: {
    textDecorationColor: "#FDC114",
    textDecorationThickness: "3px", // Adjust the underline thickness
    textDecorationLine: "underline",

  },
  popover: {
    // pointerEvents: "none",
    top: "0"
  },
  paper: {
    padding: theme.spacing(0),
  },
});

const tagsCategory = () => (
  <Query errorPolicy="all" query={categoryTags}
    variables={{
      shopId: process.env.SHOP_ID,
      filter: "category-"
    }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;
      const { viewer } = data;
      return <NavigationDesktop data={data} />;
    }}
  </Query>
);


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
      categoryTagsInfo: null,
      selectedPage: null,
      currentLink: null

    };

    // Bind the class methods in the constructor
    this.handlePopOverOpen = this.handlePopOverOpen.bind(this);
    this.handlePopOverClose = this.handlePopOverClose.bind(this);
  }

  componentDidMount() {
    const currentLink = Router.pathname;


    this.fetchData();
    console.log("withRouter", this.state.selectedPage, "jkj", Router.pathname);



  }



  // function that updates the anchorEl state
  setAnchorEl = (value) => {
    this.setState({ anchorEl: value });
  };

  handlePopOverClose = () => {
    // console.log("hover");
    this.setState({
      anchorEl: null,
    });
    console.log("after hover");
  };

  handlePopOverOpen = (event) => {
    console.log("hover open");
    this.setState({
      anchorEl: event.currentTarget,
    });
    // console.log("after hover open");
  };

  renderNavItem(navItem, index) {
    return <NavigationItemDesktop key={index} navItem={navItem} />;
  }

  fetchData = async () => {
    // console.log("NavigationDesktop222", this.props.data)

    console.log("user")
    try {
      console.log("user try")
      const response = await sendGraphQLQuery();

      // Handle the response data
      console.log("user 1")

      console.log("NavigationDesktop222", response);
      this.setState({
        categoryTagsInfo: response.data.tags.nodes
      })

      // this.state.categoryTagsInfo(response.data.tags.nodes)
      console.log("NavigationDesktop222", this.state.categoryTagsInfo);

    } catch (error) {
      console.log("called catch")
      // Handle any errors
      console.error("user", error);
    }
  };

  render() {
    const {
      classes,
      navItems,
      tags,

      headerType,
    } = this.props;

    const style = {
      borderRadius: "8px",
      "&::before": {
        backgroundColor: "#fdc114",
        content: '""',
        display: "block",
        position: "absolute",
        width: 12,
        height: 12,
        top: -6,
        transform: "rotate(45deg)",
        left: "calc(50% - 6px)"
      },
      left: "15%",
      bgcolor: "#ffffff",
      outline: "none",
      padding: "10px 0px",
      boxShadow: 24,
    };
    const { anchorEl } = this.state;
    console.log(tags?.nodes)
    console.log(this.state.categoryTagsInfo)
    const tagsData = tags?.nodes ? tags?.nodes : this.state.categoryTagsInfo;

    const ITEMScategory = [
      {
        image: "/categoriestypes/junior.svg",
        id: 1,
        title: "Casual",
      },
      {
        image: "/categoriestypes/causal.svg",
        id: 2,
        title: "Western",
      },
      {
        image: "/categoriestypes/party.svg",
        id: 3,
        title: "Shoes",
      },
      {
        image: "/categoriestypes/shoes.svg",
        id: 4,
        title: "Bridal",
      },
      {
        image: "/categoriestypes/asseso.svg",
        id: 5,
        title: "Party Wear",
      },
      {
        image: "/categoriestypes/westrn.svg",
        id: 6,
        title: "Accessories",
      },
      {
        image: "/categoriestypes/seller.png",
        id: 7,
        title: "Accessories",
      },
    ];
    return (
      <>

        <nav>
          <div className={headerType ? classNames(classes.light) : classNames(classes.dark)}>
            <Link href="/" onClick={() => this.setState({
              selectedPage: '/[lang]'
            })}>
              <span
                className="hoverable"
                style={{
                  marginRight: "40px",
                  cursor: "pointer",
                  padding: "9px 11px",
                  marginLeft: "30px",
                  fontSize: "18px",
                  letterSpacing: "4%",
                  fontFamily: '"Ostrich Sans Black',
                  fontWeight: 900,
                  // textDecoration: "underline",

                  marginBottom: "-4px",

                  textDecorationColor: Router.pathname === '/[lang]' ? "#FDC114" : null,
                  textDecorationThickness: Router.pathname === '/[lang]' ? "3px" : null, // Adjust the underline thickness
                  textDecorationLine: Router.pathname === '/[lang]' ? "underline" : null, // Add an underline style for compatibility

                }}
              >
                Home
              </span>
            </Link>
            <a href="/en/explore">
              <span
                onMouseEnter={this.handlePopOverOpen}
                onClick={() => this.setState({
                  selectedPage: '/[lang]/categories/[tagId]'
                })}
                // onMouseLeave={this.handlePopOverClose}
                className="hoverable"
                style={{
                  marginRight: "40px",
                  padding: "9px 11px",
                  marginLeft: "30px",
                  fontSize: "18px",
                  fontFamily: '"Ostrich Sans Black"',
                  fontWeight: 900,
                  // color: this.state.anchorEl ? "#fdc114" : "",

                  textDecorationColor: Router.pathname === '/[lang]/categories/[tagId]' || Router.pathname === '/[lang]/explore' ? "#FDC114" : null,
                  textDecorationThickness: Router.pathname === '/[lang]/categories/[tagId]' || Router.pathname === '/[lang]/explore' ? "3px" : null, // Adjust the underline thickness
                  textDecorationLine: Router.pathname === '/[lang]/categories/[tagId]' || Router.pathname === '/[lang]/explore' ? "underline" : null, // Add an underline style for compatibility

                }}
              >
                Explore
              </span>
              <Popover
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                anchorEl={anchorEl}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                  marginTop: "100px",
                }}
                open={Boolean(anchorEl)}
                onClose={this.handlePopOverClose}
                style={{ marginTop: "75px" }}
                // onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box sx={style} >
                  <div className={classes.modalitems}>


                    <div className={classes.modalitemstitle}>
                      {console.log("tags", tagsData)}
                      {tagsData?.map((itemtitle, i) => (
                        <a href={`/en/categories/${itemtitle._id}`} className={tagsData.length !== i + 1 ? classes.categoryTagsLink : ""}>
                          <Typography variant="h6" className={classes.catgorytitle}>
                            {itemtitle.displayTitle}
                          </Typography>
                        </a>
                      ))
                      }
                    </div>
                  </div>
                </Box>
              </Popover>
            </a>
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
            <a
              style={{
                color: "inherit",
              }}
              target="_blank"
              href="/en/SellerRegistrationPage"
            >
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
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default withStyles(styles)(inject("navItems", "uiStore")(NavigationDesktop));
