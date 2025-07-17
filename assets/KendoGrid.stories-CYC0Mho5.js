import{j as e}from"./index-C3P6By0T.js";import{K as o,s as d}from"./KendoGrid-Dg33umKe.js";import{r as c}from"./iframe-CfQiFXKJ.js";import{c as i,g as p}from"./data-C-hSmEx2.js";import"./index-t09MeVpu.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,x={title:"Components/KendoGrid",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},s={args:{title:"Products",data:p,columns:i,handleExportComplete:l(),handleChangeEvent:l(),sort:[{field:"id",dir:"asc"}],excelRef:null},render:n=>{const r=c.useRef(null);return e.jsx("div",{className:"p-8",children:e.jsx(o,{...n,excelRef:r,handleChangeEvent:d})})}},t={args:{title:"Products",data:p,columns:i,handleExportComplete:l(),sort:[{field:"id",dir:"asc"}],excelRef:null,rowSelectType:"single",handleChangeEvent:d},render:n=>{const r=c.useRef(null);return e.jsx("div",{className:"p-8",children:e.jsx(o,{...n,excelRef:r})})}},a={args:{title:"Products",data:p,columns:i,handleExportComplete:l(),sort:[{field:"id",dir:"asc"}],excelRef:null,rowSelectType:"multiple",handleChangeEvent:d},render:n=>{const r=c.useRef(null);return e.jsx("div",{className:"p-8",children:e.jsx(o,{...n,excelRef:r})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    handleChangeEvent: fn(),
    sort: [{
      field: "id",
      dir: "asc"
    }],
    excelRef: null
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);
    return <div className="p-8">
        <KendoGrid {...args} excelRef={ref} handleChangeEvent={sampleChangeEvent} />
      </div>;
  }
} satisfies Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    sort: [{
      field: "id",
      dir: "asc"
    }],
    excelRef: null,
    rowSelectType: "single",
    handleChangeEvent: sampleChangeEvent
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);
    return <div className="p-8">
        <KendoGrid {...args} excelRef={ref} />
      </div>;
  }
} satisfies Story`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    sort: [{
      field: "id",
      dir: "asc"
    }],
    excelRef: null,
    rowSelectType: "multiple",
    handleChangeEvent: sampleChangeEvent
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);
    return <div className="p-8">
        <KendoGrid {...args} excelRef={ref} />
      </div>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};const E=["WithoutRowSelection","WithSingleRowSelection","WithMultiRowsSelection"];export{a as WithMultiRowsSelection,t as WithSingleRowSelection,s as WithoutRowSelection,E as __namedExportsOrder,x as default};
