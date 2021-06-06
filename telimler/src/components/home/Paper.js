import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography, Grid} from '@material-ui/core';
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper:{
    //height: "100px",
    width:"100%"
  }
}));

export default function SimplePaper(props) {
  const classes = useStyles();
  console.log(props.articles);
  return (
    <div >
      <Typography variant="h2" color="primary">
        Articles
      </Typography>
          <Grid container spacing={2}>

    { props.myarticles.map((article, i)=> 
     <Grid item xs={6}>
    <Paper key={i} elevation={3}   className={classes.paper} style={{float:"left"}} >
      <Typography variant="h6" color="primary">
     <Link to={"/blog/"+article.id}> {article.id}.  {article.title} </Link>
        </Typography>

        {/* <Typography variant="subtitle1" color="secondary">
        {article.body}
        </Typography> */}
    </Paper>
    </Grid>)}
    </Grid>
    </div>
  
  );
}
