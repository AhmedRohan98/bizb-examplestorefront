import React, { useState, useEffect } from "react";
/* @ts-ignore TODO: Refactor link to address type error */
import Grid from "@material-ui/core/Grid";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import { set } from "lodash";

const useStyles = makeStyles((theme) => ({
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
}));
const style = {
  marginTop: "9px",
  backgroundColor: "#edede4",
  color: "#FDC114",
  fontSize: "18px",
  border: "none",
  borderRadius: "100%",
  marginRight: "3px",
};
const style2 = {
  marginTop: "9px",
  backgroundColor: "#fcdd81",
  color: "white",
  fontSize: "18px",
  border: "none",
  borderRadius: "100%",
  marginRight: "3px",
};

const Paginator = ({ totalCount, changePage, currentPage, itemsPerPage, setItemsPerPage }) => {
  //   currentPage = 1
  const [maxPage, setMaxPage] = useState(0);
  const [loading, setloading] = useState(false);
  //   const [page, setPage] = useState(1)
  //   const [itemsPerPage, setItemsPerPage] = useState(8)
  currentPage = Math.floor(currentPage / itemsPerPage) + 1;
  // currentPage = currentPage / maxPage;
  console.log("current page is ", currentPage);
  console.log("max page is ", maxPage);
  /* @ts-ignore TODO: Refactor link to address type error */
  const handlePageClick = (pageNum) => {
    console.log("page num is ", pageNum, currentPage, maxPage);
    /* @ts-ignore TODO: Refactor link to address type error */
    changePage(pageNum - 1 + itemsPerPage);
  };
  useEffect(() => {
    setMaxPage(Math.ceil(totalCount / itemsPerPage));
  }, [totalCount]);

  const classes = useStyles();
  const handleNextClick = () => {
    setloading(true);
    setTimeout(() => {
      if (totalCount > itemsPerPage) {
        handlePageClick(currentPage + 1);
        setloading(false);
      }
    }, 4000);
  };

  return (
    <>
      <Grid className={classes.root} container justify="center">
        <Grid item>
          {loading ? (
            <CircularProgress /> // Show the circular progress bar when loading is true
          ) : (
            totalCount > itemsPerPage && (
              <button className={classes.loadmore} onClick={handleNextClick}>
                Load More
              </button>
            )
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default Paginator;
