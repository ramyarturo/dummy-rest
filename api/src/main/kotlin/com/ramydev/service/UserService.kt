package com.ramydev.service

import com.ramydev.models.User
import com.ramydev.repository.UserRepository
import com.ramydev.utils.throwNotFoundException

interface UserService {
    suspend fun getUsers(offset: Int, limit: Int): List<Any>
    suspend fun findById(id: String): User
}

class UserServiceImpl(private val userRepository: UserRepository) : UserService {

    override suspend fun getUsers(offset: Int, limit: Int): List<Any> {
        return userRepository.getUsers(offset, limit)
    }

    override suspend fun findById(id: String): User {
        return userRepository.findById(id) ?: throwNotFoundException("User not found")
    }
}