(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{11:function(_,e,t){},13:function(_,e,t){"use strict";t.r(e);t(1);var s=t(4),a=t.n(s),r=t(5),c=(t(11),t(0));function l(){return Object(c.jsx)("main",{style:{backgroundColor:"black",height:"100vh",width:"100vw"},children:Object(c.jsx)(r.a,{})})}t(12);a.a.render(Object(c.jsx)(l,{}),document.getElementById("root"))},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_rolando_Desktop_calc_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__),Calculadora=function Calculadora(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)([[9,8,7,6],[5,4,3],[2,1,0]]),_useState2=Object(C_Users_rolando_Desktop_calc_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,1),numbers=_useState2[0],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(["="]),_useState4=Object(C_Users_rolando_Desktop_calc_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,1),lastRow=_useState4[0],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(["AC","+/-","/","*","-","+",".","<--"]),_useState6=Object(C_Users_rolando_Desktop_calc_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,1),simbols=_useState6[0],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("".toString()),_useState8=Object(C_Users_rolando_Desktop_calc_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),display=_useState8[0],setDisplay=_useState8[1];function simb(_){var e=_.target.innerText;if("AC"===e)setDisplay("");else if("<--"===e){if(display.split("").length>1){var t=display.split("");t.pop(),setDisplay(t.join(""))}}else"+"===e||"-"===e||"*"===e||"/"===e?setDisplay((function(_){return _+e})):"."===e?display.split("").includes(".")?console.log("yes"):(console.log("no"),setDisplay((function(_){return _+"."}))):"+/-"===e&&(display.search(/[+|\-|\*|\/]/)>0?setDisplay("Error"):setDisplay((function(_){return(-1*Number(_)).toString()})))}function num(_){var e=_.target.innerText;setDisplay((function(_){return _+e}))}function igual(){var total=eval(display);setDisplay(total.toString())}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:" my-container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"row my-row justify-content-center",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-10 m-2 pantalla",style:{height:"50px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"h3",children:display})}),simbols.map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3 m-1 my-col simbols",onClick:simb,children:_},_)})),numbers.map((function(_){return _.map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3 m-1 my-col",onClick:num,children:_},_)}))})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-6 mt-1 ml-2 simbols ",id:"igual",onClick:igual,children:"="},"=")]})})};__webpack_exports__.a=Calculadora}},[[13,1,2]]]);
//# sourceMappingURL=main.54faa796.chunk.js.map