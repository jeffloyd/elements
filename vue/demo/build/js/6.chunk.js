(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{445:function(e,t,n){"use strict";n.r(t);var i={data:function(){return{}},created:function(){window.parent.addEventListener("resize",this.setIFrameHeight)},methods:{setIFrameHeight:function(){var e=this.$refs.iframe,t=window.parent;if(e){e.height="";var n=e.contentDocument?e.contentDocument:e.contentWindow.document,i=Math.max(n.body.scrollHeight,n.body.offsetHeight,n.documentElement.clientHeight,n.documentElement.scrollHeight,n.documentElement.offsetHeight);e.height=i+"px",t.setDemoFrameHeight&&t.setDemoFrameHeight()}}},beforeDestroy:function(){window.parent.removeEventListener("resize",this.setIFrameHeight)}},o=n(98),s=Object(o.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"e-content"},[t("iframe",{ref:"iframe",staticClass:"border-0 w-100 align-top",style:{minHeight:"101vh",overflow:"hidden"},attrs:{id:"k-sink",title:"Bootstrap 4 Kitchen Sink",src:"../../../k-sink.html"},on:{load:this.setIFrameHeight}})])},[],!1,null,null,null);s.options.__file="Bootstrap.vue";t.default=s.exports}}]);