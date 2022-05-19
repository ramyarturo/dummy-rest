package com.ramydev

import com.ramydev.plugins.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*


fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureDi()
        configureHTTP()
        configureRouting()
        configureSecurity()
        configureSerialization()

    }.start(wait = true)
}