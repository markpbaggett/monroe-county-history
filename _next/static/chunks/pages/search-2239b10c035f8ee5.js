(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{3235:function(e,t,a){"use strict";a.d(t,{Z:function(){return Card_Card}});var n=a(7178),r=a(9499),o=a(9288),i=(0,o.zo)("div",{padding:"$gr3 0 0",h4:{margin:"0",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"},span:{display:"block",margin:"0.25rem 0 0",fontWeight:"300",fontSize:"0.8333rem",color:"$slate10"}}),c=(0,o.zo)("div",{backgroundColor:"$slate6",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),s=(0,o.zo)("div",{display:"flex",width:"100%",maxWidth:"240px",position:"relative",a:(0,r.Z)({display:"flex",flexDirection:"column",width:"100%",color:"$slate12",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,r.Z)({color:"$indigo10"},"".concat(c),{transform:"scale3d(1.02, 1.02, 1.02)",boxShadow:"3px 3px 8px #0002"}))}),l=a(3093),u=a(8522),d=a(6225),p=a(3817),f=(0,o.zo)("img",(0,r.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0},"&.loaded",{opacity:1})),g=(0,o.zo)("figure",{backgroundColor:"$slate6",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",boxShadow:"2px 2px 5px #0001",transition:"$canopyAll"}),h=a(7294),m=a(6010),getResourceImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(a,"/").concat(t,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(a,"/").concat(t,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(a,"/").concat(t,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(a,"/").concat(t,"/0/default.jpg")},b=a(5893),Figure_Figure=function(e){var t=e.alt,a=e.resource,n=e.region,r=void 0===n?"full":n,o=e.size,i=void 0===o?"400,":o,c=e.isCover,s=(0,h.useState)(),l=s[0],u=s[1],d=(0,h.useState)(!1),p=d[0],v=d[1],x=(0,h.useRef)(null);return(0,h.useEffect)(function(){var e;u(getResourceImage(a,i,r)),null!=x&&x.current&&null!=x&&null!==(e=x.current)&&void 0!==e&&e.complete&&v(!0)},[]),(0,b.jsx)(g,{children:(0,b.jsx)(f,{alt:t,src:l,ref:x,style:void 0!==c&&c?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return v(!0)},className:(0,m.Z)("source",p&&"loaded")})})},v=a(1830),x=a(1664),y=a.n(x),j=a(9769),w=a(8956),$=a(2708),Card_Card=function(e){var t=e.resource,a=1,r=t.label,o=t.homepage,f=t.thumbnail,g=(0,w.J)(f),h=g.width,m=g.height;h&&m&&(a=h/m);var x=(0,$.YD)(),S=x.ref,A=x.inView,C=(0,j.i)(r);return(0,b.jsx)(s,{ref:S,children:(0,b.jsxs)(y(),{href:o&&o[0].id?o[0].id:"",children:[(0,b.jsx)(n.f,{ratio:a,children:(0,b.jsx)(c,{children:(0,b.jsx)(l.A,{transition:{duration:1},children:A&&t&&(0,b.jsx)(u.X,{features:d.H,children:(0,b.jsx)(p.m.div,{initial:{opacity:0},animate:{opacity:1},children:(0,b.jsx)(Figure_Figure,{resource:f,alt:C})})})})})}),(0,b.jsx)(i,{children:(0,b.jsx)(v.Label,{label:r,as:"h4"})})]})})}},2929:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(9499),r=a(3235),o=a(827),i=a(9288),c=(0,i.zo)("div",{paddingBottom:"$gr5",zIndex:"1","@xxs":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr3"},"@sm":{paddingBottom:"$gr4"},"@md":{paddingBottom:"$gr4"}}),s=(0,i.zo)(o.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr5","@xxs":{marginLeft:"$gr3"},"@xs":{marginLeft:"$gr3"},"@sm":{marginLeft:"$gr4"},"@md":{marginLeft:"$gr4"},"&:first-child":{marginLeft:"0"}}});a(7294);var l=a(5893),u=a(7668),Grid=function(e){var t,a=e.children,r=(t={default:6},(0,n.Z)(t,u.b.xl,5),(0,n.Z)(t,u.b.lg,4),(0,n.Z)(t,u.b.md,4),(0,n.Z)(t,u.b.sm,3),(0,n.Z)(t,u.b.xs,2),t);return(0,l.jsx)(s,{breakpointCols:r,className:"canopy-grid",columnClassName:"canopy-grid-column",children:a})};Grid.Item=function(e){var t=e.item;return t?(0,l.jsx)(c,{children:(0,l.jsx)(r.Z,{resource:t},t.id)}):(0,l.jsx)(l.Fragment,{})};var d=Grid},9014:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return ee},default:function(){return search}});var n=a(7294),r=a(9499),o=a(4729),i=a(2854),c=a(9288),s=(0,c.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"$indigo1",backgroundColor:"$indigo12",borderRadius:"50%"}),l=(0,c.zo)(i.xz,{position:"relative",right:"0",transition:"$canopySlideIn",boxShadow:"none"}),u=(0,c.zo)("div",(0,r.Z)({display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%"},"> ".concat(o.N),{display:"flex",justifyContent:"space-between",alignItems:"center"})),d=(0,c.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr3","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{opacity:"1",transition:"$canopyOpacity",fontSize:"$gr4",color:"$slate11",fontWeight:"300","@sm":{fontSize:"$gr3"}},variants:{isFixed:{true:(0,r.Z)({},"> ".concat(u),(0,r.Z)({"#canopy-search-summary":{opacity:"0"}},"".concat(l),{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"2px 2px 5px #0003"}))}}}),p=a(5893);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f={facetsActive:[]},g=(0,n.createContext)(void 0);function facetsReducer(e,t){if("updateFacetsActive"===t.type)return _objectSpread(_objectSpread({},e),{},{facetsActive:t.facetsActive})}function FacetsProvider(e){var t=e.initialState,a=e.children,r=(0,n.useReducer)(facetsReducer,void 0===t?f:t),o=r[0],i=r[1];return(0,p.jsx)(g.Provider,{value:{facetsDispatch:i,facetsState:o},children:a})}function useFacetsState(){var e=(0,n.useContext)(g);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var h=a(5407),m=a(5014),b=a(2469),Activate=function(){var e=Array.from(useFacetsState().facetsState.facetsActive.keys()).filter(function(e){return"q"!==e}).length;return(0,p.jsx)(l,{asChild:!0,children:(0,p.jsxs)(h.O,{buttonType:"primary",children:[(0,m.EK)("searchFilter")," ",(0,p.jsx)(b.hsZ,{}),e>0&&(0,p.jsx)(s,{children:e})]})})},v=a(9802),x=a(3278),y=a(2765),j=(0,c.zo)(i.VY,{width:"calc(100% - $gr5 * 2)",maxWidth:x.G.default,maxHeight:"calc(100% - $gr5 * 2)",background:"$slate2",position:"fixed",top:"$gr5",left:"50%",overflowY:"auto",zIndex:"10",borderRadius:"3px",boxShadow:"5px 5px 13px ".concat(y.VS.slateA7),borderTop:"1px solid $slateA1",borderBottom:"1px solid $slateA4",transform:"translateX(-50%)",overflow:"clip",display:"flex","@lg":{width:"calc(100% - $gr4 * 2)",maxHeight:"calc(100% - $gr4 * 2)",top:"$gr4"},"@sm":{width:"calc(100% - $gr3 * 2)",maxHeight:"calc(100% - $gr3 * 2)",top:"$gr3"}}),w=(0,c.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),$=(0,c.zo)("header",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4",color:"$slate9",fontSize:"$gr3",fontFamily:"$display",fontWeight:"300",alignItems:"center","@sm":{padding:"$gr2 $gr3"}}),S=(0,c.zo)("footer",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),A=(0,c.zo)("div",{display:"flex",flexDirection:"column",flexGrow:"1",borderTop:"1px solid $slate4",borderBottom:"1px solid $slate4",overflowY:"scroll !important",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),C=(0,c.zo)(i.Dx,{}),O=(0,c.zo)(i.x8,{display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"50%",color:"$slate10",background:"transparent",cursor:"pointer",width:"$gr4",height:"$gr4",transition:"$canopyAll"}),_=(0,c.zo)(i.aV,{backgroundColor:"$slateA8",position:"fixed",top:0,left:0,right:0,bottom:0,display:"grid",placeItems:"center",overflowY:"auto",zIndex:"10",transition:"$canopyAll","&:hover":{backgroundColor:"$slateA9"},"&::after":{position:"fixed",zIndex:"11",background:"linear-gradient(180deg, $slate2, #0000)",width:"100%",height:"$gr9",left:"0",top:"0",content:""}}),F=(0,c.zo)(i.h_,{}),z=a(7058),P=(0,c.zo)(v.xz,{display:"flex",justifyContent:"space-between",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",fontFamily:"$display",fontSize:"$gr4",cursor:"pointer",borderTop:"1px solid $slate4","&:hover, &:focus":{color:"$indigo11"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"$slate10"},"&[aria-expanded='true']":{color:"$slate12 !important",fontWeight:"800",svg:{color:"$slate12 !important",transform:"rotate(0deg)"}}}),D=(0,c.zo)(v.VY,{padding:"$gr1 0 $gr4"}),R=(0,c.zo)(v.h4,{}),k=(0,c.zo)(v.ck,{"&:first-child":(0,r.Z)({},"".concat(P),{border:"none"})}),E=a(6069),I=(0,c.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"$slate12 !important",fontWeight:"800"}}},"&:hover, &:focus":{color:"$indigo11"},span:{color:"$slate11 !important",fontSize:"$gr2"}}),Z=(0,c.zo)(E.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"$slate4",boxShadow:"inset 1px 1px 2px #0002",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, $indigo11, $indigo8)",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{boxShadow:"1px 1px 2px ${indigoA.indigoA4}","&::before":{opacity:"1"}}}),M=(0,c.zo)(E.z$,{position:"absolute",zIndex:"1",color:"$indigo1",textShadow:"1px 1px 2px ".concat(y.EhR.indigoA12)}),T=(0,c.zo)("span",{display:"flex",margin:"0 0 $gr1",fontSize:"$gr3",color:"$slate11","&:last-child":{margin:"0"}}),Option=function(e){var t=e.active,a=e.facet,n=e.identifier,r=e.option,o=useFacetsState(),i=o.facetsDispatch,c=o.facetsState.facetsActive;return(0,p.jsxs)(T,{children:[(0,p.jsx)(Z,{value:r.value,id:n,checked:t,onCheckedChange:function(e){c.delete(a),e&&c.append(a,r.slug),i({type:"updateFacetsActive",facetsActive:c})},children:(0,p.jsx)(M,{asChild:!0,children:(0,p.jsx)(b.nQG,{})})}),(0,p.jsxs)(I,{htmlFor:n,isChecked:t,children:[r.value," ",(0,p.jsxs)("span",{children:["(",r.doc_count,")"]})]})]})},Facet=function(e){var t=e.label,a=e.slug,r=e.values,o=useFacetsState().facetsState.facetsActive,i=null==o?void 0:o.toString(),c={slug:"",value:(0,m.EK)("searchFilterAny")},s=(0,n.useState)({slug:"",value:(0,m.EK)("searchFilterAny")}),l=s[0],u=s[1];return(0,n.useEffect)(function(){var e,t=null==o?void 0:o.get(a);u(t?{slug:t,value:null===(e=r.find(function(e){return e.slug===t}))||void 0===e?void 0:e.value}:c)},[o,i,a,r]),(0,p.jsxs)(k,{value:a,children:[(0,p.jsx)(R,{asChild:!0,children:(0,p.jsxs)(P,{children:[(0,p.jsxs)("span",{children:[t," ",(0,p.jsx)(b.v4q,{})]}),(0,p.jsx)("span",{children:l.value})]})}),(0,p.jsx)(D,{children:r.map(function(e,t){var n="".concat(a,"-").concat(e.slug,"-").concat(t);return(0,p.jsx)(Option,{active:l.slug===e.slug,facet:a,identifier:n,option:e},n)})})]})},H=a(1163);function Modal_ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Modal_objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Modal_ownKeys(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Modal_ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Modal=function(e){var t=e.handleSubmit,a=useFacetsState(),r=a.facetsState,o=a.facetsDispatch,i=r.facetsActive,c=(0,H.useRouter)();return(0,p.jsxs)(F,{children:[(0,p.jsx)(_,{}),(0,p.jsx)(j,{children:(0,p.jsxs)(w,{children:[(0,p.jsxs)($,{children:[(0,p.jsx)(C,{asChild:!0,children:(0,p.jsx)("span",{children:(0,m.EK)("searchFilter")})}),(0,p.jsx)(O,{"aria-label":(0,m.EK)("searchFilterClose"),children:(0,p.jsx)(b.Pxu,{})})]}),(0,p.jsx)(A,{children:(0,p.jsx)(v.fC,{type:"single",collapsible:!0,children:z.map(function(e){return(0,n.createElement)(Facet,Modal_objectSpread(Modal_objectSpread({},e),{},{key:e.slug}))})})}),(0,p.jsxs)(S,{children:[(0,p.jsx)(h.O,{buttonType:"transparent",onClick:function(){z.forEach(function(e){return i.delete(e.slug)}),o({type:"updateFacetsActive",facetsActive:i})},children:(0,m.EK)("searchFilterClear")}),(0,p.jsx)(h.O,{buttonType:"primary",onClick:function(){c.push({pathname:"/search",query:i.toString()}),t()},children:(0,m.EK)("searchFilterSubmit")})]})]})})]})},L=(0,c.zo)(i.fC,{}),B=a(7642),Facets=function(){var e=(0,H.useRouter)().asPath,t=(0,n.useState)(!1),a=t[0],r=t[1],o=useFacetsState().facetsDispatch,i=(0,B.MQ)(),c=i.canopyDispatch,s=i.canopyState,l=s.headerVisible,u=s.searchParams;(0,n.useEffect)(function(){o({type:"updateFacetsActive",facetsActive:u})},[u,o]);var handleDialogChange=function(){r(!a),c({type:"updateHeaderVisible",headerVisible:!l})};return(0,n.useEffect)(function(){r(!1),c({type:"updateHeaderVisible",headerVisible:!0})},[e,c]),(0,p.jsxs)(L,{open:a,onOpenChange:handleDialogChange,children:[(0,p.jsx)(Activate,{}),(0,p.jsx)(Modal,{handleSubmit:handleDialogChange})]})},Facets_Facets=function(){return(0,p.jsx)(FacetsProvider,{children:(0,p.jsx)(Facets,{})})},K=a(7843),q=a(2929),J=a(7812),getPartOf=function(e){var t=new URL(e);return t.searchParams.delete("page"),[{id:t,type:"Collection"}]},N=a(3981),U=a(633),V=a(6486),W=a.n(V),G=a(6304),getDocuments=function(e,t){var a=new G.Document(t);N.forEach(function(e){return a.add(e)});var n=a.search(e).reduce(function(e,t){return(0,J.Z)(new Set([].concat((0,J.Z)(e),(0,J.Z)(t.result))))},[]);return n.length>0?n:[]},getResults=function(e,t,a,n){var r,o=t?getDocuments(t,n):N.map(function(e){return e.id}),i=0===a.length?U:(r=a.map(function(e){var t=z.find(function(t){return t.slug===e.label}).values.find(function(t){return t.slug===e.value});return null==t?void 0:t.docs}),U.filter(function(e){return W().intersection.apply(W(),(0,J.Z)(r)).includes(e.index)}));return o.filter(function(e){return i.some(function(t){return t.index===e})}).map(function(t){var a;return{id:(a=i.find(function(e){return e.index===t})).id,type:"Manifest",label:a.label,thumbnail:a.thumbnail,homepage:[{id:"".concat(e,"/works/").concat(a.slug),type:"Text",label:a.label}]}})};function request_ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function request_objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?request_ownKeys(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):request_ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var searchRequest=function(e){var t,a=e.params,n=e.baseUrl,r=e.flexSearch,o=z.map(function(e){return e.slug}).filter(function(e){return a.has(e)}).map(function(e){var t=a.get(e);return{label:e,value:t}}),i=null==a?void 0:a.get("q"),c=null==a?void 0:a.get("page"),s=new URL("".concat(n,"/search"));s.search=null==a?void 0:a.toString();var l=getResults(n,i,o,r),u=Array.from(Array(Math.ceil(l.length/10)).keys()).map(function(e){var t=l.slice(10*e,10*(e+1)).map(function(e){return e.id});return{page:e+1,items:t}}),d=c?(t=parseInt(c),u.find(function(e){return e.page===t}).items.map(function(e){return l.find(function(t){return t.id===e})})):u.map(function(e){var t=new URL(s);return t.searchParams.append("page",e.page),{id:t.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}});return request_objectSpread(request_objectSpread({"@context":"https://iiif.io/api/presentation/3/context.json",id:s.toString(),type:"Collection",label:{none:[i||"All Results"]},items:d},c?{summary:{none:["".concat(l.length,"}")]}}:{summary:{none:["".concat(l.length)]}}),c&&{partOf:getPartOf(s)})},hooks_usePageResults=function(e,t,a){var r=(0,n.useState)([]),o=r[0],i=r[1],c=(0,n.useState)(!1),s=c[0],l=c[1],u=(0,n.useState)(!0),d=u[0],p=u[1],f=(0,n.useState)(!1),g=f[0],h=f[1],m=(0,B.MQ)().canopyState.config,reset=function(){i([]),l(!1),p(!0),h(!1)};return(0,n.useEffect)(function(){return reset()},[a]),(0,n.useEffect)(function(){if(p(!0),l(!1),(null==e?void 0:e.length)>0&&e[t]){var a,n=searchRequest({params:new URL(e[t]).searchParams,baseUrl:null==m?void 0:m.baseUrl,flexSearch:null==m?void 0:null===(a=m.search)||void 0===a?void 0:a.flexSearch}).items;i(function(e){return[].concat((0,J.Z)(e),(0,J.Z)(n))}),h(e.length>t),p(!1)}},[m,e,t]),{data:o,error:s,loading:d,more:g}},Results=function(e){var t=e.pages,a=e.query,r=(0,n.useState)(0),o=r[0],i=r[1],c=hooks_usePageResults(t,o,a),s=c.data,l=c.loading,u=c.more;(0,n.useEffect)(function(){return i(0)},[a]);var d=(0,n.useRef)(),f=(0,n.useCallback)(function(e){!l&&(d.current&&d.current.disconnect(),d.current=new IntersectionObserver(function(e){e[0].isIntersecting&&u&&i(function(e){return e+1})}),e&&d.current.observe(e))},[l,u]);return(0,p.jsx)(q.Z,{children:s.map(function(e,t){return s.length===t+1?(0,p.jsx)("span",{ref:s.length===t+1?f:void 0,children:(0,p.jsx)(q.Z.Item,{item:e})},e.id):(0,p.jsx)("span",{children:(0,p.jsx)(q.Z.Item,{item:e})},e.id)})})},Y=a(1830),Q=a(5049),hooks_useElementPosition=function(e){var t=(0,n.useState)(0),a=t[0],r=t[1];return(0,n.useEffect)(function(){var updatePosition=function(){r(window.pageYOffset),e.current&&r(window.pageYOffset-e.current.offsetTop)};return window.addEventListener("scroll",updatePosition),updatePosition(),function(){return window.removeEventListener("scroll",updatePosition)}},[e]),a},X=a(9332),ee=!0,search=function(){var e=(0,X.useSearchParams)(),t=(0,n.useState)([]),a=t[0],r=t[1],i=(0,n.useState)(),c=i[0],s=i[1],l=(0,n.useRef)(null),f=hooks_useElementPosition(l),g=(0,B.MQ)(),h=g.canopyDispatch,b=g.canopyState,v=b.config,x=b.searchHeaderFixed,y=b.searchSummary;return(0,n.useEffect)(function(){r([]),s(new URLSearchParams(e.toString()))},[e]),(0,n.useEffect)(function(){return h({searchHeaderFixed:f>-Q.J9,type:"updateSearchHeaderFixed"})},[h,f]),(0,n.useEffect)(function(){if(void 0!==c){h({searchParams:c,type:"updateSearchParams"});var e,t=null==v?void 0:null===(e=v.search)||void 0===e?void 0:e.flexSearch,a=searchRequest({params:c,baseUrl:null==v?void 0:v.baseUrl,flexSearch:t}),n=a.items,o=a.summary;r(n.map(function(e){return e.id})),o&&h({type:"updateSearchSummary",searchSummary:o})}},[v,c,h]),(0,p.jsxs)(K.Z,{children:[(0,p.jsx)(d,{ref:l,isFixed:x,children:(0,p.jsx)(u,{children:(0,p.jsxs)(o.Z,{containerType:"wide",children:[y&&(0,p.jsxs)("span",{id:"canopy-search-summary",children:[(0,p.jsx)(Y.Summary,{as:"span",summary:y})," ",(0,m.EK)("searchResults")]}),(0,p.jsx)(Facets_Facets,{})]})})}),(0,p.jsx)(o.Z,{containerType:"wide",children:(0,p.jsx)(Results,{pages:a,query:c})})]})}},8266:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return a(9014)}])},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Date","slug":"date","values":[{"value":"1935","slug":"1935","doc_count":4,"docs":[12,14,16,17]},{"value":"1938","slug":"1938","doc_count":2,"docs":[1,13]},{"value":"1837","slug":"1837","doc_count":1,"docs":[8]},{"value":"1856","slug":"1856","doc_count":1,"docs":[9]},{"value":"1906","slug":"1906","doc_count":1,"docs":[19]},{"value":"1921","slug":"1921","doc_count":1,"docs":[15]},{"value":"1937","slug":"1937","doc_count":1,"docs":[0]},{"value":"1943","slug":"1943","doc_count":1,"docs":[11]},{"value":"1951","slug":"1951","doc_count":1,"docs":[2]},{"value":"1952","slug":"1952","doc_count":1,"docs":[18]},{"value":"1969","slug":"1969","doc_count":1,"docs":[3]},{"value":"1980","slug":"1980","doc_count":1,"docs":[4]},{"value":"1989","slug":"1989","doc_count":1,"docs":[5]},{"value":"1997","slug":"1997","doc_count":1,"docs":[6]},{"value":"2007","slug":"2007","doc_count":1,"docs":[7]}]},{"label":"Item Creator","slug":"item-creator","values":[{"value":"Alabama Inspection and Rating Bureau","slug":"alabama-inspection-and-rating-bureau","doc_count":7,"docs":[12,13,14,15,16,17,18]},{"value":"Alabama. State Highway Department","slug":"alabama-state-highway-department","doc_count":6,"docs":[0,1,2,3,4,5]},{"value":"Alabama. Department of Transportation","slug":"alabama-department-of-transportation","doc_count":2,"docs":[6,7]},{"value":" Rumbley, T. A.; Coffee, John, 1772-1833","slug":"rumbley-t-a-coffee-john-1772-1833","doc_count":1,"docs":[11]},{"value":"Alabama State Board of Health","slug":"alabama-state-board-of-health","doc_count":1,"docs":[10]},{"value":"Coffee, John, 1772-1833","slug":"coffee-john-1772-1833","doc_count":1,"docs":[19]},{"value":"La Tourrette, John","slug":"la-tourrette-john","doc_count":1,"docs":[8]},{"value":"La Tourrette, John; Cram, D. H.","slug":"la-tourrette-john-cram-d-h","doc_count":1,"docs":[9]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"1937 Monroe County highway map","metadata":"Alabama. State Highway Department 1937"},{"id":1,"label":"1938 Monroe County traffic flow map","metadata":"Alabama. State Highway Department 1938"},{"id":2,"label":"1951 Monroe County highway map","metadata":"Alabama. State Highway Department 1951"},{"id":3,"label":"1969 Monroe County highway map","metadata":"Alabama. State Highway Department 1969"},{"id":4,"label":"1980 Monroe County highway map","metadata":"Alabama. State Highway Department 1980"},{"id":5,"label":"1989 Monroe County highway map","metadata":"Alabama. State Highway Department 1989"},{"id":6,"label":"1997 Monroe County highway map","metadata":"Alabama. Department of Transportation 1997"},{"id":7,"label":"2007 Monroe County highway map","metadata":"Alabama. Department of Transportation 2007"},{"id":8,"label":"Sheet 20: Clarke, Conecuh, Dallas, Marengo, Monroe, and Wilcox Counties.","metadata":"La Tourrette, John 1837"},{"id":9,"label":"Southwest section.","metadata":"La Tourrette, John; Cram, D. H. 1856"},{"id":10,"label":"\\"Map of Monroe County, Alabama.\\"","metadata":"Alabama State Board of Health"},{"id":11,"label":"\\"The Town of Claiborne.\\"","metadata":" Rumbley, T. A.; Coffee, John, 1772-1833 1943"},{"id":12,"label":"Fire insurance map of Beatrice, Alabama.","metadata":"Alabama Inspection and Rating Bureau 1935"},{"id":13,"label":"Fire insurance map of Excel, Alabama.","metadata":"Alabama Inspection and Rating Bureau 1938"},{"id":14,"label":"Fire insurance map of Frisco City, Alabama.","metadata":"Alabama Inspection and Rating Bureau 1935"},{"id":15,"label":"Fire insurance map of Jones Mill, Alabama.","metadata":"Alabama Inspection and Rating Bureau 1921"},{"id":16,"label":"Fire insurance map of Peterman, Alabama.","metadata":"Alabama Inspection and Rating Bureau 1935"},{"id":17,"label":"Fire insurance map of Tunnel Springs, Alabama.","metadata":"Alabama Inspection and Rating Bureau 1935"},{"id":18,"label":"Fire insurance map of Uriah, Alabama.","metadata":"Alabama Inspection and Rating Bureau 1952"},{"id":19,"label":"Map of Claiborne, Alabama.","metadata":"Coffee, John, 1772-1833 1906"}]')}},function(e){e.O(0,[412,409,662,971,339,493,933,41,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);