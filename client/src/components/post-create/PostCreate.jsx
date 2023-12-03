import { Container, Typography, TextField, Button, CssBaseline, Grid } from '@mui/material';
import styles from './PostCreate.module.css';
import { useNavigate } from 'react-router-dom';
import * as postService from '../../services/postService';

function PostCreate() {
  const navigate = useNavigate();
  const createPostSubmitHandler = async(e) => {

    e.preventDefault();
  const postData = Object.fromEntries(new FormData(e.currentTarget));

  try{
    await postService.create(postData);
    navigate('/')
  }catch (err) {
    console.log(err)
  }

  }
  
    return (
        <Container className={styles.container}>
          <CssBaseline />
          <Grid container justifyContent="center" alignItems="center" className={styles.grid}>
            <Grid item xs={12} sm={8} md={6}>
              <Typography variant="h5">Create Post</Typography>
              <form className={styles.form} onSubmit={createPostSubmitHandler}>
              <TextField
          id="title"
          name="title"
          label="Post"
          variant="outlined"
          placeholder="Enter post title..."
          fullWidth
          margin="normal"
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
        />
        <TextField
          id="imageUrl"
          name="imageUrl"
          label="Image"
          variant="outlined"
          placeholder="Upload a photo..."
          fullWidth
          margin="normal"
        />
                <Button variant="contained" color="primary" type="submit" >
                  Create Post
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      );
    }

export default PostCreate;
