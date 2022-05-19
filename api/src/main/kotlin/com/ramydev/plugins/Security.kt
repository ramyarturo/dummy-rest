package com.ramydev.plugins

import com.ramydev.di.UserCredential
import io.ktor.server.application.*
import io.ktor.server.auth.*
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
}
