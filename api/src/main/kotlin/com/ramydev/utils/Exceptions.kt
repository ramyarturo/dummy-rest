package com.ramydev.utils

import io.ktor.http.*


class AuthenticationException : RuntimeException()
class AuthorizationException : RuntimeException()


data class DummyRestException(override val message: String, val statusCode: HttpStatusCode) : RuntimeException()

fun throwBadRequestException(message: String = "BadRequest"): Nothing {
    throw DummyRestException(message, HttpStatusCode.BadRequest)
}

fun throwNotFoundException(message: String = "Resource not found"): Nothing {
    throw DummyRestException(message, HttpStatusCode.NotFound)
}
