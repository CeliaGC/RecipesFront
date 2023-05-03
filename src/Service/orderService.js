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
  
  },
   async submitOrder(newOrder) {
    console.log("new Order", newOrder);
    let response = await apiClient.post("/Order/InsertOrders",newOrder);
    let data = await response.data;
    return data;

  },

}


