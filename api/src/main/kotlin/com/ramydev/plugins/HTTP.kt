package com.ramydev.plugins

import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.server.application.*
import io.ktor.server.plugins.cachingheaders.*
import io.ktor.server.plugins.cors.routing.*

fun Application.configureHTTP() {

    install(CachingHeaders) {

        options { _, _ ->
            CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 60))
        }
    }
    install(CORS) {

    }
}
