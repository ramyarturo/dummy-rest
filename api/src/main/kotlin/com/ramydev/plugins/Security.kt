package com.ramydev.plugins

import com.ramydev.di.UserCredential
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.*
import org.koin.ktor.ext.get

fun Application.configureSecurity(userCredential: UserCredential = get()) {

    val digestFunction = getDigestFunction("SHA-256") {
        it.encodeBase64()
    }
    val hashedUserTable = UserHashedTableAuth(
        table = mapOf(
            userCredential.username to digestFunction(userCredential.password)
        ),
        digester = digestFunction
    )

    authentication {
        basic {
            validate { credentials ->
                hashedUserTable.authenticate(credentials)
            }
        }
    }

    routing {
        authenticate {
            get("/protected") {
                val principal = call.principal<UserIdPrincipal>()!!
                call.respondText("Hello ${principal.name}")
            }
        }
    }
}
