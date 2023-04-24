import { categoryService } from "../Service/categoryService";

export const categoryHandler = {
   
    loadCategories(){
        return categoryService.getCategories();
    }
}