package com.ramydev.service

import org.litote.kmongo.coroutine.CoroutineDatabase

enum class HttpMethod {
    GET, POST, PUT, DELETE
}

data class Route(val path: String, val method: HttpMethod, val description: String)
data class Resource(val name: String, val count: Int = 0, val routes: List<Route>)

interface ResourceService {
    suspend fun getResources(): List<Resource>
}

class ResourceServiceImpl(private val database: CoroutineDatabase) : ResourceService {

    override suspend fun getResources(): List<Resource> {
        val data = database.listCollectionNames().map { name ->
            val parsedName = "/${name}s"
            val documents = database.getCollection<Map<String, Any>>(name).find().toList()
            Resource(
                name = parsedName, count = documents.size,
                routes = computeRoutes(
                    parsedName,
                    documents.first()["_id"] as String
                ),
            )
        }

        return data
    }
}

private fun computeRoutes(resourceName: String, firstDocumentId: String): List<Route> {
    val routeList = mutableListOf<Route>()
    fun addRoute(route: () -> Route) = routeList.add(route())
    addRoute { Route(path = "${resourceName}?offset=0&limit=20", method = HttpMethod.GET, "Get all ${resourceName.replaceFirstChar { "" }}") }
    addRoute { Route(path = "$resourceName/${firstDocumentId}", method = HttpMethod.GET, "Get single resource") }

    return routeList
}