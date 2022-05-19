package com.ramydev.di


object Config {
    data class DbConfig(
        val host: String,
        val name: String,
        val user: String,
        val password: String,
    )
}