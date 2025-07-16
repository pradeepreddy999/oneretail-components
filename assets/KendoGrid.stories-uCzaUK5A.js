import{j as r}from"./index-7RzhngGT.js";import{K as s}from"./KendoGrid-CqtOLEHQ.js";import{r as o}from"./iframe-DPp1OFKI.js";import{c as a,g as d}from"./data-CayBImD9.js";import"./index-DnZoqMBw.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,f={title:"Stories/KendoGrid",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{title:"Products",data:d,columns:a,handleExportComplete:l(),sort:[{field:"id",dir:"asc"}],excelRef:null},render:t=>{const n=o.useRef(null);return r.jsx("div",{className:"p-8 h-[24rem]",children:r.jsx(s,{...t,excelRef:n})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    sort: [{
      field: "id",
      dir: "asc"
    }],
    excelRef: null
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);
    return <div className="p-8 h-[24rem]">
        <KendoGrid {...args} excelRef={ref} />
      </div>;
  }
} satisfies Story`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,f as default};
