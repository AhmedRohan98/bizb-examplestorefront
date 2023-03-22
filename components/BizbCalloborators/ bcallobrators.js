import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Box  from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
const BizbCalloborators = () => {


  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.action.main,

      position: "relative",
      width: "100%",
    },
    image: {
      width: "100%",
    },
  }));
  
  
  const classes = useStyles();
  return (
    <Box display={{ xs: 'none', lg: 'block', xl: 'none' }}>
    <div className={classes.root}>
<Grid container  xs={12} >
            
             
           
              <img src="/BizbCollaborator/saheefa.jpg" className={classes.image}/>
                
              
             
      
            </Grid>

  </div>
  </Box>
  );
};

export default BizbCalloborators;