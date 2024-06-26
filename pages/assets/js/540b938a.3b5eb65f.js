"use strict";(self.webpackChunkspring_boot_base_code_docs=self.webpackChunkspring_boot_base_code_docs||[]).push([[531],{3743:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(4848),t=n(8453);const s={sidebar_position:2,authors:[{name:"Yaman",title:"Basic"}]},i="Basic",o={id:"guides/development-tutorial/basic",title:"Basic",description:"Objective: Lay the foundational knowledge necessary for understanding more complex topics covered later in the tutorial.",source:"@site/docs/guides/development-tutorial/basic.md",sourceDirName:"guides/development-tutorial",slug:"/guides/development-tutorial/basic",permalink:"/spring-boot-base-code-docs/pages/docs/guides/development-tutorial/basic",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/development-tutorial/basic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,authors:[{name:"Yaman",title:"Basic"}]},sidebar:"tutorialSidebar",previous:{title:"Development Tutorial",permalink:"/spring-boot-base-code-docs/pages/docs/category/development-tutorial"},next:{title:"Code Guide",permalink:"/spring-boot-base-code-docs/pages/docs/guides/development-tutorial/code-guide"}},c={},d=[{value:"Design Pattern",id:"design-pattern",level:2},{value:"Project Structure",id:"project-structure",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"basic",children:"Basic"}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsx)(r.p,{children:"Objective: Lay the foundational knowledge necessary for understanding more complex topics covered later in the tutorial."})}),"\n",(0,a.jsx)(r.h2,{id:"design-pattern",children:"Design Pattern"}),"\n",(0,a.jsx)(r.p,{children:"This project utilizes the Service Repository design pattern, whereby all business logic is centralized within the service layer and data retrieval is managed by the repository layer. The architecture includes base classes such as BaseService, BaseModel, BaseDTO, and BaseRepository, which facilitate code reuse and scalability with minimal effort. For querying, the project avoids raw SQL queries and instead employs JPA Criteria Builder, basic JPA Repository, and Specification, enhancing flexibility for operations like pagination."}),"\n",(0,a.jsx)(r.mermaid,{value:"graph TD;\r\n    ClientLayer[Client Layer] --\x3e ServiceLayer[Service Layer];\r\n    ServiceLayer --\x3e RepositoryLayer[Repository Layer];\r\n    RepositoryLayer --\x3e Database[Database];"}),"\n",(0,a.jsx)(r.p,{children:"for big picture what the structure code look like here i provide the diagram of code"}),"\n",(0,a.jsx)(r.mermaid,{value:"graph TD;\r\n    Client[Client Layer] --\x3e|Data transfer| Controllers[Controllers]\r\n    Controllers --\x3e|Handle Requests| ServiceInterfaces[Service Interfaces]\r\n    ServiceInterfaces --\x3e|Business Logic| Services[Base Services]\r\n    Services --\x3e|Data Access| RepoInterfaces[Repository Interfaces]\r\n    RepoInterfaces --\x3e|CRUD Operations| Repositories[Base Repositories]\r\n    Repositories --\x3e|Interacts With| Database[Database]\r\n\r\n    classDef default stroke:#333,stroke-width:2px;\r\n    classDef database stroke:#333,stroke-width:2px;\r\n    class Database database"}),"\n",(0,a.jsx)(r.p,{children:"Further information regarding the Base Service provided in this section is available for detailed review."}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"../../category/code-base",children:"Code Base"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"basecode-backend\r\n\u2502   .env\r\n\u2502   docker-compose.yml\r\n\u2502   Dockerfile\r\n\u2502   Dockerfile.staging\r\n\u2502   pom.xml\r\n\u251c\u2500\u2500\u2500src\r\n\u2502   \u251c\u2500\u2500\u2500main\r\n\u2502   \u2502   \u251c\u2500\u2500\u2500java\r\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500com\r\n\u2502   \u2502   \u2502       \u2514\u2500\u2500\u2500basecode\r\n\u2502   \u2502   \u2502           \u2514\u2500\u2500\u2500backend\r\n\u2502   \u2502   \u2502               \u2502   BackendApplication.java\r\n\u2502   \u2502   \u2502               \u2502\r\n\u2502   \u2502   \u2502               \u251c\u2500\u2500\u2500base\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500annotations\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2514\u2500\u2500\u2500auth\r\n\u2502   \u2502   \u2502               \u2502   \u2502           AuthAspect.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502           ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500dto\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u251c\u2500\u2500\u2500data\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502       BaseData.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502       ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u251c\u2500\u2500\u2500requests\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502       BasePageRequest.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502       ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2514\u2500\u2500\u2500responses\r\n\u2502   \u2502   \u2502               \u2502   \u2502           BasicResponse.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502           ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500error\r\n\u2502   \u2502   \u2502               \u2502   \u2502       GenericError.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500exception\r\n\u2502   \u2502   \u2502               \u2502   \u2502       ErrorException.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500model\r\n\u2502   \u2502   \u2502               \u2502   \u2502       BaseModel.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500repositories\r\n\u2502   \u2502   \u2502               \u2502   \u2502       BaseRepository.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502       ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500services\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502   BaseService.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502   ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502   ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u2514\u2500\u2500\u2500utils\r\n\u2502   \u2502   \u2502               \u2502           ErrorUtils.java\r\n\u2502   \u2502   \u2502               \u2502\r\n\u2502   \u2502   \u2502               \u251c\u2500\u2500\u2500config\r\n\u2502   \u2502   \u2502               \u2502       AppConfig.java\r\n\u2502   \u2502   \u2502               \u2502       ...\r\n\u2502   \u2502   \u2502               \u2502\r\n\u2502   \u2502   \u2502               \u251c\u2500\u2500\u2500controllers\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500loan\r\n\u2502   \u2502   \u2502               \u2502   \u2502       LoanController.java\r\n\u2502   \u2502   \u2502               \u2502   ...\r\n\u2502   \u2502   \u2502               \u2502   \r\n\u2502   \u2502   \u2502               \u251c\u2500\u2500\u2500dto\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500data\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u251c\u2500\u2500\u2500auth\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502       AuthData.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502   ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500requests\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u251c\u2500\u2500\u2500loan\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502       LoanRequest.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502       ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502   ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u2514\u2500\u2500\u2500responses\r\n\u2502   \u2502   \u2502               \u251c\u2500\u2500\u2500helper\r\n\u2502   \u2502   \u2502               \u2502       FileUtils.java\r\n\u2502   \u2502   \u2502               \u2502       ...\r\n\u2502   \u2502   \u2502               \u2502\r\n\u2502   \u2502   \u2502               \u251c\u2500\u2500\u2500models\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500loan\r\n\u2502   \u2502   \u2502               \u2502   \u2502       Bank.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502       GenderType.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502       ...\r\n\u2502   \u2502   \u2502               \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500master\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2514\u2500\u2500\u2500documents\r\n\u2502   \u2502   \u2502               \u2502   \u2502           DocumentType.java\r\n\u2502   \u2502   \u2502               \u2502   ...\r\n\u2502   \u2502   \u2502               \u2502\r\n\u2502   \u2502   \u2502               \u251c\u2500\u2500\u2500repositories\r\n\u2502   \u2502   \u2502               \u2502   \u251c\u2500\u2500\u2500loan\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502   ITrnLoanRepository.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502   TrnLoanRepository.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2502\r\n\u2502   \u2502   \u2502               \u2502   \u2502   \u2514\u2500\u2500\u2500specifications\r\n\u2502   \u2502   \u2502               \u2502   \u2502           ILoanSpecifications.java\r\n\u2502   \u2502   \u2502               \u2502   \u2502           LoanSpecifications.java\r\n\u2502   \u2502   \u2502               \u2502   ...\r\n\u2502   \u2502   \u2502               \u2502\r\n\u2502   \u2502   \u2502               \u251c\u2500\u2500\u2500seeder\r\n\u2502   \u2502   \u2502               \u2502       DatabaseSeeder.java\r\n\u2502   \u2502   \u2502               \u2502\r\n\u2502   \u2502   \u2502               \u2514\u2500\u2500\u2500services\r\n\u2502   \u2502   \u2502                   \u2502\r\n\u2502   \u2502   \u2502                   \u251c\u2500\u2500\u2500loan\r\n\u2502   \u2502   \u2502                   \u2502       ILoanService.java\r\n\u2502   \u2502   \u2502                   \u2502       LoanService.java\r\n\u2502   \u2502   \u2502                   ...\r\n\u2502   \u2502   \u2502\r\n\u2502   \u2502   \u2514\u2500\u2500\u2500resources\r\n\u2502   \u2502       \u2502   application-localdocker.properties\r\n\u2502   \u2502       \u2502   application-sample.properties\r\n\u2502   \u2502       \u2502   application-staging.properties\r\n\u2502   \u2502       \u2502   application.properties\r\n\u2502   \u2502       \u2502\r\n\u2502   \u2502       \u251c\u2500\u2500\u2500static\r\n\u2502   \u2502       \u2514\u2500\u2500\u2500templates\r\n\u2502   \u2514\u2500\u2500\u2500test\r\n\u2502       \u2514\u2500\u2500\u2500java\r\n\u2502           \u2514\u2500\u2500\u2500com\r\n\u2502               \u2514\u2500\u2500\u2500basecode\r\n\u2502                   \u2514\u2500\u2500\u2500backend\r\n\u2502                           BackendApplicationTests.java\r\n\u2502\r\n\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var a=n(6540);const t={},s=a.createContext(t);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);