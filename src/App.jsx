import LayoutPublic from "../src/Layout/LayoutPublic";
import "../src/App.css";
import { AxiosInterceptor } from "./Interceptors/axios.interceptor";

AxiosInterceptor(instance);

function App() {
  return (
    <>
         <LayoutPublic/>
        
         <Root className="bodyRoot" ></Root>

    </>
  )
}

export default App