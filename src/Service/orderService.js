import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7286', 
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  export const orderService = {
    async getOrders() {
      let response = await apiClient.get("/Order/GetOrders");
      let allOrders = response.data;
      return allOrders;
  
  }

}


