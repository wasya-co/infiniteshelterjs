import request from "../utilities/request";
import config from "../configuration";

function getCities(){
    return request.get(`/api/cities.json`);
}

export default getCities;
