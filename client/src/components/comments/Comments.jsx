import React from "react";
import { Grid, Paper, Button } from "@mui/material";

export default function Comments() {
  return (
    <div style={{ padding: 14 }} >
      <h3 style={{display: 'inline-block'}}>Comments</h3>
      <Button style={{ marginLeft: '10px' }} variant="contained" color="primary" size="small">
        Add Comment
      </Button>
      <Paper style={{ padding: "10px 15px", margin: 5 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.
            </p>
          </Grid>
        </Grid>    
      </Paper> 
    </div>
  );
}
