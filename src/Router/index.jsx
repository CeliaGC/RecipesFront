import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";
import NotFound from "../Pages/NotFound";
import Menu from "../Pages/Menu";
import Home from "../Pages/Home";
import EditRecipe from "../Pages/EditRecipe";
import MenuRecipe from "../Pages/MenuRecipe";
import ViewRecipe from "../Pages/ViewRecipe";
import List from "../Pages/List";
import MyRecipe from "../Pages/MyRecipe";
import AdminCategory from "../Pages/AdminCategory";
import AdminRecipe from "../Pages/AdminRecipe";
import AdminUser from "../Pages/AdminUser";
import { recipeHandler } from "../Handlers/recipeHandler";
import { categoryHandler } from "../Handlers/categoryHandler";
import AdminIngredientList from "../Pages/AdminIngredientList";
import FormLogin from "../Component/FormLogin";
import { orderHandler } from "../Handlers/orderHandler"
import AdminList from "../Pages/AdminList";
import { usersHandler } from "../Handlers/userHandler";
import UserList from "../Pages/UserList";
import AdminRecipeView from "../Pages/AdminRecipeView";
import Register from "../Component/Register";
import NavbarPrueba from "../Component/NavbarView";
import Perfil from "../Component/Perfil";
import LoginModal from "../Component/LoginModal";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: '/Menu',
                        element: <Menu />,
                        loader: fetchCategories,
                    },

                    {
                        path: '/EditRecipe',
                        element: <EditRecipe />,
                        loader: fetchRecipes,
                    },
                    {
                        path: '/MenuRecipe/:category',
                        element: <MenuRecipe />,
                        loader: fetchRecipe,
                    },

                    {
                        path: '/ViewRecipe/:id',
                        element: <ViewRecipe />,
                        loader: fetchRecipeId,
                    },
                    {
                        path: '/List',
                        element: <List />,
                    },
                    {
                        path: '/MyRecipe',
                        element: <MyRecipe />,
                        loader: fetchRecipes,
                    },
                    {
                        path: '/AdminCategory',
                        element: <AdminCategory />,
                        loader: fetchCategories,
                    },
                    {
                        path: '/AdminRecipe',
                        element: <AdminRecipe />,
                        loader: fetchRecipes,
                    },
                    {
                        path: '/AdminUser',
                        element: <AdminUser />,
                      
                    },
                    {
                        path: '/AdminList',
                        element: <AdminList />,
                        loader: fetchOrders,
                    },
                    {
                        path: '/AdminIngredientList',
                        element: <AdminIngredientList />,
                    },
                    {
                        path: '/FormLogin',
                        element: <FormLogin />,

                    },
                    {
                        path: '/UserList',
                        element: <UserList/>,
                        loader: fetchUsers,


                    },
                    {
                        path: '/AdminRecipeView',
                        element: <AdminRecipeView />,
                    },
                    {
                        path: '/Register',
                        element: <Register />,
                    },
                    {
                        path: '/NavbarPrueba',
                        element: <NavbarPrueba />,
                    },
                    {
                        path: '/Perfil',
                        element: <Perfil/>,
                        loader: fetchUserProfile,
                    }
                   

                ]
            },
        ]
    },
]);

async function fetchRecipes() {
    const recipes = await recipeHandler.loadRecipes();
    return { recipes };
}
async function fetchCategories() {
    const categories = await categoryHandler.loadCategories();
    return { categories };
}
async function fetchRecipe({ params }) {
    const recipesData = await recipeHandler.loadRecipes();
    const recipes = recipesData.filter(recipe => recipe.category == params.category)
    const categories = await categoryHandler.loadCategories();
    return { recipes, categories }; 
}
async function fetchRecipeId({ params }) {
    const recipe = await recipeHandler.loadRecipes(params.id);
    return { recipe };
}
async function fetchOrders() {
    const orders = await orderHandler.loadOrders();
    return { orders };
}
async function fetchUsers() {
    const users= await usersHandler.loadUsers();
    return { users };
}

async function fetchUserProfile(){
    const userData = JSON.parse(localStorage.getItem('userData')).item5;
     const user= await usersHandler.loadUser(userData);
    return { user };


}
