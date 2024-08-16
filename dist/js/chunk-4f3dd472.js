(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f3dd472"],{"076b":function(e,s,t){e.exports=t.p+"img/alipay.jpg"},4968:function(e,s,t){e.exports=t.p+"img/wechat.jpg"},5239:function(e,s,t){e.exports=t.p+"img/编号3.jpg"},"5fee":function(e,s,t){e.exports=t.p+"img/编号1.jpg"},eb57:function(e,s,t){"use strict";t.r(s);var n=function(){var e=this;e._self._c;return e._m(0)},a=[function(){var e=this,s=e._self._c;return s("div",[s("h1",[e._v("Numbers chargeable plugin")]),s("p",[e._v("The Numbers plugin provides the function of one click numbering of child nodes of a node, supports multiple numbering forms, and specifies the hierarchy of numbering:")]),s("img",{staticStyle:{width:"400px"},attrs:{src:t("5fee")}}),s("img",{staticStyle:{width:"400px"},attrs:{src:t("fd37")}}),s("img",{staticStyle:{width:"400px"},attrs:{src:t("5239")}}),s("p",[e._v("You can experience it in the online version by right clicking on the node and clicking on its numbered child nodes.")]),s("h2",[e._v("Charge")]),s("p",[e._v("At present, the charging method is relatively primitive. By scanning the code and transferring money, please note the plugin you want to purchase and your email address(If you reach the maximum text limit, you can make the payment in two installments), and then the plugin file will be sent to your email. Purchase should be made after full use and consideration. If you are not familiar with front-end development and do not know how to use plugins, please consider purchasing carefully. There will be no refund unless there are special reasons. If you find bugs or have requirements, you can submit relevant issues.")]),s("p",[e._v("Price: ￥ 29.9, including unpackaged source code and packaged files.")]),s("img",{staticStyle:{width:"300px"},attrs:{src:t("076b")}}),s("img",{staticStyle:{width:"300px"},attrs:{src:t("4968")}}),s("h2",[e._v("Register")]),s("p",[e._v("1.Referencing packaged files:")]),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" MindMap "),s("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map'")]),e._v("\n"),s("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" Numbers "),s("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"hljs-string"},[e._v("'numbers.cjs.min.js'")]),e._v("\n"),s("span",{staticClass:"hljs-comment"},[e._v("// 或 import Numbers from 'numbers.esm.min.js'")]),e._v("\n\nMindMap.usePlugin(Numbers)\n")])]),s("p",[e._v("2.Referencing Unpackaged Source Code")]),s("p",[e._v("You can first enter the plugin directory to execute:")]),s("pre",{staticClass:"hljs"},[s("code",[e._v("npm link\n")])]),s("p",[e._v("Then enter your project root directory to execute:")]),s("pre",{staticClass:"hljs"},[s("code",[e._v("npm link simple-mind-map-plugin-handdrawnlikestyle\n")])]),s("p",[e._v("Then you can directly import it for use:")]),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" MindMap "),s("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map'")]),e._v("\n"),s("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" Numbers "),s("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map-plugin-numbers'")]),e._v("\n\nMindMap.usePlugin(Numbers)\n")])]),s("p",[e._v("After registration and instantiation of "),s("code",[e._v("MindMap")]),e._v(", the instance can be obtained through "),s("code",[e._v("mindMap.numbers")]),e._v(".")]),s("h2",[e._v("Command")]),s("p",[e._v("After registering this plugin, the 'SET_NUMBER' command will be added to the mind map instance to set node numbers. Use this command:")]),s("pre",{staticClass:"hljs"},[s("code",[e._v("mindMap.execCommand("),s("span",{staticClass:"hljs-string"},[e._v("'SET_NUMBER'")]),e._v(", appointNodes, number)\n")])]),s("p",[e._v("This command can pass two parameters:")]),s("ul",[s("li",[s("p",[s("code",[e._v("appointNodes")]),e._v("：Assign a number to a specified node instance, which can be passed as a single node instance or as an array of node instances. If an empty array is passed, a tag will be added to the currently activated node;")])]),s("li",[s("p",[s("code",[e._v("number")]),e._v("：If the number data to be set is passed as' null ', it means the number will be deleted. Otherwise, please pass an object with the following detailed fields:")])])]),s("table",[s("thead",[s("tr",[s("th",[e._v("Field name")]),s("th",[e._v("Type")]),s("th",[e._v("Default")]),s("th",[e._v("Desc")])])]),s("tbody",[s("tr",[s("td",[e._v("type")]),s("td",[e._v("Number")]),s("td",[e._v("1")]),s("td",[e._v("Number format, default is '1', representing ordinary numbers, optional values: 1 (pure number), 2 (number with decimal point, such as: 1.), 3 (number with parentheses, such as: (1)), 4 (lowercase letter, such as: a.), 5 (uppercase letter, such as: A.), 6 (lowercase Roman number, such as: i.), 7 (uppercase Roman number, such as: I.), 8 (Chinese uppercase number, such as: 一、)")])]),s("tr",[s("td",[e._v("level")]),s("td",[e._v("Number")]),s("td",[e._v("1")]),s("td",[e._v("The child node hierarchy to be numbered, default is level 1, optional values: 1 (level 1), 2 (level 2), 3 (level 3), 0 (all levels)")])])])]),s("p",[e._v("When calling a command, you can pass only one field, such as '{type: 1}', and the other field will use the previous setting.")]),s("p",[e._v("示例：")]),s("pre",{staticClass:"hljs"},[s("code",[e._v("mindMap.execCommand("),s("span",{staticClass:"hljs-string"},[e._v("'SET_NUMBER'")]),e._v(", [], {\n    "),s("span",{staticClass:"hljs-attr"},[e._v("type")]),e._v(": "),s("span",{staticClass:"hljs-number"},[e._v("2")]),e._v(",\n    "),s("span",{staticClass:"hljs-attr"},[e._v("level")]),e._v(": "),s("span",{staticClass:"hljs-number"},[e._v("3")]),e._v("\n})\n")])]),s("p",[e._v("After setting the number, the data will be saved to the node's 'data' under the name 'number'.")])])}],i={},r=i,l=t("2877"),o=Object(l["a"])(r,n,a,!1,null,null,null);s["default"]=o.exports},fd37:function(e,s,t){e.exports=t.p+"img/编号2.jpg"}}]);