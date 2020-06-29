import axios from "axios";
import config from "../configuration.json";

const settings = {
    baseURL: config.base_url
}

export default axios.create(settings);