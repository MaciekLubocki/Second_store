import React from "react";
import './product.scss'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 32,
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


export const Product = ({product: {name, cost, id, desc}}) => {
  const classes = useStyles();
  return (
    
    <>

    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/photos/craft.jpeg" />
          </ButtonBase>
        </Grid>


        <Grid item xs={12}  sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid className="productToLeft" item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID:{id}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {desc}
                </Typography>
              </Grid>
              <Grid item>
                <button className="basket" variant="body2" style={{ cursor: 'pointer' }}>
                  
                  <FontAwesomeIcon
                  icon={faShoppingBag}
                />
                
                </button>
                <button className="details" variant="body2" style={{ cursor: 'pointer' }}>
                  Details
                </button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">${cost}</Typography>
            </Grid>
          </Grid>
    
    
    
    
    
    </Grid>
      </Paper>
    </div>
  





    </>
  );
};

export default Product