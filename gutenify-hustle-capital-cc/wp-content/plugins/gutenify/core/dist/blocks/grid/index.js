(()=>{var e,t={9991:(e,t,l)=>{"use strict";const a=window.wp.element,n=window.wp.i18n,r=window.wp.components,o=window.wp.blocks;var i=l(4184),c=l.n(i);const s=window.wp.blockEditor,m=window.wp.hooks,p=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenify/grid","category":"gutenify","title":"Grid","version":"2","attributes":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"columns":3}}},"supports":{"html":true,"anchor":true,"align":["wide","full"]},"editorScript":["gutenify--grid"],"editorStyle":["gutenify--grid--editor"],"style":["gutenify--grid--frontend"],"icon":"<svg id=\'f58c68d9-03aa-4773-a606-12afc2d9e209\' data-name=\'Layer 2\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M21.4,0H2.6A2.61,2.61,0,0,0,0,2.61V21.39A2.61,2.61,0,0,0,2.6,24H21.4A2.61,2.61,0,0,0,24,21.39V2.61A2.61,2.61,0,0,0,21.4,0ZM1,8.67H7.63v6.66H1Zm7.68,0h6.64v6.66H8.68Zm7.69,0H23v6.66H16.37Zm0-7.67h5A1.61,1.61,0,0,1,23,2.61V7.67H16.37ZM8.68,1h6.64V7.67H8.68ZM1,2.61A1.61,1.61,0,0,1,2.6,1h5V7.67H1ZM7.63,23h-5A1.61,1.61,0,0,1,1,21.39V16.33H7.63Zm7.69,0H8.68V16.33h6.64ZM23,21.39A1.61,1.61,0,0,1,21.4,23h-5V16.33H23Z\' fill=\'#2196f3\' /></svg>"}'),{name:h}=p,v={hookPrefix:h.replace("gutenify/",""),blockId:h.replace("/","--")};var d;const g=null!==(d=window)&&void 0!==d&&d._gutenify_vars?window._gutenify_vars:{},{is_pro_activated:u,pro_account_url:w,pro_license_status:f,title:H,prefix:E,slug:x,authorWebSite:V,authorDemoWebSite:M,authorWebSiteProPage:A,defaultTheme:b,authorWebSiteSupport:C,plugin_directory_url:y,brand_color:Z,plugin_main_version:k,documentationsURL:L,pro_title:$,active_blocks:_}=g,z=(null!=g&&g.siteUrl?g.siteUrl:g.site_url,(0,n.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+A+'" target="_blank">',$,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:"gutenify",pluginMainFunctionPrefix:"gutenify"}),{blockId:B}=v,{pluginMainSlug:G}=z;(0,m.addFilter)(`${G}--inline-styles--${B}`,`${G}--inline-styles--${B}--button`,(function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const{attributes:a,name:n}=t;if(n!==`${G}/grid`)return e;const{blockAdvanceOptions:r,blockClientId:o}=a,{columns:i,gap:c={rowGap:"40px",columnGap:"40px"}}=r,{rowGap:s,columnGap:m}=c;l=`.${G}-section-${o}`;let p=i?`--${G}--grid-template-columns: ${i};`:"";return p+=s?`--${G}--grid-template-rowgap: ${s};`:"",p+=m?`--${G}--grid-template-columngap: ${m};`:"",p&&(e+=`${l} { ${p} }`),e}));const S=function({icon:e,size:t=24,...l}){return(0,a.cloneElement)(e,{width:t,height:t,...l})},P=window.wp.primitives,O=(0,a.createElement)(P.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(P.Path,{d:"M3.5 17H5V7H3.5v10zM7 20.5h10V19H7v1.5zM19 7v10h1.5V7H19zM7 5h10V3.5H7V5z",style:{fill:"#1e1e1e"}})),F=(0,a.createElement)(P.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(P.Path,{d:"M3.5 17H5V7H3.5v10zM19 7v10h1.5V7H19z",style:{fill:"#1e1e1e"}}),(0,a.createElement)(P.Path,{d:"M7 20.5h10V19H7v1.5zm0-17V5h10V3.5H7z",style:{fill:"#1e1e1e",opacity:.1}})),I=(0,a.createElement)(P.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(P.Path,{d:"M3.5 17H5V7H3.5v10zM19 7v10h1.5V7H19z",style:{fill:"#1e1e1e",opacity:.1}}),(0,a.createElement)(P.Path,{d:"M7 20.5h10V19H7v1.5zm0-17V5h10V3.5H7z",style:{fill:"#1e1e1e"}})),j=(0,a.createElement)(P.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(P.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),W=(0,a.createElement)(P.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(P.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})),{blockId:N}=v;(0,m.addFilter)(`${x}--inspector-controls--${N}--content`,`${x}--inspector-controls--${N}--content--options`,((e,t)=>{let{attributes:l,setAttributes:o}=t;const{blockAdvanceOptions:i}=l,{columns:c}=i;return[...e,(0,a.createElement)(a.Fragment,{key:`${x}--inspector-controls--${N}--content--options`},(0,a.createElement)(r.RangeControl,{label:(0,n.__)("Columns"),value:c,onChange:e=>{const t=i;t.columns=e,o({blockAdvanceOptions:{...t}})},min:1,max:(0,m.applyFilters)(`${x}--${N}--max-columns`,10)}))]})),(0,m.addFilter)(`${x}--inspector-controls--${N}--content`,`${x}--inspector-controls--${N}--content--options`,((e,t)=>{let{attributes:l,setAttributes:n}=t;const{blockAdvanceOptions:o}=l,{gap:i={rowGap:"20px",columnGap:"20px"}}=o,[c,s]=(0,a.useState)(!0),{rowGap:m,columnGap:p}=i;return(0,a.useEffect)((()=>{s(m===p)}),[]),[...e,(0,a.createElement)(a.Fragment,{key:`${x}--inspector-controls--${N}--content--options-gap`},(0,a.createElement)(r.BaseControl,{label:"Gap",id:"grid-gap"},(0,a.createElement)(r.Flex,{align:"top"},(0,a.createElement)(r.FlexBlock,null,(0,a.createElement)(r.Flex,null,(0,a.createElement)(r.FlexItem,null,c&&(0,a.createElement)(S,{icon:O}),!c&&(0,a.createElement)(S,{icon:F})),(0,a.createElement)(r.FlexBlock,null,(0,a.createElement)(r.BaseControl,null,(0,a.createElement)(r.__experimentalUnitControl,{onChange:e=>{const t=o;t.gap={...o.gap},t.gap.columnGap=e,c&&(t.gap.rowGap=e),n({blockAdvanceOptions:{...t}})},value:p})))),!c&&(0,a.createElement)(r.Flex,null,(0,a.createElement)(r.FlexItem,null,(0,a.createElement)(S,{icon:I})),(0,a.createElement)(r.FlexBlock,null,(0,a.createElement)("div",null,(0,a.createElement)(r.__experimentalUnitControl,{onChange:e=>{const t=o;t.gap={...o.gap},t.gap.rowGap=e,n({blockAdvanceOptions:{...t}})},value:m}))),(0,a.createElement)(r.FlexItem,null))),(0,a.createElement)(r.FlexItem,null,!!f&&(0,a.createElement)(r.Button,{onClick:()=>{if(s(!c),!c){const e=o;e.gap={...o.gap},e.gap.columnGap=e.gap.rowGap,n({blockAdvanceOptions:{...e}})}}},c&&(0,a.createElement)(S,{icon:j}),!c&&(0,a.createElement)(S,{icon:W}))))))]}));const{pluginMainSlug:U}=z,R=`${U}/grid-item`,T=[R];(0,a.createElement)(P.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(P.G,{fill:Z},(0,a.createElement)(P.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"}))),(0,a.createElement)(P.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,a.createElement)(P.Rect,{height:"14.5",rx:".875",stroke:Z,strokeWidth:"1.5",width:"14.5",x:"4.75",y:"4.75",fill:"none"}),(0,a.createElement)(P.Path,{d:"m5.06667 14.6666 3.9619-2.1334 2.97143 1.4222 3.4667-2.4888 3.4666 2.4888",stroke:Z,strokeLinejoin:"round",strokeWidth:"1.5",fill:"none"}),(0,a.createElement)(P.G,{fill:Z},(0,a.createElement)(P.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,a.createElement)(P.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"}))),(0,a.createElement)(P.SVG,{width:"27",height:"13",viewBox:"0 0 27 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(P.Rect,{width:"27",height:"13",rx:"6.5",fill:"#05A015"}),(0,a.createElement)(P.Path,{d:"M6.57812 6.99609L6.22656 9H5.08203L6.07031 3.3125L8.0625 3.31641C8.67708 3.31641 9.16016 3.48698 9.51172 3.82812C9.86328 4.16927 10.0169 4.61458 9.97266 5.16406C9.93099 5.72135 9.69792 6.16667 9.27344 6.5C8.85156 6.83333 8.3125 7 7.65625 7L6.57812 6.99609ZM6.73828 6.04688L7.69141 6.05469C7.9987 6.05469 8.25391 5.97526 8.45703 5.81641C8.66016 5.65755 8.78125 5.44271 8.82031 5.17188C8.85938 4.90104 8.8151 4.6849 8.6875 4.52344C8.5625 4.36198 8.3763 4.27604 8.12891 4.26562L7.05078 4.26172L6.73828 6.04688ZM12.5664 6.91797H11.6367L11.2734 9H10.1289L11.1172 3.3125L13 3.31641C13.6302 3.31641 14.1146 3.46484 14.4531 3.76172C14.7943 4.05859 14.9453 4.47135 14.9062 5C14.8516 5.78125 14.4349 6.32422 13.6562 6.62891L14.457 8.9375V9H13.2383L12.5664 6.91797ZM11.8008 5.96875L12.6523 5.97656C12.9544 5.97135 13.2031 5.89062 13.3984 5.73438C13.5964 5.57552 13.7148 5.36068 13.7539 5.08984C13.7904 4.83724 13.75 4.63932 13.6328 4.49609C13.5156 4.35286 13.3294 4.27604 13.0742 4.26562L12.0977 4.26172L11.8008 5.96875ZM17.4062 9.07812C17.0286 9.07031 16.6953 8.98177 16.4062 8.8125C16.1198 8.64062 15.8919 8.39453 15.7227 8.07422C15.556 7.7513 15.4596 7.38151 15.4336 6.96484C15.4049 6.53776 15.4505 6.08203 15.5703 5.59766C15.6901 5.11328 15.8828 4.6875 16.1484 4.32031C16.4141 3.95312 16.7253 3.67839 17.082 3.49609C17.4414 3.3138 17.8294 3.22656 18.2461 3.23438C18.6289 3.24219 18.9635 3.33333 19.25 3.50781C19.5365 3.67969 19.7617 3.92839 19.9258 4.25391C20.0898 4.57682 20.1836 4.94401 20.207 5.35547C20.2331 5.8138 20.1836 6.28516 20.0586 6.76953C19.9336 7.25391 19.7396 7.67318 19.4766 8.02734C19.2135 8.38151 18.9049 8.64714 18.5508 8.82422C18.1992 9.0013 17.8177 9.08594 17.4062 9.07812ZM19.0273 6L19.0586 5.62891C19.0846 5.16536 19.0221 4.8138 18.8711 4.57422C18.7227 4.33464 18.4961 4.20964 18.1914 4.19922C17.7148 4.18359 17.3359 4.39453 17.0547 4.83203C16.776 5.26953 16.6185 5.88151 16.582 6.66797C16.556 7.12891 16.6172 7.48438 16.7656 7.73438C16.9141 7.98177 17.1445 8.11068 17.457 8.12109C17.8659 8.13932 18.2044 7.98047 18.4727 7.64453C18.7409 7.30599 18.9167 6.82812 19 6.21094L19.0273 6Z",fill:"white"})),(0,a.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,a.createElement)("path",{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z",fill:Z})),(0,a.createElement)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1080 1080",xmlSpace:"preserve"},(0,a.createElement)("g",null,(0,a.createElement)("g",null,(0,a.createElement)("path",{className:"st0",d:"M828.5,552.9c-6.8,152.9-133.3,275.1-287.9,275.1c-158.9,0-288.2-129.3-288.2-288.2 c0-150.6,116.2-274.5,263.5-287.1V0.4C229.1,13.2,0.5,249.9,0.5,539.9c0,298.2,241.7,540.1,540.1,540.1 c293.9,0,533-234.8,539.8-527H828.5V552.9z"}),(0,a.createElement)("rect",{x:"518.9",y:"254.6",className:"st1",width:"309.8",height:"298.2"})))),(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 278.799 278.799"},(0,a.createElement)("g",null,(0,a.createElement)("path",{d:"M265.54,0H13.259C5.939,0,0.003,5.936,0.003,13.256v252.287c0,7.32,5.936,13.256,13.256,13.256H265.54 c7.318,0,13.256-5.936,13.256-13.256V13.255C278.796,5.935,272.86,0,265.54,0z M252.284,252.287H26.515V26.511h225.769V252.287z",fill:Z}))),(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,a.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,a.createElement)("g",null,(0,a.createElement)("path",{d:"M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z",fill:Z}))),(0,a.createElement)("svg",{id:"a764fa4e-cc3b-472f-ad43-7e74fc450527","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M3.49,19.54H9.1l2.47,4.21a.49.49,0,0,0,.86,0l2.47-4.21h5.61a2.22,2.22,0,0,0,2.22-2.23V2.23A2.22,2.22,0,0,0,20.51,0h-17A2.22,2.22,0,0,0,1.27,2.23V17.31A2.22,2.22,0,0,0,3.49,19.54ZM2.27,2.23A1.23,1.23,0,0,1,3.49,1h17a1.23,1.23,0,0,1,1.22,1.23V17.31a1.23,1.23,0,0,1-1.22,1.23h-5.9a.5.5,0,0,0-.43.24L12,22.51,9.82,18.78a.5.5,0,0,0-.43-.24H3.49a1.23,1.23,0,0,1-1.22-1.23Z",fill:Z}),(0,a.createElement)("path",{d:"M8.31,11a.64.64,0,0,1,.18.57L8,14.65a.64.64,0,0,0,.93.68l2.81-1.48a.64.64,0,0,1,.6,0l2.81,1.48a.64.64,0,0,0,.93-.68l-.53-3.13a.64.64,0,0,1,.18-.57L18,8.74a.64.64,0,0,0-.35-1.1l-3.14-.46A.66.66,0,0,1,14,6.83L12.58,4a.65.65,0,0,0-1.16,0L10,6.83a.66.66,0,0,1-.49.35l-3.14.46A.64.64,0,0,0,6,8.74Z",fill:Z})),(0,a.createElement)("svg",{id:"af96b2d0-e766-45ff-a399-fea356ead648","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M10.84,9.71H4.26a.5.5,0,0,0-.5.5V11.9a.5.5,0,0,0,1,0V10.71H7.05V18H6.28a.5.5,0,0,0-.5.5.51.51,0,0,0,.5.5H8.82a.51.51,0,0,0,.5-.5.5.5,0,0,0-.5-.5H8.05V10.71h2.29V11.9a.5.5,0,1,0,1,0V10.21A.5.5,0,0,0,10.84,9.71Z",fill:Z}),(0,a.createElement)("path",{d:"M19.74,10H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,10Z",fill:Z}),(0,a.createElement)("path",{d:"M19.74,17.72H14.06a.5.5,0,0,0,0,1h5.68a.5.5,0,0,0,0-1Z",fill:Z}),(0,a.createElement)("path",{d:"M19.74,13.84H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,13.84Z",fill:Z}),(0,a.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:Z})),(0,a.createElement)("svg",{id:"b9750429-17f3-433d-9161-079c88c0d998","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M9.71,9.15h4.58a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H9.71a.5.5,0,0,0-.5.5A.5.5,0,0,0,9.71,9.15Z",fill:Z}),(0,a.createElement)("path",{d:"M17.63,10.72H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,10.72Z",fill:Z}),(0,a.createElement)("path",{d:"M17.63,13.29H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,13.29Z",fill:Z}),(0,a.createElement)("path",{d:"M15.94,15.87H8.06a.5.5,0,0,0-.5.5v2.8a.5.5,0,0,0,.5.5h7.88a.5.5,0,0,0,.5-.5v-2.8A.5.5,0,0,0,15.94,15.87Zm-.5,2.8H8.56v-1.8h6.88Z",fill:Z}),(0,a.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:Z})),(0,a.createElement)("svg",{id:"a7f22ee9-1614-475a-8b5a-2a4b05234844","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z",fill:Z}),(0,a.createElement)("path",{d:"M17.61,10.12l-3.14-.45A.67.67,0,0,1,14,9.31l-1.4-2.84a.65.65,0,0,0-1.16,0L10,9.31a.67.67,0,0,1-.49.36l-3.14.45A.64.64,0,0,0,6,11.22l2.27,2.22a.64.64,0,0,1,.18.57L8,17.14a.64.64,0,0,0,.93.67l2.81-1.47a.64.64,0,0,1,.6,0l2.81,1.47a.64.64,0,0,0,.93-.67L15.51,14a.64.64,0,0,1,.18-.57L18,11.22A.64.64,0,0,0,17.61,10.12Z",fill:Z})),(0,a.createElement)("svg",{id:"a1a34775-0c0f-439f-9b3d-b3905e6f0449","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M23.37,4.36l-7.54,2-2.62-.7V5.6a5,5,0,1,0-10.09,0s0,.05,0,.08L.37,6.41A.5.5,0,0,0,0,6.9V23a.47.47,0,0,0,.2.39.46.46,0,0,0,.3.11l.13,0,7.54-2,7.53,2,.13,0,.13,0,7.67-2.05A.5.5,0,0,0,24,20.9v-16a.51.51,0,0,0-.63-.49ZM8.17,1.55a4.05,4.05,0,0,1,4,4.05c0,1.73-2.64,5.33-4,7.05-1.41-1.72-4-5.32-4-7A4.06,4.06,0,0,1,8.17,1.55ZM1,7.28l2.3-.62c.75,2.54,3.65,6.11,4.37,7v6.89L1,22.29Zm7.67,6.34c.71-.85,3.62-4.42,4.36-7l2.3.62v15L8.67,20.51ZM23,20.51l-6.67,1.78v-15L23,5.5Z",fill:Z}),(0,a.createElement)("path",{d:"M10.74,5.6A2.57,2.57,0,1,0,8.17,8.17,2.58,2.58,0,0,0,10.74,5.6ZM6.6,5.6A1.57,1.57,0,1,1,8.17,7.17,1.57,1.57,0,0,1,6.6,5.6Z",fill:Z}));const{name:D,attributes:J,supports:q}=p,K={title:(0,n.__)("Grid"),description:(0,n.__)("Gutenify grid."),icon:(0,a.createElement)(r.Icon,{icon:()=>(0,a.createElement)("svg",{id:"f58c68d9-03aa-4773-a606-12afc2d9e209","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M21.4,0H2.6A2.61,2.61,0,0,0,0,2.61V21.39A2.61,2.61,0,0,0,2.6,24H21.4A2.61,2.61,0,0,0,24,21.39V2.61A2.61,2.61,0,0,0,21.4,0ZM1,8.67H7.63v6.66H1Zm7.68,0h6.64v6.66H8.68Zm7.69,0H23v6.66H16.37Zm0-7.67h5A1.61,1.61,0,0,1,23,2.61V7.67H16.37ZM8.68,1h6.64V7.67H8.68ZM1,2.61A1.61,1.61,0,0,1,2.6,1h5V7.67H1ZM7.63,23h-5A1.61,1.61,0,0,1,1,21.39V16.33H7.63Zm7.69,0H8.68V16.33h6.64ZM23,21.39A1.61,1.61,0,0,1,21.4,23h-5V16.33H23Z",fill:Z}))}),keywords:["gutenify",(0,n.__)("grid"),(0,n.__)("grids"),(0,n.__)("columns"),(0,n.__)("column")],example:{attributes:{image:{url:"",id:""}}},attributes:J,edit:e=>{const{attributes:t}=e,{blockClientId:l}=t,n=(0,s.useBlockProps)({className:c()(`${U}-section-${l}`,`${p.name.replace(/\//gm,"-")}-version-${p.version}`)}),{children:r,...o}=(0,s.useInnerBlocksProps)(n,{allowedBlocks:T,orientation:"horizontal",template:[[R],[R],[R]]});return(0,a.createElement)("div",o,r)},save:function(e){const{attributes:t}=e,{blockClientId:l}=t,n=s.useBlockProps.save({className:c()(`gutenify-section-${l}`,`${p.name.replace(/\//gm,"-")}-version-${p.version}`)}),r=s.useInnerBlocksProps.save(n);return(0,a.createElement)("div",r,r.children)},supports:q};(0,o.registerBlockType)(D,{...K})},4184:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var o=n.apply(null,l);o&&e.push(o)}}else if("object"===r)if(l.toString===Object.prototype.toString)for(var i in l)a.call(l,i)&&l[i]&&e.push(i);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,n,r)=>{if(!l){var o=1/0;for(m=0;m<e.length;m++){for(var[l,n,r]=e[m],i=!0,c=0;c<l.length;c++)(!1&r||o>=r)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(i=!1,r<o&&(o=r));if(i){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[l,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={7702:0,3538:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,[o,i,c]=l,s=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var m=c(a)}for(t&&t(l);s<o.length;s++)r=o[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(m)},l=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[3538],(()=>a(9991)));n=a.O(n)})();