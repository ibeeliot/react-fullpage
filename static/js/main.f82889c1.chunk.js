(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,n){e.exports=n(347)},141:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(130),o=n.n(r),i=(n(141),n(131)),c=n(132),m=n(134),d=n(133),s=n(135),u=n(45),g=n(11),E=(n(145),function(){return l.a.createElement(g.d,{style:{backgroundColor:"#F5F4F2",color:"#05293B",height:"80vh",padding:"1em",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:"3.4em",letterSpacing:-.14,marginTop:"0.54em",marginBottom:"0.4em"}},"React Fullpage"),l.a.createElement("h2",{style:{fontSize:"1.75em",letterSpacing:-.14,marginTop:"0.3em",marginBottom:"0.4em"}},"Create Fullscreen Scrolling Websites"),l.a.createElement("p",null,"Version 0.1.6-alpha")))}),y=function(){return l.a.createElement(g.d,{style:{backgroundColor:"#EBEAE5",color:"#05293B",height:"100vh",padding:"1em",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:"3.4em",letterSpacing:-.14,marginTop:"0.54em",marginBottom:"0.4em"}},"Create a Fullpage beautiful mobile website")))},h=function(){return l.a.createElement(g.d,{style:{backgroundColor:"#EBEAE5",color:"#05293B",height:"80vh",padding:"1em",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("h1",{style:{fontSize:"3.4em",letterSpacing:-.14,marginTop:"0.54em",marginBottom:"0"}},"Use key"),l.a.createElement("div",{style:{maxWidth:660}},l.a.createElement("img",{style:{width:"100%"},src:"assets/keys.gif",alt:"Next Back keys"})),l.a.createElement("p",{style:{marginTop:"0.54em"}},"You can use key ",l.a.createElement("span",{role:"img","aria-label":"key up"},"\u2b06\ufe0f")," and ",l.a.createElement("span",{role:"img","aria-label":"key down"},"\u2b07\ufe0f")," or key ",l.a.createElement("span",{role:"img","aria-label":"key down"},"\u2b05\ufe0f")," and ",l.a.createElement("span",{role:"img","aria-label":"key right"},"\u27a1\ufe0f")))},p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={backgroundColor:"#05293B",extraSlide:[]},n.addSlide=n.addSlide.bind(Object(u.a)(Object(u.a)(n))),n.removeSlide=n.removeSlide.bind(Object(u.a)(Object(u.a)(n))),n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){console.log(e)}},{key:"addSlide",value:function(){var e=this.state.extraSlide,t=l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement(g.d.Number,null),". New content"),l.a.createElement("p",null,"Lorem ipsum content."));this.setState({extraSlide:e.concat([{content:t}])}),console.log(this.state)}},{key:"removeSlide",value:function(){var e=this.state.extraSlide;this.setState({extraSlide:e.slice(0,-1)}),console.log(this.state)}},{key:"render",value:function(){var e=this,t=this.state.extraSlide;return l.a.createElement(l.a.StrictMode,null,l.a.createElement(g.e,{desktopForceStep:!0,onChange:this.onChange},l.a.createElement(g.c,null),l.a.createElement(g.a,null,l.a.createElement(E,null),l.a.createElement(y,null),l.a.createElement(h,null),l.a.createElement(g.d,{style:{backgroundColor:this.state.backgroundColor,color:"white",padding:"1em",display:"flex",alignItems:"center",justifyContent:"center",transition:"background-color 1000ms linear"},onShow:function(){e.setState({backgroundColor:"#266B8C"})},onHide:function(){e.setState({backgroundColor:"#05293B"})}},l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:"4em"}},"Events"),l.a.createElement("button",{onClick:this.addSlide},"addSlide"),l.a.createElement("p",{style:{fontSize:"2em"}},"Page ",l.a.createElement(g.d.Number,{style:{fontSize:"3em"}})," / ",l.a.createElement(g.b,{style:{fontSize:"1em"}})))),t.map(function(e,t){return l.a.createElement(g.d,{style:{backgroundColor:"purple",color:"white",padding:"1em",display:"flex",alignItems:"center",justifyContent:"center"},key:"extraSlide".concat(t)},e.content)}),l.a.createElement(g.d,{style:{backgroundColor:"firebrick",color:"white",padding:"1em",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:"4em"}},l.a.createElement(g.d.Number,null)),l.a.createElement("button",{onClick:this.addSlide},"addSlide"),l.a.createElement("button",{onClick:this.removeSlide},"removeSlide"))),l.a.createElement(g.d,{style:{backgroundColor:"orange",color:"firebrick",height:"80vh",padding:"1em",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h1",{style:{fontSize:"2em"}},l.a.createElement(g.d.Number,null)," Small")))))}}]),t}(a.Component);o.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[136,2,1]]]);
//# sourceMappingURL=main.f82889c1.chunk.js.map