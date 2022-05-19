package com.ramydev.utils.validators

import org.bson.types.ObjectId


fun String.isIdValid(): Boolean {
    return ObjectId.isValid(this)
}