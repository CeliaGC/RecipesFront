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

                  "orderItems": [
                    {
                    
                      "idUser": newOrder.idUser,
                      "username": newOrder.userName,
                      "idIngredient": newOrder.idIngredient,
                      "ingredientName": newOrder.ingredientName,
                      "amount": newOrder.amount,
                      "unit": newOrder.unit,
                    }
                  ] 
        
        }
        console.log ("structure",newOrderStructure)
        return orderService.submitOrder(newOrderStructure);
    }
}


