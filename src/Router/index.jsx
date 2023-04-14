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
                    },
                    {
                        path: '/MenuRecipe',
                        element: <MenuRecipe/>,
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
                    },
                ]
            },
        ]
    },
]);