package com.ramydev.routes

import com.ramydev.service.TodoService
import com.ramydev.utils.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.routing.*


fun Route.todoRoute() {
    val todoService: TodoService by inject()
    route("todos") {
        getPaginated { offset, limit ->
            val result = todoService.getTodos(offset, limit)
            respond { result }
        }
        get("/{id}") {
            val result = todoService.findById(idParams)
            respond {
                result
            }
        }
    }
}