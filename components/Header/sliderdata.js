import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    height:"100vh",
    width:"400px",
    position:"absolute",
        top:"0px",
        right:"0px",
  
    
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  cartmodal:{
    display:"flex",
    justifyContent:"space-between",
    flexDirection: "row",

    borderBottom: "1px solid #E5E5E5",
  },
  cartitems:{
height:"60vh",
overflowY:"auto",
 
   
  },
  cartitem:{
    padding: theme.spacing(1),
    display:"flex",
    justifyContent:"space-between",
    alignItems:"flex-start",
 
   
  },
  cartimage:{
    height:"130px",
    width:"120px",

    borderRadius:"10px"
  },
  cartitemtext:{
  display:"flex",
  flexDirection: "column",
  
  },
  cartprice:{
    paddingTop: theme.spacing(1),
    color:theme.palette.secondary.selected,
  },
  cartpric:{
    paddingTop: theme.spacing(1),
  
  },
  total:{
    borderTop: "1px solid #E5E5E5",
    position:"fixed",
    width:"360px",
    padding:theme.spacing(2),
    bottom:"10px"
  },
  total1:{
    display:"flex",
    justifyContent:"space-between",
  },
  cart1:{
    height:"48px",
    width:"140px",
    borderRadius:"40px",
    background:theme.palette.reaction.black,
    display:"flex",
  
    justifyContent:"space-evenly",
    alignItems:"center",
    marginTop:"10px",
    
     },
     cart:{
      height:"48px",
      width:"140px",
      borderRadius:"40px",
      marginTop:"10px",
      background:theme.palette.secondary.selected,
      display:"flex",
      justifyContent:"space-evenly",
      alignItems:"center",
    
      
       },
       carttext:{
        color:theme.palette.primary.contrastText,
       },
       button:{
  marginTop:"100px"
       }

}));
const itemData = [
  {
    image: '/cart/cart1.svg',
 id:1,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt for ",
 size:"large"
  },
  {
    image: '/cart/cart3.svg',
    title:"Bag for sale",
 id:2,
 price:"Rs 1200",
 newprice:"Rs 600",
 size:"large"
  }, 
  {
    image: '/cart/cart2.svg',
    title:"Bag for sale",
 id:2,
 price:"Rs 1200",
 newprice:"Rs 600",
 size:"large"
  }, 
  {
    image: '/cart/cart1.svg',
 id:1,
 price:"Rs 1200",
 newprice:"Rs 600",
 title:"floral shirt ",
 size:"large"
  },
  {
    image: '/cart/cart3.svg',
    title:"Bag ",
 id:2,
 price:"Rs 1200",
 newprice:"Rs 600",
 size:"large"
  }, 
  {
    image: '/cart/cart2.svg',
    title:"Bag ",
 id:2,
 price:"Rs 1200",
 newprice:"Rs 600",
 size:"large"
  },
  

];
function MainSlider() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.button}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
   <div className={classes.cartmodal}> <Typography variant="subtitle1">Cart</Typography>
    <CloseIcon onClick={handleClose} /></div>
    <div className={classes.cartitems}>  
      {itemData.map((item)=>
      <div className={classes.cartitem}>
      <img src={item.image} alt={item.title} className={classes.cartimage}></img>
      <div  className={classes.cartitemtext}>      <Typography variant="h4">{item.title}</Typography>
      <Typography variant="h4" className={classes.cartpric}>Store:mariamz</Typography>      <Typography variant="h4" className={classes.cartprice}>Rs:500</Typography></div>

      <img src="/cart/icon.svg" alt={item.title} />
      </div>
      )}
    </div>
    <div className={classes.total}>
<div className={classes.total1} >
      <Typography variant="h4" >Subtotal</Typography>
    <Typography variant="h4" >Rs 1500</Typography>
</div>
<div className={classes.total1} >
<div className={classes.cart1}>
      
      <Typography gutterBottom variant="h6" component="h2" className={classes.carttext}>
VIEW CART          </Typography>
    </div>  
    <div className={classes.cart}>
      
      <Typography gutterBottom variant="h6" component="h2">
    CHECKOUT        </Typography>
    </div>  
</div>
    </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


export default MainSlider ;

