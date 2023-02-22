import React from "react";
import { useRouter } from "next/router";
import { fetchAllCategories, fetchTags } from "../../../staticUtils/tags/fetchAllTags";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  mainimage: {
    position: "relative",
    display: "inline-grid",
  },
  text: {
    
    position: "absolute",
    top: "30px",
    left: "30px",
  },
  texts: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
   
  },
  categoriesname: {
    fontSize: "48px",
    color: "#ffffff",
    fontFamily: "Ostrich Sans",
    fontWeight: 900,

    lineHeight: "58px",
    fontStyle: "normal",
  },
  image:{
    marginLeft:theme.spacing(4)
  },

}));
function Categories(props) {
  const ITEMS = [
    {
      image: '/categories/categoriestoggle.svg',
   id:1,
   title:"Charsssssssssserizma Store"
    },
    {
      image: '/categories/sub1.svg',
   id:2,
   title:"Charizma Store"
    },
    {
      image: '/categories/sub2.svg',
      id:3,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub3.svg',
      id:4,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub4.svg',
      id:5,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub1.svg',
   id:6,
   title:"Charizma Store"
    },
    {
      image: '/categories/sub2.svg',
      id:7,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub3.svg',
      id:8,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub4.svg',
      id:9,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub5.svg',
      id:10,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub6.svg',
      id:11,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub1.svg',
   id:6,
   title:"Charizma Store"
    },
    {
      image: '/categories/sub2.svg',
      id:7,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub3.svg',
      id:8,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub4.svg',
      id:9,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub5.svg',
      id:10,
      title:"Charizma Store"
    },
    {
      image: '/categories/sub6.svg',
      id:11,
      title:"Charizma Store"
    },
  ];
  
const data=ITEMS.splice(0,5)
const data2=ITEMS.splice(5,ITEMS.length)
var firstarray = data.reduce((acc,item,index) => {
  acc[`names${index}`] = item;
  return acc;
}, {});
console.log(data2 ,"fffffffffffsardarffffffffffffffffffsadrtttt")
  const router = useRouter();
  const classes = useStyles();
  if (router.isFallback) {
    return "loading...";
  }
  const [catalogItems, setCatalogItems] = React.useState(
    props.category.catalogItems.edges.map((item) => item.node?.product),
  );
  console.log(catalogItems);

  return (
    <>
      {typeof window !== "undefined" && (
        <Grid container lg={12} sm={12} md={12} align="center" justify="center" alignItems="center">
          <Grid item className={classes.grid1} lg={6} xs={12} sm={6} md={12}>
            <div className={classes.mainimage}>
              <div className={classes.text}>
              <div className={classes.texts}>
              <Typography variant="h1" className={classes.categoriesname}>
                  Western
                </Typography>
                <img src={firstarray.names0.image}className={classes.categorytoggle} />
              </div>
                <Typography variant="h1" className={classes.categoriesname}>
                  Western
                </Typography>
              </div>
              <img src="/categories/mainCategory.svg" className={classes.image} />
            </div>
          </Grid>
          <Grid item lg={6} sm={6} md={12} xs={12}    container  
  direction="row"
  justifyContent="center"
  alignItems="flex-start">
      <img src={firstarray.names1.image} className={classes.image} />
      <img src={firstarray.names2.image} className={classes.image} />
      <img src={firstarray.names3.image} className={classes.image} />
      <img src={firstarray.names4.image} className={classes.image} />
   
      
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}    container  
  direction="row"
  justifyContent="center"
  alignItems="flex-start">
     { data2.map((item)=>
      <>
   <img src ={item.image} />
      </>
  )
     }
      

          </Grid>
        </Grid>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const tags = await fetchTags("cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==");
  let paths = tags.tags.nodes.map((tag) => ({
    params: {
      lang: "en",
      tagId: tag._id,
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { lang, tagId } }) {
  const categories = await fetchAllCategories(["cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg=="], [tagId]);

  console.log(categories);
  return {
    props: {
      category: categories,
    },
  };
}
export default Categories;
