import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as postService from '../../services/postService';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from '../../utils/pathUtils';
import Comments from '../comments/Comments';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PostDetails = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    postService.getOne(postId)
      .then(setPost);
  }, [postId]);


  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete ${post.title}`);

    if (hasConfirmed) {
      await postService.remove(postId);
      navigate('/');
    }
  }

  return (
    <>
      <Card sx={{ maxWidth: 900, margin: 'auto', paddingBottom: '30px' }}>
        {post.imageUrl ? (
          <CardMedia
            sx={{ height: 320 }}
            image={post.imageUrl}
          />
        ) : (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
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
            <Link to={pathToUrl('/posts/:postId/edit', { postId })}>
              <Button size="small">Edit</Button>
            </Link>
            <Button onClick={deleteButtonClickHandler} size="small">Delete</Button>
          </CardActions>
        )}
        <Comments />
      </Card>
    </>


  );
};

export default PostDetails;