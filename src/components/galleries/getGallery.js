import request from "$shared/request";
import config from "config";

function getGallery(slug){
    return request.get(`/api/galleries/view/${slug}`);
}

export default getGallery;
