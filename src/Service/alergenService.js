import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7286', 
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  export const alergenService = {
    async getAlergens() {
      let response = await apiClient.get("/Alergen/GetAlergens");
      let allAlergens = response.data;
      return allAlergens;
  
  }
//     async getRecipeById(id) {
//       let response = await apiClient.get("/Product/GetProductById/" + id);
//       let recipe = response.data;
//       return recipe;
//   }
}