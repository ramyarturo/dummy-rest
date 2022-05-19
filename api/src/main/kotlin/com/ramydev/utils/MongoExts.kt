package com.ramydev.utils

import com.ramydev.models.BaseModel
import com.mongodb.client.model.Aggregates
import com.mongodb.client.model.Facet
import com.mongodb.client.model.Field
import com.mongodb.client.model.Filters
import com.mongodb.client.model.Projections
import org.koin.java.KoinJavaComponent.inject
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.coroutine.CoroutineDatabase
import org.litote.kmongo.coroutine.aggregate
import kotlin.properties.ReadOnlyProperty

inline fun <reified T : BaseModel> findCollectionOf(): ReadOnlyProperty<Any, CoroutineCollection<T>> {
    val database: CoroutineDatabase by inject()
    return ReadOnlyProperty { _, _ ->
        database.getCollection()
    }

}

suspend inline fun CoroutineCollection<*>.findPaginated(offset: Int = 0, limit: Int = 10): List<Any> {
    return this.aggregate<Any>(
        Aggregates.facet(
            Facet(
                "metadata", Aggregates.count(),
                Aggregates.addFields(
                    Field("offset", offset),
                    Field("limit", limit)
                )
            ),
            Facet(
                "results",
                Aggregates.skip(offset),
                Aggregates.limit(limit)
            )
        ),

        ).toList()
}