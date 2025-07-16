import{M as r}from"./MultiSelect-DrcHBa7s.js";import{c as s}from"./data-DR-trLSY.js";import"./index-CNEZHrIg.js";import"./iframe-DQj2n0UG.js";import"./index-BUh9fawV.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,m={title:"Stories/MultiSelect",component:r,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{data:s.map(a=>a.field),selected:[],isFilterable:!0,handleFilterChange:t(),handleFilterSearch:t()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: columns.map(x => x.field),
    selected: [],
    isFilterable: true,
    handleFilterChange: fn(),
    handleFilterSearch: fn()
  }
} satisfies Story`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,m as default};
