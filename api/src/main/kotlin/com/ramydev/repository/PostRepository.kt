package com.ramydev.repository

import com.ramydev.models.Post
import com.ramydev.utils.findCollectionOf
import com.ramydev.utils.findPaginated


class PostRepository {
    private val postCollection by findCollectionOf<Post>()
    suspend fun getPosts(offset: Int, limit: Int): List<Any> {
        return postCollection.findPaginated(offset, limit)
    }

    suspend fun findById(id: String): Post? {
        return postCollection.findOneById(id)
    }
}