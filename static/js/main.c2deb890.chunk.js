(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),o=n.n(r),i=n(5),s=n(6),b=n(7),d=n(10),j=n(9),u=n(8),l=n.n(u),h=n(0),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{type:"button",name:e,onClick:n,children:e},l.a.generate())}))})},g=function(e){var t=e.message;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:t})})},v=function(e){var t=e.title,n=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:t}),n]})},x=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",c]}),Object(h.jsxs)("p",{children:["Total: ",a]}),Object(h.jsxs)("p",{children:["Positive feedback: ",r," %"]})]})},f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=100*e.state.good/e.countTotalFeedback();return Math.round(t)},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),0===this.countTotalFeedback()?Object(h.jsx)(g,{message:"No feedback given"}):Object(h.jsx)(v,{title:"Statistics",children:Object(h.jsx)(x,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component),k=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f,{})})};n(24);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.c2deb890.chunk.js.map