import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from './Post.module.css'

export default function Post({
  _id,
  title,
  imageUrl,
  description
}) {

  return (
    <Card sx={{ maxWidth: 350, minWidth: 350, margin: 1, display: 'inline-block'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles['truncatedText']}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Favourite
        </Button>
      </CardActions>
    </Card>
  );
}