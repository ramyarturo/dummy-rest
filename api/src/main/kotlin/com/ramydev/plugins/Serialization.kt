package com.ramydev.plugins

import com.ramydev.utils.DummyRestException
import io.ktor.serialization.gson.*
import io.ktor.server.application.*
import io.ktor.server.plugins.callloging.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*
import org.slf4j.event.Level

fun Application.configureSerialization() {
    install(ContentNegotiation) {
        gson {
            setPrettyPrinting()
        }
    }
    install(StatusPages) {
        exception<DummyRestException> { call, cause ->
            call.respond(
                cause.statusCode,
                mapOf("message" to cause.message)
            )
        }
    }

    install(CallLogging) {
        level = Level.INFO
    }
}
