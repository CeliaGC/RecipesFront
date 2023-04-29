
import AdminRecipe from "./AdminRecipe";
import NavbarMenuRecipe from "../Component/NavbarMenuRecipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const AdminRecipeView = () => {

    return(
    <div>
    <NavbarMenuRecipe/>
    <AdminRecipe/>
    </div>

    )
};


export default AdminRecipeView;
