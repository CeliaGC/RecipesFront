import { orderService } from "../Service/orderService";

export const orderHandler = {
   
    loadOrders(){
        return orderService.getOrders();
    },
    addOrder(newOrder){
        if (!newOrder) {
            return;
        }
        let newOrderStructure = {
        
                "idUser": newOrder.idUser ,
                "idIngredient": newOrder.idIngredient,
                "amount": newOrder.amount,
                "unit": newOrder.unit
                
        }
        console.log ("structure",newOrderStructure)
        return orderService.submitOrder(newOrderStructure);
    },
}


