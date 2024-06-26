"use strict";(self.webpackChunkspring_boot_base_code_docs=self.webpackChunkspring_boot_base_code_docs||[]).push([[6806],{706:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=r(4848),o=r(8453);const s={sidebar_position:1,authors:[{name:"Yaman",title:"Getting Started"}]},t="Getting Started",a={id:"guides/getting-started",title:"Getting Started",description:"To Run & Install Application there are some thing you need to know and following steps",source:"@site/docs/guides/getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/spring-boot-base-code-docs/pages/docs/guides/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,authors:[{name:"Yaman",title:"Getting Started"}]},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/spring-boot-base-code-docs/pages/docs/category/guides"},next:{title:"Development Tutorial",permalink:"/spring-boot-base-code-docs/pages/docs/category/development-tutorial"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Setup Base Application",id:"setup-base-application",level:2},{value:"Configuration if you are directly using local machine",id:"configuration-if-you-are-directly-using-local-machine",level:3},{value:"Configuration if you are using Docker for local environment",id:"configuration-if-you-are-using-docker-for-local-environment",level:3},{value:"Running The Application",id:"running-the-application",level:2},{value:"Setup Document AI Processor",id:"setup-document-ai-processor",level:2},{value:"Required Processor Key",id:"required-processor-key",level:3},{value:"Document AI Properties",id:"document-ai-properties",level:3},{value:"Setup Google Cloud CLI for Application",id:"setup-google-cloud-cli-for-application",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.p,{children:"To Run & Install Application there are some thing you need to know and following steps"}),"\n",(0,i.jsx)(n.h1,{id:"the-basics",children:"The Basics"}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/downloads/",children:"Java"})," version 17.0.7 2023-04-18 LTS (which can be checked by running ",(0,i.jsx)(n.code,{children:"java --version"}),"). You can use ",(0,i.jsx)(n.a,{href:"https://openjdk.org/install/",children:"Open JDK"})," Instead [Oracle]."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://maven.apache.org/download.cgi",children:"Apache Maven"})," version 3.6.3 or above (which can be checked by running ",(0,i.jsx)(n.code,{children:"mvn --version"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.postgresql.org/download/",children:"PostgreSQL"})," version 15.0 or above"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe",children:"Google Cloud CLI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When installing Node.js, you are recommended to check all checkboxes related to dependencies."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup-base-application",children:"Setup Base Application"}),"\n",(0,i.jsx)(n.p,{children:"There Are Properties you need to configure first."}),"\n",(0,i.jsx)(n.h3,{id:"configuration-if-you-are-directly-using-local-machine",children:"Configuration if you are directly using local machine"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="src\\main\\resources\\application.properties"',children:"spring.application.name=backend\r\nserver.port=8080\r\nspring.app.jwtSecret=\r\n\r\nspring.datasource.url=jdbc:postgresql://localhost:5432/basecode?useSSL=false&stringtype=unspecified\r\nspring.datasource.username=\r\nspring.datasource.password=\r\n\r\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect\r\nspring.jpa.hibernate.ddl-auto=update\r\n\r\nspring.servlet.multipart.max-file-size=10MB\r\nspring.servlet.multipart.max-request-size=10MB\r\nspring.directory-path=\r\nlogging.file.name=\r\nlogging.level.org.springframework=INFO\r\nlogging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n\r\nsecurity.basic.enabled=false\r\nmanagement.security.enabled=false\r\nspring.jpa.show-sql=true\r\n\r\nspring.mail.host=smtp.gmail.com\r\nspring.mail.port=587\r\nspring.mail.username=\r\nspring.mail.password=\r\nspring.mail.properties.mail.smtp.auth=true\r\nspring.mail.properties.mail.smtp.starttls.enable=true\r\nspring.domain=http://localhost:9093\r\nspring.google-cloud.service-account-keys-path=\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configuration-if-you-are-using-docker-for-local-environment",children:"Configuration if you are using Docker for local environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title=".env"',children:"DB_NAME=basecode\r\nDB_USERNAME=\r\nDB_PASSWORD=\r\nDOCKER_FILE=Dockerfile\r\nIMAGE_APP=basecode-backend\r\nIMAGE_APP_VERSION=latest\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-the-application",children:"Running The Application"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"With Docker"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="Terminal"',children:"docker build -t {image name} .\r\ndocker-compose up\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Without Docker"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"mvn spring-boot:install\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setup-document-ai-processor",children:"Setup Document AI Processor"}),"\n",(0,i.jsxs)(n.p,{children:["You can following this link for the installation and setup ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/document-ai/docs/setup",children:"Document AI Setup"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Enable service in Google cloud service for Cloud Document AI API"}),"\n",(0,i.jsx)(n.li,{children:"After Enable the service go to menu Solutions -> All Products and click Document AI"}),"\n",(0,i.jsx)(n.li,{children:"Create Custom Processor, you must create 2 processor KTP and NPWP, please provide images for that 2 documents for training processor purpose"}),"\n",(0,i.jsx)(n.li,{children:"Then you can start to labeling image with key that have already defined in backend"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"required-processor-key",children:"Required Processor Key"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"KTP KEY"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"date_of_birth\r\ncitizenship\r\nmarital_status\r\nreligion\r\njob_status\r\nblood_group\r\nfullname\r\ngender\r\nneighborhood_association_and_unit\r\nnik\r\nsubdistrict\r\naddress\r\nvalid_until\r\nward_or_village\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NPWP KEY"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"taxpayer_identity\r\nserial_code\r\nserial_code_16\r\nkpp_name\r\naddress\r\nregistration_date\n"})}),"\n",(0,i.jsx)(n.h3,{id:"document-ai-properties",children:"Document AI Properties"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"projectId\r\nlocation\r\nprocessorIdKTP\r\nprocessorIdNPWP\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[projectId] from dashboard of google cloud in project information section, project number properties"}),"\n",(0,i.jsx)(n.li,{children:'[location] the default is "us"'}),"\n",(0,i.jsx)(n.li,{children:"[processorId] from Overview of processor in basic information section"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup-google-cloud-cli-for-application",children:"Setup Google Cloud CLI for Application"}),"\n",(0,i.jsxs)(n.p,{children:["You can following this link for the installation and setup ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install#windows",children:"Install the gcloud CLI"})]}),"\n",(0,i.jsx)(n.h2,{id:""})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var i=r(6540);const o={},s=i.createContext(o);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);