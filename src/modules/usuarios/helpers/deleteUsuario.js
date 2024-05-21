import axios from "axios";
import { getApiUrl } from "../../../utils/apiUtils";
//Fachada
export const deleteUsuarioFachada= (id)=>{
    return  deleteUsuarioApi(id)
}

//Consumir
const deleteUsuarioApi= async (id)=>{
    const url = getApiUrl('usuarios/'+id);
    const response = await axios.delete(url);
    console.log(url);
    return response.data;
}