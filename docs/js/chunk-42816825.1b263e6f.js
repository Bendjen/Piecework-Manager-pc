(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42816825"],{c2b8:function(t,e,i){},c57a:function(t,e,i){"use strict";var n=i("fb75"),a=i.n(n);a.a},d58a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comparisonContainer"},[i("div",{attrs:{flex:"main:right cross:center"}},[i("span",{staticStyle:{"padding-right":"20px"}},[t._v("月份：")]),i("el-date-picker",{staticStyle:{width:"120px","margin-right":"20px"},attrs:{type:"month",size:"small",clearable:!1,placeholder:"选择月","value-format":"yyyy-MM"},on:{change:t.freshCharts},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1),i("div",{attrs:{id:"chart"}}),i("div",{attrs:{id:"slider"}})])},a=[],s=(i("20d6"),i("ac6a"),i("d4ec")),r=i("bee2"),h=i("99de"),o=i("7e84"),l=i("262e"),d=(i("826b"),i("450d"),i("c263")),c=i.n(d),u=(i("10cb"),i("f3ad")),g=i.n(u),m=i("9ab4"),p=i("2b0e"),f=(i("c2b8"),i("60a3")),v=i("4bee"),y=i("6e85"),x=i.n(y),_=i("7c93"),w=i.n(_),E=i("dcb1"),b=i.n(E),C=function(){var t=new w.a.Chart({container:"chart",forceFit:!0,height:600});t.source([]),t.legend({custom:!0,allowAllCanceled:!0,items:[{value:"计单",marker:{symbol:"square",fill:"#3182bd",radius:5}},{value:"出货",marker:{symbol:"hyphen",stroke:"#fdae6b",radius:5,lineWidth:3}}]}),t.interval().position("type*计单").color("#3182bd").style({cursor:"pointer"}),t.line().position("type*出货").color("#fdae6b").size(3).shape("smooth"),t.point().position("type*出货").color("#fdae6b").size(3).shape("circle").style({cursor:"pointer"}),t.render();var e=new b.a({container:"slider",width:600,height:26,padding:[20,120,100],start:"2015-04-07",end:"2015-08-01",minSpan:2592e6,maxSpan:10368e6,data:[],xAxis:"time",yAxis:"volumn"});return e.render(),t};p["default"].use(g.a),p["default"].use(c.a);var S=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(h["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.name="Comparison",t}return Object(l["a"])(e,t),Object(r["a"])(e,[{key:"data",value:function(){return{chart:null,month:x()().format("YYYY-MM")}}},{key:"mounted",value:function(){var t=this;this.$data.chart=C(),this.$data.chart.on("interval:dblclick",function(e){var i=e.data._origin.type;t.$router.push({name:"search",params:{action:"GOODS_EXPORT",type:i,month:t.$data.month}})}),this.$data.chart.on("point:dblclick",function(e){var i=e.data._origin.type;t.$router.push({name:"search",params:{action:"PIECE_RECORD",type:i,month:t.$data.month}})}),this.freshCharts()}},{key:"freshCharts",value:function(){var t=this,e=[],i=v["c"]({date:this.$data.month,unit:"month",action:"PIECE_RECORD"}),n=v["c"]({date:this.$data.month,unit:"month",action:"GOODS_EXPORT"});if(i.length>0||n.length>0){n.forEach(function(i){var n=e.findIndex(function(t){return t.type===i.type});-1===n&&(e.push({type:i.type,"计单":0,"出货":0}),n=e.length-1),e[n]["出货"]=t.$NP.plus(e[n]["出货"],i.num)}),i.forEach(function(i){var n=e.findIndex(function(t){return t.type===i.type});-1===n&&(e.push({type:i.type,"计单":0,"出货":0}),n=e.length-1),e[n]["计单"]=t.$NP.plus(e[n]["计单"],i.num)});var a=Math.max.apply(Math,e.map(function(t){return Math.max(t["出货"],t["计单"])}));this.$data.chart.scale("计单",{max:a+50}),this.$data.chart.scale("出货",{max:a+50}),this.$data.chart.changeData(e)}else this.$data.chart.changeData([])}}]),e}(p["default"]);S=m["a"]([f["a"]],S);var R=S,M=R,T=(i("c57a"),i("2877")),z=Object(T["a"])(M,n,a,!1,null,"9fcafa00",null);z.options.__file="index.vue";e["default"]=z.exports},dcb1:function(t,e,i){(function(e,i){t.exports=i()})(0,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){var n=i(1);window&&!window.G2&&console.err("Please load the G2 script first!"),t.exports=n},function(t,e,i){var n=i(2),a=window&&window.G2,s=a.Chart,r=a.Util,h=a.G,o=a.Global,l=h.Canvas,d=r.DomUtil,c=function(t){return"number"===typeof t},u=function(){var t=e.prototype;function e(t){this._initProps(),r.deepMix(this,t);var e=this.container;if(!e)throw new Error("Please specify the container for the Slider!");r.isString(e)?this.domContainer=document.getElementById(e):this.domContainer=e,this.handleStyle=r.mix({width:this.height,height:this.height},this.handleStyle),"auto"===this.width&&window.addEventListener("resize",r.wrapBehavior(this,"_initForceFitEvent"))}return t._initProps=function(){this.height=26,this.width="auto",this.padding=o.plotCfg.padding,this.container=null,this.xAxis=null,this.yAxis=null,this.fillerStyle={fill:"#BDCCED",fillOpacity:.3},this.backgroundStyle={stroke:"#CCD6EC",fill:"#CCD6EC",fillOpacity:.3,lineWidth:1},this.range=[0,100],this.layout="horizontal",this.textStyle={fill:"#545454"},this.handleStyle={img:"https://gw.alipayobjects.com/zos/rmsportal/QXtfhORGlDuRvLXFzpsQ.png",width:5},this.backgroundChart={type:["area"],color:"#CCD6EC"}},t._initForceFitEvent=function(){var t=setTimeout(r.wrapBehavior(this,"forceFit"),200);clearTimeout(this.resizeTimer),this.resizeTimer=t},t.forceFit=function(){if(this&&!this.destroyed){var t=d.getWidth(this.domContainer),e=this.height;if(t!==this.domWidth){var i=this.canvas;i.changeSize(t,e),this.bgChart&&this.bgChart.changeWidth(t),i.clear(),this._initWidth(),this._initSlider(),this._bindEvent(),i.draw()}}},t._initWidth=function(){var t;t="auto"===this.width?d.getWidth(this.domContainer):this.width,this.domWidth=t;var e=r.toAllPadding(this.padding);"horizontal"===this.layout?(this.plotWidth=t-e[1]-e[3],this.plotPadding=e[3],this.plotHeight=this.height):"vertical"===this.layout&&(this.plotWidth=this.width,this.plotHeight=this.height-e[0]-e[2],this.plotPadding=e[0])},t.render=function(){this._initWidth(),this._initCanvas(),this._initBackground(),this._initSlider(),this._bindEvent(),this.canvas.draw()},t.changeData=function(t){this.data=t,this.repaint()},t.destroy=function(){clearTimeout(this.resizeTimer);var t=this.rangeElement;t.off("sliderchange"),this.bgChart&&this.bgChart.destroy(),this.canvas.destroy();var e=this.domContainer;while(e.hasChildNodes())e.removeChild(e.firstChild);window.removeEventListener("resize",r.getWrapBehavior(this,"_initForceFitEvent")),this.destroyed=!0},t.clear=function(){this.canvas.clear(),this.bgChart&&this.bgChart.destroy(),this.bgChart=null,this.scale=null,this.canvas.draw()},t.repaint=function(){this.clear(),this.render()},t._initCanvas=function(){var t=this.domWidth,e=this.height,i=new l({width:t,height:e,containerDOM:this.domContainer,capture:!1}),n=i.get("el");n.style.position="absolute",n.style.top=0,n.style.left=0,n.style.zIndex=3,this.canvas=i},t._initBackground=function(){var t,e=this.data,i=this.xAxis,n=this.yAxis,a=r.deepMix((t={},t[""+i]={range:[0,1]},t),this.scales);if(!e)throw new Error("Please specify the data!");if(!i)throw new Error("Please specify the xAxis!");if(!n)throw new Error("Please specify the yAxis!");var h=this.backgroundChart,o=h.type,l=h.color;r.isArray(o)||(o=[o]);var d=r.toAllPadding(this.padding),c=new s({container:this.container,width:this.domWidth,height:this.height,padding:[0,d[1],0,d[3]],animate:!1});c.source(e),c.scale(a),c.axis(!1),c.tooltip(!1),c.legend(!1),r.each(o,function(t){c[t]().position(i+"*"+n).color(l).opacity(1)}),c.render(),this.bgChart=c,this.scale="horizontal"===this.layout?c.getXScale():c.getYScales()[0],"vertical"===this.layout&&c.destroy()},t._initRange=function(){var t=this.startRadio,e=this.endRadio,i=this.start,n=this.end,a=this.scale,s=0,r=1;c(t)?s=t:i&&(s=a.scale(a.translate(i))),c(e)?r=e:n&&(r=a.scale(a.translate(n)));var h=this.minSpan,o=this.maxSpan,l=0;if("time"===a.type||"timeCat"===a.type){var d=a.values,u=d[0],g=d[d.length-1];l=g-u}else a.isLinear&&(l=a.max-a.min);l&&h&&(this.minRange=h/l*100),l&&o&&(this.maxRange=o/l*100);var m=[100*s,100*r];return this.range=m,m},t._getHandleValue=function(t){var e,i=this.range,n=i[0]/100,a=i[1]/100,s=this.scale;return e="min"===t?this.start?this.start:s.invert(n):this.end?this.end:s.invert(a),e},t._initSlider=function(){var t=this.canvas,e=this._initRange(),i=this.scale,a=t.addGroup(n,{middleAttr:this.fillerStyle,range:e,minRange:this.minRange,maxRange:this.maxRange,layout:this.layout,width:this.plotWidth,height:this.plotHeight,backgroundStyle:this.backgroundStyle,textStyle:this.textStyle,handleStyle:this.handleStyle,minText:i.getText(this._getHandleValue("min")),maxText:i.getText(this._getHandleValue("max"))});"horizontal"===this.layout?a.translate(this.plotPadding,0):"vertical"===this.layout&&a.translate(0,this.plotPadding),this.rangeElement=a},t._bindEvent=function(){var t=this,e=t.rangeElement;e.on("sliderchange",function(e){var i=e.range,n=i[0]/100,a=i[1]/100;t._updateElement(n,a)})},t._updateElement=function(t,e){var i=this.scale,n=this.rangeElement,a=n.get("minTextElement"),s=n.get("maxTextElement"),r=i.invert(t),h=i.invert(e),o=i.getText(r),l=i.getText(h);a.attr("text",o),s.attr("text",l),this.start=r,this.end=h,this.onChange&&this.onChange({startText:o,endText:l,startValue:r,endValue:h,startRadio:t,endRadio:e})},e}();t.exports=u},function(t,e){function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var n=window&&window.G2,a=n.Util,s=n.G,r=s.Group,h=a.DomUtil,o=5,l=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.getDefaultCfg=function(){return{range:null,middleAttr:null,backgroundElement:null,minHandleElement:null,maxHandleElement:null,middleHandleElement:null,currentTarget:null,layout:"vertical",width:null,height:null,pageX:null,pageY:null}},n._initHandle=function(t){var e,i,n,s=this.addGroup(),r=this.get("layout"),h=this.get("handleStyle"),l=h.img,d=h.width,c=h.height;if("horizontal"===r){var u=h.width;n="ew-resize",i=s.addShape("Image",{attrs:{x:-u/2,y:0,width:u,height:c,img:l,cursor:n}}),e=s.addShape("Text",{attrs:a.mix({x:"min"===t?-(u/2+o):u/2+o,y:c/2,textAlign:"min"===t?"end":"start",textBaseline:"middle",text:"min"===t?this.get("minText"):this.get("maxText"),cursor:n},this.get("textStyle"))})}else n="ns-resize",i=s.addShape("Image",{attrs:{x:0,y:-c/2,width:d,height:c,img:l,cursor:n}}),e=s.addShape("Text",{attrs:a.mix({x:d/2,y:"min"===t?c/2+o:-(c/2+o),textAlign:"center",textBaseline:"middle",text:"min"===t?this.get("minText"):this.get("maxText"),cursor:n},this.get("textStyle"))});return this.set(t+"TextElement",e),this.set(t+"IconElement",i),s},n._initSliderBackground=function(){var t=this.addGroup();return t.initTransform(),t.translate(0,0),t.addShape("Rect",{attrs:a.mix({x:0,y:0,width:this.get("width"),height:this.get("height")},this.get("backgroundStyle"))}),t},n._beforeRenderUI=function(){var t=this._initSliderBackground(),e=this._initHandle("min"),i=this._initHandle("max"),n=this.addShape("rect",{attrs:this.get("middleAttr")});this.set("middleHandleElement",n),this.set("minHandleElement",e),this.set("maxHandleElement",i),this.set("backgroundElement",t),t.set("zIndex",0),n.set("zIndex",1),e.set("zIndex",2),i.set("zIndex",2),n.attr("cursor","move"),this.sort()},n._renderUI=function(){"horizontal"===this.get("layout")?this._renderHorizontal():this._renderVertical()},n._transform=function(t){var e=this.get("range"),i=e[0]/100,n=e[1]/100,a=this.get("width"),s=this.get("height"),r=this.get("minHandleElement"),h=this.get("maxHandleElement"),o=this.get("middleHandleElement");r.resetMatrix?(r.resetMatrix(),h.resetMatrix()):(r.initTransform(),h.initTransform()),"horizontal"===t?(o.attr({x:a*i,y:0,width:(n-i)*a,height:s}),r.translate(i*a,0),h.translate(n*a,0)):(o.attr({x:0,y:s*(1-n),width:a,height:(n-i)*s}),r.translate(0,(1-i)*s),h.translate(0,(1-n)*s))},n._renderHorizontal=function(){this._transform("horizontal")},n._renderVertical=function(){this._transform("vertical")},n._bindUI=function(){this.on("mousedown",a.wrapBehavior(this,"_onMouseDown"))},n._isElement=function(t,e){var i=this.get(e);if(t===i)return!0;if(i.isGroup){var n=i.get("children");return n.indexOf(t)>-1}return!1},n._getRange=function(t,e){var i=t+e;return i=i>100?100:i,i=i<0?0:i,i},n._limitRange=function(t,e,i){i[0]=this._getRange(t,i[0]),i[1]=i[0]+e,i[1]>100&&(i[1]=100,i[0]=i[1]-e)},n._updateStatus=function(t,e){var i="x"===t?this.get("width"):this.get("height");t=a.upperFirst(t);var n,s=this.get("range"),r=this.get("page"+t),h=this.get("currentTarget"),o=this.get("rangeStash"),l=this.get("layout"),d="vertical"===l?-1:1,c=e["page"+t],u=c-r,g=u/i*100*d,m=this.get("minRange"),p=this.get("maxRange");s[1]<=s[0]?(this._isElement(h,"minHandleElement")||this._isElement(h,"maxHandleElement"))&&(s[0]=this._getRange(g,s[0]),s[1]=this._getRange(g,s[0])):(this._isElement(h,"minHandleElement")&&(s[0]=this._getRange(g,s[0]),m&&s[1]-s[0]<=m&&this._limitRange(g,m,s),p&&s[1]-s[0]>=p&&this._limitRange(g,p,s)),this._isElement(h,"maxHandleElement")&&(s[1]=this._getRange(g,s[1]),m&&s[1]-s[0]<=m&&this._limitRange(g,m,s),p&&s[1]-s[0]>=p&&this._limitRange(g,p,s))),this._isElement(h,"middleHandleElement")&&(n=o[1]-o[0],this._limitRange(g,n,s)),this.emit("sliderchange",{range:s}),this.set("page"+t,c),this._renderUI(),this.get("canvas").draw()},n._onMouseDown=function(t){var e=t.currentTarget,i=t.event,n=this.get("range");i.stopPropagation(),i.preventDefault(),this.set("pageX",i.pageX),this.set("pageY",i.pageY),this.set("currentTarget",e),this.set("rangeStash",[n[0],n[1]]),this._bindCanvasEvents()},n._bindCanvasEvents=function(){var t=this.get("canvas").get("containerDOM");this.onMouseMoveListener=h.addEventListener(t,"mousemove",a.wrapBehavior(this,"_onCanvasMouseMove")),this.onMouseUpListener=h.addEventListener(t,"mouseup",a.wrapBehavior(this,"_onCanvasMouseUp")),this.onMouseLeaveListener=h.addEventListener(t,"mouseleave",a.wrapBehavior(this,"_onCanvasMouseUp"))},n._onCanvasMouseMove=function(t){var e=this.get("layout");"horizontal"===e?this._updateStatus("x",t):this._updateStatus("y",t)},n._onCanvasMouseUp=function(){this._removeDocumentEvents()},n._removeDocumentEvents=function(){this.onMouseMoveListener.remove(),this.onMouseUpListener.remove(),this.onMouseLeaveListener.remove()},e}(r);t.exports=l}])})},fb75:function(t,e,i){}}]);
//# sourceMappingURL=chunk-42816825.1b263e6f.js.map