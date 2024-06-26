"use strict";(self.webpackChunkspring_boot_base_code_docs=self.webpackChunkspring_boot_base_code_docs||[]).push([[2916],{5184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(4848),a=t(8453);const s={sidebar_position:1,authors:[{name:"Yaman",title:"Models"}]},o="Models",i={id:"code-base/models",title:"Models",description:"Base Models",source:"@site/docs/code-base/models.md",sourceDirName:"code-base",slug:"/code-base/models",permalink:"/spring-boot-base-code-docs/pages/docs/code-base/models",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code-base/models.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,authors:[{name:"Yaman",title:"Models"}]},sidebar:"tutorialSidebar",previous:{title:"Code Base",permalink:"/spring-boot-base-code-docs/pages/docs/category/code-base"},next:{title:"Data",permalink:"/spring-boot-base-code-docs/pages/docs/code-base/data"}},d={},l=[{value:"Base Models",id:"base-models",level:2},{value:"Basic How To Use",id:"basic-how-to-use",level:2},{value:"Extra",id:"extra",level:2},{value:"Relationship Model",id:"relationship-model",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"models",children:"Models"}),"\n",(0,r.jsx)(n.h2,{id:"base-models",children:"Base Models"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'@MappedSuperclass\r\n@Getter\r\n@Setter\r\npublic class BaseModel {\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.AUTO)\r\n    private UUID id = UUID.randomUUID();\r\n\r\n    @Temporal(TemporalType.TIMESTAMP)\r\n    @Column(name = "created_at", updatable = false)\r\n    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'", timezone = "Asia/jakarta")\r\n    public Date createdAt = new Date();\r\n\r\n    @Temporal(TemporalType.TIMESTAMP)\r\n    @Version\r\n    @Column(name = "updated_at")\r\n    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'", timezone = "Asia/jakarta")\r\n    public Date updatedAt = new Date();\r\n\r\n    @Temporal(TemporalType.TIMESTAMP)\r\n    @Column(name = "deleted_at", updatable = false)\r\n    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'", timezone = "Asia/jakarta")\r\n    public Date deleted_at;\r\n\r\n    @Column(name = "is_deleted")\r\n    public boolean isDeleted;\r\n\r\n    @PrePersist\r\n    protected void onCreate() {\r\n        createdAt = new Date();\r\n    }\r\n\r\n    @PreUpdate\r\n    protected void onUpdate() {\r\n        updatedAt = new Date();\r\n    }\r\n}\r\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"The system has a base model class because tables in the backend follow a standard for soft deletion and logging when data is created, deleted, and updated. By using this class, you don't need to define these columns again."}),"\n",(0,r.jsx)(n.h2,{id:"basic-how-to-use",children:"Basic How To Use"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'@Getter\r\n@Setter\r\n@Entity\r\n@Builder\r\n@Table(name = "banks", schema = "master")\r\n@NoArgsConstructor\r\n@AllArgsConstructor\r\npublic class Bank extends BaseModel {\r\n    private String name;\r\n\r\n    private String bankCode;\r\n}\r\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the example above, we demonstrate how to use a base model and create a model for a table. First, you need to define the getter and setter methods using the Lombok library. Then, define the name of the table and, if required, the schema, especially if the system employs a multiple schemas strategy.Afterward, define other Lombok properties as needed."}),"\n",(0,r.jsx)(n.h2,{id:"extra",children:"Extra"}),"\n",(0,r.jsx)(n.h3,{id:"relationship-model",children:"Relationship Model"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'@Getter\r\n@Setter\r\n@Entity\r\n@Builder\r\n@Table(name = "provinces", schema = "master")\r\n@NoArgsConstructor\r\n@AllArgsConstructor\r\npublic class Province extends BaseModel {\r\n    private Integer code;\r\n    private String name;\r\n    private String postalCodes;\r\n    private String latitude;\r\n    private String longitude;\r\n}\r\n\r\n@Getter\r\n@Setter\r\n@Entity\r\n@Builder\r\n@Table(name = "cities", schema = "master")\r\n@NoArgsConstructor\r\n@AllArgsConstructor\r\npublic class City extends BaseModel {\r\n    private Integer code;\r\n    private String name;\r\n    private String postalCodes;\r\n\r\n    @ManyToOne(cascade = CascadeType.ALL)\r\n    @JoinColumn(name = "province_id")\r\n    private Province province;\r\n    private String latitude;\r\n    private String longitude;\r\n}\r\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the example above, the City entity uses the @ManyToOne annotation to define the relationship between City and Province. For best practices, always use the object reference to define relationships instead of using property column names such as private UUID province_id. This ensures a more object-oriented approach and maintains the integrity of the relationship within the entity model."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);