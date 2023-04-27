import { alergenService } from "../Service/alergenService";

export const alergenHandler = {
   
    loadAlergens(){
        return alergenService.getAlergens();
    }
}