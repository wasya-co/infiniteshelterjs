import request from "../utilities/request";
import config from "../configuration";

function getGallery(slug){
    return request.get(`/api/galleries/view/${slug}`);
}

export default getGallery;
