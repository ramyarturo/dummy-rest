
interface Success<T> {
    data?: T
}
interface Failure {
    error?: any
}
export type Result<T> = Success<T> & Failure
