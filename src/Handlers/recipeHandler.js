import { recipeService } from "../Service/recipeService";

export const recipeHandler = {
   
    loadRecipes(){
        return recipeService.getRecipes();
    }
/*     loadRecipe(id) {
        return recipeService.getRecipeById(id);
    },
    deleteRecipe(id){
        return recipeService.deleteRecipe(id);
    },
    addRecipe(newRecipe){
        if (!newRecipe) {
            return;
        }
        let newRecipeStructure = {

            "name": newRecipe.name,
            "instructions": newRecipe.instructions,
            "category": newRecipe.category,
            "author": newRecipe.author,
            "observations": newRecipe.observations,
            "materials": newRecipe.materials,
            "posterName": newRecipe.posterName,
            "ingredients":  [
                {
                  "ingredient": newRecipe.ingredient,
                  "amount": newRecipe.amount,
                  "unit": newRecipe.unit,
                }
              ],
              "alergens": [
                {
                  "name": newRecipe.name,
                  "id": newRecipe.id
                }
              ]
            
        }
        return recipeService.submitRecipe(newRecipeStructure);
    }, */
}

