(function(e){function t(t){for(var a,o,c=t[0],u=t[1],l=t[2],d=0,s=[];d<c.length;d++)o=c[d],r[o]&&s.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(s.length)s.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-03b92e8b":"fd1e641d","chunk-3dc9a44d":"92c60535","chunk-5163b52e":"8ef596fe","chunk-70c82d31":"5676e7a4"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-03b92e8b":1,"chunk-3dc9a44d":1,"chunk-5163b52e":1,"chunk-70c82d31":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-03b92e8b":"e5797483","chunk-3dc9a44d":"08bb6637","chunk-5163b52e":"109b1c59","chunk-70c82d31":"82f0dabf"}[e]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===r))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],d=l.getAttribute("data-href");if(d===a||d===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e),l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var s=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/flexible-form/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"018f":function(e,t,n){},"4ee1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"App",components:{}},c=i,u=(n("7faf"),n("2877")),l=Object(u["a"])(c,o,r,!1,null,null,null),d=l.exports,s=n("8c4f"),p=[{path:"/",name:"editForm",component:function(){return n.e("chunk-3dc9a44d").then(n.bind(null,"e138"))}},{path:"/divtable",name:"divtable",component:function(){return n.e("chunk-03b92e8b").then(n.bind(null,"ad05"))}},{path:"/gridtable",name:"gridtable",component:function(){return n.e("chunk-70c82d31").then(n.bind(null,"6f47"))}},{path:"/printtable",name:"printtable",component:function(){return n.e("chunk-5163b52e").then(n.bind(null,"d358"))}}],f=p;a["default"].use(s["a"]);var m=new s["a"]({mode:"hash",base:"/flexible-form/",linkActiveClass:"active",scrollBehavior:function(){return{x:0,y:0}},routes:f}),h=m,b=n("2f62"),w={test:"this is test"},v=w,g={setTest:function(e,t){e.test=t}},y=g,V={setTest:function(e,t){var n=e.commit;n("setTest",t)}},k=V,C={test:function(e){return e.test}},x=C,T={template:""},_={setTemplate:function(e,t){e.template=t}},j={setTemplate:function(e,t){var n=e.commit;n("setTemplate",t)}},O={template:function(e){return e.template}},E={state:T,mutations:_,actions:j,getters:O},P={printTemplateCssText:"\n    @media print {\n      #printElement {\n        width: 21cm;\n        height: 29.7cm;\n        padding: 10mm;\n        margin: 0 auto;\n      }\n\n      table {\n        border: 1px solid #000;\n        border-collapse: collapse;\n      }\n\n      td {\n        height: 34px;\n        border: 1px solid #000;\n        padding: 5px;\n      }\n\n      .section-one-table {\n        width: 100%;\n      }\n\n      .section-two-table {\n        margin-top: -1px;\n      }\n\n      .section-one-row,\n      .section-two-row {\n        page-break-inside: avoid;\n      }\n\n      .section-one-row td:nth-child(odd) {\n        width: 20%;\n      }\n\n      .section-two-row td {\n        width: 20%;\n      }\n    }\n  "},S={},M={},$={printTemplateCssText:function(e){return e.printTemplateCssText}},A={state:P,mutations:S,actions:M,getters:$};a["default"].use(b["a"]);var B=new b["a"].Store({state:v,mutations:y,actions:k,getters:x,modules:{template:E,cssText:A}}),N=n("a745"),I=n.n(N),L=n("a4bb"),D=n.n(L),R=n("7618"),F=n("f499"),J=n.n(F),q=n("a34a"),G=n.n(q),H=(n("96cf"),n("3b8d")),U=n("c64e"),W=n.n(U);a["default"].mixin({methods:{manualLoadingBlock:function(){var e=Object(H["a"])(G.a.mark(function e(t){return G.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$store.dispatch("app/increaseLoadingCounter"),e.next=4,t();case 4:return e.prev=4,this.$store.dispatch("app/decreaseLoadingCounter"),e.finish(4);case 7:case"end":return e.stop()}},e,this,[[0,,4,7]])}));function t(t){return e.apply(this,arguments)}return t}(),isNumber:function(e){var t=/^\d+$/;return t.test(e)},isValid:function(e){return!!e},deepCopy:function(e){var t=J()(e),n=JSON.parse(t);return n},isNonEmptyObject:function(e){return"object"===Object(R["a"])(e)&&D()(e).length>0},isNonEmptyArray:function(e){return!!(I()(e)&&e.length>0)},isEmptyString:function(e){return!e},consoleLogError:function(e){},createUuid:function(){return W()()}}});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"template-header-wrapper"},[n("div",{staticClass:"template-header"},[n("div",{staticClass:"go-back-link"},[e._t("go-back")],2),n("div",{staticClass:"buttons-area"},[e._t("save-button"),e._t("deploy-button")],2)])])},K=[],Q={data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){},destroyed:function(){},components:{}},X=Q,Y=(n("6d3d"),Object(u["a"])(X,z,K,!1,null,null,null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"template-body-wrapper"},[n("ViewRow",{staticClass:"template-body"},[n("ViewCol",{staticClass:"main-area",attrs:{span:"19"}},[e._t("main-content")],2),n("ViewCol",{staticClass:"side-area",attrs:{span:"5"}},[n("div",{staticClass:"side-area__title"},[e._t("side-title")],2),n("div",{staticClass:"side-area__content"},[e._t("side-content")],2)])],1)],1)},te=[],ne={data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){},destroyed:function(){},components:{}},ae=ne,oe=(n("6e95"),Object(u["a"])(ae,ee,te,!1,null,null,null)),re=oe.exports;a["default"].component("TemplateHeader",Z),a["default"].component("TemplateBody",re);var ie=n("117e"),ce=n("9897"),ue=n("46f7"),le=n("6005"),de=n("ff8e"),se=n("2ca9"),pe=n("ea31"),fe=n("4904"),me=n("6880"),he=n("f886"),be=n("7149"),we=n("4456"),ve=n("6bf4"),ge=n("10aa"),ye=n("a49b"),Ve=n("6079"),ke=n("6066"),Ce=n("cf18"),xe=n("19ae"),Te=n("6be2"),_e=n("cf8e"),je=n("6ead"),Oe=n("bbbe"),Ee=n("093f"),Pe=n("311a"),Se=n("2d66"),Me=n("f2d8"),$e=n("d842"),Ae=n("bf7a"),Be=n("71a9"),Ne=n("9e6d"),Ie=n("0347"),Le=n("d3b2"),De=n("01f8"),Re=n("6db7"),Fe=n("80dc"),Je=n.n(Fe);n("dcad");Object(Re["a"])(Je.a),a["default"].component("ViewButton",De["a"]),a["default"].component("ViewIcon",Le["a"]),a["default"].component("ViewCard",Ie["a"]),a["default"].component("ViewMenu",Ne["a"]),a["default"].component("ViewSubmenu",Be["a"]),a["default"].component("ViewMenuItem",Ae["a"]),a["default"].component("ViewForm",$e["a"]),a["default"].component("ViewFormItem",Me["a"]),a["default"].component("ViewInput",Se["a"]),a["default"].component("ViewSelect",Pe["a"]),a["default"].component("ViewOption",Ee["a"]),a["default"].component("ViewRow",Oe["a"]),a["default"].component("ViewCol",je["a"]),a["default"].component("ViewTable",_e["a"]),a["default"].component("ViewModal",Te["a"]),a["default"].component("ViewDatePicker",xe["a"]),a["default"].component("ViewCheckboxGroup",Ce["a"]),a["default"].component("ViewCheckbox",ke["a"]),a["default"].component("ViewPoptip",Ve["a"]),a["default"].component("ViewRadioGroup",ye["a"]),a["default"].component("ViewRadio",ge["a"]),a["default"].component("ViewTag",ve["a"]),a["default"].component("ViewAvatar",we["a"]),a["default"].component("ViewBadge",be["a"]),a["default"].component("ViewDropdown",he["a"]),a["default"].component("ViewDropdownMenu",me["a"]),a["default"].component("ViewDropdownItem",fe["a"]),a["default"].component("ViewTabs",pe["a"]),a["default"].component("ViewTabPane",se["a"]),a["default"].component("ViewSpine",de["a"]),a["default"].component("ViewPage",le["a"]),a["default"].component("ViewDrawer",ue["a"]),a["default"].component("ViewAutoComplete",ce["a"]),a["default"].prototype.$ViewMessage=ie["a"],a["default"].prototype.$ViewModal=Te["a"],a["default"].prototype.$IVIEW={};var qe=n("1368"),Ge=n.n(qe);Ge.a.polyfill(),a["default"].config.productionTip=!1,new a["default"]({router:h,store:B,render:function(e){return e(d)}}).$mount("#app")},"6d3d":function(e,t,n){"use strict";var a=n("018f"),o=n.n(a);o.a},"6e95":function(e,t,n){"use strict";var a=n("ffc0"),o=n.n(a);o.a},"7faf":function(e,t,n){"use strict";var a=n("4ee1"),o=n.n(a);o.a},ffc0:function(e,t,n){}});