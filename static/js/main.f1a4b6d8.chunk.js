(this.webpackJsonpstock_market=this.webpackJsonpstock_market||[]).push([[0],{369:function(e,t,c){},447:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(15),s=c.n(a),i=c(348),r=c(71),o=(c(369),c(62)),l=c(344),j=c(237),d=[],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMPANY_DATA":return Object(j.a)(t.payload);default:return Object(j.a)(e)}},h=function(){return Object(o.e)(Object(o.c)({company:b}),Object(o.a)(l.a))},O=c(468),x=c(184),g=c(86),p=c(470),m=(c(297),c(14)),u=function(){return Object(m.jsx)(O.a,{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)(x.a,{style:{marginTop:"20px"},children:[Object(m.jsx)(g.a,{children:"Google"}),Object(m.jsx)("br",{}),Object(m.jsxs)(p.a,{style:{textAlign:"center"},children:[Object(m.jsx)("img",{width:"20%",alt:"Google img",src:"http://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"}),Object(m.jsx)(g.a,{variant:"h4",children:"1515 USD"})]})]})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)(x.a,{style:{marginTop:"20px"},children:[Object(m.jsx)(g.a,{children:"FB"}),Object(m.jsx)("br",{}),Object(m.jsxs)(p.a,{style:{textAlign:"center"},children:[Object(m.jsx)("img",{width:"30%",alt:"facebook img",src:"https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"}),Object(m.jsx)(g.a,{variant:"h4",children:"266 USD"})]})]})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)(x.a,{style:{marginTop:"20px"},children:[Object(m.jsx)(g.a,{children:"AMZN"}),Object(m.jsx)("br",{}),Object(m.jsxs)(p.a,{style:{textAlign:"center"},children:[Object(m.jsx)("img",{width:"20%",alt:"amazon img",src:"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"}),Object(m.jsx)(g.a,{variant:"h4",children:"3116 USD"})]})]})})]})})},f=c(120),y=c(228),v=c.n(y),A=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=(t[0],t[1],Object(n.useState)("")),a=Object(f.a)(c,2),s=(a[0],a[1],Object(n.useState)("")),i=Object(f.a)(s,2),o=(i[0],i[1],Object(f.a)("",2)),l=(o[0],o[1],Object(f.a)("",2));l[0],l[1],Object(r.d)((function(e){return console.log("companies",e.company),e.company}));return Object(m.jsx)("div",{children:Object(m.jsx)(v.a,{title:"Stock Details",columns:[{title:"Name",field:"name"},{title:"Symbol",field:"surname"},{title:"Currency",field:"birthYear",type:"numeric"},{title:"Stock Exchange",field:"birthCity"},{title:"Exchange ShortName",field:"Exchange ShortName"}],data:[],options:{search:!0}})})},w=c(347),N=c.n(w),S=function(e){return{type:"COMPANY_DATA",payload:e}},k=c(479),Z=function(){var e=Object(r.c)();return Object(n.useEffect)((function(){e((function(e){N.a.get("https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=demo").then((function(t){var c=t.data;console.log("result",c),e(S(c))})).catch((function(e){console.log(e.message)}))}))}),[e]),Object(m.jsxs)("div",{children:[Object(m.jsx)(p.a,{children:Object(m.jsx)(x.a,{children:Object(m.jsx)("img",{width:"15%",alt:"app logo",src:"https://ci3.googleusercontent.com/proxy/P7ljLklJiMVvAw6ErYAuokwU--iiMQ_8ROj2AI4aIrhPZ9sWXtbDHYyfdmrKMVZ0ATJbu1LOu1NhUieyJH1WUfw2l72grRHNSRCd20mEb90h4PG23xYaQ0Ag_HfEgZNJeZReiQj9iQf-cdrNyAGW8uIy_ry7IXDdQ87G8SRHXAqh52U0ZQqX44zq5S08ZrR_XqhnG-aOd_hVJ5OfYA=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1j-yTzcZXbKtlul61hBp55gwZrlGe_9dE&revid=0B9skVG_OgQvQU1loTGFxOHcwNXJJZFF6OEZ1UXdBNDcvRktJPQ"})})}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(k.a,{}),Object(m.jsx)("div",{style:{marginTop:"20px"},children:Object(m.jsx)(u,{})}),Object(m.jsx)("div",{style:{marginTop:"50px"},children:Object(m.jsx)(A,{})})]})]})},_=h();console.log(_.getState()),_.subscribe((function(){console.log("updated store",_.getState())})),s.a.render(Object(m.jsx)(r.a,{store:_,children:Object(m.jsx)(i.a,{children:Object(m.jsx)(O.a,{disableGutters:!0,children:Object(m.jsx)(Z,{})})})}),document.getElementById("root"))}},[[447,1,2]]]);
//# sourceMappingURL=main.f1a4b6d8.chunk.js.map