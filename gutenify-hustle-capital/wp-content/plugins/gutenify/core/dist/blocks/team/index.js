(()=>{var e,t={2185:(e,t,a)=>{"use strict";const n=window.wp.element,r=window.wp.i18n,o=window.wp.components,l=window.wp.blocks;function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var c=a(4184),s=a.n(c),u=a(9588),m=a.n(u),d=a(8913),g=a.n(d);const p=window.wp.blockEditor,b=window.wp.compose,v=window.wp.hooks,h=e=>{let{tabs:t=[]}=e;const[{currentTab:a},r]=(0,n.useState)({currentTab:!1});return(0,n.createElement)("div",{className:"gutenify-accordion-wrapper"},t.map((e=>{const t=e.label,l=a===e.name;let i="gutenify-accordion-item";return i+=l?" gutenify-accordion-item-active":"",(0,n.createElement)("div",{className:i,key:`gutenify-accordion-item-${e.name}`},(0,n.createElement)("button",{onClick:()=>{r({currentTab:a===e.name?"":e.name})},className:"gutenify-accordion-item-heading"},(0,n.createElement)("div",{className:"gutenify-accordion-item-heading-arrow"},(0,n.createElement)(o.Icon,{icon:l?"arrow-down-alt2":"arrow-right-alt2"})),(0,n.createElement)("div",{className:"gutenify-accordion-item-label"},(0,n.createElement)(t,null))),(0,n.createElement)("div",{className:"gutenify-accordion-item-content"}," ",e.cb()))})))};var f;const y=null!==(f=window)&&void 0!==f&&f._gutenify_vars?window._gutenify_vars:{},{is_pro_activated:w,pro_account_url:C,pro_license_status:k,title:A,prefix:x,slug:E,authorWebSite:_,authorDemoWebSite:M,authorWebSiteProPage:$,defaultTheme:B,authorWebSiteSupport:Z,plugin_directory_url:H,brand_color:L,plugin_main_version:V,documentationsURL:O,pro_title:S,active_blocks:I}=y,N=(null!=y&&y.siteUrl?y.siteUrl:y.site_url,(0,r.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+$+'" target="_blank">',S,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:"gutenify",pluginMainFunctionPrefix:"gutenify"}),j=e=>{let{layouts:t,label:a="Layouts",value:r,onChange:o,blockName:l}=e;t=(0,v.applyFilters)(`${E}--layouts--${l}`,t);const i=l.replace(new RegExp(E+"--","gi"),"");return(0,n.createElement)(n.Fragment,null,t&&t.length?(0,n.createElement)("div",{className:`${E}-template-browser`},(0,n.createElement)("h2",null,a),(0,n.createElement)("ul",null,t.map((e=>{let t=`${E}-template-browser-item`;return r===e.name&&(t+=` ${E}-template-browser-item-active`),(0,n.createElement)("li",{className:t,key:e.name},(0,n.createElement)("button",{className:`${E}-template-browser-selector`,onClick:()=>{o(e)}},(0,n.createElement)("img",{src:null!=e&&e.thumbnailUrl?e.thumbnailUrl:`${H}/assets/images/layouts/${i}/${e.name}.png`,alt:e.name}),(0,n.createElement)("small",null,e.label)))})))):"")},z=window.wp.data,T=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenify/team","category":"gutenify","title":"Team","version":"2","attributes":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"padding":{"desktop":{"top":"20px","bottom":"20px","left":"20px","right":"20px"}}}},"layout":{"type":"string","default":"layout-1"},"containerSize":{"type":"string","default":"center"},"columnSize":{"type":"number","default":2}},"supports":{"anchor":true,"html":false,"align":["wide","full"]},"editorScript":["gutenify--team"],"editorStyle":["gutenify--team--editor"],"style":["gutenify--team--frontend"],"icon":"<svg id=\'a87ea476-6a29-4a52-8bb2-7e72426abedf\' data-name=\'Layer 2\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M6.05,22.41l.1.06a11.95,11.95,0,0,0,11.7,0l.1-.07a12.08,12.08,0,0,0,5.22-6,.58.58,0,0,0,.07-.21A12,12,0,1,0,6.05,22.41ZM1.79,16.07A5.45,5.45,0,0,1,7,12.24a5.28,5.28,0,0,1,1.9.34,3.72,3.72,0,0,0-.56,1.93,3.67,3.67,0,0,0,1.6,3,6.32,6.32,0,0,0-3.81,3.74A11,11,0,0,1,1.79,16.07ZM4.24,8.49A2.75,2.75,0,1,1,7,11.24,2.74,2.74,0,0,1,4.24,8.49Zm10.44,6A2.68,2.68,0,1,1,12,11.83,2.68,2.68,0,0,1,14.68,14.51ZM7,21.78a5.29,5.29,0,0,1,10,0,10.9,10.9,0,0,1-10,0Zm10.9-.51a6.32,6.32,0,0,0-3.81-3.74,3.67,3.67,0,0,0,1.6-3,3.72,3.72,0,0,0-.56-1.93,5.28,5.28,0,0,1,1.9-.34,5.45,5.45,0,0,1,5.19,3.84A11,11,0,0,1,17.89,21.27ZM14.27,8.49A2.75,2.75,0,1,1,17,11.24,2.75,2.75,0,0,1,14.27,8.49ZM12,1A11,11,0,0,1,23,12a10.89,10.89,0,0,1-.33,2.63,6.49,6.49,0,0,0-3.56-3,3.75,3.75,0,1,0-4.19,0l-.47.19a3.63,3.63,0,0,0-4.9,0l-.47-.19a3.75,3.75,0,1,0-4.19,0,6.49,6.49,0,0,0-3.56,3A10.89,10.89,0,0,1,1,12,11,11,0,0,1,12,1Z\' fill=\'#2196f3\' /></svg>"}'),{name:G}=T,P={name:G,blockId:G.replace("/","--"),hookPrefix:"team"},F=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenify/team-member","category":"gutenify","title":"Team Member","version":"2","attributes":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"backgroundColor":"#fff","padding":{"desktop":{"top":"40px","right":"40px","bottom":"40px","left":"40px"}}}},"layout":{"type":"string","default":"layout-1"}},"editorScript":["gutenify--team-member"],"editorStyle":["gutenify--team-member--editor"],"style":["gutenify--team-member--frontend"],"icon":"<svg id=\'b35e23ae-049a-460d-9b5c-b2d985a9f435\' data-name=\'Layer 2\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M12,0A12,12,0,0,0,3.18,20.11a.37.37,0,0,0,.12.13,11.95,11.95,0,0,0,17.4,0,.37.37,0,0,0,.12-.13A12,12,0,0,0,12,0Zm0,23a11,11,0,0,1-7.79-3.24,8.63,8.63,0,0,1,15.58,0A11,11,0,0,1,12,23Zm8.5-4a9.68,9.68,0,0,0-5.93-4.76,5.5,5.5,0,1,0-5.14,0A9.68,9.68,0,0,0,3.5,19a11,11,0,1,1,17,0ZM12,13.85a4.5,4.5,0,1,1,4.5-4.5A4.51,4.51,0,0,1,12,13.85Z\' fill=\'#2196f3\' /></svg>"}'),{name:W}=F,R={name:W,blockId:W.replace("/","--"),hookPrefix:"team-member",layouts:[{name:"layout-1",label:"Layout 1",imageAlign:"center",titleAlign:"center",socialIconAlign:"center"},{name:"layout-2",label:"Layout 2",imageAlign:"center",titleAlign:"left",socialIconAlign:"left"},{name:"layout-3",label:"Layout 3",imageAlign:"center",titleAlign:"right",socialIconAlign:"right"}]},{blockId:U}=P,{layouts:D,blockId:J}=R,{pluginMainSlug:q}=N;(0,v.addFilter)(`${q}--inspector-controls--${U}--content`,`${q}--inspector-controls--${U}--content--opitons`,((e,t)=>{const{attributes:a,setAttributes:l}=t,{layout:i,columnSize:c}=a;return[...e,(0,n.createElement)(n.Fragment,{key:`${q}--inspector-controls--${U}--content--opitons`},(0,n.createElement)(h,{tabs:[{name:"team",initialOpen:!0,label:()=>(0,r.__)("Team"),cb:()=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(j,{layouts:D,value:i,blockName:J,onChange:e=>{const a={layout:e.name,socialIconAlign:e.socialIconAlign,imageAlign:e.imageAlign,titleAlign:e.titleAlign};l(a),((e,t)=>{const{clientId:a}=t;(0,z.select)("core/block-editor").getBlocksByClientId(a)[0].innerBlocks.forEach((function(t){"gutenify/team-member"===t.name&&((0,z.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{layout:e.name,titleAlign:e.titleAlign,imageAlign:e.imageAlign,ratingAlign:e.ratingAlign}),(0,z.select)("core/block-editor").getBlocksByClientId(t.clientId)[0].innerBlocks.forEach((function(t){if("core/image"===t.name&&(0,z.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{align:e.imageAlign}),"core/heading"===t.name&&(0,z.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{textAlign:e.titleAlign}),"core/paragraph"===t.name&&(0,z.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{align:e.titleAlign}),"gutenify/star-rating"===t.name&&(0,z.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{textAlignment:e.ratingAlign}),"core/social-links"===t.name){var a,n;const r=null!=e&&null!==(a=e.socialLinks)&&void 0!==a&&a.attributes?null==e||null===(n=e.socialLinks)||void 0===n?void 0:n.attributes:{align:e.socialIconAlign,layout:{type:"flex",justifyContent:e.socialIconAlign}};(0,z.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{...r})}})))}))})(e,t)}}),(0,n.createElement)(o.RangeControl,{value:c,label:(0,r.__)("Columns"),min:1,max:(0,v.applyFilters)(`${q}--${U}--max-columns`,4),step:1,onChange:e=>{l({columnSize:e})}}))}]}))]}));const K=window.lodash,Q=e=>{const{clearable:t=!0}=e,{colors:a}=(0,z.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[]})));return(0,n.createElement)(o.BaseControl,{label:e.label,id:"textcolor-1"},(0,n.createElement)(o.ColorPalette,{colors:a,value:e.value,onChange:t=>{e.onChange(t)},clearable:t}))},X=e=>{const{clearable:t=!0}=e,{colors:a,gradients:r}=(0,z.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[],gradients:e("core/block-editor").getSettings().gradients||[]})));return(0,n.createElement)("div",{className:"gutenify-color-gradient-control-wrapper"},(0,n.createElement)(p.__experimentalColorGradientControl,{label:e.label,colorValue:e.colorValue,gradientValue:e.gradientValue,colors:a,gradients:r,disableCustomColors:!1,disableCustomGradients:!1,onColorChange:t=>{if((0,K.isEmpty)(t))return;const a={backgroundColor:t,backgroundGradient:void 0};e.onChange(a)},onGradientChange:t=>{if((0,K.isEmpty)(t))return;const a={backgroundGradient:t,backgroundColor:void 0};e.onChange(a)},clearable:!1}),t&&(0,n.createElement)("div",{className:"components-circular-option-picker__custom-clear-wrapper"},(0,n.createElement)("button",{type:"button",className:"components-button components-circular-option-picker__clear is-secondary is-small",onClick:()=>{e.onChange({backgroundColor:void 0,backgroundGradient:void 0})}},"Clear")))},{blockId:Y}=P,{pluginMainSlug:ee}=N;(0,v.addFilter)(`${ee}--inspector-controls--${Y}--style`,`${ee}--inspector-controls--${Y}--style--opitons`,((e,t)=>{const{attributes:a,setAttributes:l}=t,{blockAdvanceOptions:i}=a;return[...e,(0,n.createElement)(n.Fragment,{key:`gutenify-block-${Y}-options-tab-content-basic`},(0,n.createElement)(h,{tabs:[{name:"team",initialOpen:!0,label:()=>(0,r.__)("Team Style"),cb:()=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.TabPanel,{className:"gutenify-editor-tab-panel gutenify-editor-tab-ovel",activeClass:"active-tab",tabs:[{name:"normal",title:(0,r.__)("Normal"),className:"gutenify-color-normal-tab"},{name:"hover",title:(0,r.__)("Hover"),className:"gutenify-color-hover-tab"}]},(e=>(0,n.createElement)(n.Fragment,null,"normal"===e.name&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(Q,{label:(0,r.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,textColor:e}};l(t)},value:i.textColor}),(0,n.createElement)(X,{label:(0,r.__)("Background Color"),colorValue:i.backgroundColor,gradientValue:i.backgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...i,...e}};l(t)}}),(0,n.createElement)(Q,{label:(0,r.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,borderColor:e}};l(t)},value:i.borderColor})),"hover"===e.name&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(Q,{label:(0,r.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,hoverTextColor:e}};l(t)},value:i.hoverTextColor}),(0,n.createElement)(X,{label:(0,r.__)("Background Color"),colorValue:i.hoverBackgroundColor,gradientValue:i.hoverBackgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...i,hoverBackgroundColor:e.backgroundColor,hoverBackgroundGradient:e.backgroundGradient}};l(t)}}),(0,n.createElement)(Q,{label:(0,r.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,hoverBorderColor:e}};l(t)},value:i.hoverBorderColor})),(0,n.createElement)(o.__experimentalNumberControl,{label:(0,r.__)("Border Width"),value:i.borderWidth,onChange:e=>{const t={blockAdvanceOptions:{...i,borderWidth:e}};l(t)},min:0,max:300}),(0,n.createElement)(o.__experimentalUnitControl,{label:(0,r.__)("Border Radius"),value:i.borderRadius,onChange:e=>{const t={blockAdvanceOptions:{...i,borderRadius:e}};l(t)},min:0,max:300})))))}]}))]}));const{hookPrefix:te,blockId:ae,name:ne}=P,{pluginMainSlug:re}=N;(0,v.addFilter)(`${re}--inline-styles--${ae}`,`${re}--inline-styles--${ae}--button`,(function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const{attributes:n,name:r}=t;if(r!==ne)return e;const{blockAdvanceOptions:o,blockClientId:l}=n;a=a||`.gutenify-section-${l}`;let i="";i+=(0,K.has)(o,"textColor")&&!(0,K.isEmpty)(o.textColor)?`color: ${o.textColor};`:"",i+=(0,K.has)(o,"backgroundColor")&&!(0,K.isEmpty)(o.backgroundColor)?`background: ${o.backgroundColor};`:"",(0,K.has)(o,"backgroundGradient")&&!(0,K.isEmpty)(o.backgroundGradient)&&(i+=`background: ${o.backgroundGradient};`),i+=(0,K.has)(o,"borderColor")&&!(0,K.isEmpty)(o.borderColor)?`border-color: ${o.borderColor};`:"",i+=(0,K.has)(o,"borderWidth")&&o.borderWidth>0?`border-width: ${o.borderWidth}px;`:"",i+=(0,K.has)(o,"borderWidth")&&o.borderWidth>0?"border-style: solid;":"",i+=(0,K.has)(o,"borderRadius")&&!(0,K.isEmpty)(o.borderRadius)?`border-radius: ${o.borderRadius};`:"",i&&(e+=`${a} { ${i} }`);let c="";return c+=(0,K.has)(o,"hoverTextColor")&&!(0,K.isEmpty)(o.hoverTextColor)?`color: ${o.hoverTextColor};`:"",c+=(0,K.has)(o,"hoverBackgroundColor")&&!(0,K.isEmpty)(o.hoverBackgroundColor)?`background: ${o.hoverBackgroundColor};`:"",(0,K.has)(o,"hoverBackgroundGradient")&&!(0,K.isEmpty)(o.hoverBackgroundGradient)&&(c+=`background: ${o.hoverBackgroundGradient};`),c+=(0,K.has)(o,"hoverBorderColor")&&!(0,K.isEmpty)(o.hoverBorderColor)?`border-color: ${o.hoverBorderColor};`:"",c&&(e+=`${a}:hover { ${c} }`),(0,v.applyFilters)(`gutenify--${te}--inline-styles`,e,t)}));const oe=e=>{const{children:t,name:a,className:r}=e,o=a.replace("/","-")+"-section",l=s()(o,r);return(0,n.createElement)("div",{className:l},t)},le=["gutenify/team-member"],ie=m()((e=>g()(e,(()=>["gutenify/team-member",{className:"has-shadow-dark"}])))),ce=(0,b.compose)([])((e=>{const{attributes:t,clientId:a}=e,{layout:r,columnSize:o,blockClientId:l}=t,c=s()("gutenify-team-block-wrapper",`gutenify-team-${r}`,`gutenify-team-col-${o}`,`gutenify-section-${l}`,`${T.name.replace(/\//gm,"-")}-version-${T.version}`),u=(0,p.useBlockProps)({className:c}),{children:m,...d}=(0,p.useInnerBlocksProps)(u,{allowedBlocks:le,template:ie(2),templateInsertUpdatesSelection:!1,orientation:"horizontal",__experimentalCaptureToolbars:!0,renderAppender:p.InnerBlocks.ButtonBlockAppender});return(0,n.createElement)("div",d,(0,n.createElement)(oe,i({},e,{sectionID:a}),m))})),se=window.wp.primitives,{name:ue,attributes:me,supports:de}=((0,n.createElement)(se.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(se.G,{fill:L},(0,n.createElement)(se.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"}))),(0,n.createElement)(se.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,n.createElement)(se.Rect,{height:"14.5",rx:".875",stroke:L,strokeWidth:"1.5",width:"14.5",x:"4.75",y:"4.75",fill:"none"}),(0,n.createElement)(se.Path,{d:"m5.06667 14.6666 3.9619-2.1334 2.97143 1.4222 3.4667-2.4888 3.4666 2.4888",stroke:L,strokeLinejoin:"round",strokeWidth:"1.5",fill:"none"}),(0,n.createElement)(se.G,{fill:L},(0,n.createElement)(se.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,n.createElement)(se.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"}))),(0,n.createElement)(se.SVG,{width:"27",height:"13",viewBox:"0 0 27 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(se.Rect,{width:"27",height:"13",rx:"6.5",fill:"#05A015"}),(0,n.createElement)(se.Path,{d:"M6.57812 6.99609L6.22656 9H5.08203L6.07031 3.3125L8.0625 3.31641C8.67708 3.31641 9.16016 3.48698 9.51172 3.82812C9.86328 4.16927 10.0169 4.61458 9.97266 5.16406C9.93099 5.72135 9.69792 6.16667 9.27344 6.5C8.85156 6.83333 8.3125 7 7.65625 7L6.57812 6.99609ZM6.73828 6.04688L7.69141 6.05469C7.9987 6.05469 8.25391 5.97526 8.45703 5.81641C8.66016 5.65755 8.78125 5.44271 8.82031 5.17188C8.85938 4.90104 8.8151 4.6849 8.6875 4.52344C8.5625 4.36198 8.3763 4.27604 8.12891 4.26562L7.05078 4.26172L6.73828 6.04688ZM12.5664 6.91797H11.6367L11.2734 9H10.1289L11.1172 3.3125L13 3.31641C13.6302 3.31641 14.1146 3.46484 14.4531 3.76172C14.7943 4.05859 14.9453 4.47135 14.9062 5C14.8516 5.78125 14.4349 6.32422 13.6562 6.62891L14.457 8.9375V9H13.2383L12.5664 6.91797ZM11.8008 5.96875L12.6523 5.97656C12.9544 5.97135 13.2031 5.89062 13.3984 5.73438C13.5964 5.57552 13.7148 5.36068 13.7539 5.08984C13.7904 4.83724 13.75 4.63932 13.6328 4.49609C13.5156 4.35286 13.3294 4.27604 13.0742 4.26562L12.0977 4.26172L11.8008 5.96875ZM17.4062 9.07812C17.0286 9.07031 16.6953 8.98177 16.4062 8.8125C16.1198 8.64062 15.8919 8.39453 15.7227 8.07422C15.556 7.7513 15.4596 7.38151 15.4336 6.96484C15.4049 6.53776 15.4505 6.08203 15.5703 5.59766C15.6901 5.11328 15.8828 4.6875 16.1484 4.32031C16.4141 3.95312 16.7253 3.67839 17.082 3.49609C17.4414 3.3138 17.8294 3.22656 18.2461 3.23438C18.6289 3.24219 18.9635 3.33333 19.25 3.50781C19.5365 3.67969 19.7617 3.92839 19.9258 4.25391C20.0898 4.57682 20.1836 4.94401 20.207 5.35547C20.2331 5.8138 20.1836 6.28516 20.0586 6.76953C19.9336 7.25391 19.7396 7.67318 19.4766 8.02734C19.2135 8.38151 18.9049 8.64714 18.5508 8.82422C18.1992 9.0013 17.8177 9.08594 17.4062 9.07812ZM19.0273 6L19.0586 5.62891C19.0846 5.16536 19.0221 4.8138 18.8711 4.57422C18.7227 4.33464 18.4961 4.20964 18.1914 4.19922C17.7148 4.18359 17.3359 4.39453 17.0547 4.83203C16.776 5.26953 16.6185 5.88151 16.582 6.66797C16.556 7.12891 16.6172 7.48438 16.7656 7.73438C16.9141 7.98177 17.1445 8.11068 17.457 8.12109C17.8659 8.13932 18.2044 7.98047 18.4727 7.64453C18.7409 7.30599 18.9167 6.82812 19 6.21094L19.0273 6Z",fill:"white"})),(0,n.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,n.createElement)("path",{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z",fill:L})),(0,n.createElement)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1080 1080",xmlSpace:"preserve"},(0,n.createElement)("g",null,(0,n.createElement)("g",null,(0,n.createElement)("path",{className:"st0",d:"M828.5,552.9c-6.8,152.9-133.3,275.1-287.9,275.1c-158.9,0-288.2-129.3-288.2-288.2 c0-150.6,116.2-274.5,263.5-287.1V0.4C229.1,13.2,0.5,249.9,0.5,539.9c0,298.2,241.7,540.1,540.1,540.1 c293.9,0,533-234.8,539.8-527H828.5V552.9z"}),(0,n.createElement)("rect",{x:"518.9",y:"254.6",className:"st1",width:"309.8",height:"298.2"})))),(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 278.799 278.799"},(0,n.createElement)("g",null,(0,n.createElement)("path",{d:"M265.54,0H13.259C5.939,0,0.003,5.936,0.003,13.256v252.287c0,7.32,5.936,13.256,13.256,13.256H265.54 c7.318,0,13.256-5.936,13.256-13.256V13.255C278.796,5.935,272.86,0,265.54,0z M252.284,252.287H26.515V26.511h225.769V252.287z",fill:L}))),(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)("g",null,(0,n.createElement)("path",{d:"M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z",fill:L}))),(0,n.createElement)("svg",{id:"a764fa4e-cc3b-472f-ad43-7e74fc450527","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)("path",{d:"M3.49,19.54H9.1l2.47,4.21a.49.49,0,0,0,.86,0l2.47-4.21h5.61a2.22,2.22,0,0,0,2.22-2.23V2.23A2.22,2.22,0,0,0,20.51,0h-17A2.22,2.22,0,0,0,1.27,2.23V17.31A2.22,2.22,0,0,0,3.49,19.54ZM2.27,2.23A1.23,1.23,0,0,1,3.49,1h17a1.23,1.23,0,0,1,1.22,1.23V17.31a1.23,1.23,0,0,1-1.22,1.23h-5.9a.5.5,0,0,0-.43.24L12,22.51,9.82,18.78a.5.5,0,0,0-.43-.24H3.49a1.23,1.23,0,0,1-1.22-1.23Z",fill:L}),(0,n.createElement)("path",{d:"M8.31,11a.64.64,0,0,1,.18.57L8,14.65a.64.64,0,0,0,.93.68l2.81-1.48a.64.64,0,0,1,.6,0l2.81,1.48a.64.64,0,0,0,.93-.68l-.53-3.13a.64.64,0,0,1,.18-.57L18,8.74a.64.64,0,0,0-.35-1.1l-3.14-.46A.66.66,0,0,1,14,6.83L12.58,4a.65.65,0,0,0-1.16,0L10,6.83a.66.66,0,0,1-.49.35l-3.14.46A.64.64,0,0,0,6,8.74Z",fill:L})),(0,n.createElement)("svg",{id:"af96b2d0-e766-45ff-a399-fea356ead648","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)("path",{d:"M10.84,9.71H4.26a.5.5,0,0,0-.5.5V11.9a.5.5,0,0,0,1,0V10.71H7.05V18H6.28a.5.5,0,0,0-.5.5.51.51,0,0,0,.5.5H8.82a.51.51,0,0,0,.5-.5.5.5,0,0,0-.5-.5H8.05V10.71h2.29V11.9a.5.5,0,1,0,1,0V10.21A.5.5,0,0,0,10.84,9.71Z",fill:L}),(0,n.createElement)("path",{d:"M19.74,10H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,10Z",fill:L}),(0,n.createElement)("path",{d:"M19.74,17.72H14.06a.5.5,0,0,0,0,1h5.68a.5.5,0,0,0,0-1Z",fill:L}),(0,n.createElement)("path",{d:"M19.74,13.84H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,13.84Z",fill:L}),(0,n.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:L})),(0,n.createElement)("svg",{id:"b9750429-17f3-433d-9161-079c88c0d998","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)("path",{d:"M9.71,9.15h4.58a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H9.71a.5.5,0,0,0-.5.5A.5.5,0,0,0,9.71,9.15Z",fill:L}),(0,n.createElement)("path",{d:"M17.63,10.72H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,10.72Z",fill:L}),(0,n.createElement)("path",{d:"M17.63,13.29H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,13.29Z",fill:L}),(0,n.createElement)("path",{d:"M15.94,15.87H8.06a.5.5,0,0,0-.5.5v2.8a.5.5,0,0,0,.5.5h7.88a.5.5,0,0,0,.5-.5v-2.8A.5.5,0,0,0,15.94,15.87Zm-.5,2.8H8.56v-1.8h6.88Z",fill:L}),(0,n.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:L})),(0,n.createElement)("svg",{id:"a7f22ee9-1614-475a-8b5a-2a4b05234844","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)("path",{d:"M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z",fill:L}),(0,n.createElement)("path",{d:"M17.61,10.12l-3.14-.45A.67.67,0,0,1,14,9.31l-1.4-2.84a.65.65,0,0,0-1.16,0L10,9.31a.67.67,0,0,1-.49.36l-3.14.45A.64.64,0,0,0,6,11.22l2.27,2.22a.64.64,0,0,1,.18.57L8,17.14a.64.64,0,0,0,.93.67l2.81-1.47a.64.64,0,0,1,.6,0l2.81,1.47a.64.64,0,0,0,.93-.67L15.51,14a.64.64,0,0,1,.18-.57L18,11.22A.64.64,0,0,0,17.61,10.12Z",fill:L})),(0,n.createElement)("svg",{id:"a1a34775-0c0f-439f-9b3d-b3905e6f0449","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)("path",{d:"M23.37,4.36l-7.54,2-2.62-.7V5.6a5,5,0,1,0-10.09,0s0,.05,0,.08L.37,6.41A.5.5,0,0,0,0,6.9V23a.47.47,0,0,0,.2.39.46.46,0,0,0,.3.11l.13,0,7.54-2,7.53,2,.13,0,.13,0,7.67-2.05A.5.5,0,0,0,24,20.9v-16a.51.51,0,0,0-.63-.49ZM8.17,1.55a4.05,4.05,0,0,1,4,4.05c0,1.73-2.64,5.33-4,7.05-1.41-1.72-4-5.32-4-7A4.06,4.06,0,0,1,8.17,1.55ZM1,7.28l2.3-.62c.75,2.54,3.65,6.11,4.37,7v6.89L1,22.29Zm7.67,6.34c.71-.85,3.62-4.42,4.36-7l2.3.62v15L8.67,20.51ZM23,20.51l-6.67,1.78v-15L23,5.5Z",fill:L}),(0,n.createElement)("path",{d:"M10.74,5.6A2.57,2.57,0,1,0,8.17,8.17,2.58,2.58,0,0,0,10.74,5.6ZM6.6,5.6A1.57,1.57,0,1,1,8.17,7.17,1.57,1.57,0,0,1,6.6,5.6Z",fill:L})),T),ge={title:(0,r.__)("Team"),description:(0,r.__)("Gutenify Team"),icon:(0,n.createElement)(o.Icon,{icon:()=>(0,n.createElement)("svg",{id:"a87ea476-6a29-4a52-8bb2-7e72426abedf","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)("path",{d:"M6.05,22.41l.1.06a11.95,11.95,0,0,0,11.7,0l.1-.07a12.08,12.08,0,0,0,5.22-6,.58.58,0,0,0,.07-.21A12,12,0,1,0,6.05,22.41ZM1.79,16.07A5.45,5.45,0,0,1,7,12.24a5.28,5.28,0,0,1,1.9.34,3.72,3.72,0,0,0-.56,1.93,3.67,3.67,0,0,0,1.6,3,6.32,6.32,0,0,0-3.81,3.74A11,11,0,0,1,1.79,16.07ZM4.24,8.49A2.75,2.75,0,1,1,7,11.24,2.74,2.74,0,0,1,4.24,8.49Zm10.44,6A2.68,2.68,0,1,1,12,11.83,2.68,2.68,0,0,1,14.68,14.51ZM7,21.78a5.29,5.29,0,0,1,10,0,10.9,10.9,0,0,1-10,0Zm10.9-.51a6.32,6.32,0,0,0-3.81-3.74,3.67,3.67,0,0,0,1.6-3,3.72,3.72,0,0,0-.56-1.93,5.28,5.28,0,0,1,1.9-.34,5.45,5.45,0,0,1,5.19,3.84A11,11,0,0,1,17.89,21.27ZM14.27,8.49A2.75,2.75,0,1,1,17,11.24,2.75,2.75,0,0,1,14.27,8.49ZM12,1A11,11,0,0,1,23,12a10.89,10.89,0,0,1-.33,2.63,6.49,6.49,0,0,0-3.56-3,3.75,3.75,0,1,0-4.19,0l-.47.19a3.63,3.63,0,0,0-4.9,0l-.47-.19a3.75,3.75,0,1,0-4.19,0,6.49,6.49,0,0,0-3.56,3A10.89,10.89,0,0,1,1,12,11,11,0,0,1,12,1Z",fill:L}))}),keywords:["gutenify",(0,r.__)("team")],example:{attributes:{teams:{}}},attributes:me,edit:ce,save:function(e){const{attributes:t}=e,{layout:a,columnSize:r,blockClientId:o}=t,l=s()(`gutenify-team-block-wrapper gutenify-team-${a}`,`gutenify-team-col-${r}`,`gutenify-section-${o}`,`${T.name.replace(/\//gm,"-")}-version-${T.version}`),c=p.useBlockProps.save({className:l}),u=p.useInnerBlocksProps.save(c);return(0,n.createElement)("div",{className:l},(0,n.createElement)(oe,i({},e,{name:"gutenify/team"}),u.children))},supports:de};(0,l.registerBlockType)(ue,{...ge})},4184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},2705:(e,t,a)=>{var n=a(5639).Symbol;e.exports=n},4239:(e,t,a)=>{var n=a(2705),r=a(9607),o=a(2333),l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?r(e):o(e)}},2545:e=>{e.exports=function(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}},7561:(e,t,a)=>{var n=a(7990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(r,""):e}},4290:(e,t,a)=>{var n=a(6557);e.exports=function(e){return"function"==typeof e?e:n}},1957:(e,t,a)=>{var n="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;e.exports=n},9607:(e,t,a)=>{var n=a(2705),r=Object.prototype,o=r.hasOwnProperty,l=r.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),a=e[i];try{e[i]=void 0;var n=!0}catch(e){}var r=l.call(e);return n&&(t?e[i]=a:delete e[i]),r}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,a)=>{var n=a(1957),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();e.exports=o},7990:e=>{var t=/\s/;e.exports=function(e){for(var a=e.length;a--&&t.test(e.charAt(a)););return a}},6557:e=>{e.exports=function(e){return e}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,a)=>{var n=a(4239),r=a(7005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==n(e)}},8913:(e,t,a)=>{var n=a(2545),r=a(4290),o=a(554),l=4294967295,i=Math.min;e.exports=function(e,t){if((e=o(e))<1||e>9007199254740991)return[];var a=l,c=i(e,l);t=r(t),e-=l;for(var s=n(c,t);++a<e;)t(a);return s}},8601:(e,t,a)=>{var n=a(4841);e.exports=function(e){return e?Infinity===(e=n(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,t,a)=>{var n=a(8601);e.exports=function(e){var t=n(e),a=t%1;return t==t?a?t-a:t:0}},4841:(e,t,a)=>{var n=a(7561),r=a(3218),o=a(3448),l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var a=i.test(e);return a||c.test(e)?s(e.slice(2),a?2:8):l.test(e)?NaN:+e}},9588:e=>{e.exports=function(e,t){var a,n,r=0;function o(){var o,l,i=a,c=arguments.length;e:for(;i;){if(i.args.length===arguments.length){for(l=0;l<c;l++)if(i.args[l]!==arguments[l]){i=i.next;continue e}return i!==a&&(i===n&&(n=i.prev),i.prev.next=i.next,i.next&&(i.next.prev=i.prev),i.next=a,i.prev=null,a.prev=i,a=i),i.val}i=i.next}for(o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return i={args:o,val:e.apply(null,o)},a?(a.prev=i,i.next=a):n=i,r===t.maxSize?(n=n.prev).next=null:r++,a=i,i.val}return t=t||{},o.clear=function(){a=null,n=null,r=0},o}}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,a,r,o)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,r,o]=e[u],i=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1400:0,9773:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,[l,i,c]=a,s=0;if(l.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var u=c(n)}for(t&&t(a);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[9773],(()=>n(2185)));r=n.O(r)})();