import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7286', 
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  //ESTE ES EL LLAMADO PARA EL GET BY ID https://localhost:7112/Product/GetProductById/2 https://localhost:7286/Recipe/GetRecipes?recipeId=2
  export const recipeService = {
    async getRecipes() {
      // let response = await apiClient.get("/Recipe/GetRecipes?recipeId= + id");
      let response = await apiClient.get("/Recipe/GetRecipes?recipeId=2");
      let recipes = response.data;
      return recipes;
  
  },
    async getRecipeById(id) {
      let response = await apiClient.get("/Recipe/GetRecipes?recipeId=" + id);
      let recipe = response.data;
      return recipe;
  }
}