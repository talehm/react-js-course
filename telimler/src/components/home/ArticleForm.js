import React from 'react'
import {Paper,Typography, Grid, TextField, Button} from '@material-ui/core';
function ArticleForm(props) {
  const [value, setValue] = React.useState({
        title:'',
        body:''

    });
  const handleChange = (key, value) => {

    setValue((prevState) => {
        //prevState.top_level_prop[0].nestedProp4[0].deepNestProp1 = 'XXX';
        return({
          ...prevState,
          [key]:value
        });
  })
}
console.log(value)
    return (
        <div>
            <Paper elevation={3}>
        <Grid container spacing={2} justify="center">
            <Grid item xs={8}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={8}>
                            <TextField
                        id="outlined-name"
                        label="Title"
                        value={value.title}
                        onChange={(event)=>handleChange("title", event.target.value)}
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={8}>

                            <TextField
                            id="outlined-multiline-static"
                            label="Body"
                            multiline
                            value={value.body}
                            rows={4}
                            onChange={(event)=>handleChange("body", event.target.value)}
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={8}>

                            <Button variant="contained" onClick={()=>props.submitForm(value)}>Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>       
        </Paper>
        </div>
    )
}

export default ArticleForm
