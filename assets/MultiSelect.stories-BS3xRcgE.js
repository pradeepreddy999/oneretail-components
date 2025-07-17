import{M as r}from"./MultiSelect-DMLbupZZ.js";import{c as s}from"./data--x_PIM-s.js";import"./index-C3kvHGQG.js";import"./iframe-ukNpExNE.js";import"./index-ChYTZ8S0.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,m={title:"Stories/MultiSelect",component:r,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{data:s.map(a=>a.field),selected:[],isFilterable:!0,handleFilterChange:t(),handleFilterSearch:t()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: columns.map(x => x.field),
    selected: [],
    isFilterable: true,
    handleFilterChange: fn(),
    handleFilterSearch: fn()
  }
} satisfies Story`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,m as default};
