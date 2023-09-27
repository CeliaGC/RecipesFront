  import axios from "axios";
  import  {AxiosInterceptor}  from "../Interceptors/axios.interceptor"; //
  

const apiClient = axios.create({
  baseURL: 'https://localhost:7286',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

AxiosInterceptor(apiClient); 

export const loginService = async(data) => {
 let response= await apiClient.post("api/auth/login", data)/* .catch( */
/*   function(error){
    alert(error.message);
  } 
 );*/
 let dataResponse= await response.data
 return dataResponse;
};


/* 
axios.post('/User/Login', {
    UserName: UserNameValue,
    UserPassword: UserPasswordValue
  })
   */
/* 
 export const loginService = {

async credentials => { 
const{ data } = await axios.post(baseURL, credentials)
return data 

}
 */
  /* async getLogin() {
    let response = await apiClient.get("/GetAll");
    console.log(response.data);
    return response.data;

  },
  async submitLogin(newProduct) {
    console.log("new product de servicio", newProduct);
    await apiClient.post("/Product /Post", newProduct);
  }, */
