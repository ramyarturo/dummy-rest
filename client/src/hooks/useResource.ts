import {useContext} from "react";
import {ResourceContext} from "../providers/ApiResourceProvider";


export default function useResource() {
    return useContext(ResourceContext)
}