package com.ramydev.models

data class Todo(
    val completed: Boolean,
    val title: String,
    val userId: String
)  : BaseModel()