(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15396d69"],{"57f5":function(s,e,v){"use strict";v.r(e);var o=function(){var s=this;s._self._c;return s._m(0)},_=[function(){var s=this,e=s._self._c;return e("div",[e("h1",[s._v("常见问题")]),e("h2",[s._v("1.在Vite中使用报错，提示xml-js依赖出错")]),e("p",[s._v("解决方法：使用如下引入方式：")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),e("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v('"simple-mind-map/dist/simpleMindMap.umd.min"')]),s._v("\n")])]),e("p",[e("code",[s._v("simple-mind-map")]),s._v("包提供未打包的入口字段"),e("code",[s._v("module")]),s._v("，依赖的"),e("code",[s._v("xml-js")]),s._v("包需要引入"),e("code",[s._v("node")]),s._v("环境下的包，所以在"),e("code",[s._v("Vite")]),s._v("中获取不到会报错，所以指定引入打包后的入口，相关包都已打包进产物，所以不会报错。")]),e("p",[s._v("如果需要二次开发，也就是必须要使用未打包代码的话，如果你不需要解析"),e("code",[s._v("xmind")]),s._v("文件的话，可以去除"),e("code",[s._v("xmind")]),s._v("模块，如果需要的话那么可以尝试换成其他的解析"),e("code",[s._v("xml")]),s._v("为"),e("code",[s._v("json")]),s._v("的库。")]),e("h2",[s._v("2.报错"),e("code",[s._v("Getting bbox of element \"text\" is not possible: TypeError: Cannot read properties of undefined (reading 'apply')")])]),e("p",[s._v("原因为安装的"),e("code",[s._v("@svgdotjs/svg.js")]),s._v("版本太高，手动降到"),e("code",[s._v("3.0.16")]),s._v("版本即可。")]),e("h2",[s._v("3.TypeError: Cannot read properties of undefined (reading 'prototype') at sax.js:222:46")]),e("p",[s._v("可以在打包配置文件中增加如下配置：")]),e("pre",{staticClass:"hljs"},[e("code",[s._v("resolve: { "),e("span",{staticClass:"hljs-attr"},[s._v("alias")]),s._v(": { "),e("span",{staticClass:"hljs-attr"},[s._v("stream")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"stream-browserify"')]),s._v(" } }\n")])]),e("p",[s._v("不同的打包工具可能具体配置不一样，原理就是排除"),e("code",[s._v("stream")]),s._v("依赖。")]),e("h2",[s._v("4.点击【新建】、【打开】、【另存为】按钮时提示浏览器不支持，或者非https协议。")]),e("p",[s._v("浏览器上操作电脑本地文件使用的是"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/showOpenFilePicker"}},[s._v("window.showOpenFilePicker")]),s._v("api，如果不支持，要么是浏览器不支持这个API，要么是因为页面非https协议，你可以按F12，或者在页面通过鼠标右键菜单中的【检查】打开浏览器控制台，在其中的【控制台】或【console】tab中输入"),e("code",[s._v("window.showOpenFilePicker")]),s._v("按回车，如果返回"),e("code",[s._v("undefined")]),s._v("则代表不支持，如果返回的不是这个，而页面依旧提示提示浏览器不支持，或者非https协议，那么可以提交issue，或者联系作者。")]),e("h2",[s._v("5.引入simple-mind-map报错，报错信息如下：")]),e("img",{staticStyle:{width:"850px"},attrs:{src:v("bff3")}}),e("p",[s._v("这是因为你的构建环境不支持该js语法，该语法出自"),e("code",[s._v("@svgdotjs/svg.js")]),s._v("库，解决方法如下：")]),e("p",[s._v("1.手动降低"),e("code",[s._v("@svgdotjs/svg.js")]),s._v("库的版本，你可以在你的项目中手动安装低版本，比如："),e("code",[s._v("npm i @svgdotjs/svg.js@3.2.0")])]),e("p",[s._v("2.不降低版本的话，可以通过修改你的构建工具的相关配置，修改"),e("code",[s._v("babel")]),s._v("的配置，让它编译一下"),e("code",[s._v("node_modules")]),s._v("中的"),e("code",[s._v("simple-mind-map")]),s._v("库，或"),e("code",[s._v("@svgdotjs/svg.js")]),s._v("库，如果用的是"),e("code",[s._v("vue-cli")]),s._v("或"),e("code",[s._v("vite")]),s._v("，它们也直接提供了相关配置。另外需要安装编译该语法的"),e("code",[s._v("babel")]),s._v("插件，并且配置到"),e("code",[s._v("babel")]),s._v("的配置文件中：")]),e("p",[e("code",[s._v("@babel/plugin-proposal-nullish-coalescing-operator")]),s._v("、"),e("code",[s._v("@babel/plugin-proposal-optional-chaining")]),s._v("。")])])}],t={},i=t,d=v("2877"),n=Object(d["a"])(i,o,_,!1,null,null,null);e["default"]=n.exports},bff3:function(s,e,v){s.exports=v.p+"img/错误.jpg"}}]);