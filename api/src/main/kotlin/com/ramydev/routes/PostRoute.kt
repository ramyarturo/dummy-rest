package com.ramydev.routes

import com.ramydev.service.PostService
import com.ramydev.utils.getPaginated
import com.ramydev.utils.idParams
import com.ramydev.utils.inject
import com.ramydev.utils.respond
import io.ktor.server.routing.*


fun Route.postRoute() {
    val postService: PostService by inject()
    route("posts") {
        getPaginated { offset, limit ->
            val result = postService.getPosts(offset, limit)
            respond { result }
        }
        get("/{id}") {
            val result = postService.findById(idParams)
            respond {
                result
            }
        }
    }
}