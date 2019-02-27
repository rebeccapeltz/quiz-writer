(function(e){function t(t){for(var n,i,o=t[0],l=t[1],u=t[2],p=0,f=[];p<o.length;p++)i=o[p],a[i]&&f.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"0a7d":function(e,t,r){},"51e1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("a026"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"right-align login"},[r("b-form",{attrs:{inline:""}},[r("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputName2"}},[e._v("User Name")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inlineFormInputName2",placeholder:"User Name"}}),r("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputGroupUsername2"}},[e._v("Password")]),r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[r("b-input",{attrs:{id:"inlineFormInputGroupUsername2",placeholder:"Password"}})],1),r("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e._v("Remember me")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Login")])],1)],1),e._m(0),r("router-view")],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"brand"},[r("a",{attrs:{href:""}},[e._v("Quizr")])])}],i={name:"app"},o=i,l=(r("034f"),r("2877")),u=Object(l["a"])(o,a,s,!1,null,null,null),c=u.exports,p=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"quiz-writer"},[r("b-container",[r("h2",[e._v("Input")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.processText(t)}}},[r("label",{attrs:{for:"myFile"}},[r("p",[e._v("Choose File or paste text")]),r("input",{attrs:{type:"file",id:"myFile"}})]),r("b-form-textarea",{staticClass:"input-content",attrs:{id:"textarea1",placeholder:"Enter content to turn into quiz",rows:5,"max-rows":50},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),r("b-form-group",{attrs:{label:"Choose type of quiz question:"}},[r("b-form-checkbox-group",{attrs:{id:"type",name:"type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[r("b-form-checkbox",{attrs:{value:"fillin"}},[e._v("Fill in the blank")]),r("b-form-checkbox",{attrs:{value:"multichoice"}},[e._v("Multiple Choice")]),r("b-form-checkbox",{attrs:{value:"shortanswer"}},[e._v("Short Answer")])],1)],1),r("b-form-group",{attrs:{label:"Choose catagory:"}},[r("b-form-select",{staticClass:"mb-3 category-select",model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},[r("option",{domProps:{value:null}},[e._v("Please select an option")]),r("option",{attrs:{value:"definitions"}},[e._v("Definitions")]),r("option",{attrs:{value:"activities"}},[e._v("Activities")]),r("option",{attrs:{value:"events/dates"}},[e._v("Events/Dates")]),r("option",{attrs:{value:"glossary"}},[e._v("Glossary")])])],1),r("div",[r("b-button",{attrs:{type:"submit",variant:"primary",size:"lg"}},[e._v("Create Quiz")])],1)],1)])],1)},m=[],h={name:"QuizWriter",data(){return{results:null,errors:[],text:"",quiz:"",type:"",category:"null"}},methods:{processText(){this.quiz=[{question:"One early example of a machine that could reproduce sets of instructions is the Jacquard Loom, invented by ____________ in 1804.\n",answer:"Joseph Marie Jacquard"},{question:"Later in the 19th Century, ____________ came up with the idea of the Difference Engine, which was a calculation device specifically designed to solve polynomial equations.",answer:"Charles Babbage"}],this.$router.push({name:"quiz",params:{results:this.quiz}})}}},d=h,b=(r("d9a5"),Object(l["a"])(d,f,m,!1,null,"a1eefe90",null)),v=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"quiz"},[r("b-container",[r("h2",[e._v("Quiz")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.gradeQuiz(t)}}},[r("ul",e._l(e.results,function(t,n){return r("li",{key:n},[r("p",[e._v(e._s(n+1)+". "+e._s(t.question))]),r("p",[r("b-form-input",{attrs:{type:"text",placeholder:"Enter answer"},model:{value:e.answers[n],callback:function(t){e.$set(e.answers,n,t)},expression:"answers[index]"}})],1),r("div",{class:e.theClassTimes(n)},[r("i",{staticClass:"fas fa-times"})]),r("div",{class:e.theClassCheck(n)},[r("i",{staticClass:"fas fa-check"})])])}),0),r("b-button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("Submit")])],1)])],1)},y=[],g={name:"Quiz",data(){return{errors:[],results:null,answers:[],grade:[]}},mounted:function(){this.results=this.$route.params.results},methods:{theClassTimes(e){return this.grade.length>0?1===this.grade[e]?"none":"showit":"none"},theClassCheck(e){return this.grade.length>0?0===this.grade[e]?"none":"showit":"none"},gradeQuiz(){for(let e=0;e<this.answers.length;e++){let t=this.answers[e];this.$route.params.results[e].answer.trim().toLowerCase()===t.trim().toLowerCase()?this.grade[e]=1:this.grade[e]=0}console.log(this.grade)}}},w=g,x=(r("cc49"),Object(l["a"])(w,_,y,!1,null,"1e9176f2",null)),C=x.exports;n["a"].use(p["a"]);var z=new p["a"]({routes:[{path:"/",name:"quizwriter",component:v},{path:"/quiz",name:"quiz",component:C,props:!0}]}),q=r("9f7b");r("f9e3"),r("2dd8");n["a"].use(q["a"]),n["a"].config.productionTip=!1,new n["a"]({el:"#app",router:z,template:"<App/>",components:{App:c}})},"64a9":function(e,t,r){},cc49:function(e,t,r){"use strict";var n=r("0a7d"),a=r.n(n);a.a},d9a5:function(e,t,r){"use strict";var n=r("51e1"),a=r.n(n);a.a}});
//# sourceMappingURL=app.2d81dca5.js.map