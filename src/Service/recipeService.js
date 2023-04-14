import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000', 
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  export const recipeService = {
    async getRecipes() {
      let response = await apiClient.get("/recipe");
      let allRecipes = response.data;
      return allRecipes;
  
  }
//     async getRecipeById(id) {
//       let response = await apiClient.get("/Product/GetProductById/" + id);
//       let recipe = response.data;
//       return recipe;
//   }
}