import { Result } from "../types"

export const ResultWrapper = {
    success<T>(data: T): Result<T> {
        return data
    },
    failure(error: any): Result<any> {
        return { error }
    }
}