"use strict";(self.webpackChunkspring_boot_base_code_docs=self.webpackChunkspring_boot_base_code_docs||[]).push([[3021],{3934:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=t(4848),o=t(8453);const n={sidebar_position:2,authors:[{name:"Yaman",title:"Data"}]},r="Data",i={id:"code-base/data",title:"Data",description:"Base Data",source:"@site/docs/code-base/data.md",sourceDirName:"code-base",slug:"/code-base/data",permalink:"/spring-boot-base-code-docs/pages/docs/code-base/data",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code-base/data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,authors:[{name:"Yaman",title:"Data"}]},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/spring-boot-base-code-docs/pages/docs/code-base/models"},next:{title:"Repository",permalink:"/spring-boot-base-code-docs/pages/docs/code-base/repository"}},d={},c=[{value:"Base Data",id:"base-data",level:2},{value:"Basic How To Use",id:"basic-how-to-use",level:2}];function l(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"data",children:"Data"}),"\n",(0,s.jsx)(a.h2,{id:"base-data",children:"Base Data"}),"\n",(0,s.jsx)(a.p,{children:"The BaseData class is an abstract class designed to provide a base for mapping model objects to data transfer objects (DTOs). By defining the mapToData method as an abstract method, any subclass must provide an implementation for mapping a model object of type M to a data object of type D."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-js",children:"public abstract class BaseData<M, D> {\r\n    public abstract D mapToData(M model);\r\n}\n"})}),"\n",(0,s.jsx)(a.p,{children:"The BaseData class simplifies the process of converting entities (models) to data transfer objects (DTOs) by providing a common interface. This is especially useful in service classes where such conversions are frequently needed. You can see the sample of uses funcntion of mapToData in BaseService Class"}),"\n",(0,s.jsx)(a.h2,{id:"basic-how-to-use",children:"Basic How To Use"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-js",children:"\r\n@Data\r\n@EqualsAndHashCode(callSuper=false)\r\npublic class CityData extends BaseData<City, CityData> {\r\n    private UUID id;\r\n    private Integer code;\r\n    private String name;\r\n    private String postalCodes;\r\n    private String latitude;\r\n    private String longitude;\r\n    private ProvinceData province;\r\n\r\n    @Override\r\n    public CityData mapToData(City model) {\r\n        CityData data = new CityData();\r\n        data.setId(model.getId());\r\n        data.setName(model.getName());\r\n        data.setCode(model.getCode());\r\n        data.setPostalCodes(model.getPostalCodes());\r\n        data.setLatitude(model.getLatitude());\r\n        data.setLongitude(model.getLongitude());\r\n        data.setProvince(new ProvinceData().mapToData(model.getProvince()));\r\n\r\n        return data;\r\n    }\r\n}\r\n\n"})}),"\n",(0,s.jsx)(a.p,{children:"In the example above, we demonstrate how to use a base data and create a data for a result data in repository function. First, you need to define the getter and setter methods using the Lombok library. Then, define the Model Class that uses for the Data Class."})]})}function p(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>i});var s=t(6540);const o={},n=s.createContext(o);function r(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);