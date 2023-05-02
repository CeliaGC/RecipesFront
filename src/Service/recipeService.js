import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7286', 
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

 
  export const recipeService = {
    async getRecipes() {
      let response = await apiClient.get("/Recipe/GetAllRecipes/");
      let recipes = response.data;
      return recipes;
  
  },
    async getRecipeById(id) {
      let response = await apiClient.get("/Recipe/GetRecipe?recipeId=" + id);
      let recipe = response.data;
      return recipe;
  },
  
  async submitRecipe(newRecipe) {
    console.log("new Recipe", newRecipe);
    let response = await apiClient.post("/Recipe/Post",newRecipe);
    let data = await response.data;
    console.log(data);
    return data;

  },

  async deleteRecipe(id) {
    await apiClient.delete("/Recipe/Delete?id=" + id)
  }
} 