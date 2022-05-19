package com.ramydev.routes

import com.ramydev.service.ResourceService
import com.ramydev.utils.SeedMongodb
import com.ramydev.utils.inject
import com.ramydev.utils.respond
import io.ktor.server.auth.*
import io.ktor.server.routing.*


fun Route.resourceRoute() {
    val resourceService by inject<ResourceService>()

    route("resources") {
        get {
            val result = resourceService.getResources()
            respond {
                result
            }
        }
    }
    authenticate {
        route("database/seed") {
            post {
                SeedMongodb.seed()
                respond {
                    mapOf(
                        "message" to "Successfully seeded database"
                    )
                }
            }
        }
    }
}