import request from "$shared/request";
import config from "config";

function getCity(slug){
    return request.get(`/api/cities/view/${slug}`);
}

export default getCity;
