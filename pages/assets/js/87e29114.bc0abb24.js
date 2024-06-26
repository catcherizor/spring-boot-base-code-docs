"use strict";(self.webpackChunkspring_boot_base_code_docs=self.webpackChunkspring_boot_base_code_docs||[]).push([[1572],{7005:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(4848),r=i(8453);const s={sidebar_position:3,authors:[{name:"Yaman",title:"Code Guide"}]},a="Code Guide",o={id:"guides/development-tutorial/code-guide",title:"Code Guide",description:"Objective: Delve deeper into coding standards, best practices, and intermediate techniques used in development.",source:"@site/docs/guides/development-tutorial/code-guide.md",sourceDirName:"guides/development-tutorial",slug:"/guides/development-tutorial/code-guide",permalink:"/spring-boot-base-code-docs/docs/guides/development-tutorial/code-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/development-tutorial/code-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,authors:[{name:"Yaman",title:"Code Guide"}]},sidebar:"tutorialSidebar",previous:{title:"Basic",permalink:"/spring-boot-base-code-docs/docs/guides/development-tutorial/basic"},next:{title:"Introduction",permalink:"/spring-boot-base-code-docs/docs/guides/development-tutorial/intro"}},d={},l=[{value:"Coding Standards",id:"coding-standards",level:2},{value:"Structured Use of Base Classes",id:"structured-use-of-base-classes",level:3},{value:"Dependency Injection and Component Management",id:"dependency-injection-and-component-management",level:3},{value:"Error Handling and Response",id:"error-handling-and-response",level:3},{value:"Security and Validation",id:"security-and-validation",level:3},{value:"Data Model Relationships",id:"data-model-relationships",level:3},{value:"Use of UUIDs",id:"use-of-uuids",level:3},{value:"Data Access and Querying",id:"data-access-and-querying",level:3},{value:"Exception Handling",id:"exception-handling",level:3},{value:"API Design",id:"api-design",level:2},{value:"Versioning and API Path Patterns",id:"versioning-and-api-path-patterns",level:3},{value:"File Handling in APIs",id:"file-handling-in-apis",level:3},{value:"Comprehensive HTTP Method Utilization",id:"comprehensive-http-method-utilization",level:3},{value:"API Documentation and Testing",id:"api-documentation-and-testing",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Error Exception",id:"error-exception",level:3},{value:"Error Message Definition",id:"error-message-definition",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"code-guide",children:"Code Guide"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Objective: Delve deeper into coding standards, best practices, and intermediate techniques used in development."})}),"\n",(0,t.jsx)(n.h2,{id:"coding-standards",children:"Coding Standards"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Guidelines for writing clean, maintainable code."})}),"\n",(0,t.jsx)(n.p,{children:"To ensure the creation of maintainable and scalable software within the Java ecosystem, it is imperative to adhere to structured and principled coding practices. This section provides guidelines centered around the utilization of base classes, interfaces, and architectural components conducive to clean, professional, and effective software development."}),"\n",(0,t.jsx)(n.h3,{id:"structured-use-of-base-classes",children:"Structured Use of Base Classes"}),"\n",(0,t.jsx)(n.p,{children:"Whenever feasible, leverage base classes for models, DTOs (Data Transfer Objects), services, and other system components. This approach promotes reusability and consistency throughout the application architecture. Base classes should encapsulate common logic and properties that are shared across various derived classes."}),"\n",(0,t.jsx)(n.h3,{id:"dependency-injection-and-component-management",children:"Dependency Injection and Component Management"}),"\n",(0,t.jsx)(n.p,{children:"All classes that are intended for injection into others should either implement an interface or be available as static classes, enhancing testability and modularity. It is recommended to utilize constructor injection for dependencies to promote immutability and facilitate easier unit testing. Avoid using the @Autowired annotation directly and instead opt for @RequiredArgsConstructor to automatically generate constructors with required dependencies."}),"\n",(0,t.jsx)(n.h3,{id:"error-handling-and-response",children:"Error Handling and Response"}),"\n",(0,t.jsx)(n.p,{children:"Centralize error response logic within an ErrorUtils class, which should contain all error message definitions and handling utilities. This centralization simplifies modifications and enhances error management consistency throughout your application."}),"\n",(0,t.jsx)(n.h3,{id:"security-and-validation",children:"Security and Validation"}),"\n",(0,t.jsx)(n.p,{children:"Secure APIs using the @Authorized annotation to manage access control effectively and ensure that each API endpoint is accessed only by authorized users. Apply the @Valid annotation to request DTOs to enforce validation constraints defined within Spring's validation framework, thereby ensuring that incoming data adheres to expected formats and constraints before being processed by the service layers."}),"\n",(0,t.jsx)(n.h3,{id:"data-model-relationships",children:"Data Model Relationships"}),"\n",(0,t.jsx)(n.p,{children:"Define relationships between entities explicitly using annotations like @ManyToOne and @OneToMany. Avoid manually creating properties such as province_id in the City table; instead, allow JPA (Java Persistence API) to manage foreign keys and relationships automatically."}),"\n",(0,t.jsx)(n.h3,{id:"use-of-uuids",children:"Use of UUIDs"}),"\n",(0,t.jsx)(n.p,{children:"Prefer UUID as the identifier type for models to ensure global uniqueness across distributed systems, enhancing the robustness and scalability of the application."}),"\n",(0,t.jsx)(n.h3,{id:"data-access-and-querying",children:"Data Access and Querying"}),"\n",(0,t.jsx)(n.p,{children:"For complex data retrieval operations, utilize the Criteria Builder and Specifications features of JPA. This method supports dynamic query construction and simplifies querying by abstracting database-specific details, making code more maintainable and portable."}),"\n",(0,t.jsx)(n.h3,{id:"exception-handling",children:"Exception Handling"}),"\n",(0,t.jsx)(n.p,{children:"Employ try-catch blocks judiciously to handle exceptions and perform checks within the service layer. Ensure that all catch blocks handle exceptions appropriately, either by logging an error, performing a compensating action, or rethrowing as a new, context-specific exception to be handled further up the stack."}),"\n",(0,t.jsx)(n.p,{children:"By following these guidelines, developers can produce software that not only meets functional requirements but is also maintainable, scalable, and robust\u2014qualities essential for long-term success in software development projects."}),"\n",(0,t.jsx)(n.h2,{id:"api-design",children:"API Design"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Principles for designing robust and scalable APIs."})}),"\n",(0,t.jsx)(n.p,{children:"To ensure the development of robust and scalable APIs, adhere to structured and well-defined coding and architectural practices. Below is a detailed guide on designing professional, maintainable, and scalable APIs incorporating best practices in API path versioning, file handling, method usage, documentation, and response structure."}),"\n",(0,t.jsx)(n.h3,{id:"versioning-and-api-path-patterns",children:"Versioning and API Path Patterns"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"API Versioning:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Employ a versioning strategy in your API paths to facilitate backward compatibility and iteration on the API without disrupting existing clients. Use a version prefix in your API paths, such as /api/v1/, to delineate major versions of your API."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Path Structure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Structure your API paths to reflect the organizational model of your application. For instance, use a pattern like /[module]/[submodule-optional]/[function] to maintain a logical, hierarchical approach to API endpoint paths. This pattern aids in logically grouping functionalities and simplifies navigation and control."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"file-handling-in-apis",children:"File Handling in APIs"}),"\n",(0,t.jsx)(n.p,{children:"Avoid Direct File Uploads in Request Bodies:"}),"\n",(0,t.jsx)(n.p,{children:"For file uploads, do not directly embed files within API request bodies. Instead, provide a dedicated file upload endpoint that returns a URL or resource identifier of the uploaded file. This approach minimizes the complexity of your main API endpoints and enhances performance by handling file data separately."}),"\n",(0,t.jsx)(n.h3,{id:"comprehensive-http-method-utilization",children:"Comprehensive HTTP Method Utilization"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Utilize All Relevant HTTP Methods:"})}),"\n",(0,t.jsx)(n.p,{children:"Make full use of HTTP methods such as GET, POST, PUT, PATCH, and DELETE to align with the principles of RESTful architecture. Each method should correspond to specific actions within your API: creating, reading, updating, and deleting resources."}),"\n",(0,t.jsx)(n.h3,{id:"api-documentation-and-testing",children:"API Documentation and Testing"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Documentation with Examples:"})}),"\n",(0,t.jsx)(n.p,{children:"Maintain comprehensive API documentation that includes example requests and responses. Utilize tools like Postman to create and share collections that demonstrate how to use the API under various conditions, including handling errors and validations."}),"\n",(0,t.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Techniques for handling and logging errors gracefully in your applications."})}),"\n",(0,t.jsx)(n.h3,{id:"error-exception",children:"Error Exception"}),"\n",(0,t.jsx)(n.p,{children:"To ensure proper error handling and clear communication of error messages, always include throws ErrorException in your method signatures for validations. Additionally, use try-catch blocks within service functions to handle exceptions effectively."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"@Override\r\npublic CheckUserData checkUser(String username) throws ErrorException {\r\n    try {\r\n        if(Strings.isEmpty(username)) {\r\n            throw new ErrorException(ErrorUtils.NotFound);\r\n        }\r\n        User user = this.repository.findByUsername(username).orElseThrow(() -> new ErrorException(ErrorUtils.NotFound));\r\n\r\n        return new CheckUserData().mapToData(user);\r\n    } catch (ErrorException e) {\r\n        throw e;\r\n    } catch (Exception e) {\r\n        throw new ErrorException(ErrorUtils.DatabaseGenericError);\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"error-message-definition",children:"Error Message Definition"}),"\n",(0,t.jsx)(n.p,{children:"There is a static class named ErrorUtils.java for defining error messages. You should use this class to handle error messages consistently. The static error messages in this class take three parameters: status, message, and code. This structure allows for easy tracing of errors based on their code."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'public class ErrorUtils {\r\n    public static GenericError unAuthorized = new GenericError("false","Unauthorized","1012");\r\n\r\n    public static GenericError validate(String message) {\r\n        return new GenericError("false",message,"400");\r\n    }\r\n    public static GenericError userNotFound = new GenericError("false","User Not Found","1000");\r\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);