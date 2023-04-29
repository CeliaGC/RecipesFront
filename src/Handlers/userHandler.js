import { userService } from "../Service/userService";

export const usersHandler = {
   
    loadUsers(){
        return userService.getUsers();
    },
   
    deleteUser(id){
        return userService.deleteUser(id);
    }
} 