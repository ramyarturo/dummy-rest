package com.ramydev.utils

import com.github.javafaker.Faker
import com.ramydev.models.Post
import com.ramydev.models.Todo
import com.ramydev.models.User
import kotlinx.coroutines.*
import org.bson.types.ObjectId
import org.litote.kmongo.coroutine.CoroutineDatabase
import kotlin.random.Random


object SeedMongodb {
    private val userCollection by findCollectionOf<User>()
    private val todoCollection by findCollectionOf<Todo>()
    private val postCollection by findCollectionOf<Post>()
    private val database by inject<CoroutineDatabase>()
    private val faker = Faker()
    private suspend fun seedUserCollection(): List<String> {
        val userList = 1.rangeTo(200).map {
            User(
                email = faker.internet().emailAddress(),
                phone = faker.phoneNumber().phoneNumber(),
                name = faker.name().username(),
                username = faker.name().username(),
                address = User.Address(
                    city = faker.address().city(),
                    street = faker.address().streetName(),
                    zipcode = faker.address().zipCode(),
                    geo = User.Address.Geo(
                        lat = faker.address().latitude(),
                        lng = faker.address().longitude()
                    )
                )
            )
        }
        userCollection.insertMany(userList)
        return userList.map { it.id }
    }

    private suspend fun seedTodoCollection(usersIdList: List<String>) {
        val todoList = 1.rangeTo(200).map {
            Todo(
                completed = Random.nextBoolean(),
                title = faker.lorem().sentence(),
                userId = usersIdList.random()
            )
        }
        todoCollection.insertMany(todoList)
    }

    private suspend fun seedPostCollection(usersIdList: List<String>) {
        val postList = 1.rangeTo(250).map {
            Post(
                userId = usersIdList.random(),
                title = faker.lorem().sentence(),
                body = faker.lorem().paragraph()
            )
        }
        postCollection.insertMany(postList)
    }

    suspend fun seed() = withContext(Dispatchers.IO) {
        database.drop()
        val result = seedUserCollection()
        launch { seedTodoCollection(result) }
        launch { seedPostCollection(result) }
    }
}
