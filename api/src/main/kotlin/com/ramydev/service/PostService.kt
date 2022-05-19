package com.ramydev.service

import com.ramydev.models.Post
import com.ramydev.repository.PostRepository
import com.ramydev.utils.throwNotFoundException

interface PostService {
    suspend fun getPosts(offset: Int, limit: Int): List<Any>
    suspend fun findById(id: String): Post
}

class PostServiceImpl(private val postRepository: PostRepository) : PostService {

    override suspend fun getPosts(offset: Int, limit: Int): List<Any> {
        return postRepository.getPosts(offset, limit)
    }

    override suspend fun findById(id: String): Post {
        return postRepository.findById(id) ?: throwNotFoundException("User not found")
    }
}