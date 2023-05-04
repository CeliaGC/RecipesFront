
import AdminRecipe from "./AdminRecipe";
import NavbarMenuRecipe from "../Component/NavbarMenuRecipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavbarPrueba from "../Component/NavbarView";

const AdminRecipeView = () => {

    return(
    <div>
    <NavbarPrueba/>
    <div style={{ marginTop: "70px", marginLeft: "auto", marginRight: "auto" }}>
    <AdminRecipe/>
    </div>
    </div>

    )
};


export default AdminRecipeView;
