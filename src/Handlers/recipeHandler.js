import { recipeService } from "../Service/recipeService";

export const recipeHandler = {
   
    loadRecipes(){
        return recipeService.getRecipes();
    },
    loadRecipe(id) {
        return recipeService.getRecipeById(id);
    }
}