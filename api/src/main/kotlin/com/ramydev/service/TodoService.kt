package com.ramydev.service

import com.ramydev.models.Todo
import com.ramydev.repository.TodoRepository
import com.ramydev.utils.throwNotFoundException

interface TodoService {
    suspend fun getTodos(offset: Int, limit: Int): List<Any>
    suspend fun findById(id: String): Todo
}

class TodoServiceImpl(private val todoRepository: TodoRepository) : TodoService {

    override suspend fun getTodos(offset: Int, limit: Int): List<Any> {
        return todoRepository.getTodos(offset,limit)
    }

    override suspend fun findById(id: String): Todo {
        return todoRepository.findById(id) ?: throwNotFoundException("Todo not found")
    }
}