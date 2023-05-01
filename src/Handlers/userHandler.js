import { userService } from "../Service/userService";

export const usersHandler = {

    addUser(newUser) {
        if (!newUser) {
            return;
        }
        let newUserStructure = {

            "idRol": 2,
            "userName": newUser.userName,
            "insertDate": newUser.insertDate,
            "password": newUser.password,
            "userEmail": newUser.userEmail,
            "userPhone": newUser.userPhone,
        }
        return userService.submitUser(newUserStructure);
    },

    loadUsers() {
        return userService.getUsers();
    },

    deleteUser(id) {
        return userService.deleteUser(id);
    }
} 