import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardComponentProps } from 'types/types';

export default function MediaCard({ 
  header, 
  cardName, 
  description, 
  link, 
  ctaText,
  imageSrc
}: CardComponentProps) {
  return (
    <Card sx={{ boxShadow: "9px 9px 2px 2px #28282B" }} className='card-container'>
      {imageSrc ? <CardMedia
        sx={{ height: 140 }}
        image={imageSrc as string}
        title=""
        className='image-container'
      /> : ""}
      <CardContent>
        {header ? <Typography gutterBottom variant="h5" component="div"> {header} </Typography> : ""}
        <Typography gutterBottom variant="h5" component="div" fontFamily={"cursive"} fontWeight={600} className='header'>
          {cardName}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily={"cursive"} className='description'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={link} size="small">{ctaText}</Button>
      </CardActions>
    </Card>
  );
}
