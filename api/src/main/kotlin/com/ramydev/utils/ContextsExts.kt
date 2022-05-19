package com.ramydev.utils

import com.ramydev.utils.validators.isIdValid
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.pipeline.*

private typealias PipelineContextAlias = PipelineContext<Unit, ApplicationCall>

fun Route.getPaginated(
    path: String = "",
    pipelineContext: suspend PipelineContextAlias.(offset: Int, limit: Int) -> Unit
) = get(path) {
    val offset = call.parameters["offset"]?.toIntOrNull() ?: 0
    val limit = call.parameters["limit"]?.toIntOrNull() ?: 10
    this.pipelineContext(offset, limit)
}

val PipelineContextAlias.idParams
    get() = call.parameters["id"]?.takeIf { it.isIdValid() } ?: throwBadRequestException()

suspend fun PipelineContextAlias.respond(block: suspend () -> Any) = call.respond(block())