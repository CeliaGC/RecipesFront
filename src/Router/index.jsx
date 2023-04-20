import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";
import NotFound from "../Pages/NotFound";
import Menu from "../Pages/Menu";
import Home from "../Pages/Home";
import ViewMenu from "../Pages/MenuRecipe";
import EditRecipe from "../Pages/EditRecipe";
import MenuRecipe from "../Pages/MenuRecipe";
import ViewRecipe from "../Pages/ViewRecipe";
import List from "../Pages/List";
import MyRecipe from "../Pages/MyRecipe";
import AdminCategory from "../Pages/AdminCategory";
import AdminRecipe from "../Pages/AdminRecipe";
import AdminUser from "../Pages/AdminUser";
import {recipeHandler} from "../Handlers/recipeHandler";
import { categoryHandler } from "../Handlers/categoryHandler";
import AdminIngredientList from "../Pages/AdminIngredientList";

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
                        path: '/ViewMenu',
                        element: <ViewMenu/>,
                    },
                    {
                        path: '/EditRecipe',
                        element: <EditRecipe/>,
                        loader: fetchRecipes,
                    },
                    {
                        path: '/MenuRecipe',
                        element: <MenuRecipe/>,
                        loader: fetchRecipes,
                    },
                    {
                        path: '/ViewRecipe/:id',
                        element: <ViewRecipe/>,
                        loader: fetchRecipe,
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
                    },
                    {
                        path: '/AdminRecipe',
                        element: <AdminRecipe/>,
                    },
                    {
                        path: '/AdminUser',
                        element: <AdminUser/>,
                    },
                    {   path: '/AdminIngredientList',
                        element: <AdminIngredientList/>,
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
    const recipe = await recipeHandler.loadRecipe(params.id);
    const categories = await categoryHandler.loadCategories();
    return { recipe, categories };
}
