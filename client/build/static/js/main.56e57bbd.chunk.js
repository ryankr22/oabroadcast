(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t){e.exports={generateAccessCode:function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,s=0;s<e;s++)t+=n.charAt(Math.floor(Math.random()*a));return t}}},151:function(e,t,n){e.exports=n(325)},156:function(e,t,n){},157:function(e,t,n){},178:function(e,t,n){},182:function(e,t,n){},187:function(e,t){},189:function(e,t){},227:function(e,t){},228:function(e,t){},300:function(e,t,n){},319:function(e,t,n){},320:function(e,t,n){},321:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getLiveSlideshow",function(){return U}),n.d(a,"deleteImage",function(){return F}),n.d(a,"showSignupModal",function(){return M}),n.d(a,"login",function(){return _}),n.d(a,"createUser",function(){return P}),n.d(a,"signupUser",function(){return R}),n.d(a,"deleteSlideshow",function(){return G}),n.d(a,"getUserSlideshows",function(){return B}),n.d(a,"getSlidesByTag",function(){return W}),n.d(a,"saveSlideshowInSQL",function(){return z}),n.d(a,"saveGuestSlideshow",function(){return V}),n.d(a,"getUserSlideshowsSuccess",function(){return q}),n.d(a,"getSlidesSuccess",function(){return X}),n.d(a,"loginSuccess",function(){return Q}),n.d(a,"loginFailed",function(){return H}),n.d(a,"signupSuccess",function(){return Z}),n.d(a,"signupFailed",function(){return J}),n.d(a,"resetApp",function(){return $}),n.d(a,"signOut",function(){return K});var s=n(0),r=n.n(s),i=n(25),o=n.n(i),c=(n(156),n(15)),l=n(16),u=n(19),d=n(17),m=n(18),p=(n(157),n(3)),h=n(59),g=n(20),f=n.n(g),b=(n(178),n(335)),v=n(336),E=n(143),O=n(28),w=n(22),S=n(29),j=n(11),y=n(14),C="SHOW_SIGNUP_MODAL",k="RESET_APP",N="LOGIN_SUCCESS",A="LOGIN_FAILED",D="SIGNUP_SUCCESS",x="SIGNUP_FAILED",I="GET_SLIDES_SUCCESS",L="GET_USER_SLIDESHOWS_SUCCESS",T="SIGN_OUT";function U(e){return function(t){return f.a.post("/api/liveSlideshow",{username:e}).then(function(e){console.log(e),e.data.result.length>0&&t(W(e.data.result[0].TagName))}).catch(function(e){console.log(e)})}}function F(e,t){return function(n){return f.a.post("/api/deleteImage",{publicId:e}).then(function(e){n(W(t))}).catch(function(e){console.log(e)})}}function M(e){return{type:C,showSignupModal:e}}var _=function(e,t){return function(n){return f.a.post("/users/login",{username:e,password:t}).then(function(t){if(200!==t.status)n(H());else{console.log(t),!0===t.data.success&&window.localStorage.setItem("tk",t.data.token);var a={username:e,isAdmin:t.data.isAdmin,company:t.data.company};n(Q(a)),n(B(e))}}).catch(function(e){console.log(e),n(H())})}},P=function(e,t){return function(n){return f.a.post("/users/signup",{username:e,password:t}).then(function(e){if(200!==e.status)throw Error(e.statusText)}).catch(function(e){console.log(e),n(H())})}},R=function(e,t){return function(n){return f.a.post("/users/signup",{username:e,password:t}).then(function(t){if(200!==t.status)throw Error(t.statusText);"success"===t.data?n(Z(e)):n(J())}).catch(function(e){console.log(e),n(H())})}},G=function(e,t){return function(n){return f.a.post("/api/deleteSlideshow",{id:e}).then(function(e){if(200!==e.status)throw Error(e.statusText);n(B(t))}).catch(function(e){throw e})}},B=function(e){return function(t){return f.a.post("/api/getUserSlideshows",{username:e}).then(function(e){if(200!==e.status)throw Error(e.statusText);console.log(e.data.result),t(q(e.data.result))}).catch(function(e){throw e})}},W=function(e){return function(t){return f.a.post("/api/slideshow",{tagName:e}).then(function(e){if(200!==e.status)throw Error(e.statusText);var n=[];""!==e.data&&(e.data.resources.forEach(function(e){n.push(e)}),t(X(n)))}).catch(function(e){throw e})}},z=function(e,t,n,a,s){return function(r){return f.a.post("/api/saveSlideshowSQL",{files:e,username:t,tagName:n,startDate:a,endDate:s}).then(function(e){if(200!==e.status)throw Error(e.statusText)}).catch(function(e){throw e})}},V=function(e,t,n,a){return function(s){return f.a.post("/api/saveGuestSlideshow",{username:e,tagName:t,startDate:n,endDate:a}).then(function(e){if(200!==e.status)throw Error(e.statusText)}).catch(function(e){throw e})}};function q(e){return{type:L,userSlideshows:e}}function X(e){return{type:I,imageList:e}}function Q(e){return{type:N,user:e}}function H(){return{type:A}}function Z(e){return{type:D,email:e}}function J(){return{type:x}}function $(){return{type:k}}function K(){return{type:T}}var Y=n(37),ee=(n(182),n(326)),te=n(327),ne=n(328),ae=n(329),se=n(330),re=n(331),ie=n(343),oe=n(332),ce=n(333),le=n(334),ue=n(33),de=n.n(ue);function me(){var e=Object(O.a)(["    \n    padding:1em;\n    height:70px;\n"]);return me=function(){return e},e}S.a.img(me());var pe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).signOut=n.signOut.bind(Object(p.a)(Object(p.a)(n))),n.toggle=n.toggle.bind(Object(p.a)(Object(p.a)(n))),n.state={isOpen:!1,username:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"signOut",value:function(){de.a.signOut(),this.props.sessionActions.signOut(),this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(ee.a,{id:"slideshowNavbar",dark:"true",expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(te.a,{href:"/"}),r.a.createElement(ne.a,{onClick:this.toggle}),r.a.createElement(ae.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(se.a,{className:"ml-auto",navbar:!0},!0===this.props.session.isAdmin?r.a.createElement(re.a,null,r.a.createElement(w.b,{activeClassName:"selected",className:"nav-link",to:"/"},"Slideshow")):r.a.createElement(r.a.Fragment,null),r.a.createElement(re.a,null,r.a.createElement(w.b,{activeClassName:"selected",className:"nav-link",to:"/MySlideshows"},"My Slideshows")),r.a.createElement(ie.a,{nav:!0,inNavbar:!0},r.a.createElement(oe.a,{nav:!0,caret:!0},this.props.session.email),r.a.createElement(ce.a,{right:!0},r.a.createElement(le.a,null,!0===this.props.session.isAdmin?r.a.createElement(re.a,null,r.a.createElement(w.b,{activeClassName:"selected",className:"nav-link",to:"/administration"},"Administration")):r.a.createElement(r.a.Fragment,null),r.a.createElement(re.a,null,r.a.createElement("span",{className:"nav-link pointer",onClick:this.signOut},"Sign Out")))))))))}}]),t}(r.a.Component);var he=Object(Y.d)(Object(y.b)(function(e,t){return{session:e.session}},function(e){return{sessionActions:Object(j.b)(a,e)}})(pe)),ge={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,padding:4,boxSizing:"border-box"},fe={display:"flex",minWidth:0,overflow:"hidden"},be={display:"block",width:"auto",height:"100%"},ve=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={disabled:!1,files:[],tagName:""},n.onTagNameChange=n.onTagNameChange.bind(Object(p.a)(Object(p.a)(n))),n.onSubmit=n.onSubmit.bind(Object(p.a)(Object(p.a)(n)));var a=de.a.verifyToken();return a&&(""!==n.props.session.email&&!1!==n.props.session.loggedIn||n.props.sessionActions.loginSuccess(a)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onTagNameChange",value:function(e){this.setState({tagName:e.target.value})}},{key:"onSubmit",value:function(){var e=this,t=this.state.files,n=t.map(function(t){var n=e.state.tagName,a=new FormData;return a.append("file",t),a.append("tags",n),a.append("upload_preset","vcuvbm56"),a.append("api_key","812922695185549"),a.append("timestamp",Date.now()/1e3|0),f.a.post("https://api.cloudinary.com/v1_1/oabroad/image/upload",a,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){e.data.secure_url})});f.a.all(n).then(function(){e.saveSlideshowInSQL(t,e.props.session.email,e.state.tagName)})}},{key:"saveSlideshowInSQL",value:function(e,t,n,a,s){this.props.sessionActions.saveSlideshowInSQL(e,t,n)}},{key:"onDrop",value:function(e){var t=[];this.state.files.forEach(function(e){t.push(e)}),e.map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}).forEach(function(e){t.push(e)}),this.setState({files:t.map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})})}},{key:"render",value:function(){var e=this.state.files.map(function(e){return r.a.createElement("div",{style:ge,key:e.name},r.a.createElement("div",{style:fe},r.a.createElement("img",{src:e.preview,style:be})))});return r.a.createElement("section",null,r.a.createElement(he,null),r.a.createElement("div",{className:"dropzone"},r.a.createElement(h.a,{onDrop:this.onDrop.bind(this)},function(e){var t=e.getRootProps,n=e.getInputProps;return r.a.createElement("div",t(),r.a.createElement("input",n()),r.a.createElement("p",{className:"text-center"},r.a.createElement("img",{src:"/download.png",alt:""}),r.a.createElement("span",{className:"dropFileLabel"},"Drop files here, or click to select files")))})),r.a.createElement("p",{className:"text-center"},"To create a slideshow, drag and drop files onto the dropzone above or click the clickzone to open file explorer. Then enter a unique name for the slideshow and the date/time the slideshow should run."),r.a.createElement("aside",null,r.a.createElement("h4",null,"File Preview"),r.a.createElement("ul",{className:"filePreview"},e)),r.a.createElement("form",{className:"container uploadForm"},r.a.createElement(b.a,null,r.a.createElement("label",{className:"label"},"Slideshow Name"),r.a.createElement(v.a,{type:"text",id:"slideshowName",onChange:this.onTagNameChange})),r.a.createElement(E.a,{onClick:this.onSubmit},"Submit")))}}]),t}(r.a.Component);Object(Y.d)(Object(y.b)(function(e,t){return{session:e.session}},function(e){return{sessionActions:Object(j.b)(a,e)}})(ve));var Ee=n(342),Oe=n(337),we=(n(300),function(e){return r.a.createElement("input",Object.assign({},e,{onFocus:function(e){return e.target.select()}}))}),Se=we;we.defaultProps={disabled:!1,required:!1,defaultValue:"",placeholder:"Please enter a value",type:"text"};var je=function(e){function t(e,n){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e,n))).onClickSignUp=a.onClickSignUp.bind(Object(p.a)(Object(p.a)(a))),a.passwordOnChange=a.passwordOnChange.bind(Object(p.a)(Object(p.a)(a))),a.passwordVerifyOnChange=a.passwordVerifyOnChange.bind(Object(p.a)(Object(p.a)(a))),a.emailOnChange=a.emailOnChange.bind(Object(p.a)(Object(p.a)(a))),a.memberLogin=a.memberLogin.bind(Object(p.a)(Object(p.a)(a))),a.memberSignUp=a.memberSignUp.bind(Object(p.a)(Object(p.a)(a))),a.onClickLogin=a.onClickLogin.bind(Object(p.a)(Object(p.a)(a))),a.closeModal=a.closeModal.bind(Object(p.a)(Object(p.a)(a))),a.state={alreadyMember:!0,email:"",password:"",passwordVerify:"",signupError:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"memberSignUp",value:function(){this.setState({alreadyMember:!1,signupError:""})}},{key:"memberLogin",value:function(){this.setState({alreadyMember:!0,signupError:""})}},{key:"passwordOnChange",value:function(e){this.setState({password:e.target.value})}},{key:"passwordVerifyOnChange",value:function(e){this.setState({passwordVerify:e.target.value})}},{key:"emailOnChange",value:function(e){this.setState({email:e.target.value})}},{key:"closeModal",value:function(){this.props.sessionActions.showSignupModal(!1)}},{key:"onClickLogin",value:function(){try{var e=this.state.email,t=this.state.password;if(""===e)return void this.displayEmailError("Please enter your email");if(""===t)return void this.displayPasswordError("Please enter your password");this.props.sessionActions.login(e,t),this.props.history.push("/MySlideshows")}catch(n){console.log(n)}}},{key:"onClickSignUp",value:function(){try{var e=this.state.email,t=this.state.password,n=this.state.passwordVerify;if(this.clearWarnings(),""===e)return void this.setState({signupError:"Please enter a valid username"});if(t!==n)return void this.setState({signupError:"Passwords do not match"});if(""===t||""===n)return void this.setState({signupError:"Please enter and verify your password"});this.props.sessionActions.signupUser(e,t,n),this.props.history.push("/MySlideshows")}catch(a){console.log(a)}}},{key:"clearWarnings",value:function(){this.setState({signupError:""})}},{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"render",value:function(){return!0===this.props.session.loggedIn?r.a.createElement(r.a.Fragment,null):this.state.alreadyMember?r.a.createElement(Ee.a,{isOpen:!0},r.a.createElement(Oe.a,null,r.a.createElement("div",{className:"signup-modal"},r.a.createElement("div",{className:"closeModal",onClick:this.closeModal},"X"),r.a.createElement("div",{className:"textInput-container form-group"},r.a.createElement("div",{className:"email-label"},"Login"),!0===this.props.session.loginFailed?r.a.createElement("div",{className:"text-center font-italic"},"Login Failed! Incorrect username/password"):"",r.a.createElement(Se,{type:"email",id:"emailSignup",placeholder:"email",onChange:this.emailOnChange}),r.a.createElement(Se,{type:"password",id:"password1",placeholder:"password",onChange:this.passwordOnChange}),r.a.createElement(E.a,{color:"primary",onClick:this.onClickLogin},"Login"))))):r.a.createElement(Ee.a,{isOpen:!0},r.a.createElement(Oe.a,null,r.a.createElement("div",{className:"signup-modal"},r.a.createElement("div",{className:"closeModal",onClick:this.closeModal},"X"),r.a.createElement("div",{className:"email-label"},"Sign up to save configurations!"),""!==this.state.signupError?r.a.createElement("div",{className:"text-center font-italic"},this.state.signupError):"",!0===this.props.session.signupFailed?r.a.createElement("div",{className:"text-center font-italic"},"Email already in use!"):"",r.a.createElement(Se,{type:"email",id:"emailSignup",placeholder:"email",onChange:this.emailOnChange}),r.a.createElement(Se,{type:"password",id:"password1",placeholder:"password",onChange:this.passwordOnChange}),r.a.createElement(Se,{type:"password",id:"password2",placeholder:"re-enter password",onChange:this.passwordVerifyOnChange}),r.a.createElement(E.a,{color:"primary",onClick:this.onClickSignUp},"Sign Up!"),r.a.createElement("span",{className:"loginLink",onClick:this.memberLogin},"Already a member? Click here!"))))}}]),t}(s.Component);var ye=Object(Y.d)(Object(y.b)(function(e,t){return{session:e.session,api:e.api}},function(e){return{sessionActions:Object(j.b)(a,e)}})(je)),Ce=n(76),ke=n.n(Ce),Ne=n(144),Ae=(n(319),{duration:9e3,transitionDuration:500,infinite:!0,indicators:!0,scale:.4,arrows:!0}),De=function(e){function t(e,n){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e,n))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.sessionActions.getLiveSlideshow(this.props.session.email)}},{key:"render",value:function(){return this.props.session?0===this.props.session.imageList.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"slideshow-container-fullscreen"},r.a.createElement("h1",null,r.a.createElement(Ne.Zoom,Ae,this.props.session.imageList.map(function(e){return r.a.createElement("img",{key:e.public_id,style:{width:"100%"},src:e.url})}))))):r.a.createElement(r.a.Fragment,null)}}]),t}(s.Component);var xe=Object(Y.d)(Object(y.b)(function(e,t){return{session:e.session}},function(e){return{sessionActions:Object(j.b)(a,e)}})(De)),Ie=n(338),Le=n(145),Te=(n(320),function(e){var t=e.displayText,n=Object(Le.a)(e,["displayText"]);return r.a.createElement("button",n," ",t," ")}),Ue=(n(321),function(e){function t(e,n){var a;Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e,n))).deleteSlideshow=a.deleteSlideshow.bind(Object(p.a)(Object(p.a)(a))),a.editSlideshow=a.editSlideshow.bind(Object(p.a)(Object(p.a)(a)));var s=de.a.verifyToken();return s&&(""!==a.props.session.email&&!1!==a.props.session.loggedIn||a.props.sessionActions.loginSuccess(s)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=ke.a.parse(this.props.location.search);if(e){var t=e.username,n=e.tagName;this.props.sessionActions.login(t,n)}this.props.sessionActions.getUserSlideshows(this.props.session.email)}},{key:"deleteSlideshow",value:function(e,t){this.props.sessionActions.deleteSlideshow(e,t)}},{key:"editSlideshow",value:function(e,t){this.props.history.push("/EditSlideshow",{tagName:t})}},{key:"render",value:function(){var e=this;return this.props.session.userSlideshows?r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null),r.a.createElement("h2",{className:"text-center"},"My Slideshows"),r.a.createElement(Ie.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Start Date"),r.a.createElement("th",null,"End Date"),r.a.createElement("th",null),!0===this.props.session.isAdmin?r.a.createElement("th",null):r.a.createElement(r.a.Fragment,null))),r.a.createElement("tbody",null,this.props.session.userSlideshows.map(function(t){var n=new Date(t.StartDate),a=new Date(t.EndDate);return r.a.createElement("tr",null,r.a.createElement("td",null,t.ID),r.a.createElement("td",null,n.toString()),r.a.createElement("td",null,a.toString()),r.a.createElement("td",null,r.a.createElement(Te,{id:t.configurationId,showButton:!0,className:"btn btn-secondary btn-sm emailDesign",type:"Button",onClick:function(n){return e.editSlideshow(n,t.TagName)},displayText:"Edit"})),!0===e.props.session.isAdmin?r.a.createElement("td",null,r.a.createElement(Te,{id:t.configurationId,showButton:!0,className:"btn btn-secondary btn-sm emailDesign danger",type:"Button",onClick:function(n){return e.deleteSlideshow(t.ID,t.TagName)},displayText:"Delete"})):r.a.createElement(r.a.Fragment,null))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null),r.a.createElement("h2",{className:"text-center"},"My Slideshows"))}}]),t}(s.Component));var Fe=Object(Y.d)(Object(y.b)(function(e,t){return{session:e.session}},function(e){return{sessionActions:Object(j.b)(a,e)}})(Ue)),Me=n(339),_e=n(340),Pe=n(341);function Re(){var e=Object(O.a)(["\n    margin-bottom:1em;\n    margin-top:1em;\n"]);return Re=function(){return e},e}function Ge(){var e=Object(O.a)(["\n    font-size:16px;\n    background-color:#4f4f4f;\n    color: #fff;\n    height:35px;\n    width:200px;\n    border-radius: 5px;\n    outline: none !important;\n    border: none !important;  \n    cursor:pointer; \n    margin-top:15px;\n"]);return Ge=function(){return e},e}function Be(){var e=Object(O.a)(["\n    color: #000;\n"]);return Be=function(){return e},e}function We(){var e=Object(O.a)(["\n    width:200px;\n    height:200px;\n"]);return We=function(){return e},e}var ze=S.a.img(We()),Ve=S.a.h2(Be()),qe=Object(S.a)(Te)(Ge()),Xe=Object(S.a)(Me.a)(Re()),Qe=function(e){function t(e,n){var a;Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e,n))).removeImage=a.removeImage.bind(Object(p.a)(Object(p.a)(a))),a.newImage=a.newImage.bind(Object(p.a)(Object(p.a)(a))),a.state={disabled:!1,files:[],tagName:a.props.location.state.tagName};var s=de.a.verifyToken();return s&&(""!==a.props.session.email&&!1!==a.props.session.loggedIn||a.props.sessionActions.loginSuccess(s)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.tagName;""!==e&&void 0!==e&&null!==e||(e="Demo"),this.props.sessionActions.getSlidesByTag(e)}},{key:"removeImage",value:function(e){var t=this.props.location.state.tagName;this.props.sessionActions.deleteImage(e,t)}},{key:"onDrop",value:function(e){var t=this,n=[];this.state.files.forEach(function(e){n.push(e)});var a=e.map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})});a.forEach(function(e){n.push(e)}),this.setState({files:a.map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})}),e=this.state.newFiles;a.map(function(e){var n=t.props.location.state.tagName,a=new FormData;return a.append("file",e),a.append("tags",n),a.append("upload_preset","vcuvbm56"),a.append("api_key","812922695185549"),a.append("timestamp",Date.now()/1e3|0),f.a.post("https://api.cloudinary.com/v1_1/oabroad/image/upload",a,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){t.props.sessionActions.getSlidesByTag(n)})})}},{key:"newImage",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null),r.a.createElement("div",{className:"slideshow-container"},r.a.createElement(_e.a,null,r.a.createElement(Ve,null,"Edit Slideshow"),r.a.createElement("div",{className:"dropzone"},r.a.createElement(h.a,{onDrop:this.onDrop.bind(this)},function(e){var t=e.getRootProps,n=e.getInputProps;return r.a.createElement("div",t(),r.a.createElement("input",n()),r.a.createElement("p",{className:"text-center"},r.a.createElement("span",{className:"dropFileLabel"},"Drop files here, or click to select files")))})),r.a.createElement(Xe,null,this.props.session.imageList.map(function(t){return r.a.createElement(Pe.a,{xs:"12",xl:"3"},r.a.createElement("div",null,r.a.createElement(ze,{src:t.url}),r.a.createElement(qe,{displayText:"Remove",onClick:function(n){return e.removeImage(t.public_id)}})))})))))}}]),t}(s.Component);var He=Object(Y.d)(Object(y.b)(function(e,t){return{session:e.session}},function(e){return{sessionActions:Object(j.b)(a,e)}})(Qe)),Ze=n(147),Je=n.n(Ze);function $e(){var e=Object(O.a)(["\n    text-align: center;\n    background-color: #63c79f;\n    color: white;\n    padding-top:10px;\n    padding-bottom:10px;\n"]);return $e=function(){return e},e}function Ke(){var e=Object(O.a)(["\n    width: 100%;\n"]);return Ke=function(){return e},e}function Ye(){var e=Object(O.a)(["\n    width: 84%;\n    display: inline-block;\n"]);return Ye=function(){return e},e}function et(){var e=Object(O.a)(["\n    width:140px !important;\n    display: inline-block;\n"]);return et=function(){return e},e}var tt=Object(S.a)(E.a)(et()),nt=Object(S.a)(v.a)(Ye()),at=S.a.label(Ke()),st=S.a.h3($e()),rt=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onStartDateChange=n.onStartDateChange.bind(Object(p.a)(Object(p.a)(n))),n.onEndDateChange=n.onEndDateChange.bind(Object(p.a)(Object(p.a)(n))),n.generateCode=n.generateCode.bind(Object(p.a)(Object(p.a)(n))),n.createGuestSlideshow=n.createGuestSlideshow.bind(Object(p.a)(Object(p.a)(n))),n.onUsernameChange=n.onUsernameChange.bind(Object(p.a)(Object(p.a)(n))),n.onAccessCodeChange=n.onAccessCodeChange.bind(Object(p.a)(Object(p.a)(n))),n.state={startDate:null,endDate:null,accessCode:"",username:"",alert:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"generateCode",value:function(e){var t=Je.a.generateAccessCode(8);this.setState({accessCode:t})}},{key:"onStartDateChange",value:function(e){this.setState({startDate:e.target.value})}},{key:"onEndDateChange",value:function(e){this.setState({endDate:e.target.value})}},{key:"onUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onAccessCodeChange",value:function(e){this.setState({accessCode:e.target.value})}},{key:"createGuestSlideshow",value:function(){this.props.sessionActions.createUser(this.state.username,this.state.accessCode),this.props.sessionActions.saveGuestSlideshow(this.state.username,this.state.accessCode,this.state.startDate,this.state.endDate),this.setState({alert:"Successfully saved!"}),this.props.history.push("/MySlideshows")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null),r.a.createElement("h2",{className:"text-center"},"Administration"),""!==this.state.alert?r.a.createElement(st,null,this.state.alert):r.a.createElement(r.a.Fragment,null),r.a.createElement("form",{className:"container uploadForm"},r.a.createElement(b.a,null,r.a.createElement("label",{for:"username"},"Username:"),r.a.createElement(v.a,{type:"text",id:"username",name:"username",onChange:this.onUsernameChange})),r.a.createElement(b.a,null,r.a.createElement(at,{for:"accessCode",readonly:!0},"Access Code:"),r.a.createElement(nt,{type:"text",id:"accessCode",name:"accessCode",onChange:this.onAccessCodeChange,value:this.state.accessCode,readOnly:!0}),r.a.createElement(tt,{onClick:this.generateCode},"Generate Code")),r.a.createElement(b.a,null,r.a.createElement("label",{for:"start"},"Start Date/Time:"),r.a.createElement(v.a,{type:"datetime-local",id:"start",name:"start",onChange:this.onStartDateChange})),r.a.createElement(b.a,null,r.a.createElement("label",{for:"end"},"End Date/Time:"),r.a.createElement(v.a,{type:"datetime-local",id:"end",name:"end",onChange:this.onEndDateChange})),r.a.createElement(E.a,{onClick:this.createGuestSlideshow},"Submit")))}}]),t}(s.Component);var it=Object(Y.d)(Object(y.b)(function(e,t){return{session:e.session}},function(e){return{sessionActions:Object(j.b)(a,e)}})(rt)),ot=function(e){function t(e,n){var a;Object(c.a)(this,t),a=Object(u.a)(this,Object(d.a)(t).call(this,e,n));var s=de.a.verifyToken();return s&&(""!==a.props.session.email&&!1!==a.props.session.loggedIn||a.props.sessionActions.loginSuccess(s)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("switch",null,r.a.createElement(Y.a,{exact:!0,path:"/",component:xe}),r.a.createElement(Y.a,{path:"/MySlideshows",component:Fe}),r.a.createElement(Y.a,{path:"/EditSlideshow",component:He}),r.a.createElement(Y.a,{path:"/Administration",component:it})),r.a.createElement(ye,null))}}]),t}(s.Component);var ct=Object(Y.d)(Object(y.b)(function(e,t){return{session:e.session}},function(e){return{sessionActions:Object(j.b)(a,e)}})(ot));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var lt=n(10);var ut=Object(j.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(lt.a)({},e,{showSignupModal:t.showSignupModal});case N:return Object(lt.a)({},e,{loggedIn:!0,company:t.user.company,isAdmin:t.user.isAdmin,email:t.user.username,loginFailed:!1,showSignupModal:!1});case A:return Object(lt.a)({},e,{loginFailed:!0});case D:return Object(lt.a)({},e,{loggedIn:!0,email:t.email,loginFailed:!1,signupFailed:!1,showSignupModal:!1});case x:return Object(lt.a)({},e,{signupFailed:!0});case I:return Object(lt.a)({},e,{imageList:t.imageList});case L:return Object(lt.a)({},e,{userSlideshows:t.userSlideshows});case T:return Object(lt.a)({},e,{loggedIn:!1,email:"",imageList:[]});default:return e}}}),dt=function(e,t){return t.type===k&&(e=Object(lt.a)({},e,{session:null})),ut(e,t)},mt=n(148),pt=n.n(mt),ht=n(149);var gt=function(e){var t=Object(j.d)(Object(j.a)(ht.a,pt()()),window.devToolsExtension()?window.devToolsExtension():function(e){return e});return Object(j.e)(dt,e,t)}({session:{imageList:[],loggedIn:!1}});o.a.render(r.a.createElement(w.a,null,r.a.createElement(y.a,{store:gt},r.a.createElement(ct,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,n){var a=n(183);t.verifyToken=function(){var e=window.localStorage.getItem("tk");if(null!==e){var t=a.decode(e),n=new Date,s={username:t.username,isAdmin:t.isAdmin,company:t.company};return t.exp>n.getTime()/1e3?s:null}},t.getUserFromToken=function(){var e=window.localStorage.getItem("tk");return null===e?"":a.decode(e).username},t.signOut=function(){localStorage.removeItem("tk")}}},[[151,1,2]]]);
//# sourceMappingURL=main.56e57bbd.chunk.js.map