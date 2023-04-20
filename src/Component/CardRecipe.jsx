import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CardRecipe from "../Component/CardRecipe"

const CardRecipe = ({ title, description, image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="recipe"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardRecipe;




