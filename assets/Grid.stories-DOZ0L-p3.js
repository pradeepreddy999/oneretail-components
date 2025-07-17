import{j as e}from"./index-DaCgpEyP.js";import{r as n}from"./iframe-NXzDd19o.js";import{K as S}from"./KendoGrid-DiFai3k1.js";import"./MultiSelect-DWMRR71e.js";import{c as y,g as h}from"./data-Dn6UxVQj.js";import"./index-D54f4zYA.js";function j({title:r,titleId:s,...i},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},i),r?n.createElement("title",{id:s},r):null,n.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),n.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const O=n.forwardRef(j),b=r=>{if(r.current===null)throw Error("Error downloading...");const s=r.current.workbookOptions(),i=s.sheets[0],o=i.rows;for(let t=0;t<o.length;t++){const c=o[t],l=c.cells;for(let a=0;a<l.length;a++){const d=l[a];c.type==="footer"&&(d.background="#7a7a7a",d.color="#fff")}}i.columns.forEach(t=>{delete t.width,t.autoWidth=!0}),r.current.save(s)},x=({viewBy:r,viewByOptions:s,metrics:i,metricOptions:o,title:u,data:t,columns:c,sort:l,isGridRowSelectable:a})=>{const[d,g]=n.useState(!1),w=n.useRef(null),v=()=>{g(!0),b(w)};return e.jsxs("div",{className:"p-4 bg-white rounded shadow-lg",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx("div",{children:r.join(", ")+s.join(", ")}),e.jsx("div",{children:i.join(", ")+o.join(", ")})]}),e.jsx("div",{className:"float-end",children:e.jsx("button",{className:`h-6 w-15 bg-[var(--screen-primary-color)] 
            rounded text-white flex items-center justify-center cursor-pointer`,onClick:v,children:d?e.jsx(O,{className:"h-5 w-7"}):"Export"})})]}),e.jsx("div",{className:"border-1 px-4 border-gray-300 rounded-lg",children:e.jsx(S,{title:u,data:t,columns:c,handleExportComplete:()=>g(!1),sort:l,excelRef:w,rowSelectable:a})})]})};x.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{viewBy:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},viewByOptions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},metrics:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},metricOptions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},groupBy:{required:!1,tsType:{name:"string"},description:""},groupByOptions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},sortBy:{required:!1,tsType:{name:"string"},description:""},sortOptions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},sort:{required:!0,tsType:{name:"Array",elements:[{name:"SortDescriptor"}],raw:"SortDescriptor[]"},description:""},isGridRowSelectable:{required:!1,tsType:{name:"boolean"},description:""}}};const{fn:f}=__STORYBOOK_MODULE_TEST__,_={title:"Stories/Grid",component:x,tags:["autodocs"],parameters:{layout:"fullscreen"}},m={args:{viewBy:[],viewByOptions:[],metrics:[],metricOptions:[],title:"Products",data:h,columns:y,sort:[{field:"id",dir:"asc"}],rowsSelected:{},onHeaderSelectionChange:f(),onSelectionChange:f(),isGridRowSelectable:!0}},p={args:{viewBy:[],viewByOptions:[],metrics:[],metricOptions:[],title:"Products",data:h,columns:y,sort:[{field:"id",dir:"asc"}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    viewBy: [] as string[],
    viewByOptions: [] as string[],
    metrics: [] as string[],
    metricOptions: [] as string[],
    title: "Products",
    data: gridData as [],
    columns: columns,
    sort: [{
      field: "id",
      dir: "asc"
    }],
    rowsSelected: {},
    onHeaderSelectionChange: fn(),
    onSelectionChange: fn(),
    isGridRowSelectable: true
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    viewBy: [] as string[],
    viewByOptions: [] as string[],
    metrics: [] as string[],
    metricOptions: [] as string[],
    title: "Products",
    data: gridData as [],
    columns: columns,
    sort: [{
      field: "id",
      dir: "asc"
    }]
  }
} satisfies Story`,...p.parameters?.docs?.source}}};const N=["WithRowSelection","WithoutRowSelection"];export{m as WithRowSelection,p as WithoutRowSelection,N as __namedExportsOrder,_ as default};
