(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1233:function(e,t,n){"use strict";n.r(t);n(37);var o={methods:{handleChange:function(e){console.log("selected ".concat(e))},filterOption:function(input,option){return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase())>=0}}},l=n(24),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"performance__wrapper"},[n("div",{staticClass:"performance__filter"},[n("div",{staticClass:"performance__price"},[e._v("Total revenue: $120")]),e._v(" "),n("div",{staticClass:"performance__select"},[n("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"","default-value":"week","option-filter-prop":"children","filter-option":e.filterOption},on:{change:e.handleChange}},[n("a-select-option",{attrs:{value:"week"}},[e._v(" Last 7 days ")]),e._v(" "),n("a-select-option",{attrs:{value:"month"}},[e._v(" Last 30 days ")]),e._v(" "),n("a-select-option",{attrs:{value:"year"}},[e._v(" Last 12 months ")]),e._v(" "),n("a-select-option",{attrs:{value:"alltime"}},[e._v(" All time ")])],1)],1)]),e._v(" "),n("CourseChart")],1)}),[],!1,null,null,null);t.default=component.exports}}]);