import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef,useCallback ,useState} from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Storyslider from "./storiesslide";
const Story = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const useStyles = makeStyles((theme) => ({
    root:{
      background: theme.palette.reaction.gradient,
      position:"relative",
      margin:"50px",
    
    },
image: {
 height:"100px",
 display:"flex",
 allignItems:"center",
 justifyContent:'center',
 width:"100px",
 borderRadius: "100%",
 '&:hover': {
  height:"120px",
  width:"120px",
}
    },
    controller:{
      display:"flex",
      flexDirection: "row",
      justifyContent: "space-between",
      
     
},
iconforwad:{
position:"absolute",
bottom:"60px",
right:"20px",
background:"#333333",
color: "FDC114",
borderRadius:"4px",

zIndex: 1251
},
iconback:{
  position:"absolute",
  bottom:"60px",
  left:"20px",
  borderRadius:"4px",
color:"FDC114",
background:"#333333",

  zIndex: 1251
  },
  catgorytag:{
    display:"flex",
    flexDirection:"row"
  },
    title: {

      color: theme.palette.reaction.reactionBlue,
      marginRight: theme.spacing(),
      borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`,
    },
    box: {
      display:"flex",
      flexDirection: "column",
      justifyContent:"center",
      allignItems:"center",
        width:"120px",
    
    },
    catagoriesinactive:{
      color:"yellow",
      cursor:"pointer",
    },
    catagoriesactive:{
      color:"green",
      textDecoration: 'line-through',
      WebkitTextDecorationThickness: '4x', /* set thickness to 2 pixels for webkit-based browsers */
      textDecorationThickness: '4px',
      textDecorationColor: '#333333',
      color:"green",
      
    
      '&:hover': {
        textDecorationColor: 'green',
      },
    },
    dark: {
      color: "#333333"
    },
    main:{
      background:"#EAE7FF",
      width:"100%"
    },
    mainheading:{
     paddingTop:"30px",
    paddingLeft:"50px"
    },
    heading:{
     
      display:"flex",
      justifyContent:"center",
      allignItems:"center",
      marginTop:theme.spacing(2)
    },
   
  }))
  const ITEMS = [
    {
      image: '/stories/story.svg',
   id:1,
   title:"Charizma Store",
   Catagory:"Charizma Store",
    },
    {
      image: '/stories/story1.svg',
   id:2,
   title:"Charizma Store",
   Catagory:"Charizma Store",
    },
    {
      image: '/stories/story2.svg',
      id:3,
      title:"Charizma Store",
      Catagory:"Charizma Store",
    },
    {
      image: '/stories/story.svg',
      id:4,
      title:"Charizma store",
      Catagory:"Charizma Store",
    },
    {
      image: '/stories/story.svg',
      id:5,
      title:"Charizma Store",
      Catagory:"Charizma Store",
    },
    {
      image: '/stories/story2.svg',
      id:6,
      title:"Charizma Store",
      Catagory:"Charizma Store",
    },
    {
        image: '/stories/story2.svg',
        id:7,
        title:"Westrn",
        Catagory:"Westrn",
      },
      {
        image: '/stories/story.svg',
        id:8,
        title:"Westrn",
        Catagory:"Westrn",
      },
      {
        image: '/stories/story.svg',
        id:9,
        title:"Charizma Store",
        Catagory:"Westrn",
      },
      {
        image: '/stories/story2.svg',
        id:10,
        title:"Charizma Store",
        Catagory:"Westrn",
      },
  ];
  
  const Catagories = [
    'Westrn',
    'Charizma Store',
    
  ];
  function Filter({ name, onClick, active, }) {
    return (
    
      <Typography onClick={onClick} variant="h4" className={active ? classes.catagoriesactive : classes.catagoriesinactive }>{name}</Typography>
    );
  }
  const [resouce,setResource]=useState('OUR PRODUCTS');
  const [filter, setFilter] = useState(null);
  const filteredItems = !filter ? ITEMS : ITEMS.filter(item =>item.Catagory.includes(filter));
  console.log(filteredItems,"dddddddddddddddddddddd")
  function Item({ item }) {
    const classes = useStyles();
    return (
      <>
            <SwiperSlide>
         
         
        
     
     
<div  className={classes.box}>

<img src={item.image} className={classes.image}/>
<Typography variant="h5" className={classes.heading}> {item.title}</Typography>
</div>

     </SwiperSlide>
     
      </>
    );
  }

  const sliderRef = useRef(null);

 
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
 
  const classes = useStyles();
  return (
    <div className={classes.main}>
       <div className={classes.mainheading}><Typography variant="h3" >
        STORES
      </Typography>
      <div className={classes.catgorytag}>
      {Catagories.map(filterName => (
        
        <Filter name={filterName} onClick={() => setFilter(filterName)+setResource(filterName)} active={filterName===filter}/>
        
        
          
       
         ))}
           </div> 
      </div> 
    <div className={classes.root}>
    
    <Swiper ref={sliderRef}
 breakpoints={{
  1600: {
    width: 1600,
    slidesPerView: 7,
  },
  1200: {
    width: 1200,
    slidesPerView: 6,
  },
  1000: {
    width: 1000,
    slidesPerView: 5,
  },

  800: {
    width: 800,
    slidesPerView: 5,
  },
   600: {
    width: 800,
    slidesPerView: 4,
  },
 400: {
    width: 800,
    slidesPerView: 3,
  },
  

}}
     onRealIndexChange={(element)=>setActiveIndex(element.activeIndex)}
>    <div className={classes.controller}>

{  activeIndex < ITEMS.length-1 ?   <ArrowForwardIos className={classes.iconforwad} style={{fill: "#FDC114"}} onClick={handleNext}/>:""}
{activeIndex-0?<ArrowBackIos className={classes.iconback} style={{fill: "#FDC114"}}  onClick={handlePrev}/>:""}
</div>
 


      {filteredItems.map((item) => (
          <SwiperSlide key={item.id}>
          <Item item={item} />
          </SwiperSlide>
        ))}


    </Swiper>
    <Storyslider item={filteredItems} />
 </div>
 </div>
  );
};

export default Story;