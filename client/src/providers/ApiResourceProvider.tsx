import {createContext, useCallback, useEffect, useMemo, useRef, useState} from "react";
import useApiFetch from "../hooks/useApiFetch";
import resourceService from "../services/resourceService";
import {Resource} from "../types/resource";

interface ResourceValue {
    resources: Resource[],
    isLoading: boolean
}

export const ResourceContext = createContext({} as ResourceValue)


const ApiResourceProvider = ({children}) => {
    const {data: resources, fetch: fetchResources, loading: resourceLoading} = useApiFetch<Resource[]>()
    useEffect(() => {
        fetchResources(resourceService.getResources)
    }, [])
    const contextValue: ResourceValue = useMemo(() => ({
            resources,
            isLoading: resourceLoading
        }),
        [resources, resourceLoading])
    return <ResourceContext.Provider value={contextValue}>{children}</ResourceContext.Provider>
}

export default ApiResourceProvider