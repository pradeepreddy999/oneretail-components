import{M as a}from"./MultiSelect-CBCukSR9.js";import{c as l}from"./data-Cxr66yYp.js";import"./index-D1ipbYh1.js";import"./iframe-dVmxfsjj.js";import"./index-piPW6GFm.js";import"./AdaptiveMode-Demw2rm6.js";import"./TagList-DLVoACYQ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,p={title:"Stories/MultiSelect",component:a,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{multiSelectBy:"view By",data:l.map(r=>r.field),selected:[],isFilterable:!0,handleFilterChange:t(),handleFilterSearch:t()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    multiSelectBy: "view By",
    data: columns.map(x => x.field),
    selected: [],
    isFilterable: true,
    handleFilterChange: fn(),
    handleFilterSearch: fn()
  }
} satisfies Story`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
