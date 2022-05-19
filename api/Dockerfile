FROM dependency-cache:latest AS build
WORKDIR /app

COPY  ./ ./

RUN gradle build --no-daemon

FROM openjdk:8-jre-alpine3.9

WORKDIR /app

COPY --from=build /app/build/libs/*all.jar application.jar
ENV ENV=prod

ENV MICRONAUT_ENVIRONMENTS=${ENV}
ENTRYPOINT ["java", "-jar", "application.jar"]