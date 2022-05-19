import useApiFetch from "./useApiFetch";
import {useCallback, useEffect, useState} from "react";
import resourceService from "../services/resourceService";
import useResource from "./useResource";

export default function useTryCode() {
    const [tryCodeRoutePath, setTryCodeRoutePath] = useState("")
    const {resources} = useResource()
    useEffect(() => {
        if (resources) {
            setTryCodeRoutePath(resources.flatMap(resource => resource.routes)[1].path)
        }
    }, [resources])

    const {data, fetch, loading} = useApiFetch<any>()
    const fetchTryCode = useCallback(() => {
        return fetch(() => resourceService.getRoute(tryCodeRoutePath))
    }, [tryCodeRoutePath])


    return {data, tryCodeRoutePath, fetchTryCode, loading}
}