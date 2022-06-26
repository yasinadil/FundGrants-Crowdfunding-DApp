(this.webpackJsonpdapp=this.webpackJsonpdapp||[]).push([[0],{251:function(e,t){},255:function(e,t){},257:function(e,t){},261:function(e,t){},287:function(e,t){},289:function(e,t){},303:function(e,t){},305:function(e,t){},334:function(e,t){},336:function(e,t){},426:function(e,t){},427:function(e,t){},452:function(e,t){},462:function(e,t){},526:function(e,t){},555:function(e,t,n){"use strict";n.r(t);var a=n(11),s=n(226),c=n.n(s),i=n(17),r=n(34),l=n(14),j=n(13),o=n.n(j),b=n(130),u=n.n(b),d=[{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"CampaignsList",outputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"currentfunds",type:"uint256"},{internalType:"address payable",name:"recipient",type:"address"},{internalType:"uint256",name:"investorsCount",type:"uint256"},{internalType:"uint256",name:"approvalcount",type:"uint256"},{internalType:"string",name:"status",type:"string"},{internalType:"uint256",name:"milestones",type:"uint256"},{internalType:"uint256",name:"fundsneeded",type:"uint256"},{internalType:"bool",name:"fundscollected",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"indexofcampaign",type:"uint256"}],name:"EndCampaign",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"indexofcampaign",type:"uint256"}],name:"InvestInCampaign",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"string",name:"n",type:"string"},{internalType:"string",name:"dsc",type:"string"},{internalType:"uint256",name:"fn",type:"uint256"}],name:"createCampaign",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getApprovalCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getCampaignCurrentFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getCampaignDesc",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getCampaignMilestones",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getCampaignName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getCampaignStatus",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getCampaignTargetAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getGrantOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getInvestors",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getInvestorsNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getListLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"indexofcampaign",type:"uint256"}],name:"giveApproval",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"indexofcampaign",type:"uint256"}],name:"retrieveMoney",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"indexofcampaign",type:"uint256"}],name:"updateMilestones",outputs:[],stateMutability:"nonpayable",type:"function"}],p=function(e){return new e.eth.Contract(d,"0x8c7FEbeE5e99d39a5C8757765ac6047e52b7702B")},x=n(0);var m=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),j=Object(l.a)(c,2),b=j[0],d=j[1],m=Object(a.useState)(""),O=Object(l.a)(m,2),h=O[0],f=O[1],y=Object(a.useState)(""),g=Object(l.a)(y,2),v=g[0],N=g[1],w=Object(a.useState)(null),C=Object(l.a)(w,2),T=C[0],k=C[1],S=Object(a.useState)(),z=Object(l.a)(S,2),M=z[0],A=z[1],D=Object(a.useState)([]),P=Object(l.a)(D,2),W=P[0],E=P[1],F=Object(a.useState)([]),I=Object(l.a)(F,2),G=I[0],V=I[1],q=Object(a.useState)([]),L=Object(l.a)(q,2),R=L[0],B=L[1],Y=Object(a.useState)([]),H=Object(l.a)(Y,2),U=H[0],J=H[1],Q=Object(a.useState)([]),X=Object(l.a)(Q,2),_=X[0],K=X[1],Z=Object(a.useState)([]),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)([]),ae=Object(l.a)(ne,2),se=ae[0],ce=ae[1],ie=Object(a.useState)(),re=Object(l.a)(ie,2),le=(re[0],re[1]),je=Object(a.useState)([]),oe=Object(l.a)(je,2),be=(oe[0],oe[1]),ue=Object(a.useState)([]),de=Object(l.a)(ue,2),pe=de[0],xe=de[1],me=Object(a.useState)(null),Oe=Object(l.a)(me,2),he=(Oe[0],Oe[1]),fe=Object(a.useState)([]),ye=Object(l.a)(fe,2),ge=ye[0],ve=ye[1],Ne=Object(a.useState)([]),we=Object(l.a)(Ne,2),Ce=we[0],Te=we[1],ke=new u.a(window.ethereum);Object(a.useEffect)((function(){function e(){return e=Object(r.a)(o.a.mark((function e(){var t,n,a,s,c,r,l,j,b,d,x,m,O,h,f,y,g;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u.a(window.ethereum),window.ethereum.request({method:"eth_requestAccounts"}),e.next=4,t.eth.getAccounts();case 4:return n=e.sent,k(n[0]),a=p(t),A(a),e.next=10,a.methods.getListLength().call();case 10:s=e.sent,le(s),c=0;case 13:if(!(c<s)){e.next=59;break}return e.next=16,a.methods.getCampaignName(c).call();case 16:return r=e.sent,e.next=19,a.methods.getCampaignDesc(c).call();case 19:return l=e.sent,e.next=22,a.methods.getCampaignTargetAmount(c).call();case 22:return j=e.sent,e.next=25,a.methods.getCampaignCurrentFunds(c).call();case 25:return b=e.sent,e.next=28,a.methods.getGrantOwner(c).call();case 28:return d=e.sent,e.next=31,a.methods.getInvestors(c).call();case 31:return x=e.sent,e.next=34,a.methods.getCampaignMilestones(c).call();case 34:return m=e.sent,e.next=37,a.methods.getApprovalCount(c).call();case 37:return O=e.sent,e.next=40,a.methods.getCampaignStatus(c).call();case 40:return h=e.sent,e.next=43,a.methods.getInvestorsNumber(c).call();case 43:f=e.sent,E((function(e){return[].concat(Object(i.a)(e),[r])})),V((function(e){return[].concat(Object(i.a)(e),[l])})),B((function(e){return[].concat(Object(i.a)(e),[j])})),J((function(e){return[].concat(Object(i.a)(e),[b])})),be((function(e){return[].concat(Object(i.a)(e),[d])})),K((function(e){return[].concat(Object(i.a)(e),[m])})),ce((function(e){return[].concat(Object(i.a)(e),[h])})),he(x),te((function(e){return[].concat(Object(i.a)(e),[O])})),ve((function(e){return[].concat(Object(i.a)(e),[f])})),d.includes(n[0])?(y="true",xe((function(e){return[].concat(Object(i.a)(e),[y])}))):(y="false",xe((function(e){return[].concat(Object(i.a)(e),[y])}))),x.includes(n[0])?(g="true",Te((function(e){return[].concat(Object(i.a)(e),[g])}))):(g="false",Te((function(e){return[].concat(Object(i.a)(e),[g])})));case 56:c++,e.next=13;break;case 59:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}alert("Connect your Ropsten Testnet Wallet"),function(){e.apply(this,arguments)}()}),[]);var Se=function(){var e=Object(r.a)(o.a.mark((function e(t){var a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=b,s=h,c=ke.utils.toWei(n,"ether"),e.next=6,M.methods.createCampaign(a,s,c).send({from:T});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ze(e){N(e.target.value)}return Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("section",{id:"head",children:Object(x.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-custom",children:[Object(x.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(x.jsx)("img",{className:"brandimg",src:"./images/logo.png",alt:"fundpk-Logo"}),Object(x.jsx)("span",{style:{color:"white",fontSize:"30px",fontFamily:"Red Hat Display"},children:"FundGrants"})]}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:Object(x.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"#grants-title",children:"Discover"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"#Create",children:"Create"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"",children:"About"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"",children:"Contact"})}),Object(x.jsx)("li",{className:"nav-item"})]})})]})}),Object(x.jsx)("section",{id:"mid-start",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-lg-6",children:[Object(x.jsxs)("h1",{children:["Discover and Fund ",Object(x.jsx)("br",{})," Extraodionary Public Goods"]}),Object(x.jsxs)("h2",{style:{marginTop:"3%"},children:["Fund new and exciting Projects ",Object(x.jsx)("br",{})," in a secure way!"]}),Object(x.jsxs)("div",{className:"buttons-discover",children:[Object(x.jsx)("a",{className:"btn-discover-1 btn btn-lg btn-primary d-block d-sm-inline",href:"#grants-title",children:"View All Projects"}),Object(x.jsx)("a",{className:"btn-discover-1 btn btn-lg btn-primary d-block d-sm-inline",href:"#Create",children:"Create Project"})]})]}),Object(x.jsx)("div",{className:"col-lg-6",children:Object(x.jsx)("img",{className:"main-img",src:"https://s.gitcoin.co/static/v2/images/grants/gr13-banner-half-1.5b491d74b22a.png",alt:""})})]})}),Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"discover",children:[Object(x.jsx)("h2",{children:Object(x.jsx)("strong",{children:"Discover Projects"})}),Object(x.jsx)("p",{children:"Popular and interesting Projects from the FundPK community"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-lg-3"}),Object(x.jsxs)("div",{className:"skill1 col-lg-2 col-md-6",children:[Object(x.jsx)("i",{className:"discover-icon fa-regular fa-gem fa-4x"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"discover-link",href:"",children:"Undiscovered gems"})]}),Object(x.jsxs)("div",{className:"skill2 col-lg-2 col-md-6",children:[Object(x.jsx)("i",{className:"discover-icon fa-solid fa-champagne-glasses fa-4x"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"discover-link",href:"",children:"Newest Projects"})]}),Object(x.jsxs)("div",{className:"skill3 col-lg-2 col-md-6",children:[Object(x.jsx)("i",{className:"discover-icon fa-solid fa-fire-flame-curved fa-4x"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"discover-link",href:"",children:"Trending"})]}),Object(x.jsx)("div",{className:"col-lg-3"})]})]})}),Object(x.jsx)("section",{id:"Create",children:Object(x.jsxs)("div",{className:"container create-container",children:[Object(x.jsx)("div",{className:"title",children:"Create Grant"}),Object(x.jsx)("div",{className:"content",children:Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"user-details",children:[Object(x.jsxs)("div",{className:"input-box",children:[Object(x.jsx)("span",{className:"details",children:"Title"}),Object(x.jsx)("input",{onChange:function(e){d(e.target.value)},type:"text",name:"title"})]}),Object(x.jsxs)("div",{className:"input-box",children:[Object(x.jsx)("span",{className:"details",children:"Content"}),Object(x.jsx)("textarea",{onChange:function(e){f(e.target.value)},name:"content",rows:"4",cols:"75"})]}),Object(x.jsxs)("div",{className:"input-box",children:[Object(x.jsxs)("span",{className:"details",children:["Target ",Object(x.jsx)("i",{className:"fa-brands fa-ethereum"})]}),Object(x.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},name:"target",required:!0})]})]}),Object(x.jsx)("div",{className:"button",children:Object(x.jsx)("input",{onClick:Se,type:"submit",value:"Submit"})})]})})]})}),Object(x.jsxs)("section",{id:"YourContributions",children:[Object(x.jsx)("h2",{id:"yourcontributions-title",children:"Your Contributions"}),Object(x.jsx)("div",{className:"row container-fluid",children:W.map((function(e,t){if("true"==Ce[t])return Object(x.jsxs)("div",{style:{display:"inline-block"},className:"col-lg-4 Card",children:[Object(x.jsx)("a",{style:{fontSize:"25px"},children:" Project Title"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{style:{fontSize:"15px"},id:"Value",children:e})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Project Details"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{style:{fontSize:"15px"},children:G[t]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Target"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[ke.utils.fromWei(R[t],"ether")," ",Object(x.jsx)("i",{className:"fa-brands fa-ethereum"})]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Amount Raised"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[ke.utils.fromWei(U[t],"ether")," ",Object(x.jsx)("i",{className:"fa-brands fa-ethereum"})]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Current Milestone"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[_[t],"/4"]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Withdraw Approval Votes"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[ee[t],"/",ge[t]]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"50% votes are required to approve withdrawal by grant manager."}),Object(x.jsx)("button",{style:{marginBottom:"1rem"},onClick:Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.methods.giveApproval(t).send({from:T});case 2:case"end":return e.stop()}}),e)}))),children:Object(x.jsx)("a",{style:{fontSize:"20px"},children:"Approve Withdrwal"})}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",onChange:ze,name:"Contribution",required:!0}),Object(x.jsx)("button",{onClick:Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U[t]===R[t]){e.next=5;break}return e.next=3,M.methods.InvestInCampaign(t).send({from:T,value:ke.utils.toWei(v,"ether")});case 3:e.next=6;break;case 5:alert("Target has been met!");case 6:case"end":return e.stop()}}),e)}))),children:Object(x.jsx)("a",{style:{fontSize:"20px"},children:"Fund Again"})})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:se[t]})]})}))})]}),Object(x.jsx)("section",{id:"YourGrants",children:Object(x.jsxs)("div",{className:"row container-fluid",children:[Object(x.jsx)("hr",{}),Object(x.jsx)("h2",{id:"yourgrants-title",children:"Your Grants"}),W.map((function(e,t){if("true"==pe[t])return Object(x.jsxs)("div",{style:{display:"inline-block"},className:"col-lg-4 Card",children:[Object(x.jsx)("a",{style:{fontSize:"25px"},children:" Project Title"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{style:{fontSize:"15px"},id:"Value",children:e})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Project Details"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{style:{fontSize:"15px"},children:G[t]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Target"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[ke.utils.fromWei(R[t],"ether")," ",Object(x.jsx)("i",{className:"fa-brands fa-ethereum"})]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Amount Raised"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[ke.utils.fromWei(U[t],"ether")," ",Object(x.jsx)("i",{className:"fa-brands fa-ethereum"})]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Current Milestone"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[_[t],"/4"]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Withdraw Approval Votes"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[ee[t],"/",ge[t]]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.methods.updateMilestones(t).send({from:T});case 2:case"end":return e.stop()}}),e)}))),children:Object(x.jsx)("a",{style:{fontSize:"20px"},children:"+ Milestone"})}),Object(x.jsx)("button",{onClick:Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(ee[t]>=ge[t]/2&&0!==ee)){e.next=5;break}return e.next=3,M.methods.retrieveMoney(t).send({from:T});case 3:e.next=6;break;case 5:alert("Approval Votes have not met the 50% mark!");case 6:case"end":return e.stop()}}),e)}))),children:Object(x.jsx)("a",{style:{fontSize:"20px"},children:"Withdraw"})}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:se[t]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.methods.EndCampaign(t).send({from:T});case 2:case"end":return e.stop()}}),e)}))),children:Object(x.jsx)("a",{style:{fontSize:"20px"},children:"End Campaign"})})]})}))]})}),Object(x.jsx)("section",{id:"Explorer",children:Object(x.jsxs)("div",{className:"row container-fluid",children:[Object(x.jsx)("hr",{}),Object(x.jsx)("h2",{id:"grants-title",children:"Grant Explorer"}),W.map((function(e,t){return Object(x.jsxs)("div",{style:{display:"inline-block"},className:"col-lg-4 Card",children:[Object(x.jsx)("a",{style:{fontSize:"25px"},children:" Project Title"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{style:{fontSize:"15px"},id:"Value",children:e})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Project Details"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{style:{fontSize:"15px"},children:G[t]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Target"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[ke.utils.fromWei(R[t],"ether")," ",Object(x.jsx)("i",{className:"fa-brands fa-ethereum"})]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Amount Raised"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[ke.utils.fromWei(U[t],"ether")," ",Object(x.jsx)("i",{className:"fa-brands fa-ethereum"})]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"Current Milestone"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{style:{fontSize:"15px"},children:[_[t],"/4"]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",onChange:ze,name:"Contribution",required:!0}),Object(x.jsx)("button",{onClick:Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.methods.InvestInCampaign(t).send({from:T,value:ke.utils.toWei(v,"ether")});case 2:case"end":return e.stop()}}),e)}))),children:Object(x.jsx)("a",{style:{fontSize:"20px"},children:"Fund"})})," ",Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:se[t]})]})}))]})})]})},O=n(131);var h=function(){var e,t=(e={background:"#77A1D3"},Object(O.a)(e,"background","-webkit-linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)"),Object(O.a)(e,"background","linear-gradient(to right, #0F0C29, #77A1D3, #0F0C29)"),e);return Object(x.jsxs)("footer",{className:"text-center text-lg-start",style:t,children:[Object(x.jsxs)("div",{className:"container d-flex justify-content-center py-5",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-floating mx-2",href:"https://www.facebook.com/ITzAdil205/",style:{backgroundColor:"#54456b"},children:Object(x.jsx)("i",{className:"fab fa-facebook-f"})}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-floating mx-2",href:"https://www.youtube.com/channel/UCB2C13Xa5Xxpcimk0QU2HsQ",style:{backgroundColor:"#54456b"},children:Object(x.jsx)("i",{className:"fab fa-youtube"})}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-floating mx-2",href:"https://www.instagram.com/_adilyasin/?hl=en",style:{backgroundColor:"#54456b"},children:Object(x.jsx)("i",{className:"fab fa-instagram"})}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-floating mx-2",href:"https://twitter.com/yasinaisha205",style:{backgroundColor:"#54456b"},children:Object(x.jsx)("i",{className:"fab fa-twitter"})})]}),Object(x.jsxs)("div",{className:"text-center text-white p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2022 Copyright:",Object(x.jsx)("a",{style:{fontSize:"18px"},className:"text-white",children:" Adil Yasin"})]})]})};var f=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{}),Object(x.jsx)(h,{})]})};c.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(f,{}))}},[[555,1,2]]]);
//# sourceMappingURL=main.0c7a4d4e.chunk.js.map