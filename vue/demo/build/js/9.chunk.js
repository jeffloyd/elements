(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{358:function(t,e,a){},360:function(t,e,a){},364:function(t,e,a){"use strict";var s=a(405),i=a.n(s),n=a(406),l=a.n(n),r={locale:Object.assign({},l.a,{weekdays:{shorthand:["Su","Mo","Tu","We","Th","Fr","Sa"]},rangeSeparator:" - "}),disableMobile:!0},o={name:"e-datepicker",components:{flatPickr:i.a},props:{config:{type:Object,default:function(){return new Object}},value:{default:null},placeholder:{type:String,default:""}},data:function(){return{localDefaults:{},lastValue:this.isValidDatesArray(this.value)||this.isValidDateValue(this.value)?this.value:[]}},computed:{date:function(){return this.lastValue},isDate:function(){return this.isValidDatesArray(this.date)&&this.date.length||this.isValidDateValue(this.date)},options:function(){return Object.assign({},r,this.localDefaults,this.config)}},methods:{handleDateChange:function(t,e,a){var s=this,i=!0;t.forEach(function(t,e){s.lastValue[e]&&t.valueOf()===s.lastValue[e].valueOf()||(i=!1)}),t.length!=this.lastValue.length&&(i=!1),i||(this.lastValue=t,this.$emit("update:value",t))},isValidDatesArray:function(t){if(t instanceof Array){for(var e=0;e<t.length;e++)if(!this.isValidDateValue(t[e]))return!1;return!0}return!1},isValidDateValue:function(t){return t instanceof Date&&!isNaN(t.valueOf())}}},c=(a(382),a(98)),u=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("flat-pickr",{staticClass:"form-control",attrs:{value:this.value,config:this.options,placeholder:this.placeholder},on:{"on-change":this.handleDateChange}})},[],!1,null,null,null);u.options.__file="index.vue";e.a=u.exports},375:function(t,e,a){"use strict";var s={props:{nested:{type:Boolean,default:!1}}},i=(a(376),a(98)),n=Object(i.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"e-tabs",class:{"e-tabs--nested":this.nested}},[this._t("default",[e("b-tabs",{attrs:{"no-fade":""}},[e("b-tab",{attrs:{title:"Tab",active:""}},[e("div",{staticClass:"pt-2"},[this._v("Tab content.")])])],1)])],2)},[],!1,null,null,null);n.options.__file="index.vue";e.a=n.exports},376:function(t,e,a){"use strict";var s=a(358);a.n(s).a},382:function(t,e,a){"use strict";var s=a(360);a.n(s).a},396:function(t,e,a){},401:function(t,e,a){"use strict";var s={extends:a(364).a,data:function(){return{localDefaults:{mode:"range",dateFormat:"d M y"}}}},i=a(98),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);n.options.__file="index.vue";e.a=n.exports},439:function(t,e,a){"use strict";var s=a(396);a.n(s).a},447:function(t,e,a){"use strict";a.r(e);var s=a(374),i=a(410),n=a(409),l=a(375),r=a(357),o=a(354),c=a(401),u=a(408),d=a.n(u);var f=[{name:"Adam Cotter",date:1512792908,status:!0,photo:""},{name:"Pauline Noble",date:1516977768,status:!1,photo:""},{name:"Sherilyn Metzel",date:1517042476,status:!0,photo:""},{name:"Terrie Boaler",date:1516439865,status:!0,photo:""},{name:"Rutter Pude",date:1515850922,status:!1,photo:""},{name:"Clifford Benjamin",date:1516898701,status:!0,photo:""},{name:"Thedric Romans",date:1515707885,status:!1,photo:""},{name:"Haily Carthew",date:1517056707,status:!0,photo:""},{name:"Dorothea Joicey",date:1513090469,status:!0,photo:""},{name:"Mikaela Pinel",date:1512892304,status:!1,photo:""},{name:"Donnell Farries",date:1512299369,status:!0,photo:""},{name:"Letizia Puncher",date:1512769349,status:!1,photo:""},{name:"Kania Yallowley",date:1515521487,status:!0,photo:""},{name:"Clay De Francesco",date:1515012234,status:!1,photo:""},{name:"Ina Queree",date:1514458367,status:!1,photo:""},{name:"Rasia Awty",date:1516943842,status:!1,photo:""},{name:"Basil Crosham",date:1512108299,status:!0,photo:""},{name:"Alexis Dodworth",date:1516814115,status:!1,photo:""},{name:"Greg Onyon",date:1517071308,status:!0,photo:""},{name:"Barry Carbett",date:1515450742,status:!0,photo:""},{name:"Carlyle Adran",date:1512498261,status:!0,photo:""},{name:"Guillaume Petel",date:1512742913,status:!1,photo:""},{name:"Wendeline Glasner",date:1513319267,status:!1,photo:""},{name:"Sylvia Petrollo",date:1516080489,status:!1,photo:""},{name:"Meade Quoit",date:1513972299,status:!0,photo:""},{name:"Eugine Planke",date:1515488407,status:!1,photo:""},{name:"Thoma Drakeley",date:1515023660,status:!1,photo:""},{name:"Web Margetson",date:1513557231,status:!0,photo:""},{name:"Erskine Stivens",date:1515233788,status:!0,photo:""},{name:"Jedidiah Emmer",date:1512614842,status:!1,photo:""},{name:"Wolfie Drakers",date:1512381522,status:!1,photo:""},{name:"Allie Quiney",date:1515488202,status:!0,photo:""}],m=[{key:"check",tdClass:"text-center align-middle"},{key:"photo",label:"Photo",thClass:"text-center",tdClass:"align-middle text-center"},{key:"name",sortable:!0,thClass:"max-width",tdClass:"align-middle text-nowrap"},{key:"date",sortable:!0,tdClass:"align-middle text-nowrap"},{key:"status",tdClass:"text-center align-middle"},{key:"action",tdClass:"text-center align-middle"}],h={components:{LayoutDefault:s.a,ETabs:l.a,ENavlist:r.a,EProfile:i.a,ProfileSettingsForm:n.a,EDatepickerRange:c.a,EPanel:o.a},data:function(){return{items:f,fields:m,currentPage:1,perPage:12,tab:"all",filters:{name:"",status:null,date:[]},selectedItems:[],userToShow:{}}},mounted:function(){var t=window.parent;t.setDemoFrameHeight&&t.setDemoFrameHeight(),this.selectedItems=[this.items[1],this.items[2]]},computed:{all:function(){var t=this,e=this.items;return this.filters.name&&(e=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.length&&String(e)?t.filter(function(t){var s=!1;for(var i in t)a.length&&a.indexOf(i)<0||"string"==typeof t[i]&&t[i].toLowerCase().indexOf(e.toLowerCase())>=0&&(s=!0);return s}):t}(this.items,this.filters.name,["name"])),null!=this.filters.status&&(e=e.filter(function(e){return e.status==t.filters.status})),this.filters.date.length&&(e=e.filter(function(e){return e.date>=d()(t.filters.date[0]).startOf("day").unix()&&e.date<=d()(t.filters.date[1]).endOf("day").unix()})),e},active:function(){return this.all.filter(function(t){return t.status})},selected:function(){var t=this;return this.all.filter(function(e){return t.selectedItems.indexOf(e)>-1})},selectedAll:{get:function(){var t=this;return this.display.every(function(e){return t.selected.indexOf(e)>-1})},set:function(t){var e=this;this.selectedItems=t?[].concat(function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}(this.display)):this.selectedItems.filter(function(t){return e.display.indexOf(t)<0})}},display:function(){return this[this.tab]||[]},tableStatus:function(){var t=this.items.length,e=this.perPage*(this.currentPage-1)+1;return e+" - "+Math.min(e+this.perPage-1,t)+" of "+t},datesInputPlaceholder:function(){var t=this.getMinMaxDates(),e="";return t.every(function(t){return d()(t).isValid()})&&(e=d()(t[0]).format("DD MMM YY")+" - "+d()(t[1]).format("DD MMM YY")),e}},methods:{getMinMaxDates:function(){var t=Number.POSITIVE_INFINITY,e=0;return this.items.map(function(a){a.date<t&&(t=a.date),a.date>e&&(e=a.date)}),[d.a.unix(t).toDate(),d.a.unix(e).toDate()]},clearSearch:function(){this.filters.search=""},editUser:function(t){this.userToShow=Object.assign({},t,{username:t.name.split(" ").reverse().map(function(t,e){return e>0?t.charAt(0):t}).join(".").toLowerCase()}),this.$refs.editUserModal.show()},newUser:function(){this.$refs.newUserModal.show()},deleteUser:function(t){var e=this.items.indexOf(t);e>-1&&this.items.splice(e,1)}}},p=(a(439),a(98)),v=Object(p.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout-default",[a("e-tabs",{staticClass:"mb-3 px-3"},[a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"users"}},[t._v("Users")])],1)])]),t._v(" "),a("div",{staticClass:"row flex-lg-nowrap"},[a("div",{staticClass:"col mb-3"},[a("e-panel",{attrs:{title:"Users",subtitle:"Be a wise leader"}},[a("template",{slot:"actions"},[a("small",[t._v(t._s(t.tableStatus))])]),t._v(" "),a("b-table",{staticClass:"table-lg fa-sort-icons table-rounded mt-3 mb-0",attrs:{items:t.display,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,"sort-desc":!0,"sort-by":"date","show-empty":"",responsive:"",bordered:""},scopedSlots:t._u([{key:"HEAD_check",fn:function(e){return[a("div",{staticClass:"custom-control custom-control-inline custom-control-nameless custom-checkbox m-0 align-top",on:{click:function(t){t.stopPropagation()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAll,expression:"selectedAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"users-"+e.key},domProps:{checked:Array.isArray(t.selectedAll)?t._i(t.selectedAll,null)>-1:t.selectedAll},on:{change:function(e){var a=t.selectedAll,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=t._i(a,null);s.checked?n<0&&(t.selectedAll=a.concat([null])):n>-1&&(t.selectedAll=a.slice(0,n).concat(a.slice(n+1)))}else t.selectedAll=i}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"users-"+e.key}})])]}},{key:"HEAD_status",fn:function(t){return[a("i",{staticClass:"fa fa-fw fa-question-circle"})]}},{key:"check",fn:function(e){return[a("div",{staticClass:"custom-control custom-control-inline custom-control-nameless custom-checkbox m-0 align-top"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedItems,expression:"selectedItems"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"users-"+e.index},domProps:{value:e.item,checked:Array.isArray(t.selectedItems)?t._i(t.selectedItems,e.item)>-1:t.selectedItems},on:{click:function(t){t.stopPropagation()},change:function(a){var s=t.selectedItems,i=a.target,n=!!i.checked;if(Array.isArray(s)){var l=e.item,r=t._i(s,l);i.checked?r<0&&(t.selectedItems=s.concat([l])):r>-1&&(t.selectedItems=s.slice(0,r).concat(s.slice(r+1)))}else t.selectedItems=n}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"users-"+e.index}})])]}},{key:"photo",fn:function(t){return[a("div",{staticClass:"bg-light justify-content-center align-items-center",staticStyle:{width:"35px",height:"35px","border-radius":"3px",display:"inline-flex","vertical-align":"top"}},[a("i",{staticClass:"fa fa-fw fa-photo",staticStyle:{opacity:".8"}})])]}},{key:"date",fn:function(e){return[a("span",[t._v(t._s(t._f("moment")(e.item.date,"DD MMM YYYY")))])]}},{key:"status",fn:function(t){return[a("i",{staticClass:"fa fa-fw text-secondary cursor-pointer",class:t.value?"fa-toggle-on":"fa-toggle-off",on:{click:function(e){e.stopPropagation(),t.item.status=!t.item.status}}})]}},{key:"action",fn:function(e){return[a("div",{staticClass:"btn-group align-top"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary badge",attrs:{type:"button"},on:{click:function(a){t.editUser(e.item)}}},[t._v("Edit")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-secondary badge",attrs:{type:"button"},on:{click:function(a){t.deleteUser(e.item)}}},[a("i",{staticClass:"fa fa-trash"})])])]}}])}),t._v(" "),t.display.length>t.perPage?a("b-pagination",{staticClass:"pagination-separated m-0 mt-3",attrs:{size:"sm",align:"center","total-rows":t.display.length,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2),t._v(" "),a("b-modal",{ref:"editUserModal",attrs:{size:"lg",title:"User Preview","hide-footer":"",lazy:""}},[a("e-profile",{staticClass:"py-1",attrs:{user:t.userToShow}})],1),t._v(" "),a("b-modal",{ref:"newUserModal",attrs:{size:"lg",title:"New User","hide-footer":"",lazy:""}},[a("profile-settings-form",{staticClass:"pb-1",attrs:{"is-new":""}})],1)],1),t._v(" "),a("div",{staticClass:"col-12 col-lg-3 mb-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"text-center px-xl-3"},[a("button",{staticClass:"btn btn-success btn-block",attrs:{type:"button"},on:{click:t.newUser}},[t._v("New User")])]),t._v(" "),a("hr",{staticClass:"my-3"}),t._v(" "),a("e-navlist",{attrs:{"active-bold":""}},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item",class:{active:"all"==t.tab}},[a("a",{staticClass:"nav-link px-3",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.tab="all"}}},[a("span",[t._v("All")]),t._v(" "),a("small",[t._v("/ "+t._s(t.all.length))])])]),t._v(" "),a("li",{staticClass:"nav-item",class:{active:"active"==t.tab}},[a("a",{staticClass:"nav-link px-3",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.tab="active"}}},[a("span",[t._v("Active")]),t._v(" "),a("small",[t._v("/ "+t._s(t.active.length))])])]),t._v(" "),a("li",{staticClass:"nav-item",class:{active:"selected"==t.tab}},[a("a",{staticClass:"nav-link px-3",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.tab="selected"}}},[a("span",[t._v("Selected")]),t._v(" "),a("small",[t._v("/ "+t._s(t.selected.length))])])])])]),t._v(" "),a("hr",{staticClass:"my-3"}),t._v(" "),a("div",{},[a("div",{staticClass:"form-group"},[a("label",[t._v("Date from - to:")]),t._v(" "),a("div",{},[a("e-datepicker-range",{attrs:{value:t.filters.date,placeholder:t.datesInputPlaceholder},on:{"update:value":function(e){t.$set(t.filters,"date",e)}}})],1)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Search by Name:")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.name,expression:"filters.name"}],staticClass:"form-control w-100",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.filters.name},on:{input:function(e){e.target.composing||t.$set(t.filters,"name",e.target.value)}}})])])]),t._v(" "),a("hr",{staticClass:"my-3"}),t._v(" "),a("div",{},[a("label",[t._v("Status:")]),t._v(" "),a("div",{staticClass:"px-2"},[a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.status,expression:"filters.status"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"user-status",id:"users-status-disabled"},domProps:{value:!1,checked:t._q(t.filters.status,!1)},on:{change:function(e){t.$set(t.filters,"status",!1)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"users-status-disabled"}},[t._v("Disabled")])])]),t._v(" "),a("div",{staticClass:"px-2"},[a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.status,expression:"filters.status"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"user-status",id:"users-status-active"},domProps:{value:!0,checked:t._q(t.filters.status,!0)},on:{change:function(e){t.$set(t.filters,"status",!0)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"users-status-active"}},[t._v("Active")])])]),t._v(" "),a("div",{staticClass:"px-2"},[a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.status,expression:"filters.status"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"user-status",id:"users-status-any"},domProps:{value:null,checked:t._q(t.filters.status,null)},on:{change:function(e){t.$set(t.filters,"status",null)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"users-status-any"}},[t._v("Any")])])])])],1)])])])],1)},[],!1,null,null,null);v.options.__file="Users.vue";e.default=v.exports}}]);