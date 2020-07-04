import request from "$shared/request";
import config from "config";

function getNewsitems(){
  return request.get(`${config.apiOrigin}/api/sites/view/${config.domain}`);
}

export default getNewsitems;
