import {useCallback, useEffect, useState} from "react";
import useNotifier from "./useNotifier";
import {Messages} from "../utils/Messages";


export default function useApiFetch<T>() {
    const [data, setData] = useState<T>()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const {showError, dismiss, showLoading} = useNotifier()
    useEffect(() => {
        if (loading) {
            showLoading(Messages.FETCHING_MESSAGE)
        } else {
            dismiss()
        }
    }, [loading, setLoading])
    useEffect(() => {
        error && showError(error)
    }, [error])
    const fetch = useCallback((call: () => Promise<T>) => {
        setLoading(true)
        call().then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])
    return {data, error, loading, fetch}
}