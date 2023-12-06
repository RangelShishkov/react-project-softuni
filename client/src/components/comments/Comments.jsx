import React from "react";
import { Grid, Paper, Button, TextField } from "@mui/material";

import { useContext, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';

export default function Comments() {
  const { email, userId } = useContext(AuthContext);
  const [comments, dispatch] = useReducer(reducer, []);
  const { postId } = useParams();

  useEffect(() => {
    commentService.getAll(postId)
      .then((result) => {
        dispatch({
          type: 'GET_ALL_COMMENTS',
          payload: result,
        });
      });
  }, [postId]);

  const addCommentHandler = async (values) => {
    console.log('Form values:', values);
    const newComment = await commentService.create(
      postId,
      values.comment
    );

    newComment.owner = { email };

    dispatch({
      type: 'ADD_COMMENT',
      payload: newComment
    });
  }

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: '',
  });

  return (
    <div style={{ padding: 14 }}>
      <div style={{ marginBottom: '10px' }}>
        <h3>Comments</h3>
      </div>

      {comments.length === 0 && (
        <p>Be the first to comment</p>
      )}

{userId && (  // Only render this block if a user is logged in
        <form style={{ marginBottom: '10px' }} onSubmit={onSubmit}>
          <TextField
            name="comment"
            style={{ width: '100%' }}
            label="Type your comment"
            variant="outlined"
            multiline
            maxRows={8}
            autoComplete="off"
            autoFocus
            value={values.comment}
            onChange={onChange}
            id="comment"
          />
          <div style={{ marginBottom: '10px' }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
            >
              Add Comment
            </Button>
          </div>
        </form>
      )}


      {comments.map(({ _id, text, owner: { email } }) => (
        <Paper key={_id} style={{ padding: "10px 15px", margin: '5px 0' }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>{email}</h4>
              <p style={{ textAlign: "left" }}>
                {text}
              </p>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
