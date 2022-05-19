package com.ramydev.di

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import org.litote.kmongo.coroutine.CoroutineDatabase
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.reactivestreams.KMongo

object DatabaseFactory {

    fun provideMongoInstance(dbConfig: Config.DbConfig): CoroutineDatabase {
        val username = dbConfig.user
        val password = dbConfig.password
        val host = dbConfig.host
        val connectionString = "mongodb://$username:$password@$host/?authSource=admin"
        val mongoClientSettings = MongoClientSettings.builder()
            .applyConnectionString(ConnectionString(connectionString))
            .build()
        val client = KMongo.createClient(mongoClientSettings).coroutine

        return client.getDatabase(dbConfig.name)
    }
}