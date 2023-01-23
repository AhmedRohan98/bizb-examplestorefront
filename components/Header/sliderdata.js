import Slider from "react-slick";


import { useRef } from "react";
import { useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Preloved from "../Preloved/prelovedSec"
const Ipl = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  const useStyles = makeStyles((theme) => ({
    
    image: {
 height:"auto",
 width:"100%"
    },
    
    controls: {
      alignItems: "inherit",
      display: "inherit",
      flex: 1,
    },
    title: {
      color: theme.palette.reaction.reactionBlue,
      marginRight: theme.spacing(),
      borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`,
    },
    toolbar: {
      // alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "50px"
    },
    dark: {
      color: "#333333"
    },
  }))
  const ITEMS = [
    {
      image: '/Desktop-images/desktop2.svg',
   id:"1"
    },
    {
      image: '/Desktop-images/desktop2.svg',
   id:"2"
    },
    {
      image: '/Desktop-images/desktop3.svg',
      id:"3"
    },
    {
      image: '/Desktop-images/desktop4.svg',
      id:"4"
    },
    {
      image: '/Desktop-images/desktop5.svg',
      id:"5"
    },
    {
      image: '/Desktop-images/desktop6.svg',
      id:"6"
    },
  ];
  function Item({ item }) {
    const classes = useStyles();
    return (
      <>
        
          <dev>
            <div className="imagf2">
              <img src={item.image} className={classes.image}/>
            </div>
          </dev>
    
     
      </>
    );
  }
  return (
    <div>
     
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
      
        <div style={{ display: "flex" }}>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
           <ArrowBackIos />
          </ButtonBase>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
               <ArrowForwardIos />
          </ButtonBase>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          dots
          dotsClass="slick-dots line-indicator"
          ref={sliderRef}
          slidesToShow={1}
          slidesToScroll={1}
          customPaging={(i) => (
            <div
              style={{
              position:"absolute",
               
                top: "-20px",

                width:"auto",
                left:"20px"
             
              }}
            >
            {`0${i+1}`}
            </div>
          )}
          
        >
          
          {ITEMS.map((item) => (
            <Item item={item} />
          ))}
       
        </Slider>
      </div>
  <Preloved/>
    </div>
  );
};

export default Ipl;