(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{3235:function(e,t,r){"use strict";r.d(t,{Z:function(){return Card_Card}});var o=r(7178),n=r(9499),i=r(9288),a=(0,i.zo)("div",{padding:"$gr3 0 0",h4:{margin:"0",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"},span:{display:"block",margin:"0.25rem 0 0",fontWeight:"300",fontSize:"0.8333rem",color:"$slate10"}}),c=(0,i.zo)("div",{backgroundColor:"$slate6",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),l=(0,i.zo)("div",{display:"flex",width:"100%",maxWidth:"240px",position:"relative",a:(0,n.Z)({display:"flex",flexDirection:"column",width:"100%",color:"$slate12",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,n.Z)({color:"$indigo10"},"".concat(c),{transform:"scale3d(1.02, 1.02, 1.02)",boxShadow:"3px 3px 8px #0002"}))}),s=r(3093),d=r(8522),u=r(6225),p=r(3817),g=(0,i.zo)("img",(0,n.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0},"&.loaded",{opacity:1})),f=(0,i.zo)("figure",{backgroundColor:"$slate6",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",boxShadow:"2px 2px 5px #0001",transition:"$canopyAll"}),b=r(7294),v=r(6010),getResourceImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(r,"/").concat(t,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(r,"/").concat(t,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(r,"/").concat(t,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(r,"/").concat(t,"/0/default.jpg")},h=r(5893),Figure_Figure=function(e){var t=e.alt,r=e.resource,o=e.region,n=void 0===o?"full":o,i=e.size,a=void 0===i?"400,":i,c=e.isCover,l=(0,b.useState)(),s=l[0],d=l[1],u=(0,b.useState)(!1),p=u[0],m=u[1],y=(0,b.useRef)(null);return(0,b.useEffect)(function(){var e;d(getResourceImage(r,a,n)),null!=y&&y.current&&null!=y&&null!==(e=y.current)&&void 0!==e&&e.complete&&m(!0)},[]),(0,h.jsx)(f,{children:(0,h.jsx)(g,{alt:t,src:s,ref:y,style:void 0!==c&&c?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return m(!0)},className:(0,v.Z)("source",p&&"loaded")})})},m=r(1830),y=r(1664),j=r.n(y),x=r(9769),w=r(8956),O=r(2708),Card_Card=function(e){var t=e.resource,r=1,n=t.label,i=t.homepage,g=t.thumbnail,f=(0,w.J)(g),b=f.width,v=f.height;b&&v&&(r=b/v);var y=(0,O.YD)(),S=y.ref,$=y.inView,_=(0,x.i)(n);return(0,h.jsx)(l,{ref:S,children:(0,h.jsxs)(j(),{href:i&&i[0].id?i[0].id:"",children:[(0,h.jsx)(o.f,{ratio:r,children:(0,h.jsx)(c,{children:(0,h.jsx)(s.A,{transition:{duration:1},children:$&&t&&(0,h.jsx)(d.X,{features:u.H,children:(0,h.jsx)(p.m.div,{initial:{opacity:0},animate:{opacity:1},children:(0,h.jsx)(Figure_Figure,{resource:g,alt:_})})})})})}),(0,h.jsx)(a,{children:(0,h.jsx)(m.Label,{label:n,as:"h4"})})]})})}},2929:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var o=r(9499),n=r(3235),i=r(827),a=r(9288),c=(0,a.zo)("div",{paddingBottom:"$gr5",zIndex:"1","@xxs":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr3"},"@sm":{paddingBottom:"$gr4"},"@md":{paddingBottom:"$gr4"}}),l=(0,a.zo)(i.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr5","@xxs":{marginLeft:"$gr3"},"@xs":{marginLeft:"$gr3"},"@sm":{marginLeft:"$gr4"},"@md":{marginLeft:"$gr4"},"&:first-child":{marginLeft:"0"}}});r(7294);var s=r(5893),d=r(7668),Grid=function(e){var t,r=e.children,n=(t={default:6},(0,o.Z)(t,d.b.xl,5),(0,o.Z)(t,d.b.lg,4),(0,o.Z)(t,d.b.md,4),(0,o.Z)(t,d.b.sm,3),(0,o.Z)(t,d.b.xs,2),t);return(0,s.jsx)(l,{breakpointCols:n,className:"canopy-grid",columnClassName:"canopy-grid-column",children:r})};Grid.Item=function(e){var t=e.item;return t?(0,s.jsx)(c,{children:(0,s.jsx)(n.Z,{resource:t},t.id)}):(0,s.jsx)(s.Fragment,{})};var u=Grid},4779:function(e,t,r){"use strict";r.d(t,{Z:function(){return MDX}});var o=r(9499),n=r(5079),i=r(7294),a=r(9288),c=r(5893),l=(0,a.zo)("blockquote",{fontWeight:"300",color:"$slate11",padding:"$gr1 0"}),Markdown_Blockquote=function(e){var t=e.children;return(0,c.jsx)(l,{children:t})},s=r(5407),d=r(1664),u=r.n(d);u();var p=r(3235);r(6803),r(7058),r(3981);var g=r(633),MDX_Card=function(e){var t=e.iiifContent,r=(0,i.useState)(),o=r[0],n=r[1];return((0,i.useEffect)(function(){var e=g.find(function(e){return e.id===t});e&&n({id:t,type:"Manifest",label:e.label,thumbnail:e.thumbnail,homepage:[{id:"/works/".concat(e.slug),label:e.label,type:"Text"}]})},[t]),o)?(0,c.jsx)(p.Z,{resource:o}):null},f=r(2765),b=(0,a.zo)("div",{position:"relative",button:{position:"absolute",marginTop:"-$gr2",right:"$gr3"}}),v=(0,a.zo)("pre",{backgroundColor:"$indigo3",padding:"$gr3",borderRadius:"5px",lineHeight:"1.382em",overflowX:"scroll",overflowY:"visible",boxShadow:"inset 1px 1px 2px  ".concat(f.EhR.indigoA3),zIndex:"0"}),h=(0,a.zo)("code",{backgroundColor:"$indigo3",padding:"3px $gr1",borderRadius:"5px",fontSize:"$gr3",color:"$indigo11",boxShadow:"1px 1px 1px  ".concat(f.EhR.indigoA6)}),m=r(7087),y=r(2469),j=r(640),x=r.n(j),w={plain:{color:"var(--colors-indigo12)",fontSize:.9*r(5049).hO,fontFamily:"Menlo, monospace"},styles:[{types:["boolean","string"],style:{color:"var(--colors-indigo10)"}},{types:["operator"],style:{color:"var(--colors-indigo11)"}},{types:["punctuation"],style:{color:"var(--colors-indigo8)"}}]};function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Code_Code=function(e){var t=e.children,r=e.language;return(0,c.jsx)(m.ZP,_objectSpread(_objectSpread({},m.lG),{},{theme:w,code:t,language:r,children:function(e){var r=e.style,o=e.tokens,n=e.getLineProps,i=e.getTokenProps;return(0,c.jsxs)(b,{children:[(0,c.jsxs)(s.O,{buttonSize:"tiny",buttonType:"primary","aria-label":"Copy Code",onClick:function(){x()(t)},css:{display:"flex",alignItems:"center"},children:["Copy\xa0",(0,c.jsx)(y.TIy,{})]}),(0,c.jsx)(v,{style:r,children:o.map(function(e,t){return(0,c.jsx)("div",_objectSpread(_objectSpread({},n({line:e,key:t})),{},{children:e.map(function(e,r){return(0,c.jsx)("span",_objectSpread({},i({token:e,key:r})),t)})}),t)})})]})}}))},O=r(218),S=r(3448),$=r(2929),_=r(7118),C=r(1522),P={showTitle:!0,showIIIFBadge:!1,informationPanel:{open:!1,renderToggle:!1}},Z=r(859);function MDX_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function MDX_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?MDX_ownKeys(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):MDX_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var M=MDX_objectSpread({h1:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h1"},e))},h2:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h2",id:(0,Z.getSlug)(null==e?void 0:e.children)},e))},h3:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h3"},e))},h4:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h4"},e))},h5:function(e){return(0,c.jsx)(O.Z,MDX_objectSpread({as:"h5"},e))},code:function(e){return(0,c.jsx)(h,MDX_objectSpread({},e))},blockquote:function(e){return(0,c.jsx)(Markdown_Blockquote,MDX_objectSpread({},e))},pre:function(e){var t,r,o,n,i,a=null==e?void 0:null===(t=e.children)||void 0===t?void 0:null===(r=t.props)||void 0===r?void 0:r.children,l=null==e?void 0:null===(o=e.children)||void 0===o?void 0:null===(n=o.props)||void 0===n?void 0:null===(i=n.className)||void 0===i?void 0:i.replace("language-","");return(0,c.jsx)(Code_Code,{language:l,children:null==a?void 0:a.trim()})}},{Button:function(e){var t=e.buttonType,r=e.children,o=e.href,n=e.target;return(0,c.jsx)(s.O,{href:o,buttonType:t,as:o?u():"button",target:n,children:r})},ButtonWrapper:s.W,Card:MDX_Card,ReferencedItems:function(){var e,t=(0,i.useContext)(S.Z);return(0,c.jsx)($.Z,{children:null===(e=t.referencedManifests)||void 0===e?void 0:e.map(function(e,t){return(0,c.jsx)(MDX_Card,{iiifContent:e},"card-".concat(e,"-").concat(t))})})},Slider:function(e){var t=e.iiifContent;return(0,c.jsx)(_.Z,{iiifContent:t})},Viewer:function(e){var t=e.iiifContent,r=e.options;return(0,c.jsx)(C.Z,{iiifContent:t,options:void 0===r?P:r})}}),MDX=function(e){return(0,c.jsx)(n.R,MDX_objectSpread(MDX_objectSpread({},e),{},{components:M}))}},218:function(e,t,r){"use strict";r.d(t,{Z:function(){return Heading_Heading}}),r(7294);var o=(0,r(9288).zo)("h2",{variants:{isHidden:{true:{position:"absolute",visibility:"hidden"}}},"&[data-level=h1]":{margin:"$gr4 0",fontSize:"$gr8",fontWeight:"400",fontFamily:"$display",letterSpacing:"-0.02em",lineHeight:"1.1","@sm":{fontSize:"$gr7"}},"&[data-level=h2]":{margin:"$gr5 0 $gr4",fontSize:"$gr7",fontWeight:"400",fontFamily:"$display",letterSpacing:"-0.01em","@sm":{fontSize:"$gr5"}},"&[data-level=h3]":{margin:"$gr5 0 $gr3",color:"$slate11",fontSize:"$gr6",fontWeight:"300",fontFamily:"$sans",letterSpacing:"-0.01em","@sm":{fontSize:"$gr4"}},"&[data-level=h4]":{},"&[data-level=h5]":{},"&[data-level=h6]":{}}),n=r(5893),Heading_Heading=function(e){var t=e.as,r=void 0===t?"h2":t,i=e.css,a=e.id,c=e.isHidden,l=e.children;return(0,n.jsx)(o,{as:r,isHidden:void 0!==c&&c,"data-level":r,css:void 0===i?{}:i,id:a,children:(0,n.jsx)(n.Fragment,{children:l})})}},7118:function(e,t,r){"use strict";r.d(t,{Z:function(){return Viewer_Slider}});var o,n,i=r(9499);r(4614);var a=r(9897);r(7294);var c=(0,r(9288).zo)("div",(o={marginBottom:"$gr5","@xs":{"& > div > div":{alignItems:"center",textAlign:"center","& > div":{"&:last-child":{paddingTop:"$gr2"}}}}},(0,i.Z)(o,"& .clover-slider-header-label",{fontSize:"$gr6",fontFamily:"$sans",fontWeight:"300 !important",letterSpacing:"-0.01em"}),(0,i.Z)(o,"& .clover-slider-header-summary",{display:"block",fontSize:"$gr3 !important",color:"$slate11 "}),(0,i.Z)(o,"& .clover-slider-header-view-all",{color:"$slate1"}),(0,i.Z)(o,".swiper-slide",{a:{"> div":{borderRadius:"3px",overflow:"hidden"}}}),(0,i.Z)(o,"figure",{"> div":{borderRadius:"3px",overflow:"hidden",boxShadow:"2px 2px 5px #0001"}}),(0,i.Z)(o,"figcaption",{margin:"$gr1 0","> span":{textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3",overflow:"hidden",whiteSpace:"normal",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"}}),(0,i.Z)(o,"& a figcaption, & a:visited figcaption",{color:"$slate12"}),(0,i.Z)(o,"& a:hover figcaption, & a:focus figcaption",{color:"$indigo11"}),o)),l=r(4430),s=r(5049),d=r(7668),u=r(5893),spaceBetween=function(e){return s.hO*(0,l.gr)(e)},p=(n={},(0,i.Z)(n,d.b.xxs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,i.Z)(n,d.b.xs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,i.Z)(n,d.b.sm,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(1)}),(0,i.Z)(n,d.b.md,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(2)}),(0,i.Z)(n,d.b.lg,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),(0,i.Z)(n,d.b.xl,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),n),Viewer_Slider=function(e){var t=e.iiifContent;return(0,u.jsx)(c,{children:(0,u.jsx)(a.default,{iiifContent:t,options:{breakpoints:p}})})}},1522:function(e,t,r){"use strict";var o=r(9499);r(7294);var n=r(5152),i=r.n(n),a=r(5893);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var c=i()(function(){return Promise.all([r.e(318),r.e(493),r.e(138)]).then(r.bind(r,8138)).then(function(e){return e.Viewer})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}}),l={colors:{accent:"var(--colors-indigo10)",accentAlt:"var(--colors-indigo11)",accentMuted:"var(--colors-indigo8)",primary:"var(--colors-slate12)",primaryAlt:"var(--colors-slate12)",primaryMuted:"var(--colors-slate10)",secondary:"var(--colors-slate1)",secondaryAlt:"var(--colors-slate3)",secondaryMuted:"var(--colors-slate2)"},fonts:{sans:"var(--canopy-sans-font)",display:"var(--canopy-display-font)"}},s={canvasBackgroundColor:"var(--colors-slate4)",canvasHeight:"600px",openSeadragon:{gestureSettingsMouse:{scrollToZoom:!1}},informationPanel:{open:!1,renderAbout:!1,renderToggle:!1},showTitle:!1,showIIIFBadge:!1};t.Z=function(e){var t=e.iiifContent,r=e.options;return(0,a.jsx)(c,{iiifContent:t,options:_objectSpread(_objectSpread({},s),r),customTheme:l})}},3448:function(e,t,r){"use strict";var o=r(7294).createContext({referencedManifests:[]});t.Z=o},859:function(e,t,r){var o=r(930);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var n=r(3984),i={lower:!0,strict:!0,trim:!0};function getSlug(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.substring(0,t)}(n(e,i),100)}e.exports={getSlug:getSlug,getUniqueSlug:function(e,t){var r,n=getSlug(e),i=(r=t[n])?r+1:1;return{slug:i>1?"".concat(n,"-").concat(i):n,allSlugs:_objectSpread(_objectSpread({},t),{},o({},n,i))}}}},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Date","slug":"date","values":[{"value":"1935","slug":"1935","doc_count":5,"docs":[12,13,14,16,17]},{"value":"1837","slug":"1837","doc_count":1,"docs":[8]},{"value":"1856","slug":"1856","doc_count":1,"docs":[9]},{"value":"1906","slug":"1906","doc_count":1,"docs":[19]},{"value":"1921","slug":"1921","doc_count":1,"docs":[15]},{"value":"1937","slug":"1937","doc_count":1,"docs":[0]},{"value":"1938","slug":"1938","doc_count":1,"docs":[1]},{"value":"1943","slug":"1943","doc_count":1,"docs":[11]},{"value":"1951","slug":"1951","doc_count":1,"docs":[2]},{"value":"1952","slug":"1952","doc_count":1,"docs":[18]},{"value":"1969","slug":"1969","doc_count":1,"docs":[3]},{"value":"1980","slug":"1980","doc_count":1,"docs":[4]},{"value":"1989","slug":"1989","doc_count":1,"docs":[5]},{"value":"1997","slug":"1997","doc_count":1,"docs":[6]},{"value":"2007","slug":"2007","doc_count":1,"docs":[7]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"1937 Monroe County highway map","metadata":"1937"},{"id":1,"label":"1938 Monroe County traffic flow map","metadata":"1938"},{"id":2,"label":"1951 Monroe County highway map","metadata":"1951"},{"id":3,"label":"1969 Monroe County highway map","metadata":"1969"},{"id":4,"label":"1980 Monroe County highway map","metadata":"1980"},{"id":5,"label":"1989 Monroe County highway map","metadata":"1989"},{"id":6,"label":"1997 Monroe County highway map","metadata":"1997"},{"id":7,"label":"2007 Monroe County highway map","metadata":"2007"},{"id":8,"label":"Sheet 20: Clarke, Conecuh, Dallas, Marengo, Monroe, and Wilcox Counties.","metadata":"1837"},{"id":9,"label":"Southwest section.","metadata":"1856"},{"id":10,"label":"\\"Map of Monroe County, Alabama.\\"","metadata":""},{"id":11,"label":"\\"The Town of Claiborne.\\"","metadata":"1943"},{"id":12,"label":"Fire insurance map of Beatrice, Alabama.","metadata":"1935"},{"id":13,"label":"Fire insurance map of Beatrice, Alabama.","metadata":"1935"},{"id":14,"label":"Fire insurance map of Frisco City, Alabama.","metadata":"1935"},{"id":15,"label":"Fire insurance map of Jones Mill, Alabama.","metadata":"1921"},{"id":16,"label":"Fire insurance map of Peterman, Alabama.","metadata":"1935"},{"id":17,"label":"Fire insurance map of Tunnel Springs, Alabama.","metadata":"1935"},{"id":18,"label":"Fire insurance map of Uriah, Alabama.","metadata":"1952"},{"id":19,"label":"Map of Claiborne, Alabama.","metadata":"1906"}]')}}]);