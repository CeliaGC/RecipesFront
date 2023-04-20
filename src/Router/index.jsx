import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
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
=======
import Root from "../Router/Root";
import Home from "../Pages/home";
import NotFound from "../Pages/NotFound";
import Menu from "../Pages/Menu";
import ViewMenu from "../Pages/ViewMenu";
import FormLogin from "../Component/FormLogin";



>>>>>>> feature/login

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
<<<<<<< HEAD
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
                    {   path: '/AdminIngredientList',
                        element: <AdminIngredientList/>,
                    }
=======
                        path: '/FormLogin',
                        element: <FormLogin/>,
                        
                    },
                    
                    
                   
                    
>>>>>>> feature/login
                    
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
