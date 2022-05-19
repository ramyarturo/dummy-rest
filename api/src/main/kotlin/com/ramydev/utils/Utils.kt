package com.ramydev.utils

object Utils {

    val isProduction get() = System.getenv("ENV") == "prod"
}