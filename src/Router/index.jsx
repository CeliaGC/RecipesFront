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
import {recipeHandler} from "../Handlers/recipeHandler";
import {categoryHandler } from "../Handlers/categoryHandler";
import {orderHandler} from "../Handlers/orderHandler"
import AdminList from "../Pages/AdminList";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home/>,
                    },
                    {
                        path: '/Menu',
                        element: <Menu/>,
                        loader: fetchCategories,
                    },
                   
                    {
                        path: '/EditRecipe',
                        element: <EditRecipe/>,
                        loader: fetchRecipes,
                    },
                    {
                        path: '/MenuRecipe/:category',
                        element: <MenuRecipe/>,
                        loader: fetchRecipe,
                    },
                
                    {
                        path: '/ViewRecipe/:id',
                        element: <ViewRecipe/>,
                        loader: fetchRecipeId,
                    },
                    {
                        path: '/List',
                        element: <List/>,
                    },
                    {
                        path: '/MyRecipe',
                        element: <MyRecipe/>,
                        loader: fetchRecipes,
                    },
                    {
                        path: '/AdminCategory',
                        element: <AdminCategory/>,
                        loader: fetchCategories,
                    },
                    {
                        path: '/AdminRecipe',
                        element: <AdminRecipe/>,
                    },
                    {
                        path: '/AdminUser',
                        element: <AdminUser/>,
                    },
                    {   path: '/AdminList',
                        element: <AdminList/>,
                        loader: fetchOrders,
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
    const recipe = await recipeHandler.loadRecipe(params.id);
    return { recipe};
}
async function fetchOrders() {
    const orders = await orderHandler.loadOrders();
    onsole.log  (orders)
    return { orders };
}