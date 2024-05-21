import axios from "axios";
import { getApiUrl } from "../../../utils/apiUtils";
//Fachada
export const getUsuariosFachada= ()=>{
    return  getUsuariosApi()
}

//Consumir
const getUsuariosApi= async ()=>{
    const url = getApiUrl('usuarios');
    const response = await axios.get(url);
    console.log(url);
    return response.data;
}