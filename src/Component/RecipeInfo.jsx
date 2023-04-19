import "./RecipeInfo.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLoaderData } from "react-router-dom";


function RecipeInfo() {

    const { recipe } = useLoaderData();
    let { title, description, ingredients, steps, image } = recipe;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Ingredients: {ingredients}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Steps: {steps}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RecipeInfo