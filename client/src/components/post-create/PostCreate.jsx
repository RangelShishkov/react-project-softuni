import { Container, Typography, TextField, Button, CssBaseline, Grid } from '@mui/material';
import styles from './PostCreate.module.css';

function PostCreate() {
    return (
        <Container className={styles.container}>
          <CssBaseline />
          <Grid container justifyContent="center" alignItems="center" className={styles.grid}>
            <Grid item xs={12} sm={8} md={6}>
              {/* Adjust xs, sm, md values based on your design requirements */}
              <Typography variant="h5">Create Post</Typography>
              <form className={styles.form}>
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
          id="category"
          name="category"
          label="Category"
          variant="outlined"
          placeholder="Enter post category..."
          fullWidth
          margin="normal"
        />
        <TextField
          id="additional-information"
          name="additional information"
          label="Additional Information"
          variant="outlined"
          placeholder="Add additional information"
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
                <Button variant="contained" color="primary" type="submit">
                  Create Post
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      );
    }

export default PostCreate;
