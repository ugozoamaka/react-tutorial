(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(7),i=a.n(c),s=(a(14),a(15),a(9)),h=a(2),o=a(3),j=a(5),b=a(4),l=a(0),u=function(t){var e=t.characterData,a=t.removeCharacter;return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)(d,{}),Object(l.jsx)(m,{characterData:e,removeCharacter:a})]})},d=function(){return Object(l.jsx)("thead",{className:"thead-dark",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Job"}),Object(l.jsx)("th",{children:"Remove"})]})})},m=function(t){var e=t.characterData.map((function(e,a){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.job}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){return t.removeCharacter(a)},className:"btn-danger",children:"Delete"})})]},a)}));return Object(l.jsx)("tbody",{children:e})},O=a(8),f=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).handleChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(O.a)({},a,r))},n.onFormSubmit=function(t){t.preventDefault(),n.props.handleSubmit(n.state),n.setState(n.initialState)},n.initialState={name:"",job:""},n.state=n.initialState,n}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.job;return Object(l.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(l.jsx)("label",{for:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(l.jsx)("label",{for:"job",children:"Job"}),Object(l.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})}}]),a}(n.Component),v=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={characters:[]},t.removeCharacter=function(e){var a=t.state.characters;t.setState({characters:a.filter((function(t,a){return a!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(s.a)(t.state.characters),[e])})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state.characters;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(u,{characterData:t,removeCharacter:this.removeCharacter}),Object(l.jsx)(f,{handleSubmit:this.handleSubmit})]})}}]),a}(n.Component),x=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),c(t),i(t)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.5da027bc.chunk.js.map