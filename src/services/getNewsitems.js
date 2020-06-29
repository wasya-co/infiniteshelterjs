import request from "../utilities/request";
import config from "../configuration";

function getNewsitems(){
    return request.get(`/api/sites/view/${config.domain}`);
}

export default getNewsitems;
