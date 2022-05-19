package com.ramydev.repository

import com.ramydev.models.Todo
import com.ramydev.utils.findCollectionOf
import com.ramydev.utils.findPaginated


class TodoRepository {
    private val todoCollection by findCollectionOf<Todo>()
    suspend fun getTodos(offset: Int, limit: Int): List<Any> {
        return todoCollection.findPaginated(offset, limit)
    }

    suspend fun findById(id: String): Todo? {
        return todoCollection.findOneById(id)
    }
}