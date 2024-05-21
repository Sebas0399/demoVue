//const API_URL = "https://daeapi.azurewebsites.net";
//const API_URL="https://dae-6nst.onrender.com"
//const API_URL = "https://apibitacora.onrender.com";
const API_URL=process.env.EXPRESS_APP_API_URL;
export function getApiUrl(endpoint) {
    return `${API_URL}/${endpoint}`;
  }
  