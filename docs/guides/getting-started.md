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
## Setup Base Application
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

You can following this link for the installation and setup [Document AI Setup](https://cloud.google.com/document-ai/docs/setup)


1. Enable service in Google cloud service for Cloud Document AI API 
2. After Enable the service go to menu Solutions -> All Products and click Document AI
3. Create Custom Processor, you must create 2 processor KTP and NPWP, please provide images for that 2 documents for training processor purpose
4. Then you can start to labeling image with key that have already defined in backend
### Required Processor Key
**KTP KEY**
```js
date_of_birth
citizenship
marital_status
religion
job_status
blood_group
fullname
gender
neighborhood_association_and_unit
nik
subdistrict
address
valid_until
ward_or_village
```

**NPWP KEY**

```js
taxpayer_identity
serial_code
serial_code_16
kpp_name
address
registration_date
```

### Document AI Properties
```js
projectId
location
processorIdKTP
processorIdNPWP
```
- [projectId] from dashboard of google cloud in project information section, project number properties
- [location] the default is "us"
- [processorId] from Overview of processor in basic information section

## Setup Google Cloud CLI for Application
You can following this link for the installation and setup [Install the gcloud CLI](https://cloud.google.com/sdk/docs/install#windows)
##