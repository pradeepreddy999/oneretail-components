import{j as n}from"./index-C3kvHGQG.js";import{K as t}from"./KendoGrid-DeIBwWpx.js";import{r as a}from"./iframe-ukNpExNE.js";import{c as l,g as c}from"./data--x_PIM-s.js";import"./index-ChYTZ8S0.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,p={title:"Stories/KendoGrid",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{title:"Products",data:c,columns:l,handleExportComplete:r(),rowsSelected:{},onHeaderSelectionChange:r(),onSelectionChange:r(),sort:[{field:"id",dir:"asc"}],excelRef:null,rowSelectable:!0},render:o=>{const s=a.useRef(null);return n.jsx("div",{className:"p-8 h-[24rem]",children:n.jsx(t,{...o,excelRef:s})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    rowsSelected: {},
    onHeaderSelectionChange: fn(),
    onSelectionChange: fn(),
    sort: [{
      field: "id",
      dir: "asc"
    }],
    excelRef: null,
    rowSelectable: true
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);
    return <div className="p-8 h-[24rem]">
        <KendoGrid {...args} excelRef={ref} />
      </div>;
  }
} satisfies Story`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,p as default};
