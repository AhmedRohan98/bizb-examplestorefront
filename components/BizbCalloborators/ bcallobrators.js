import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Box  from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
const BizbCalloborators = () => {


  const useStyles = makeStyles((theme) => ({
    
   root:{ background: theme.palette.action.main,
    height:"612px",
    position: "relative",
    width:"100%",
    top:"250px"
    },
    image:{
        position:"absolute",
        top:"-200px"
    },
    img:{
        width :"100%",
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
            },
         
            maingrid:{
              width :"100%",
              display:"flex",
            
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
                  },
                 grid1:{
                    
                      display:"flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                  
                      
                          },
                          title:{
                              width :"624px",
                              fontSize:"70px",
                             
                            color:theme.palette.secondary.contrastText,
                              lineHeight: "96px",
                              font:" Ostrich Sans"
                            },
                            title2:{
                              width :"624px",
                              fontSize:"70px",
                            color:theme.palette.secondary.contrast,
                              lineHeight: "96px",
                              font:" Ostrich Sans"
                            },
                            Box:{
                                display:"flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height:"100%",
                                width:"80%",
                                margin:"130px"
                            },
                                  imae:{
                                    display:"flex",
                                    width :"100%",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                 
}}))
  
  
  const classes = useStyles();
  return (
    <Box display={{ xs: 'none', lg: 'block', xl: 'none' }}>
    <div className={classes.root}>
<Grid container className={classes.maingrid} xs={12} >
              <Grid  item  className={classes.grid1} xs={6}>
             
           
              <img src="/BizbCollaborator/saheefa.svg" className={classes.image}/>
                
              </Grid>
              <Grid  item  className={classes.grid1} xs={6}>
             
           <div className={classes.Box}>
            
           <img src="/BizbCollaborator/sheefa.svg" />
          </div>
               
             </Grid>
            </Grid>

  </div>
  </Box>
  );
};

export default BizbCalloborators;