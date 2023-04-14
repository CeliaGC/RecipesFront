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

import {recipeHandler} from "../Handlers/recipeHandler"
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
                        path: '/ViewRecipe',
                        element: <ViewRecipe/>,
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
                ]
            },
        ]
    },
]);

async function fetchRecipes() {
    const recipes = await recipeHandler.loadRecipes();
    return { recipes };
}

// async function fetchRecipe({ params }) {
//     const recipe = await recipeHandler.loadRecipe(params.id);
//     return { recipe };
// }
