package com.ramydev.plugins

import com.ramydev.di.appDiModules
import io.ktor.server.application.*
import org.koin.ktor.plugin.Koin

fun Application.configureDi() {
    install(Koin) {
        modules(appDiModules)
    }
}

