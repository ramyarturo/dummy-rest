export interface Resource {
    name: string,
    count: number,
    routes: Route[]
}

export interface Route {
    path: string,
    method: string,
    description: string
}
