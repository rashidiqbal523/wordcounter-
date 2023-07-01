(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{28:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),n=c(15),a=c.n(n),l=c(9),o=c(1);function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})})}function d(e){var t=function(e){a(e.target.value)},c=Object(s.useState)(""),r=Object(l.a)(c,2),n=r[0],a=r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{className:"mb-4",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:t,style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toUpperCase();a(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toLowerCase();a(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){a(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.split(/[ ]+/);a(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("textarea",{className:"form-control",value:n.length>0?n:"Nothing to preview!",onChange:t,id:"myBox",rows:"8"})]})]})}var h=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},b=c(16),j=c(2);var m=function(){var e=Object(s.useState)("light"),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(null),a=Object(l.a)(n,2),m=a[0],u=a[1],x=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:c,toggleMode:function(){"light"===c?(r("dark"),document.body.style.backgroundColor="#042743",x("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",x("Light mode has been enabled","success"))}},new Date),Object(o.jsx)(h,{alert:m}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/about"}),Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{showAlert:x,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:c})})]})})]})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3705c960.chunk.js.map