import{M as r}from"./MultiSelect-DWMRR71e.js";import{c as s}from"./data-Dn6UxVQj.js";import"./index-DaCgpEyP.js";import"./iframe-NXzDd19o.js";import"./index-D54f4zYA.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,m={title:"Stories/MultiSelect",component:r,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{data:s.map(a=>a.field),selected:[],isFilterable:!0,handleFilterChange:t(),handleFilterSearch:t()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: columns.map(x => x.field),
    selected: [],
    isFilterable: true,
    handleFilterChange: fn(),
    handleFilterSearch: fn()
  }
} satisfies Story`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,m as default};
