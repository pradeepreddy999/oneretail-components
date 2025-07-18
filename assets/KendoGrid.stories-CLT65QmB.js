import{j as e}from"./index-D1ipbYh1.js";import{K as l}from"./KendoGrid-C91cdpRC.js";import{r as d}from"./iframe-dVmxfsjj.js";import{c as i,g as c}from"./data-Cxr66yYp.js";import{s as p}from"./KendoGridCommonFns-DdLL8Kq4.js";import"./index-piPW6GFm.js";import"./AdaptiveMode-Demw2rm6.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,R={title:"Components/KendoGrid",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}},t={args:{title:"Products",data:c,columns:i,handleExportComplete:o(),handleChangeEvent:o(),sort:[{field:"id",dir:"asc"}],excelRef:null},render:n=>{const r=d.useRef(null);return e.jsx("div",{className:"p-8",children:e.jsx(l,{...n,excelRef:r,handleChangeEvent:p})})}},s={args:{title:"Products",data:c,columns:i,handleExportComplete:o(),sort:[{field:"id",dir:"asc"}],excelRef:null,rowSelectType:"single",handleChangeEvent:p},render:n=>{const r=d.useRef(null);return e.jsx("div",{className:"p-8",children:e.jsx(l,{...n,excelRef:r})})}},a={args:{title:"Products",data:c,columns:i,handleExportComplete:o(),sort:[{field:"id",dir:"asc"}],excelRef:null,rowSelectType:"multiple",handleChangeEvent:p},render:n=>{const r=d.useRef(null);return e.jsx("div",{className:"p-8",children:e.jsx(l,{...n,excelRef:r})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}};const v=["WithoutRowSelection","WithSingleRowSelection","WithMultiRowsSelection"];export{a as WithMultiRowsSelection,s as WithSingleRowSelection,t as WithoutRowSelection,v as __namedExportsOrder,R as default};
