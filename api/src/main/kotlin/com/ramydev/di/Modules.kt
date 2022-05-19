package com.ramydev.di

import com.ramydev.repository.PostRepository
import com.ramydev.repository.TodoRepository
import com.ramydev.repository.UserRepository
import com.ramydev.service.*
import org.koin.dsl.module


private val configModule = module {
    single {
        UserCredential(
            username = System.getenv("ADMIN_USERNAME"),
            password = System.getenv("ADMIN_PASSWORD"),
        )
    }
    single {
        Config.DbConfig(
            host = System.getenv("DB_HOST"),
            name = System.getenv("DB_NAME"),
            user = System.getenv("DB_USER"),
            password = System.getenv("DB_PASSWORD"),
        )
    }
}
private val databaseModule = module {
    single { DatabaseFactory.provideMongoInstance(get()) }
}

private val repositoryModule = module {
    single { UserRepository() }
    single { TodoRepository() }
    single { PostRepository() }
}
private val servicesModule = module {
    single<ResourceService> { ResourceServiceImpl(get()) }
    single<UserService> { UserServiceImpl(get()) }
    single<TodoService> { TodoServiceImpl(get()) }
    single<PostService> { PostServiceImpl(get()) }
}

val appDiModules = listOf(
    configModule, repositoryModule, servicesModule, databaseModule
)