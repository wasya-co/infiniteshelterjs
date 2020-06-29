import request from "../utilities/request";
import config from "../configuration";

function getCity(slug){
    return request.get(`/api/cities/view/${slug}`);
}

export default getCity;
