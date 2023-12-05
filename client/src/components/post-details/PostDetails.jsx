import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as postService from '../../services/postService';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PostDetails = () => {
    const [post,setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        postService.getOne(postId)
            .then(setPost);
    }, [postId])

    return (
        <div>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image={post.imageUrl}
            alt="Post Image"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
};

export default PostDetails;