(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(71),o=a.n(i),c=(a(85),a(87),a(6)),l=(a(89),a(72)),s=a.n(l),m=a(2),u=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],i=t[1];Object(n.useEffect)(function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}},[]);var o=function(){a&&i(!0)};return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"logo",href:"home"},r.a.createElement("img",{src:s.a,alt:"Logo",style:{width:"60px",height:"auto"}}),r.a.createElement("div",{className:"logo-text"},"SKC Detailing")),r.a.createElement("ul",{id:"nav-links",className:a?"active":""},r.a.createElement("li",null,r.a.createElement(m.Link,{to:"home",className:"nav-link"},"Home")),r.a.createElement("li",null,r.a.createElement(m.Link,{to:"packages",className:"nav-link",smooth:!0,duration:500},"Packages")),r.a.createElement("li",null,r.a.createElement(m.Link,{to:"our-work",className:"nav-link",smooth:!0,duration:500},"Our Work")),r.a.createElement("li",null,r.a.createElement(m.Link,{to:"contact-us",className:"nav-link",smooth:!0,duration:500},"Contact Us")),r.a.createElement("li",null,r.a.createElement(m.Link,{to:"packages",className:"nav-link",smooth:!0,duration:500},r.a.createElement("span",{className:"book-now-button"},"Book Now")))),r.a.createElement("div",{id:"mobile"},r.a.createElement("i",{id:"bar",className:a?"fas fa-bars":"fas fa-times",onClick:function(){return i(!a)}})))},d=a(73);a(158);var h=function(){return r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{padding:"0 20px"}},r.a.createElement(d.Carousel,{data:[{image:"https://media.istockphoto.com/id/1415036627/photo/man-worker-of-car-detailing-studio-removing-scratches-on-car-varnish.webp?b=1&s=170667a&w=0&k=20&c=NrjjPK10RDALCLlkAUhKQWVS4SIzYMI23TuEB3bm3t8=",caption:""},{image:"https://cdn.create.vista.com/api/media/small/237651284/stock-photo-auto-detailing-car-interior-carwash-service-worker-gloves-cleans-salon",caption:""},{image:"https://media.istockphoto.com/id/826875544/photo/high-pressure-washing-car-outdoors.jpg?s=612x612&w=0&k=20&c=VWs9auj2wJpOEXSe4ZC5XVHFCOpOHIbkFHLnZY2-Q1M=",caption:""}],time:4e3,width:"850px",height:"500px",captionStyle:{fontSize:"2em",fontWeight:"bold"},radius:"10px",slideNumber:!1,slideNumberStyle:{fontSize:"20px",fontWeight:"bold"},captionPosition:"bottom",automatic:!0,dots:!0,pauseIconColor:"white",pauseIconSize:"40px",slideBackgroundColor:"darkgrey",slideImageFit:"cover",thumbnails:!0,thumbnailWidth:"270px",style:{textAlign:"center",maxWidth:"850px",maxHeight:"500px",margin:"40px auto",thumbnailBackground:"#363636"}})))))},p=(a(160),function(){return r.a.createElement("div",{className:"card-container",style:{backgroundImage:'url("https://cdn.create.vista.com/api/media/small/237651284/stock-photo-auto-detailing-car-interior-carwash-service-worker-gloves-cleans-salon")',backgroundSize:"cover",backgroundPosition:"center"}},r.a.createElement("div",{className:"home-card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h1",null,"Mobile Detailing For Busy Professionals"),r.a.createElement("p",null,"Using premium products, we get your vehicle as close to day one as possible."),r.a.createElement("div",{className:"button-container"},r.a.createElement(m.Link,{to:"packages",smooth:!0,duration:500},r.a.createElement("button",{className:"booknow-button"},"Book Now")),r.a.createElement(m.Link,{to:"our-work",smooth:!0,duration:500},r.a.createElement("button",{className:"our-work-button"},"Our Work"))))))}),f=a(48),v=(a(162),function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(0),l=Object(c.a)(o,2),s=l[0],u=l[1],d=Object(n.useState)([]),h=Object(c.a)(d,2),p=h[0],v=h[1],g=Object(n.useRef)(null),E=Object(n.useState)(0),b=Object(c.a)(E,2),y=b[0],k=b[1],w=function(){if(g.current){var e=g.current.getBoundingClientRect().height;k(e)}};Object(n.useEffect)(function(){return w(),window.addEventListener("resize",w),function(){window.removeEventListener("resize",w)}},[a,s,p]);var N=Object(n.useState)(window.innerHeight),x=Object(c.a)(N,2),L=x[0],O=x[1],P=Object(n.useState)(y-L),S=Object(c.a)(P,2),j=S[0],C=S[1];Object(n.useEffect)(function(){C(y-L)},[y,L]),console.log(O);var F=Object(n.useState)(!1),W=Object(c.a)(F,2),H=W[0],_=W[1];Object(n.useEffect)(function(){var e=function(){var e=document.querySelector("h2.selection-title");e&&(e.getBoundingClientRect().top<0?_(!0):_(!1))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]);var I=[{title:"Sedan",icon:{package:"fas",name:"car"},packages:[{title:"Basic Wash & Wax",eta:"1hr 30min",basePrice:75,addonPrice:[],microservices:["Hand Wash","Spray Wax","Exterior Glass","Wheel Faces, Barrels & Wells"],addOns:[{id:"headlight-restoration",title:"Headlight Restoration",price:70},{id:"pet-hair-removal",title:"Pet Hair Removal",price:45}],meetingLink:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2NcAlbIZjC5cjk6opT6Dd1hy9CzfHIb9ZANjhEZ81DxAOLAi_ryFFgGvWDPS1TH_WO9f_T2c59?gv=true"},{title:"Full Interior Detail",eta:"2hr 30min",basePrice:150,addonPrice:[],microservices:["Door Jambs","Interior Glass","Meticulous Vacuuming","Surface Wipe Down & Protectant","Leather Conditioning","One Set of Floor Mats Cleaned"],addOns:[{id:"headlight-restoration",title:"Headlight Restoration",price:70},{id:"pet-hair-removal",title:"Pet Hair Removal",price:45}],meetingLink:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3mtwRvQ8emaQ5FTZN09CoqMTOTbQyQHI5SdAO1784X9ajcp2d6mpSc71NoqRvDQzvC-3_kDkxJ?gv=true"},{title:"Full Exterior Detail",eta:"2hr",basePrice:110,addonPrice:[],microservices:["Hand Wash","Iron Removal","Clay Bar Treatment","Plastic Trim Coat","Wheel Faces, Barrels & Wells","Exterior Glass"],addOns:[{id:"headlight-restoration",title:"Headlight Restoration",price:70},{id:"pet-hair-removal",title:"Pet Hair Removal",price:45}],meetingLink:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2BYUP7glELVDWD_C8TmRVGcLQCILqYifA1UwtVALKrhGPJCO8L8PY3FDcJxnelqR3SQGJFp-yx?gv=true"},{title:"Premium Full Detail",eta:"3hr 30min",basePrice:250,addonPrice:[],microservices:["Full Interior + Full Exterior Packages"],addOns:[{id:"headlight-restoration",title:"Headlight Restoration",price:70},{id:"pet-hair-removal",title:"Pet Hair Removal",price:45}],meetingLink:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ23d4srCrhgYU_6z5RX_Hn0lLW8bTpOmk06U2mMKKOHehznRjQHOsITTwk-GLjTMDlrf_CCaILF?gv=true"}]},{title:"Truck / SUV / Van",icon:{package:"fas",name:"truck-pickup"},packages:[{title:"Basic Wash & Wax",eta:"1hr 45min",basePrice:90,addonPrice:[],microservices:["Hand Wash","Spray Wax","Exterior Glass","Wheel Faces, Barrels & Wells"],addOns:[{id:"headlight-restoration",title:"Headlight Restoration",price:70},{id:"pet-hair-removal",title:"Pet Hair Removal",price:45}],meetingLink:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0iHJt0UKLLPUtx1_3UWI02ffBo_NUZBH3lYKWSXx1B48SRWiCoAHBQWzS5vNuIgQniVcW47vZ7?gv=true"},{title:"Full Interior Detail",eta:"3hr",basePrice:170,addonPrice:[],microservices:["Door Jambs","Interior Glass","Meticulous Vacuuming","Surface Wipe Down & Protectant","Leather Conditioning","One Set of Floor Mats Cleaned"],addOns:[{id:"headlight-restoration",title:"Headlight Restoration",price:70},{id:"pet-hair-removal",title:"Pet Hair Removal",price:45}],meetingLink:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2RQ-WKtDA-F0MEB1RnDETf5clfE9JQ61ixwdypxiCyS9A-aFb2Y0WqcYXOOay6VvwTd_cMnpG7?gv=true"},{title:"Full Exterior Detail",eta:"2hr 30mins",basePrice:135,addonPrice:[],microservices:["Hand Wash","Iron Removal","Clay Bar Treatment","Plastic Trim Coat","Wheel Faces, Barrels & Wells","Exterior Glass"],addOns:[{id:"headlight-restoration",title:"Headlight Restoration",price:70},{id:"pet-hair-removal",title:"Pet Hair Removal",price:45}],meetingLink:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2kRkgcLV495uuoZj1vW5jn61NEMqeKEUTlBHI-h8_6sFA_oeHs0zJ3rUgT24sQxVAS5Sn1wqzt?gv=true"},{title:"Premium Full Detail",eta:"4hr",basePrice:300,addonPrice:[],microservices:["Full Interior + Full Exterior Packages"],addOns:[{id:"headlight-restoration",title:"Headlight Restoration",price:70},{id:"pet-hair-removal",title:"Pet Hair Removal",price:45}],meetingLink:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Xnj_fSwY3cnnBYG6fwnzPvCYI9YqJuqFkdrVnSPwQVXiNDZ1fhTbfZ5uUqbm1ApiaBbgYT69r?gv=true"}]},{title:"Larger Vehicles",icon:{package:"fas",name:"ship"},packages:[]}];return r.a.createElement("div",{className:"skc-container",ref:g},r.a.createElement("div",{className:"selection-group"},r.a.createElement(m.Element,{name:"schedule-button-element"},r.a.createElement("h2",{className:"selection-title"},"What kind of vehicle do you have?")),r.a.createElement("div",{className:"button-group"},I.map(function(e,t){return r.a.createElement(m.Link,{to:"select-your-package",smooth:!0,duration:500,offset:-20,key:t,onClick:function(){return i(t)},className:"vehicle-type ".concat(a===t?"selected":"")},r.a.createElement("div",{className:"vehicle-icon"},r.a.createElement("i",{className:"".concat(e.icon.package," fa-").concat(e.icon.name)})),r.a.createElement("div",{className:"vehicle-title"},e.title))}))),r.a.createElement(m.Element,{name:"select-your-package"},r.a.createElement("h2",{className:"selection-title"},"Select your Package")),r.a.createElement("div",{className:"package-group"},I[a].packages.map(function(e,t){return r.a.createElement(m.Link,{to:"schedule-button-element",smooth:!0,duration:500,offset:j,key:t,onClick:function(){return u(t)},className:"package-card ".concat(s===t?"selected":"")},r.a.createElement("div",{className:"package-price-container"},r.a.createElement("span",{className:"package-price-value"},"$",function(e){var t=I[a].packages[e];return t.basePrice+(p[e]||[]).reduce(function(e,a){var n=t.addOns.find(function(e){return e.id===a});return n?e+n.price:e},0)}(t))),r.a.createElement("h2",{className:"package-title"},e.title),r.a.createElement("div",{className:"package-eta"},e.eta),r.a.createElement("div",{className:"microservices-addon-container"},r.a.createElement("div",null,r.a.createElement("ul",{className:"package-microservices"},r.a.createElement("h3",null,"Includes"),e.microservices.map(function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",{className:"add-ons"},r.a.createElement("h3",{className:"add-ons-title"},"Add-ons:"),r.a.createElement("div",{className:"add-ons-list"},e.addOns.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",className:"add-on-checkbox",value:e.id,onChange:function(){return function(e,t){v(function(a){var n=Object(f.a)(a);n[e]||(n[e]=[]);var r=n[e];if(r.includes(t)){var i=r.indexOf(t);-1!==i&&r.splice(i,1)}else r.push(t);return Object(f.a)(n)})}(t,e.id)},checked:!!p[t]&&p[t].includes(e.id)}),e.title," (+$",e.price,")"))})))))}))," ",2===a&&r.a.createElement("div",{className:"conditional-card"},r.a.createElement("div",{className:"contact-package-card"},r.a.createElement("div",{className:"alternative-card-info"},r.a.createElement("h2",{className:"package-title"},"Larger Vehicles are by quote only"),r.a.createElement("div",{className:"package-eta"},"Please Contact Us for more information")),r.a.createElement("div",{className:"alternative-card-info"},r.a.createElement("h2",{className:"package-title"},"Paint Correction available by specialty appointment"),r.a.createElement("div",{className:"package-eta"},"If you're interested in Paint Correction, feel free to get in contact with us")),r.a.createElement("div",{className:"book-appointment-container"},r.a.createElement(m.Link,{to:"contact-us",smooth:!0,duration:500},r.a.createElement("button",{className:"contact-us-button"},"Contact Us"))))),(0===a||1===a)&&r.a.createElement("div",{className:"conditional-card"},r.a.createElement("div",{className:"contact-package-card"},r.a.createElement("div",{className:"alternative-card-info"},r.a.createElement("h2",{className:"package-title"},"Paint Correction available by specialty appointment"),r.a.createElement("div",{className:"package-eta"},"If you're interested in Paint Correction, feel free to get in contact with us")),r.a.createElement("div",{className:"book-appointment-container"},r.a.createElement(m.Link,{to:"contact-us",smooth:!0,duration:500},r.a.createElement("button",{className:"contact-us-button"},"Contact Us"))))),(0===a||1===a)&&r.a.createElement("div",{className:"book-appointment-container"},r.a.createElement(m.Element,{name:"schedule-button-element-dud"},r.a.createElement("button",{className:"book-appointment-button",onClick:function(){return window.open(I[a].packages[s].meetingLink,"_blank")}},"Schedule Appointment"))),H&&r.a.createElement("button",{className:"scroll-to-top-button",onClick:function(){var e=document.querySelector("h2.selection-title");e&&e.scrollIntoView({behavior:"smooth"})}},r.a.createElement("i",{className:"fas fa-arrow-up"})))}),g=a(74),E=a(26),b=a(75),y=(a(164),a(76));function k(){k=function(){return t};var e,t={},a=Object.prototype,n=a.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,a){return e[t]=a}}function m(e,t,a,n){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),c=new F(n||[]);return r(o,"_invoke",{value:P(e,a,c)}),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}t.wrap=m;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",v={};function g(){}function E(){}function b(){}var y={};s(y,o,function(){return this});var w=Object.getPrototypeOf,N=w&&w(w(W([])));N&&N!==a&&n.call(N,o)&&(y=N);var x=b.prototype=g.prototype=Object.create(y);function L(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function O(e,t){function a(r,i,o,c){var l=u(e[r],e,i);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,o,c)},function(e){a("throw",e,o,c)}):t.resolve(m).then(function(e){s.value=e,o(s)},function(e){return a("throw",e,o,c)})}c(l.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t(function(t,r){a(e,n,t,r)})}return i=i?i.then(r,r):r()}})}function P(t,a,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return{value:e,done:!0}}for(n.method=i,n.arg=o;;){var c=n.delegate;if(c){var l=S(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(t,a,n);if("normal"===s.type){if(r=n.done?f:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}function S(t,a){var n=a.method,r=t.iterator[n];if(r===e)return a.delegate=null,"throw"===n&&t.iterator.return&&(a.method="return",a.arg=e,S(t,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=u(r,t.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,v;var o=i.arg;return o?o.done?(a[t.resultName]=o.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,v):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function W(t){if(t||""===t){var a=t[o];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function a(){for(;++r<t.length;)if(n.call(t,r))return a.value=t[r],a.done=!1,a;return a.value=e,a.done=!0,a};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return E.prototype=b,r(x,"constructor",{value:b,configurable:!0}),r(b,"constructor",{value:E,configurable:!0}),E.displayName=s(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},L(O.prototype),s(O.prototype,c,function(){return this}),t.AsyncIterator=O,t.async=function(e,a,n,r,i){void 0===i&&(i=Promise);var o=new O(m(e,a,n,r),i);return t.isGeneratorFunction(a)?o:o.next().then(function(e){return e.done?e.value:o.next()})},L(x),s(x,l,"Generator"),s(x,o,function(){return this}),s(x,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=W,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function r(n,r){return c.type="throw",c.arg=t,a.next=n,r&&(a.method="next",a.arg=e),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),C(a),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;C(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,n){return this.delegate={iterator:W(t),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}var w=function(){var e="8:am to 6:00pm",t=Object(n.useState)(""),a=Object(c.a)(t,2),i=a[0],o=a[1],l=Object(n.useState)(""),s=Object(c.a)(l,2),m=s[0],u=s[1],d=Object(n.useState)({name:"",email:"",message:""}),h=Object(c.a)(d,2),p=h[0],f=h[1],v=function(e){var t=e.target,a=t.name,n=t.value;f(Object(b.a)({},p,Object(E.a)({},a,n)))},w=function(){var e=Object(g.a)(k().mark(function e(t){return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y.a.sendForm("service_cuqwgna","template_xbto0le",t.target,"W48YWCUKEg8DqQdB6").then(function(e){console.log("Email sent successfully:",e.text),o("Email sent Successfully!")},function(e){console.error("Error sending email:",e.text),u("Failed to send. Please contact us directly, or try again another time.")}),f({name:"",email:"",message:""});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"contact-card"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:w},r.a.createElement("div",{className:"form-container"},r.a.createElement("span",{className:"form-title"},"Send us a Message!"),r.a.createElement("label",{htmlFor:"name"}),r.a.createElement("input",{className:"submit-box-name",type:"text",id:"name",name:"name",placeholder:"Name",value:p.name,onChange:v,required:!0}),r.a.createElement("label",{htmlFor:"email"}),r.a.createElement("input",{className:"submit-box-email",type:"email",id:"email",name:"email",placeholder:"Email Address",value:p.email,onChange:v,required:!0}),r.a.createElement("label",{htmlFor:"message"}),r.a.createElement("textarea",{className:"submit-box-message",id:"message",name:"message",placeholder:"Your Message...",value:p.message,onChange:v,rows:"4",required:!0})),r.a.createElement("button",{className:"submit-message-button",type:"submit"},"Send Email"),r.a.createElement("div",{className:"success-notification"},i),r.a.createElement("div",{className:"fail-notification"},m))),r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"contact-details"},r.a.createElement("div",null,r.a.createElement("h2",null,"SKC Detailing"),r.a.createElement("p",null,"Email: ",r.a.createElement("a",{href:"mailto:skcdetailing@gmail.com"},"skcdetailing@gmail.com")),r.a.createElement("p",null,"Phone: ",r.a.createElement("a",{href:"tel:(916)612-5253"},"(916) 612-5253")))),r.a.createElement("div",null,r.a.createElement("h2",{className:"problem-h2"},"Hours")),r.a.createElement("div",{className:"avaliable-container"},r.a.createElement("div",{className:"avaliable-days"},r.a.createElement("p",null,"Tuesday"),r.a.createElement("p",null,"Wednesday"),r.a.createElement("p",null,"Thursday"),r.a.createElement("p",null,"Friday")),r.a.createElement("div",{className:"avaliable-times"},r.a.createElement("p",null,e),r.a.createElement("p",null,e),r.a.createElement("p",null,e),r.a.createElement("p",null,e)))))},N=(a(166),function(){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("div",{className:"left-text"},"\xa9SKC Detailing. All rights reserved."),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://www.instagram.com/skc_detailing/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"https://www.facebook.com/SKCDetailing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("a",{href:"https://goo.gl/maps/VUwytmkyVLkhDJ3F6",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-google"}))))});var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"home",className:"navbar-container"},r.a.createElement(u,null)),r.a.createElement("div",null,r.a.createElement(p,null)),r.a.createElement("div",{id:"packages"},r.a.createElement("span",{className:"section-title"},"Packages"),r.a.createElement(v,null)),r.a.createElement("div",{id:"our-work",className:""},r.a.createElement("span",{className:"section-title"},"Our Work"),r.a.createElement(h,null)),r.a.createElement("div",{id:"contact-us"},r.a.createElement("span",{className:"section-title"},"Contact Us"),r.a.createElement(w,null)),r.a.createElement("div",null,r.a.createElement(N,null)))},L=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,169)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null))),L()},72:function(e,t,a){e.exports=a.p+"static/media/logo.ce41d0e1.png"},77:function(e,t,a){e.exports=a(168)},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){}},[[77,3,2]]]);
//# sourceMappingURL=main.d708369a.chunk.js.map