import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './Post.module.css';
import { Link } from 'react-router-dom';

export default function Post({
  _id,
  title,
  imageUrl,
  description
}) {
  const descriptionClass = imageUrl ? styles.shortDescription : styles.longDescription;

  return (
    <Link to={`/posts/${_id}`} className={styles['custom-link']} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 350, minWidth: 350, margin: 1, display: 'inline-block' }}>
        <CardActionArea sx={{ width: '100%' }}>
          {imageUrl && (
            <CardMedia
              component="img"
              height="185"
              image={imageUrl}
              alt={title}
            />
          )}
          <CardContent sx={{ minHeight: imageUrl ? 'auto' : '330px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className={descriptionClass}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
