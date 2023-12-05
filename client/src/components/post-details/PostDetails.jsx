import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as postService from '../../services/postService';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import AuthContext from "../../contexts/authContext";

const PostDetails = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    postService.getOne(postId)
      .then(setPost);
  }, [postId])

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete ${post.title}`);

    if (hasConfirmed) {
      await postService.remove(postId);
      navigate('/');
    }
  }
  console.log('userId:', userId);
  console.log('post._ownerId:', post._ownerId);
  console.log({post})

  return (
    <Card sx={{ maxWidth: 900, margin: 'auto', paddingBottom: '30px' }}>
      <CardMedia
        sx={{ height: 320 }}
        image={post.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {post.title}
        </Typography>
        <Typography variant="body" color="black">
          {post.description}
        </Typography>
      </CardContent>

      {userId === post._ownerId && (
        <CardActions>
          <Button size="small">Edit</Button>
          <Button onClick={deleteButtonClickHandler} size="small">Delete</Button>
        </CardActions>
      )}
    </Card>
  );
};

export default PostDetails;