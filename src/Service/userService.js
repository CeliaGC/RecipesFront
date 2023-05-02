import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7286', 
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })


  export const userService = {

    async submitUser(newUser) {
      console.log("new User", newUser);
      await apiClient.post("/User/InsertUser", newUser);
  
    },
    async getUsers() {
      let response = await apiClient.get("/User/GetAll");
      let users = response.data;
      return users;
  
  },
  async getUserById(id) {
    let response = await apiClient.get("/User/GetUserById?id=" + id);
    let user = response.data;
    return user;
},
  async deleteUser(id) {
    await apiClient.delete("/User/Delete?id=" + id);
  }

}

