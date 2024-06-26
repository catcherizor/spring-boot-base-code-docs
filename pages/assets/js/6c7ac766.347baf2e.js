"use strict";(self.webpackChunkspring_boot_base_code_docs=self.webpackChunkspring_boot_base_code_docs||[]).push([[8052],{1458:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(4848),r=s(8453);const i={sidebar_position:3,authors:[{name:"Yaman",title:"Repository"}]},a="Repository",o={id:"code-base/repository",title:"Repository",description:"Base Repository",source:"@site/docs/code-base/repository.md",sourceDirName:"code-base",slug:"/code-base/repository",permalink:"/spring-boot-base-code-docs/pages/docs/code-base/repository",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code-base/repository.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,authors:[{name:"Yaman",title:"Repository"}]},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/spring-boot-base-code-docs/pages/docs/code-base/data"},next:{title:"Specification",permalink:"/spring-boot-base-code-docs/pages/docs/code-base/specification"}},c={},d=[{value:"Base Repository",id:"base-repository",level:2},{value:"Interface",id:"interface",level:3},{value:"Base Class",id:"base-class",level:3},{value:"Basic How To Use",id:"basic-how-to-use",level:2},{value:"Interface",id:"interface-1",level:3},{value:"Base Class",id:"base-class-1",level:3},{value:"Explanation",id:"explanation",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"repository",children:"Repository"}),"\n",(0,t.jsx)(n.h2,{id:"base-repository",children:"Base Repository"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"BaseRepository"})," class is designed to provide a base for handling common repository operations. It implements the ",(0,t.jsx)(n.code,{children:"IBaseRepository"})," interface and extends ",(0,t.jsx)(n.code,{children:"SimpleJpaRepository"}),", making it a robust and reusable component for data access. By defining common repository methods such as ",(0,t.jsx)(n.code,{children:"findById"}),", ",(0,t.jsx)(n.code,{children:"save"}),", ",(0,t.jsx)(n.code,{children:"getAll"}),", and ",(0,t.jsx)(n.code,{children:"isEmpty"}),", the ",(0,t.jsx)(n.code,{children:"BaseRepository"})," class simplifies CRUD operations and promotes code reuse."]}),"\n",(0,t.jsxs)(n.p,{children:["The goal of the ",(0,t.jsx)(n.code,{children:"BaseRepository"})," class is to increase reusability and maintain tidy, clean code, ensuring that developers do not need to create functions for simple logic repeatedly. It provides a standard way to handle entity management, especially in scenarios involving soft deletion, by encapsulating common operations within a single repository class. This approach fosters a more organized and efficient codebase."]}),"\n",(0,t.jsx)(n.h3,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"public interface IBaseRepository<M> {\r\n    Optional<M> findById(UUID id);\r\n    <S extends M> S save(S entity);\r\n    EntityManager getEntityManager();\r\n    List<M> getAll();\r\n    Boolean isEmpty();\r\n}\r\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"base-class",children:"Base Class"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'\r\npublic class BaseRepository<M> extends SimpleJpaRepository<M, UUID> implements IBaseRepository<M> {\r\n    private final EntityManager em;\r\n    private final Class<M> entityClass;\r\n\r\n    public BaseRepository(Class<M> domainClass, EntityManager entityManager) {\r\n        super(domainClass, entityManager);\r\n        this.em = entityManager;\r\n        this.entityClass = domainClass;\r\n    }\r\n\r\n\r\n    @Override\r\n    public EntityManager getEntityManager() {\r\n        return this.em;\r\n    }\r\n\r\n    @Override\r\n    public List<M> getAll() {\r\n        CriteriaBuilder cb = this.getEntityManager().getCriteriaBuilder();\r\n        CriteriaQuery<M> cq = cb.createQuery(entityClass);\r\n\r\n        Root<M> usersRoot = cq.from(entityClass);\r\n        List<Predicate> predicates = new ArrayList<>();\r\n\r\n        Predicate notDeleted = cb.equal(usersRoot.get("isDeleted"), false);\r\n        predicates.add(notDeleted);\r\n       \r\n\r\n        cq.where(predicates.toArray(new Predicate[0]));\r\n        TypedQuery<M> query = this.getEntityManager().createQuery(cq);\r\n        return query.getResultList();\r\n    }\r\n\r\n\r\n    @Override\r\n    public Boolean isEmpty() {\r\n        CriteriaBuilder cb = this.getEntityManager().getCriteriaBuilder();\r\n        CriteriaQuery<Long> cq = cb.createQuery(Long.class);\r\n\r\n        Root<M> root = cq.from(entityClass);\r\n        List<Predicate> predicates = new ArrayList<>();\r\n\r\n        Predicate notDeleted = cb.equal(root.get("isDeleted"), false);\r\n        predicates.add(notDeleted);\r\n\r\n        cq.where(predicates.toArray(new Predicate[0]));\r\n        cq.select(cb.count(root.get("id")));\r\n\r\n        TypedQuery<Long> query = this.getEntityManager().createQuery(cq).setMaxResults(1);\r\n        Long result = query.getSingleResult();\r\n\r\n        return result != null ? result == 0 : false;\r\n    }\r\n\r\n}\r\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"basic-how-to-use",children:"Basic How To Use"}),"\n",(0,t.jsx)(n.h3,{id:"interface-1",children:"Interface"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IBankRepository"})," interface extends the ",(0,t.jsx)(n.code,{children:"IBaseRepository"})," interface, adding specific methods for the ",(0,t.jsx)(n.code,{children:"Bank"})," entity. This allows for custom query methods such as finding a bank by its code or saving multiple bank entities at once."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"public interface IBankRepository extends IBaseRepository<Bank> {\r\n    Optional<Bank> findByBankCode(String bankCode);\r\n    List<Bank> findAll();\r\n    <S extends Bank> List<S> saveAll(Iterable<S> entities);\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"base-class-1",children:"Base Class"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"BankRepository"})," class extends the ",(0,t.jsx)(n.code,{children:"BaseRepository"})," class and implements the ",(0,t.jsx)(n.code,{children:"IBankRepository"})," interface. This setup leverages the common functionalities provided by ",(0,t.jsx)(n.code,{children:"BaseRepository"})," while also allowing for specific implementations related to the ",(0,t.jsx)(n.code,{children:"Bank"})," entity."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"@Repository\r\npublic class BankRepository extends BaseRepository<Bank> implements IBankRepository {\r\n\r\n    public BankRepository(EntityManager entityManager) {\r\n        super(Bank.class, entityManager);\r\n    }\r\n\r\n    // Additional custom methods can be implemented here\r\n\r\n    ...\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,t.jsx)(n.p,{children:"In the example above, we demonstrate how to use a base data repository to create and retrieve data for repository functions. First, you need to define the getter and setter methods using the Lombok library. Then, define the Model Class that will be used for the Data Class."}),"\n",(0,t.jsxs)(n.p,{children:["By extending ",(0,t.jsx)(n.code,{children:"BaseRepository"})," and implementing the custom ",(0,t.jsx)(n.code,{children:"IBankRepository"})," interface, you ensure a clean, reusable, and maintainable approach to data access within your application. This setup promotes code reuse and simplifies the management of entity-specific repository methods."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);