package com.ramydev.repository

import com.ramydev.models.User
import com.ramydev.utils.findCollectionOf
import com.ramydev.utils.findPaginated

class UserRepository {
    private val userCollection by findCollectionOf<User>()

    suspend fun getUsers(offset: Int, limit: Int): List<Any> {
        return userCollection.findPaginated(offset, limit)
    }

    suspend fun findById(id: String) = userCollection.findOneById(id)
}