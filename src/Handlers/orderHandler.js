import { orderService } from "../Service/orderService";

export const orderHandler = {
   
    loadOrders(){
        return orderService.getOrders();
    }
}

