package com.ramydev.models

data class Post(
    val userId: String,
    val title: String,
    val body: String
) : BaseModel()