package com.ramydev.models

data class User(
    val address: Address,
    val email: String,
    val name: String,
    val phone: String,
    val username: String,
) : BaseModel() {
    data class Address(
        val city: String,
        val geo: Geo,
        val street: String,
        val zipcode: String
    ) {
        data class Geo(
            val lat: String,
            val lng: String
        )
    }
}