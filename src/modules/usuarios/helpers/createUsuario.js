import axios from "axios";
import { getApiUrl } from "../../../utils/apiUtils";


//Fachada
export const registroUsuario= async(usuario)=>{
    return await registroUsuarioApi(usuario)
}

//Consumir
const registroUsuarioApi= async (usuario)=>{
    const url=getApiUrl('usuarios')
    return await axios.post(url,usuario).then(r => r.data)
   
}