import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7286', 
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  export const categoryService = {
    async getCategories() {
      let response = await apiClient.get("/Category/GetCategories");
      let allCategories = response.data;
      return allCategories;
  
  }
//     async getRecipeById(id) {
//       let response = await apiClient.get("/Product/GetProductById/" + id);
//       let recipe = response.data;
//       return recipe;
//   }
}