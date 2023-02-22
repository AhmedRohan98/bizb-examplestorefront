import React from "react";
import { useRouter } from "next/router";
import { fetchAllCategories, fetchTags } from "../../../staticUtils/tags/fetchAllTags";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
mainimage:{
  position:"relative",
  display: 'inline-grid'
},
text:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection: "row",
  position:"absolute",

},
categoriesname:{
  top:"30px",
  left:"30px",
  color:"green",

  fontSize: "48px",
        color:"#ffffff",
        fontFamily:"Ostrich Sans",
          fontWeight: 900,
         
          lineHeight:"58px",
          fontStyle: "normal",
}


}));
function Categories(props) {
  const router = useRouter();
  const classes = useStyles();
  if (router.isFallback) {
    return "loading...";
  }
  const [catalogItems, setCatalogItems] = React.useState(props.category.catalogItems.edges.map((item) => item.node?.product))
console.log(catalogItems)

  return (
    <>
      <Grid container lg={12} sm={12} md={12} align = "center" justify = "center" alignItems = "center">
              <Grid  item  className={classes.grid1} lg={6} xs={6} sm={6} md={6}  >
             <div className={classes.mainimage}>
            
<div className={classes.text}>
           <Typography  variant="h1" className={classes.categoriesname}>
              Western
            </Typography>
            <img src="/categories/categoriestoggle.svg"  className={classes.image}/>
            </div>
            <img src="/categories/mainCategory.svg"  className={classes.image}/>
           </div>
              </Grid>
              <Grid item lg={6} sm={6} md={6} xs={6} className={classes.grid1}>
             
              
              </Grid>
            </Grid>
    </>
  );
}

export async function getStaticPaths() {
  const tags = await fetchTags("cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==");
  let paths = tags.tags.nodes.map((tag) => ({
    params: {
      lang:'en',
      tagId:tag._id
    }
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({params: {lang, tagId}}) {
  const categories=await fetchAllCategories(["cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg=="],[tagId])

  console.log(categories)
  return {
    props: {
      category: categories,
    },
  };
}
export default Categories;
