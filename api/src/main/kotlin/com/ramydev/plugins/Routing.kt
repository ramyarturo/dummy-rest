package com.ramydev.plugins

import com.ramydev.routes.postRoute
import com.ramydev.routes.resourceRoute
import com.ramydev.routes.todoRoute
import com.ramydev.routes.userRoute
import io.ktor.server.application.*
import io.ktor.server.routing.*

fun Application.configureRouting() {

    routing {
        resourceRoute()
        userRoute()
        todoRoute()
        postRoute()
    }
}