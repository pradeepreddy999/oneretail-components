import{R as M,r as a}from"./iframe-dVmxfsjj.js";import{b6 as A,bl as q,e as f,bE as G,n as w,k as J,b as O,v as x,bC as R,i as n,aH as z,r as U,ao as V,bF as T,w as W,ax as X,au as Y}from"./AdaptiveMode-Demw2rm6.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const Z=M.createContext([null,e=>{}]),$=M.createContext([null,e=>{}]),ee=M.createContext([null,e=>{}]);/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */var y=(e=>(e.next="next",e.prev="prev",e.current="current",e.reset="reset",e))(y||{});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */var H=(e=>(e.remove="remove",e.add="add",e.reorder="reorder",e))(H||{});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */var E=(e=>(e.toggle="toggle",e.remove="remove",e))(E||{});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const B=a.forwardRef((e,u)=>{const o=a.useRef(null),r=a.useRef(null),{disabled:i=c.disabled,fillMode:s=c.fillMode,themeColor:d=c.themeColor,size:p=c.size,rounded:l=c.rounded,dir:b=c.dir,removeIcon:g=c.removeIcon,removeSvgIcon:I=c.removeSvgIcon,removable:k=c.removable}=e,S=q(r,b);a.useImperativeHandle(o,()=>({element:r.current,props:e})),a.useImperativeHandle(u,()=>o.current);const[h,m]=a.useContext(Z),[F,v]=a.useContext($),[,K]=a.useContext(ee),C=a.useMemo(()=>e.selected||(Array.isArray(h)?h.some(t=>t===e.value):h===e.value),[e.selected,e.value,h]),D=a.useMemo(()=>F===e.value,[e.value,F]);a.useEffect(()=>{D&&r.current&&r.current.focus()},[D]);const L=a.useCallback(t=>{m({type:E.toggle,payload:e.value,event:t})},[m,e.value]),N=a.useCallback(t=>{k&&(K({type:H.remove,payload:e.value,event:t}),v({type:y.reset,payload:e.value,event:t}),m({type:E.remove,payload:e.value,event:t}),e.onRemove&&e.onRemove.call(void 0,{target:o.current,syntheticEvent:t}))},[e.onRemove,e.value,k,K,v,m]),P=a.useCallback(t=>{switch(t.keyCode){case f.left:v({type:y.prev,payload:e.value,event:t});break;case f.right:v({type:y.next,payload:e.value,event:t});break;case f.enter:m({type:E.toggle,payload:e.value,event:t});break;case f.delete:N(t);break}e.onKeyDown&&e.onKeyDown.call(void 0,{target:o.current,syntheticEvent:t})},[e.onKeyDown,e.value,v,m,N]),j=a.useCallback(t=>{v({payload:e.value,type:y.current,event:t}),e.onFocus&&e.onFocus.call(void 0,{target:o.current,syntheticEvent:t})},[e.onFocus,e.value,v]),Q=a.useCallback(t=>{e.onBlur&&e.onBlur.call(void 0,{target:o.current,syntheticEvent:t})},[e.onBlur]),_=G(e,o,{onClick:L});return a.createElement("div",{..._,role:e.role||"button",id:e.value,style:e.style,ref:r,dir:S,tabIndex:J(e.tabIndex,i),className:w("k-chip",{"k-rtl":S==="rtl","k-disabled":i,"k-selected":C,"k-focus":D,[`k-chip-${O.sizeMap[p]||p}`]:p,[`k-rounded-${O.roundedMap[l]||l}`]:l,[`k-chip-${s}`]:s,[`k-chip-${s}-${d}`]:!!(s&&d)},e.className),"aria-pressed":e.role?void 0:C,"aria-disabled":i,"aria-describedby":e.ariaDescribedBy,"aria-keyshortcuts":k?"Enter Delete":void 0,onFocus:j,onBlur:Q,onKeyDown:P},C&&(e.selectedIcon||e.selectedSvgIcon)&&a.createElement(x,{className:"k-chip-icon",name:e.selectedIcon?R(e.selectedIcon):void 0,icon:e.selectedSvgIcon,size:"small"}),(e.icon||e.svgIcon)&&a.createElement(x,{className:"k-chip-icon",name:e.icon?R(e.icon):void 0,icon:e.svgIcon,size:"small"}),e.avatar&&a.createElement("div",{className:`k-chip-avatar k-avatar k-rounded-${e.avatar.rounded} k-avatar-md k-avatar-solid k-avatar-solid-primary`,style:e.avatar.style},a.createElement("span",{className:"k-avatar-image"},a.createElement("img",{src:e.avatar.image,alt:e.avatar.imageAlt}))),a.createElement("span",{className:"k-chip-content"},e.children!==void 0?e.children:e.text&&a.createElement("span",{"aria-label":e.ariaLabel||e.text,className:"k-chip-label"},e.text)),k&&a.createElement("span",{className:"k-chip-actions"},a.createElement("span",{className:w("k-chip-action","k-chip-remove-action"),onClick:N},a.createElement(x,{name:g?R(g):void 0,icon:I||A,size:"small"}))))}),ae={id:n.string,text:n.string,value:n.any,dir:n.oneOf(["ltr","rtl"]),removable:n.bool,removeIcon:n.string,removeIconSvg:z,disabled:n.bool,icon:n.string,svgIcon:z,selectedIcon:n.string,selectedIconSvg:z,onRemove:n.func,dataItem:n.any,selected:n.bool,ariaDescribedBy:n.string,size:n.oneOf([null,"small","medium","large"]),rounded:n.oneOf([null,"small","medium","large","full"]),fillMode:n.oneOf([null,"outline","solid"]),themeColor:n.oneOf([null,"base","info","success","warning","error"])},c={disabled:!1,removable:!1,removeIcon:"k-i-x-circle",removeSvgIcon:A,dir:"ltr",size:"medium",rounded:"medium",fillMode:"solid",themeColor:"base"};B.displayName="KendoReactChip";B.propTypes=ae;/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const re=e=>{const u=U(),o=V(),r=o&&o.uDropDownsBase,i=u.toLanguageString(T,W[T]),s=d=>d.preventDefault();return a.createElement("span",{className:w(X.clearButton({c:r})),role:"button",onClick:e.onClick,onMouseDown:s,tabIndex:-1,title:i,key:"clearbutton"},a.createElement(x,{name:"x",icon:Y}))};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const te=e=>e.syntheticEvent.preventDefault(),ne=e=>e.syntheticEvent.stopPropagation();class se extends a.Component{render(){const{data:u,guid:o,focused:r,tagRender:i,tag:s,onTagDelete:d,size:p}=this.props;return a.createElement(a.Fragment,null,u.map((l,b)=>{const g=s?a.createElement(s,{key:l.text+b,tagData:l,guid:o,focusedTag:r,onTagDelete:d}):a.createElement(B,{id:`tag-${o}-${l.text.replace(/\s+/g,"-")}`,"aria-selected":!0,role:"option","aria-setsize":u.length,key:l.text+b,text:l.text,removable:!0,onRemove:I=>d.call(void 0,l.data,I.syntheticEvent),onMouseDown:te,onClick:ne,className:l===r?"k-focus":void 0,size:p});return i?i(l,g):g}),this.props.children)}}export{re as b,se as g};
