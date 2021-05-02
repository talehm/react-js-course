import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function OutlinedChips(props) {
  const classes = useStyles();

 
const handleClick=(text)=>{
    console.log(text);
}
  return (
    <div className={classes.root}>
        {props.data.map((item, i)=> <Chip key={i} label={item.text} variant="outlined" onClick={item.func} />)}
     

    </div>
  );
}
