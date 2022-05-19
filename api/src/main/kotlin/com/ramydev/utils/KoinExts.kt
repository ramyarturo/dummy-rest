package com.ramydev.utils

import org.koin.core.context.GlobalContext


inline fun <reified T : Any> get() = GlobalContext.get().get<T>()
inline fun <reified T : Any> inject(): Lazy<T> = GlobalContext.get().inject()
