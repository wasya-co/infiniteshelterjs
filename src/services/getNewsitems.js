import request from "../utilities/request";
import config from "../config";

function getNewsitems(){
  return request.get(`${config.apiUrl}/api/sites/view/${config.domain}`);
}

export default getNewsitems;
