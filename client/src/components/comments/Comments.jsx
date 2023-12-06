import React from "react";
import { Grid, Paper, Button, TextField } from "@mui/material";

export default function Comments() {
  return (
    <div style={{ padding: 14 }} >
 <div style={{ marginBottom: '10px' }}>
        <h3>Comments</h3>
      </div>
      <form style={{ marginBottom: '10px' }}>
        <TextField
          style={{ width: '100%' }}
          label="Type your comment"
          variant="outlined"
          multiline 
          rowsMax={8}
          autoComplete="off" // Disable browser autocomplete
          autoFocus // Automatically focus on the input
          // value={newComment}
          
        />
      </form>
      <div style={{ marginBottom: '10px' }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          // onClick={handleAddComment}
        >
          Add Comment
        </Button>
      </div>
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
