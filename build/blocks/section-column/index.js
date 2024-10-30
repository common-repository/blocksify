(()=>{"use strict";var e,t={12:()=>{const e=window.wp.element,t=window.wp.blocks;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},l.apply(this,arguments)}const o=window.wp.i18n,n=window.lodash,r=window.wp.blockEditor,s=window.wp.data,i=window.wp.compose,c=window.wp.components,a=(0,s.withDispatch)((e=>{const{updateBlockAttributes:t}=e("core/block-editor");return{updateBlockAttributes:t}})),d=(0,s.withSelect)(((e,t)=>{const{clientId:l}=t,{getBlock:o,getBlocks:r,getBlocksByClientId:i,getBlockRootClientId:c,getNextBlockClientId:a,getPreviousBlockClientId:d}=e("core/block-editor"),{getBlockType:p}=e("core/blocks"),{replaceInnerBlocks:u}=(0,s.useDispatch)("core/block-editor"),b=c(l),m=i(b),k=r(m[0].clientId),v=r(l),_=(0,n.map)(k,"clientId"),f=_.indexOf(l),h=f<_.length-1&&_[f+1],g=f<_.length-1&&_[f+1],y=!!h&&o(h),w=!!h&&o(g);let B=!0;return(0===_.length||1===_.length||f==_.length-1)&&(B=!1),{block:p(t.name),getBlocksByClientId:i,hasInnerBlocks:k.length>0,brothers:k,children:v,parentId:b,parentBlocks:m,replaceInnerBlocks:u,nextBlockClientId:h,prevBlockClientId:g,currentBlockIndex:f,nextBlock:y,prevBlock:w,isResizeable:B,brothersIds:_}})),p=(0,i.compose)(d,a)((t=>{const{columnBlocks:o,attributes:a,className:d,isSelected:p,setAttributes:u,hasInnerBlocks:b,parentId:m,updateBlockAttributes:k,clientId:v,currentBlockIndex:_,toggleSelection:f,isResizeable:h,nextBlockClientId:g,nextBlock:y,prevBlockClientId:w,prevBlock:B,brothers:C,brothersIds:x,children:I,block:$}=t,{width:S,width__tablet:j,width__mobile:R}=t.attributes,E=(0,r.useBlockProps)(),T=((0,i.usePrevious)(S),(0,i.usePrevious)(j)),O=(0,i.usePrevious)(R),A=(0,e.useRef)(),{blockClientIds:P,isValid:H,mode:z}=(0,s.useSelect)((e=>{const{getBlockMode:t,getSelectedBlockClientIds:l,isBlockValid:o}=e(r.store),n=l();return{blockClientIds:n,isValid:1===n.length?o(n[0]):null,mode:1===n.length?t(n[0]):null}}),[]),D=(0,s.useSelect)((e=>{const{__experimentalGetPreviewDeviceType:t}=!!e("core/edit-post")&&e("core/edit-post");return!!t&&t()})),{__experimentalSetPreviewDeviceType:L}=!!(0,s.useDispatch)("core/edit-post")&&(0,s.useDispatch)("core/edit-post"),[N,M]=(0,e.useState)(0),[W]=(0,e.useState)(0),[U,V]=(0,e.useState)(0),[q,F]=(0,e.useState)(99999),[G,J]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=A.current.closest(".wp-block-pm-blocks-section");e.getBoundingClientRect();let t=100;P.length||P.length,x.map(((t,l)=>{const o=g||!1;if(o===v)return;const r=e.getBoundingClientRect();let s=(0,n.round)(S,4),i=(0,n.round)(S,4),c="width";if("Tablet"===D&&(s=j,i=T,c="width__tablet"),"Mobile"===D&&(s=R,i=O,c="width__mobile"),o){let t=0;t=y.attributes.width?parseFloat(y.attributes.width):e.querySelector("#block-"+o).getBoundingClientRect().with/r.width*100,t=(0,n.round)(t,4)}}))}),[S,j,R]),(0,e.createElement)("div",l({},E,{ref:A}),(0,e.createElement)("div",{className:"pm-column-inner",ref:A},(0,e.createElement)(c.ResizableBox,{ref:A,showHandle:p,minWidth:"10%",maxWidth:q,size:{width:"auto"},minHeight:"100%",enable:{top:!1,right:!0,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResize:(e,t,l,o)=>{const r=(N+o.width)/q*100,s=(0,n.round)(r,4);let i="width";"Tablet"===D&&(i="width__tablet"),"Mobile"===D&&(i="width__mobile"),u({[i]:s+"%"})},onResizeStop:(e,t,l,o)=>{const n=A.current.closest(".block-editor-block-list__layout");x.map((e=>{n.querySelector("#block-"+e).style=void 0})),f(!0),J(!1)},onResizeStart:()=>{const e=A.current.closest(".block-editor-block-list__layout"),t=e.getBoundingClientRect();F(t.width),J(!0),x.map((t=>{const l=e.querySelector("#block-"+t),o=l.getBoundingClientRect();t!==v?(l.style.width=o.width,l.style.flexBasis=o.width,g===t&&V(o.width)):M(o.width)}))}},(0,e.createElement)(r.InnerBlocks,{renderAppender:!I.length&&r.InnerBlocks.ButtonBlockAppender}))))})),u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"selector";return{type:"bg",name:"bg",label:(0,o.__)("Background","pm-blocks"),css:[{selector:e,render:"bg"}]}},b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"selector";return{type:"group",label:(0,o.__)("Border","pm-blocks"),responsive:!1,props:{variant:"secondary"},fields:[{type:"boxunit",name:"borderWidth",label:(0,o.__)("Border Width","pm-blocks"),responsive:!0,css:[{selector:e,render:function(e,t){return e&&"object"==typeof e?`border-width: ${e.top} ${e.right} ${e.bottom} ${e.left}`:""}}]},{type:"select",name:"style",label:(0,o.__)("Style","pm-blocks"),options:[{label:(0,o.__)("none","pm-blocks"),value:"none"},{label:(0,o.__)("solid","pm-blocks"),value:"solid"},{label:(0,o.__)("dotted","pm-blocks"),value:"dotted"},{label:(0,o.__)("dashed","pm-blocks"),value:"dashed"},{label:(0,o.__)("double","pm-blocks"),value:"double"},{label:(0,o.__)("groove","pm-blocks"),value:"groove"},{label:(0,o.__)("ridge","pm-blocks"),value:"ridge"},{label:(0,o.__)("inset","pm-blocks"),value:"inset"},{label:(0,o.__)("outset","pm-blocks"),value:"outset"}],css:[{selector:"object"==typeof e?(null==e?void 0:e.style)||(null==e?void 0:e.default):e,render:function(e,t){let l=e;if(!l||""===l){var o;if(""===(null==t||null===(o=t.attributes)||void 0===o?void 0:o.borderColor))return"";l="solid"}return`border-style: ${e}`}}]},{type:"color",name:"borderColor",label:(0,o.__)("Color","pm-blocks"),css:[{selector:"object"==typeof e?(null==e?void 0:e.borderColor)||(null==e?void 0:e.default):e,render:function(e){return e?`border-color: ${e}`:""}}]},{type:"boxunit",name:"borderRadius",label:(0,o.__)("Border Radius","pm-blocks"),default:void 0,dataType:"object",responsive:!0,props:{disableUnits:!1},css:[{selector:"object"==typeof e?(null==e?void 0:e.borderRadius)||(null==e?void 0:e.default):e,render:function(e){return e&&"object"==typeof e?`border-radius: ${e.top} ${e.right} ${e.bottom} ${e.left};`:""}}]}]}},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"selector";return{type:"group",label:(0,o.__)("Link","pm-blocks"),fields:[{type:"tabs",label:(0,o.__)("Tabs","pm-blocks"),tabs:[{name:"tab_normal",title:(0,o.__)("Normal","pm-blocks"),fields:[{type:"color",name:"linkColor",label:(0,o.__)("Link Color","pm-blocks"),default:"",responsive:!1,css:[{selector:e+" a",render:function(e){return e?`color: ${e};`:""}}]}]},{name:"tab_hover",title:(0,o.__)("Hover","pm-blocks"),fields:[{type:"color",name:"linkHoverColor",label:(0,o.__)("Hover Color","pm-blocks"),default:"",responsive:!1,css:[{selector:e+" a:hover",render:function(e){return e?`color: ${e};`:""}}]}]}]}]}},k=[{type:"panel",label:"Layout",open:!0,fields:[{type:"button",label:(0,o.__)("Reset Width","pm-blocks"),onClick:(e,t,l,o)=>{l("width",null),l("width__tablet",null),l("width__mobile",null)},responsive:!1,props:{variant:"secondary",isSmall:!0}},{type:"unit",name:"width",label:(0,o.__)("Width","pm-blocks"),default:"",dataType:"",responsive:!0,props:{disableUnits:!1},css:[{selector:"selector",render:function(e){return e?`flex: 0 0 ${e};max-width: ${e};`:""}}]},...function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"selector";return{type:"panel",label:(0,o.__)("Layout","pm-blocks"),open:!1,fields:[{type:"unit",name:"gap",label:(0,o.__)("Items Gap","pm-blocks"),default:"",dataType:"",responsive:!0,props:{disableUnits:!1},css:[{selector:"object"==typeof e?(null==e?void 0:e.gap)||(null==e?void 0:e.default):e,render:function(e){return e?`gap: ${e};`:""}}]},{type:"unit",name:"minHeight",label:(0,o.__)("Min Height","pm-blocks"),default:"",dataType:"",responsive:!0,props:{disableUnits:!1},css:[{selector:"object"==typeof e?(null==e?void 0:e.minHeight)||(null==e?void 0:e.default):e,render:function(e){return e?`min-height: ${e};`:""}}]},{type:"select",name:"vAlign",label:(0,o.__)("Vertical Align","pm-blocks"),default:void 0,dataType:"string",responsive:!0,options:[{label:(0,o.__)("Default","pm-blocks"),value:""},{label:(0,o.__)("Top","pm-blocks"),value:"start"},{label:(0,o.__)("Middle","pm-blocks"),value:"center"},{label:(0,o.__)("Bottom","pm-blocks"),value:"end"}],css:[{selector:"object"==typeof e?(null==e?void 0:e.vAlign)||(null==e?void 0:e.default):e,render:function(e){return e?`align-items: ${e}`:""}}]},{type:"select",name:"hAlign",label:(0,o.__)("Horizontal Align","pm-blocks"),default:void 0,dataType:"string",responsive:!0,options:[{label:(0,o.__)("Default","pm-blocks"),value:""},{label:(0,o.__)("Center","pm-blocks"),value:"center"},{label:(0,o.__)("Start","pm-blocks"),value:"flex-start"},{label:(0,o.__)("End","pm-blocks"),value:"flex-end"},{label:(0,o.__)("Space between","pm-blocks"),value:"space-between"},{label:(0,o.__)("Space Around","pm-blocks"),value:"space-around"},{label:(0,o.__)("Space evenly","pm-blocks"),value:"space-evenly"}],css:[{selector:"object"==typeof e?(null==e?void 0:e.hAlign)||(null==e?void 0:e.default):e,render:function(e){return e?`justify-content: ${e}`:""}}]}]}}("selector > div").fields]},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"selector";return{type:"panel",label:(0,o.__)("Dimensions","pm-blocks"),open:!1,fields:[{type:"boxunit",name:"padding",label:(0,o.__)("Padding","pm-blocks"),default:void 0,dataType:"object",responsive:!0,props:{disableUnits:!1},css:[{selector:"object"==typeof e?(null==e?void 0:e.padding)||(null==e?void 0:e.default):e,render:function(e){return e&&e.top?`padding: ${e.top} ${e.right} ${e.bottom} ${e.left};`:""}}]},{type:"boxunit",name:"margin",label:(0,o.__)("Margin","pm-blocks"),default:void 0,dataType:"object",responsive:!0,props:{sides:["top","bottom"],min:-9999,inputProps:{min:-9999}},css:[{selector:"object"==typeof e?(null==e?void 0:e.margin)||(null==e?void 0:e.default):e,render:function(e){return e&&e.top?`margin-top: ${e.top}; margin-block-start: ${e.top}; margin-block-end: ${e.bottom}; margin-bottom: ${e.bottom};`:""}}]}]}}({margin:"selector",padding:"selector > div > div > div"}),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"selector";return{type:"panel",label:(0,o.__)("Styling","pm-blocks"),open:!1,fields:[{type:"color",name:"color",label:(0,o.__)("Text Color","pm-blocks"),css:[{selector:e,render:function(e){return e?`color: ${e};`:""}}]},m(e),b(e),u(e)]}}()];(0,t.registerBlockType)("pm-blocks/column",{pmSettings:k,icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-layout-sidebar",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#FFCCB3",fill:"#fff",strokeLinecap:"round",strokeLinejoin:"round"},(0,e.createElement)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"#fff"}),(0,e.createElement)("rect",{x:4,y:4,width:16,height:16,rx:2}),(0,e.createElement)("line",{x1:9,y1:4,x2:9,y2:20})),parent:["pm-blocks/section"],edit:p,save:function(){return(0,e.createElement)("div",r.useBlockProps.save(),(0,e.createElement)("div",{className:"pm-column-inner"},(0,e.createElement)("div",{className:"pm-blocks-col-inner block-editor-inner-blocks"},(0,e.createElement)("div",{className:"pm-blocks-col-layout block-editor-block-list__layout"},(0,e.createElement)(r.InnerBlocks.Content,null)))))}})}},l={};function o(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,l,n,r)=>{if(!l){var s=1/0;for(d=0;d<e.length;d++){l=e[d][0],n=e[d][1],r=e[d][2];for(var i=!0,c=0;c<l.length;c++)(!1&r||s>=r)&&Object.keys(o.O).every((e=>o.O[e](l[c])))?l.splice(c--,1):(i=!1,r<s&&(s=r));if(i){e.splice(d--,1);var a=n();void 0!==a&&(t=a)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[l,n,r]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={878:0,175:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,s=l[0],i=l[1],c=l[2],a=0;if(s.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var d=c(o)}for(t&&t(l);a<s.length;a++)r=s[a],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},l=self.webpackChunkpm_blocks=self.webpackChunkpm_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=o.O(void 0,[175],(()=>o(12)));n=o.O(n)})();