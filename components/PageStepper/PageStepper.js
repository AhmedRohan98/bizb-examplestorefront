import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@reactioncommerce/components/Button/v1";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import { CircularProgress } from "@material-ui/core";
const styles = (theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  loadmore: {
    width: "165px",
    cursor: "pointer",
    height: "50px",
    borderRadius: "40px",
    border: "none",
    display: "flex",
    fontSize: "1.3rem",
    color: "#333333",
    lineHeight: "32px",
    fontFamily: "Ostrich Sans Black",
    fontWeight: 900,
    fontStyle: "normal",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.selected,
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
      background: "#FDC114",
    },
  },
});

class PageStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // Initialize the loading state property to false
    };
  }
  static propTypes = {
    classes: PropTypes.object,
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool,
      hasPreviousPage: PropTypes.bool,
      loadNextPage: PropTypes.func,
      loadPreviousPage: PropTypes.func,
    }).isRequired,
    theme: PropTypes.object,
  };

  handleNextClick = () => {
    this.setState({ loading: true });

    // Simulate an asynchronous loading operation
    setTimeout(() => {
      // Perform the actual loading logic here
      if (pageInfo.hasNextPage === true) {
        // Set the loading state to false when loading is complete
        this.setState({ loading: false });
      }
    }, 4000);
    const { pageInfo } = this.props;
    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      const scrollToPosition = (documentHeight - windowHeight) / 2;

      window.scrollTo({ bottom: scrollToPosition, behavior: "smooth" });
    }

    pageInfo.loadNextPage();
  };

  handlePreviousClick = () => {
    const { pageInfo } = this.props;

    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      const scrollToPosition = (documentHeight - windowHeight) / 2;

      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }

    pageInfo.loadPreviousPage();
  };
  componentDidMount() {
    const { pageInfo } = this.props;

    console.log("newnewnewn", pageInfo);
  }

  render() {
    const { classes, pageInfo } = this.props;
    const { loading } = this.state;
    return (
      <Grid className={classes.root} container justify="center">
        <Grid item>
          {loading ? (
            <CircularProgress /> // Show the circular progress bar when loading is true
          ) : (
            pageInfo.hasNextPage && (
              <button className={classes.loadmore} onClick={this.handleNextClick}>
                Load More
              </button>
            )
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(PageStepper);
