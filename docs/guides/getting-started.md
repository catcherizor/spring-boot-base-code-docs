---
sidebar_position: 1
authors:
  - name: Yaman
    title: Getting Started
---

# Getting Started
To Run & Install Application there are some thing you need to know and following steps
# The Basics

## Requirements {#requirements}
- [Java](https://www.oracle.com/java/technologies/downloads/) version 17.0.7 2023-04-18 LTS (which can be checked by running `java --version`). You can use [Open JDK](https://openjdk.org/install/) Instead [Oracle].
- [Apache Maven](https://maven.apache.org/download.cgi) version 3.6.3 or above (which can be checked by running `mvn --version`).
- [PostgreSQL](https://www.postgresql.org/download/) version 15.0 or above
- [Google Cloud CLI](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe)
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
## Setup
There Are Properties you need to configure first.
### Configuration if you are directly using local machine

```js title="src\main\resources\application.properties"
spring.application.name=backend
server.port=8080
spring.app.jwtSecret=

spring.datasource.url=jdbc:postgresql://localhost:5432/arkopay?useSSL=false&stringtype=unspecified
spring.datasource.username=
spring.datasource.password=

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update

spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB
spring.directory-path=
logging.file.name=
logging.level.org.springframework=INFO
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n
security.basic.enabled=false
management.security.enabled=false
spring.jpa.show-sql=true

spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=
spring.mail.password=
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.domain=http://localhost:9093
spring.google-cloud.service-account-keys-path=
```

### Configuration if you are using Docker for local environment
```js title=".env"
DB_NAME=arkopay
DB_USERNAME=
DB_PASSWORD=
DOCKER_FILE=Dockerfile
IMAGE_APP=arkopay-backend
IMAGE_APP_VERSION=latest
```

## Running The Application

1. With Docker 
```js title="Terminal"
docker build -t {image name} .
docker-compose up
```
    
2. Without Docker
```js
mvn spring-boot:install
```


## Setup Document AI Processor

You can add headings and subheadings in one of two ways:

- Type `/heading` or `/h1`, `/h2`, or `/h3` to choose the heading size you want.
- Use Markdown shortcuts, like `#`, `##`, and `###`.
    - Create inline code by wrapping text with ``` (or with the shortcut `cmd/ctrl + e`).

## Setup Google Cloud Service for Application

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="LInux" default>
    Package contents.

    The `gcloud` CLI is available in package format for installation on Debian and Ubuntu systems. This package contains the `gcloud`, `gcloud alpha`, `gcloud beta`, `gsutil`, and `bq` commands only. It doesn't include `kubectl` or the App Engine extensions required to deploy an application using gcloud commands. If you want these components, you must install them separately.

    **Before you begin**

    Before you install the gcloud CLI, make sure that your operating system meets the following requirements:

    - It is an Ubuntu release that hasn't reached end-of-life or a Debian stable release that hasn't reached end-of-life
    - It has recently updated its packages:

        ```js
        sudo apt-get update
        ```
    - It has apt-transport-https and curl installed:

        ```js
        sudo apt-get install apt-transport-https ca-certificates gnupg curl
        ```
    
  </TabItem>
  <TabItem value="macOs" label="macOS">
    ```java
        class HelloWorld {
        public static void main(String args[]) {
            System.out.println("Hello, World");
        }
        }
    ```
  </TabItem>
  <TabItem value="banana" label="Windows">
    This is a banana 🍌
  </TabItem>
</Tabs>
##