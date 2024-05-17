---
sidebar_position: 3
authors:
  - name: Yaman
    title: Code Guide
---
# Code Guide
:::note
Objective: Delve deeper into coding standards, best practices, and intermediate techniques used in development.
:::

## Coding Standards
:::info
Guidelines for writing clean, maintainable code.
:::

To ensure the creation of maintainable and scalable software within the Java ecosystem, it is imperative to adhere to structured and principled coding practices. This section provides guidelines centered around the utilization of base classes, interfaces, and architectural components conducive to clean, professional, and effective software development.

### Structured Use of Base Classes
Whenever feasible, leverage base classes for models, DTOs (Data Transfer Objects), services, and other system components. This approach promotes reusability and consistency throughout the application architecture. Base classes should encapsulate common logic and properties that are shared across various derived classes.

### Dependency Injection and Component Management
All classes that are intended for injection into others should either implement an interface or be available as static classes, enhancing testability and modularity. It is recommended to utilize constructor injection for dependencies to promote immutability and facilitate easier unit testing. Avoid using the @Autowired annotation directly and instead opt for @RequiredArgsConstructor to automatically generate constructors with required dependencies.

### Error Handling and Response
Centralize error response logic within an ErrorUtils class, which should contain all error message definitions and handling utilities. This centralization simplifies modifications and enhances error management consistency throughout your application.

### Security and Validation
Secure APIs using the @Authorized annotation to manage access control effectively and ensure that each API endpoint is accessed only by authorized users. Apply the @Valid annotation to request DTOs to enforce validation constraints defined within Spring's validation framework, thereby ensuring that incoming data adheres to expected formats and constraints before being processed by the service layers.

### Data Model Relationships
Define relationships between entities explicitly using annotations like @ManyToOne and @OneToMany. Avoid manually creating properties such as province_id in the City table; instead, allow JPA (Java Persistence API) to manage foreign keys and relationships automatically.

### Use of UUIDs
Prefer UUID as the identifier type for models to ensure global uniqueness across distributed systems, enhancing the robustness and scalability of the application.

### Data Access and Querying
For complex data retrieval operations, utilize the Criteria Builder and Specifications features of JPA. This method supports dynamic query construction and simplifies querying by abstracting database-specific details, making code more maintainable and portable.

### Exception Handling
Employ try-catch blocks judiciously to handle exceptions and perform checks within the service layer. Ensure that all catch blocks handle exceptions appropriately, either by logging an error, performing a compensating action, or rethrowing as a new, context-specific exception to be handled further up the stack.

By following these guidelines, developers can produce software that not only meets functional requirements but is also maintainable, scalable, and robust—qualities essential for long-term success in software development projects.

## API Design
:::info
Principles for designing robust and scalable APIs.
:::

To ensure the development of robust and scalable APIs, adhere to structured and well-defined coding and architectural practices. Below is a detailed guide on designing professional, maintainable, and scalable APIs incorporating best practices in API path versioning, file handling, method usage, documentation, and response structure.

### Versioning and API Path Patterns
1. API Versioning:
    - Employ a versioning strategy in your API paths to facilitate backward compatibility and iteration on the API without disrupting existing clients. Use a version prefix in your API paths, such as /api/v1/, to delineate major versions of your API.

2. Path Structure:
    - Structure your API paths to reflect the organizational model of your application. For instance, use a pattern like /[module]/[submodule-optional]/[function] to maintain a logical, hierarchical approach to API endpoint paths. This pattern aids in logically grouping functionalities and simplifies navigation and control.

### File Handling in APIs
Avoid Direct File Uploads in Request Bodies:

For file uploads, do not directly embed files within API request bodies. Instead, provide a dedicated file upload endpoint that returns a URL or resource identifier of the uploaded file. This approach minimizes the complexity of your main API endpoints and enhances performance by handling file data separately.

### Comprehensive HTTP Method Utilization
**Utilize All Relevant HTTP Methods:**

Make full use of HTTP methods such as GET, POST, PUT, PATCH, and DELETE to align with the principles of RESTful architecture. Each method should correspond to specific actions within your API: creating, reading, updating, and deleting resources.

### API Documentation and Testing
**Documentation with Examples:**

Maintain comprehensive API documentation that includes example requests and responses. Utilize tools like Postman to create and share collections that demonstrate how to use the API under various conditions, including handling errors and validations.

## Error Handling
:::info
Techniques for handling and logging errors gracefully in your applications.
:::

### Error Exception
To ensure proper error handling and clear communication of error messages, always include throws ErrorException in your method signatures for validations. Additionally, use try-catch blocks within service functions to handle exceptions effectively.
```js
@Override
public CheckUserData checkUser(String username) throws ErrorException {
    try {
        if(Strings.isEmpty(username)) {
            throw new ErrorException(ErrorUtils.NotFound);
        }
        User user = this.repository.findByUsername(username).orElseThrow(() -> new ErrorException(ErrorUtils.NotFound));

        return new CheckUserData().mapToData(user);
    } catch (ErrorException e) {
        throw e;
    } catch (Exception e) {
        throw new ErrorException(ErrorUtils.DatabaseGenericError);
    }
}
```
### Error Message Definition
There is a static class named ErrorUtils.java for defining error messages. You should use this class to handle error messages consistently. The static error messages in this class take three parameters: status, message, and code. This structure allows for easy tracing of errors based on their code.

```js
public class ErrorUtils {
    public static GenericError unAuthorized = new GenericError("false","Unauthorized","1012");

    public static GenericError validate(String message) {
        return new GenericError("false",message,"400");
    }
    public static GenericError userNotFound = new GenericError("false","User Not Found","1000");
}
```

