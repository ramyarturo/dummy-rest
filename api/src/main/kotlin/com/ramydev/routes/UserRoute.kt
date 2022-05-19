package com.ramydev.routes

import com.ramydev.service.UserService
import com.ramydev.utils.*
import io.ktor.server.routing.*


fun Route.userRoute() {
    val userService: UserService by inject()

    route("users") {
        getPaginated { offset, limit ->
            val result = userService.getUsers(offset, limit)
            respond { result }
        }
        get("/{id}") {
            val result = userService.findById(idParams)
            respond { result }
        }
    }
}