package com.ramydev.models

import org.bson.codecs.pojo.annotations.BsonId
import org.bson.types.ObjectId

open class BaseModel {
    @BsonId
    var id: String = ObjectId.get().toString()
}