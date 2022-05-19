import axios from "axios";
import constants from "./constants";
import {HttpMethod} from "./enums";
import {Messages} from "./Messages";


const axiosClient = axios.create({
    baseURL: constants.baseUrl,
})

interface Params {
    url: string,
    method: HttpMethod,
    payload?: any
}

const createNetworkCall = <T>({url, method, payload}: Params) => {
    return axiosClient.request<T>({
        url,
        method,
        data: payload,
        withCredentials: false
    }).then(response => response.data)
        .catch(error => {
            return Promise.reject<T>(error.response?.data?.message || Messages.SOMETHING_HAPPENED_ERROR)
        })
}
export default createNetworkCall