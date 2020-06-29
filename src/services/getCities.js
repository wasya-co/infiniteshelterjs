import request from "../utilities/request";
import config from "../config";

function getCities(){
    return request.get(`${config.apiOrigin}/api/cities.json`);
}

export default getCities;
