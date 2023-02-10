import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel, Pagination } from "swiper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useRef,useCallback ,useState} from "react";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import ProductGrid from "../ProductGrid"
import Justin  from "../Justin/justin"
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  slider: {
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down(700)]: {
      paddingTop: theme.spacing(0),
    },
  
  },
  sliderflex: {
    display: "flex",
    alignItems: "flex-start",
  },

  slidercol: {
    display: "flex",
    flexDirection: "column",
    width: "150px",
  
    display: "block",
    [theme.breakpoints.down(1100)]: {
      display: "none",

      width: "0px",
      height: "0px",
    },
  },
  container1: {
    width: "100%",
    height: "100%",
  },
  container2: {
    width: "500px",
    height: "600px",
  },
  thumb: {
    height: "600px",
    width: "200px",
    "& .swiper-slide": {
      opacity: 0.5,
      "&.swiper-slide-visible": {
        opacity: 0.5,

        "&.swiper-slide-thumb-active": {
          opacity: 1,
        },
      },
  
    },
  },
  controller:{
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
   
},
iconforwad:{
  position:"absolute",
  top:"50%",
  right:"10px",
  background:"#333333",
  color: "FDC114",
  borderRadius:"4px",
  
  zIndex: 1251
  },
  iconback:{
    position:"absolute",
    top:"50%",
    left:"10px",
    borderRadius:"4px",
  color:"FDC114",
  background:"#333333",
  
    zIndex: 1251
    },
  sliderimages: {
    height: "600px",
    width: "100%",
  },
  sliderimage: {
    height: "100%",
    width: "100%",
  },
  sliderimage2: {
    height: "600px",
    width: "507px",
  },
  size: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  size2:{
    display: "flex",
    flexDirection: "row",
  },
  price: {
    marginLeft: theme.spacing(3),
  },
  price2: {
     color:"#333333",
     opacity: 0.5,
  },
  offer: {
    display: "flex",
  marginRight:theme.spacing(10),
    background: "#E16452",
    padding: "4px",
    borderBotom: "1px solid red",
    color: "#ffffff",
  },
  sizeimage: {
    display: "flex",
    marginTop: theme.spacing(3),
    borderBottom: "1px solid #E5E5E5",
    marginBottom: theme.spacing(3),
    justifyContent: "space-evenly",
  },
  tabs: {
    borderBottom: "1px solid #E5E5E5",
  "& .tabs-active":{
    borderBottom: "1px solid #FDC114",
  }
  },
  cart: {
    height: "35px",
    width: "100%",
    borderRadius: "40px",
    background: "#FDC114",
    display: "flex",
    justifyContent: "center",

    marginTop: theme.spacing(3),
    marginBottom:theme.spacing(3)
  },
  carttext:{
    width:"450px"
  }

}));
const slides = [
  {
    image: "/cart/cart1.svg",
    id: 1,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for ",
    size: "large",
  },
  {
    image: "/cart/cart3.svg",
    title: "Bag for sale",
    id: 2,
    price: "Rs 1200",
    newprice: "Rs 600",
    size: "large",
  },
  {
    image: "/justin/justin1.svg",
    id: 1,
    price: "Rs 1200",
    newprice: "Rs 600",
    title: "floral shirt for ",
    size: "large",
  },
];

function MainSlider() {
  const sliderRef = useRef(null);

 
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
 <>
 {/* <Justin   /> */}
 {/* <ProductGrid ></ProductGrid> */}
 </>
    
      
  );
}

export default MainSlider;



