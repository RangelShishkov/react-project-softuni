import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, CssBaseline, Grid } from '@mui/material';
import * as postService from '../../services/postService';
import { useEffect, useState } from 'react';

export default function PostEdit() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({
        title: '',
        description: '',
        imageUrl: '',
    });

    useEffect(() => {

        postService.getOne(postId)
            .then(result => {
                setPost(result);
            });


    }, [postId]);

    const editPostSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await postService.edit(postId, values);
           
            navigate('/');
        } catch (err) {
            console.log(err);
            //error noti
        }
    }

    const onChange = (e) => {
        setPost(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Container >
            <CssBaseline />
            <Grid container justifyContent="center" alignItems="center" >
                <Grid item xs={12} sm={8} md={6}>
                    <Typography variant="h5">Create Post</Typography>
                    <form onSubmit={editPostSubmitHandler}>
                        <TextField
                            id="title"
                            name="title"
                            label="Post"
                            variant="outlined"
                            placeholder="Enter post title..."
                            fullWidth
                            margin="normal"
                            value={post.title}
                            onChange={onChange}
                        />
                        <TextField
                            id="description"
                            name="description"
                            label="description"
                            variant="outlined"
                            placeholder="Add description"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            value={post.description}
                            onChange={onChange}

                        />
                        <TextField
                            id="imageUrl"
                            name="imageUrl"
                            label="Image"
                            variant="outlined"
                            placeholder="Upload a photo URL..."
                            fullWidth
                            margin="normal"
                            value={post.imageUrl}
                            onChange={onChange}
                        />
                        <Button variant="contained" color="primary" type="submit" >
                            Edit Post
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}