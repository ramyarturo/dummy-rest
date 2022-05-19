import {Resource} from "../types/resource"
import {HttpMethod} from "../utils/enums";
import createNetworkCall from "../utils/http"

export default {
    async getResources() {
        return createNetworkCall<Resource[]>({
            url: "/resources",
            method: HttpMethod.GET,
        })
    },
    getRoute(resource: string) {
        return createNetworkCall({
            url: resource,
            method: HttpMethod.GET
        })
    }
}