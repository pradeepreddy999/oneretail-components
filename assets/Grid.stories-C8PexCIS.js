import{j as e}from"./index-fXlvfCI1.js";import{r}from"./iframe-UZovMaw-.js";import{K as f}from"./KendoGrid-D_Ne_fl4.js";import"./MultiSelect-DU1m1p1Y.js";import{c as w,g as x}from"./data-D1knmAHb.js";import"./index-DuYO7obl.js";function v({title:s,titleId:t,...i},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},i),s?r.createElement("title",{id:t},s):null,r.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),r.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const h=r.forwardRef(v),o=({viewBy:s,viewByOptions:t,metrics:i,metricOptions:a,title:c,data:l,columns:m,sort:p,isGridRowSelectable:u})=>{const[g,d]=r.useState(!1),y=r.useRef(null);return e.jsxs("div",{className:"p-4 bg-white rounded shadow-lg",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx("div",{children:s.join(", ")+t.join(", ")}),e.jsx("div",{children:i.join(", ")+a.join(", ")})]}),e.jsx("div",{className:"float-end",children:e.jsx("button",{className:`h-6 w-15 bg-[var(--screen-primary-color)] 
            rounded text-white flex items-center justify-center cursor-pointer`,onClick:()=>d(!0),children:g?e.jsx(h,{className:"h-5 w-7"}):"Export"})})]}),e.jsx("div",{className:"border-1 px-4 border-gray-300 rounded-lg",children:e.jsx(f,{title:c,data:l,columns:m,handleExportComplete:()=>d(!1),sort:p,excelRef:y,rowSelectable:u})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{viewBy:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},viewByOptions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},metrics:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},metricOptions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},groupBy:{required:!1,tsType:{name:"string"},description:""},groupByOptions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},sortBy:{required:!1,tsType:{name:"string"},description:""},sortOptions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},sort:{required:!0,tsType:{name:"Array",elements:[{name:"SortDescriptor"}],raw:"SortDescriptor[]"},description:""},isGridRowSelectable:{required:!1,tsType:{name:"boolean"},description:""}}};const E={title:"Stories/Grid",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},n={args:{viewBy:[],viewByOptions:[],metrics:[],metricOptions:[],title:"Products",data:x,columns:w,sort:[{field:"id",dir:"asc"}]},render:s=>e.jsx("div",{className:"p-8 h-[24rem]",children:e.jsx(o,{...s})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  },
  render: (args: GridProps) => {
    return <div className="p-8 h-[24rem]">
        <Grid {...args} />
      </div>;
  }
} satisfies Story`,...n.parameters?.docs?.source}}};const N=["Default"];export{n as Default,N as __namedExportsOrder,E as default};
