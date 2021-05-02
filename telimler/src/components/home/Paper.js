import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
}));

export default function SimplePaper(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    { props.data.map((item, i)=> <Paper key={i} elevation={3}  style={{float:"left"}} > <h3>{item.text}</h3> </Paper>)}

    </div>
  );
}
