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
    loadUser(id) {
        return userService.getUserById(id);
        console.log("este si es" + userService.getUserById(id ))
    },

    deleteUser(id) {
        return userService.deleteUser(id);
    }
} 