webpackJsonp([3],{"4TWp":function(t,s,a){"use strict";var e=a("woOf"),i=a.n(e),o={props:{user:{type:Object,default:function(){return{name:"",username:"",date:1}},validator:function(t){return"string"==typeof t.name&&"string"==typeof t.username&&"number"==typeof t.date}},isNew:{type:Boolean,default:!1}},data:function(){return{data:i()({},this.user)}}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",{staticClass:"form",attrs:{novalidate:""},on:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Full Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.user.name||"Name"},domProps:{value:t.data.name},on:{input:function(s){s.target.composing||t.$set(t.data,"name",s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Username")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.username,expression:"data.username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:t.user.username||"Username"},domProps:{value:t.data.username},on:{input:function(s){s.target.composing||t.$set(t.data,"username",s.target.value)}}})])])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6 mb-3"},[a("div",{staticClass:"mb-2"},[a("b",{domProps:{textContent:t._s((t.isNew?"Account ":"Change ")+"Password")}})]),t._v(" "),t.isNew?t._e():a("div",{staticClass:"row"},[t._m(2)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{domProps:{textContent:t._s((t.isNew?"":"New ")+"Password")}}),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"••••••"}})])]),t._v(" "),t._m(3)])]),t._v(" "),t._m(4)]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",[this._v("Email")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"user@example.com"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col mb-3"},[s("div",{staticClass:"form-group"},[s("label",[this._v("About")]),this._v(" "),s("textarea",{staticClass:"form-control",attrs:{rows:"5",placeholder:"My Bio"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",[this._v("Current Password")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"••••••"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",[this._v("Confirm "),s("span",{staticClass:"d-none d-xl-inline"},[this._v("Password")])]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"••••••"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12 col-sm-5 offset-sm-1 mb-3"},[a("div",{staticClass:"mb-2"},[a("b",[t._v("Keeping in Touch")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("label",[t._v("Email Notifications")]),t._v(" "),a("div",{staticClass:"custom-controls-stacked px-2"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",checked:"checked",id:"notifications-blog"}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"notifications-blog"}},[t._v("Blog posts")])]),t._v(" "),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",checked:"checked",id:"notifications-news"}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"notifications-news"}},[t._v("Newsletter")])]),t._v(" "),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",checked:"checked",id:"notifications-offers"}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"notifications-offers"}},[t._v("Personal Offers")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex justify-content-end"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Save Changes")])])])}]},c=a("VU/8")(o,r,!1,null,null,null);s.a=c.exports},D5cn:function(t,s,a){"use strict";var e={components:{ProfileSettingsForm:a("4TWp").a},props:{user:{type:Object}},data:function(){return{}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"e-profile"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-auto mb-3"},[a("div",{staticClass:"mx-auto",staticStyle:{width:"140px"}},[a("div",{staticClass:"d-flex justify-content-center align-items-center rounded",style:{height:"140px",backgroundColor:"#e9ecef"}},[a("span",{style:{color:"#a6a8aa",font:"bold 8pt Arial"}},[t._v("140x140")])])])]),t._v(" "),a("div",{staticClass:"col d-flex flex-column flex-sm-row justify-content-between mb-3"},[a("div",{staticClass:"text-center text-sm-left mb-2 mb-sm-0"},[a("h4",{staticClass:"pt-sm-2 pb-1 mb-0 text-nowrap"},[t._v(t._s(t.user.name))]),t._v(" "),a("p",{staticClass:"mb-0"},[t._v("@"+t._s(t.user.username))]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"text-center text-sm-right"},[a("span",{staticClass:"badge badge-secondary"},[t._v("administrator")]),t._v(" "),a("div",{staticClass:"text-muted"},[a("small",[t._v("Joined "+t._s(t._f("moment")(t.user.date,"DD MMM YYYY")))])])])])]),t._v(" "),a("b-tabs",{attrs:{"no-fade":""}},[a("b-tab",{staticClass:"pt-3",attrs:{title:"Settings",active:""}},[a("profile-settings-form",{attrs:{user:t.user}})],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-muted"},[s("small",[this._v("Last seen 2 hours ago")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mt-2"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[s("i",{staticClass:"fa fa-fw fa-camera"}),this._v(" "),s("span",[this._v("Change Photo")])])])}]};var o=a("VU/8")(e,i,!1,function(t){a("IFJK")},null,null);s.a=o.exports},IFJK:function(t,s){},U4Uk:function(t,s){},vxD3:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("inzK"),i=a("D5cn"),o=a("Yn6+"),r=a("PJh5"),c=a.n(r),n={components:{LayoutDefault:e.a,EProfile:i.a,EPanel:o.a},data:function(){return{user:{name:"John Smith",username:"smithy",date:c()().subtract(4,"month").unix()}}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("layout-default",[a("div",{staticClass:"row"},[a("div",{staticClass:"col mb-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("e-profile",{attrs:{user:t.user}})],1)])]),t._v(" "),a("div",{staticClass:"col-12 col-md-3 mb-3"},[a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"px-xl-3"},[a("router-link",{staticClass:"btn btn-block btn-secondary",attrs:{to:"pages/login"}},[a("i",{staticClass:"fa fa-sign-out"}),t._v(" "),a("span",[t._v("Logout")])])],1)])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h6",{staticClass:"card-title font-weight-bold"},[t._v("Support")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("Get fast, free help from our friendly assistants.")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Contact Us")])])])])])])},staticRenderFns:[]};var u=a("VU/8")(n,l,!1,function(t){a("U4Uk")},null,null);s.default=u.exports}});
//# sourceMappingURL=3.b77be026c3489fa9bbb4.js.map