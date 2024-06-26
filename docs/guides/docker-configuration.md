---
sidebar_position: 2
authors:
  - name: Yaman
    title: Docker Configuration
---
# Docker Configuration
# Basic
In the project, there are two Dockerfiles: one for the local environment and another for the staging environment, named Dockerfile.staging. This separation ensures easier and isolated deployment configurations.For the local environment Dockerfile, you don't need to pass build arguments during the build process, as it will use the default application properties. However, for the staging Dockerfile, you need to pass build arguments to set the environment variables appropriately.
## Dockerfile {#dockerfile}
```js
# build
FROM maven:3.9.4-eclipse-temurin-17 AS build

COPY . /usr/src/app

WORKDIR /usr/src/app
RUN mvn package -DskipTests

# run
FROM eclipse-temurin:17-jre
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/backend-0.0.1-SNAPSHOT.jar /usr/src/app/app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-Dspring.profiles.active=localdocker", "-jar", "app.jar"]

```
This Dockerfile defines a multi-stage build process for a Java application using Maven and Eclipse Temurin JDK. Here’s the detailed flow:

1. **Build Stage**:
    - **Base Image**: The first stage uses the Maven image `maven:3.9.4-eclipse-temurin-17` which comes with Maven 3.9.4 and Eclipse Temurin JDK 17 pre-installed.
    - **Copy Source Code**: The entire source code is copied from the local machine to the container at `/usr/src/app`.
    - **Set Working Directory**: The working directory within the container is set to `/usr/src/app`.
    - **Build Application**: Maven is used to package the application. The `-DskipTests` option skips running tests to speed up the build process.

2. **Run Stage**:
    - **Base Image**: The second stage uses the `eclipse-temurin:17-jre` image, which provides a runtime environment with the JRE (Java Runtime Environment) only, making it lighter than a full JDK.
    - **Set Working Directory**: The working directory within the container is set to `/usr/src/app`.
    - **Copy Built Artifact**: The JAR file created in the build stage is copied from the build stage to the run stage container at `/usr/src/app/app.jar`.
    - **Expose Port**: Port 8081 is exposed to allow access to the application.
    - **Set Entry Point**: The container is configured to run the application using the `java` command. The `-Dspring.profiles.active=localdocker` argument specifies that the `localdocker` profile should be used for Spring Boot, and the `-jar` option specifies the JAR file to run.

In summary, the Dockerfile builds the Java application using Maven in the first stage and creates a lightweight runtime container in the second stage to run the built application. This approach optimizes the final image size by excluding unnecessary build dependencies.

## Dockerfile.staging {#dockerfile.staging}
```js
# build
FROM maven:3.9.4-eclipse-temurin-17 AS build
# Define build arguments
ARG DB_USERNAME
ARG DB_PASSWORD
ARG DB_URL_SYSTEM

ENV DB_URL_SYSTEM=${DB_URL_SYSTEM}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
COPY . /usr/src/app

WORKDIR /usr/src/app
RUN mkdir -p /usr/src/basecode_end_user_backend_volume
RUN mkdir -p /usr/src/basecode_end_user_backend_logs
RUN mvn package -DskipTests

# run
FROM eclipse-temurin:17-jre
ARG DB_USERNAME
ARG DB_PASSWORD
ARG DB_URL_SYSTEM

ENV DB_URL_SYSTEM=${DB_URL_SYSTEM}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/backend-0.0.1-SNAPSHOT.jar /usr/src/app/app.jar
EXPOSE 9093
ENTRYPOINT ["java", "-Dspring.profiles.active=staging", "-jar", "app.jar"]

```
This Dockerfile also defines a multi-stage build process for a Java application, similar to the previous one, but with additional build arguments and environment variables for database configuration. Here's the detailed flow:

1. **Build Stage**:
    - **Base Image**: Uses the Maven image `maven:3.9.4-eclipse-temurin-17` which comes with Maven 3.9.4 and Eclipse Temurin JDK 17 pre-installed.
    - **Define Build Arguments**: The build arguments `DB_USERNAME`, `DB_PASSWORD`, and `DB_URL_SYSTEM` are defined to pass database configuration values during the build process.
    - **Set Environment Variables**: The environment variables `DB_URL_SYSTEM`, `DB_USERNAME`, and `DB_PASSWORD` are set using the build arguments.
    - **Copy Source Code**: The entire source code is copied from the local machine to the container at `/usr/src/app`.
    - **Set Working Directory**: The working directory within the container is set to `/usr/src/app`.
    - **Create Directories**: Two directories, `/usr/src/basecode_end_user_backend_volume` and `/usr/src/basecode_end_user_backend_logs`, are created within the container. These could be used for storing application data and logs, respectively.
    - **Build Application**: Maven is used to package the application. The `-DskipTests` option skips running tests to speed up the build process.

2. **Run Stage**:
    - **Base Image**: Uses the `eclipse-temurin:17-jre` image, which provides a runtime environment with the JRE (Java Runtime Environment) only, making it lighter than a full JDK.
    - **Define Build Arguments**: The build arguments `DB_USERNAME`, `DB_PASSWORD`, and `DB_URL_SYSTEM` are redefined for this stage.
    - **Set Environment Variables**: The environment variables `DB_URL_SYSTEM`, `DB_USERNAME`, and `DB_PASSWORD` are set again using the build arguments.
    - **Set Working Directory**: The working directory within the container is set to `/usr/src/app`.
    - **Copy Built Artifact**: The JAR file created in the build stage is copied from the build stage to the run stage container at `/usr/src/app/app.jar`.
    - **Expose Port**: Port 9093 is exposed to allow access to the application.
    - **Set Entry Point**: The container is configured to run the application using the `java` command. The `-Dspring.profiles.active=staging` argument specifies that the `staging` profile should be used for Spring Boot, and the `-jar` option specifies the JAR file to run.

In summary, this Dockerfile builds the Java application using Maven in the first stage with specific database configurations, and then creates a lightweight runtime container in the second stage to run the built application using the `staging` profile. This approach ensures that database configurations are passed securely and the final image size is optimized by excluding unnecessary build dependencies.
