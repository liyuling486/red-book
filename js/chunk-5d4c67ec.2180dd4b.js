(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d4c67ec"],{"0176":function(t,n,a){},"0ba9":function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"wrap"},[a("List",{attrs:{list:t.listData},on:{handleColl:t.handleColl,onLoad:t.onLoad}})],1)},e=[],s=(a("99af"),a("4237")),o=a("2ef0"),c=a.n(o),l={components:{List:s["a"]},data:function(){return{listData:[]}},methods:{onLoad:c.a.throttle((function(){this.getList(!0)}),800),getList:function(t){var n=this;this.$store.dispatch("home/news.list").then((function(a){n.listData=t?n.listData.concat(a.data):a.data}))},handleColl:function(t){this.$set(this.listData[t],"collection",!this.listData[t].collection)}},mounted:function(){}},r=l,u=(a("4ad2"),a("2877")),d=Object(u["a"])(r,i,e,!1,null,"33fc5f90",null);n["default"]=d.exports},4237:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("van-list",{staticClass:"list",on:{load:t.onLoad}},t._l(t.list,(function(n,i){return a("div",{key:i,staticClass:"item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"img"}],staticClass:"itemImg",attrs:{src:n.img}}),a("div",{staticClass:"title"},[t._v(t._s(n.ctitle))]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"user"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"img"}],staticClass:"head",attrs:{src:n.img1}}),t._v(" "+t._s(n.cname)+" ")]),a("div",{staticClass:"collection",on:{click:function(n){return t.handleColl(i)}}},[n.collection?a("van-icon",{staticStyle:{"margin-right":"2px"},attrs:{name:"like",color:"#f00"}}):a("van-icon",{staticStyle:{"margin-right":"2px"},attrs:{name:"like-o"}}),a("span",[t._v(t._s(n.num))])],1)])])})),0)},e=[],s={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{refreshing:!1}},methods:{handleColl:function(t){this.$emit("handleColl",t)},onLoad:function(){this.$emit("onLoad")}}},o=s,c=(a("f738"),a("2877")),l=Object(c["a"])(o,i,e,!1,null,"50af1d2c",null);n["a"]=l.exports},"4ad2":function(t,n,a){"use strict";a("0176")},"99af":function(t,n,a){"use strict";var i=a("23e7"),e=a("d039"),s=a("e8b5"),o=a("861d"),c=a("7b0b"),l=a("50c4"),r=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),h=a("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!e((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),C=d("concat"),w=function(t){if(!o(t))return!1;var n=t[m];return void 0!==n?!!n:s(t)},y=!g||!C;i({target:"Array",proto:!0,forced:y},{concat:function(t){var n,a,i,e,s,o=c(this),d=u(o,0),f=0;for(n=-1,i=arguments.length;n<i;n++)if(s=-1===n?o:arguments[n],w(s)){if(e=l(s.length),f+e>v)throw TypeError(p);for(a=0;a<e;a++,f++)a in s&&r(d,f,s[a])}else{if(f>=v)throw TypeError(p);r(d,f++,s)}return d.length=f,d}})},c0fe:function(t,n,a){},f738:function(t,n,a){"use strict";a("c0fe")}}]);
//# sourceMappingURL=chunk-5d4c67ec.2180dd4b.js.map