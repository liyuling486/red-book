(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f360380"],{4237:function(t,n,i){"use strict";var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("van-list",{staticClass:"list",on:{load:t.onLoad}},t._l(t.list,(function(n,a){return i("div",{key:a,staticClass:"item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"img"}],staticClass:"itemImg",attrs:{src:n.img}}),i("div",{staticClass:"title"},[t._v(t._s(n.ctitle))]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"user"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"img"}],staticClass:"head",attrs:{src:n.img1}}),t._v(" "+t._s(n.cname)+" ")]),i("div",{staticClass:"collection",on:{click:function(n){return t.handleColl(a)}}},[n.collection?i("van-icon",{staticStyle:{"margin-right":"2px"},attrs:{name:"like",color:"#f00"}}):i("van-icon",{staticStyle:{"margin-right":"2px"},attrs:{name:"like-o"}}),i("span",[t._v(t._s(n.num))])],1)])])})),0)},e=[],s={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{refreshing:!1}},methods:{handleColl:function(t){this.$emit("handleColl",t)},onLoad:function(){this.$emit("onLoad")}}},o=s,c=(i("f738"),i("2877")),l=Object(c["a"])(o,a,e,!1,null,"50af1d2c",null);n["a"]=l.exports},"4a71":function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"wrap"},[i("List",{attrs:{list:t.listData},on:{handleColl:t.handleColl,onLoad:t.onLoad}})],1)},e=[],s=(i("99af"),i("4237")),o={components:{List:s["a"]},data:function(){return{listData:[]}},methods:{onLoad:_.throttle((function(){this.getList(!0)}),800),getList:function(t){var n=this;this.$store.dispatch("home/news.list").then((function(i){n.listData=t?n.listData.concat(i.data):i.data}))},handleColl:function(t){this.$set(this.listData[t],"collection",!this.listData[t].collection)}},mounted:function(){}},c=o,l=(i("d304"),i("2877")),r=Object(l["a"])(c,a,e,!1,null,"58dd7221",null);n["default"]=r.exports},"99af":function(t,n,i){"use strict";var a=i("23e7"),e=i("d039"),s=i("e8b5"),o=i("861d"),c=i("7b0b"),l=i("50c4"),r=i("8418"),u=i("65f0"),d=i("1dde"),f=i("b622"),h=i("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!e((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),C=d("concat"),w=function(t){if(!o(t))return!1;var n=t[m];return void 0!==n?!!n:s(t)},y=!g||!C;a({target:"Array",proto:!0,forced:y},{concat:function(t){var n,i,a,e,s,o=c(this),d=u(o,0),f=0;for(n=-1,a=arguments.length;n<a;n++)if(s=-1===n?o:arguments[n],w(s)){if(e=l(s.length),f+e>v)throw TypeError(p);for(i=0;i<e;i++,f++)i in s&&r(d,f,s[i])}else{if(f>=v)throw TypeError(p);r(d,f++,s)}return d.length=f,d}})},c0fe:function(t,n,i){},d304:function(t,n,i){"use strict";i("dee3")},dee3:function(t,n,i){},f738:function(t,n,i){"use strict";i("c0fe")}}]);
//# sourceMappingURL=chunk-6f360380.bbf56561.js.map