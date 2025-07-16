import{j as e}from"./index-7RzhngGT.js";import{r as n}from"./iframe-DPp1OFKI.js";import{K as y}from"./KendoGrid-CqtOLEHQ.js";import"./MultiSelect-CMdbmMY1.js";import{c as x,g as h}from"./data-CayBImD9.js";import"./index-DnZoqMBw.js";function v({title:r,titleId:t,...i},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},i),r?n.createElement("title",{id:t},r):null,n.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),n.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const j=n.forwardRef(v),b=r=>{if(r.current===null)throw Error("Error downloading...");const t=r.current.workbookOptions(),i=t.sheets[0],a=i.rows;for(let s=0;s<a.length;s++){const l=a[s],c=l.cells;for(let o=0;o<c.length;o++){const d=c[o];l.type==="footer"&&(d.background="#7a7a7a",d.color="#fff")}}i.columns.forEach(s=>{delete s.width,s.autoWidth=!0}),r.current.save(t)},p=({viewBy:r,viewByOptions:t,metrics:i,metricOptions:a,title:u,data:s,columns:l,sort:c,isGridRowSelectable:o})=>{const[d,f]=n.useState(!1),g=n.useRef(null),w=()=>{f(!0),b(g)};return e.jsxs("div",{className:"p-4 bg-white rounded shadow-lg",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx("div",{children:r.join(", ")+t.join(", ")}),e.jsx("div",{children:i.join(", ")+a.join(", ")})]}),e.jsx("div",{className:"float-end",children:e.jsx("button",{className:`h-6 w-15 bg-[var(--screen-primary-color)] 
            rounded text-white flex items-center justify-center cursor-pointer`,onClick:w,children:d?e.jsx(j,{className:"h-5 w-7"}):"Export"})})]}),e.jsx("div",{className:"border-1 px-4 border-gray-300 rounded-lg",children:e.jsx(y,{title:u,data:s,columns:l,handleExportComplete:()=>f(!1),sort:c,excelRef:g,rowSelectable:o})})]})};p.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{viewBy:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},viewByOptions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},metrics:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},metricOptions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},groupBy:{required:!1,tsType:{name:"string"},description:""},groupByOptions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},sortBy:{required:!1,tsType:{name:"string"},description:""},sortOptions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},sort:{required:!0,tsType:{name:"Array",elements:[{name:"SortDescriptor"}],raw:"SortDescriptor[]"},description:""},isGridRowSelectable:{required:!1,tsType:{name:"boolean"},description:""}}};const N={title:"Stories/Grid",component:p,tags:["autodocs"],parameters:{layout:"fullscreen"}},m={args:{viewBy:[],viewByOptions:[],metrics:[],metricOptions:[],title:"Products",data:h,columns:x,sort:[{field:"id",dir:"asc"}],isGridRowSelectable:!0},render:r=>e.jsx("div",{className:"p-8 h-[24rem]",children:e.jsx(p,{...r})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    isGridRowSelectable: true
  },
  render: (args: GridProps) => {
    return <div className="p-8 h-[24rem]">
        <Grid {...args} />
      </div>;
  }
} satisfies Story`,...m.parameters?.docs?.source}}};const S=["Default"];export{m as Default,S as __namedExportsOrder,N as default};
