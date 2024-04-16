"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
// @ts-ignore
var main_js_1 = require("../../dist/main.js");
function App() {
    (0, react_1.useEffect)(function () {
        (0, main_js_1.add)();
    }, []);
    return (<>
      <span>测试页面</span>
    </>);
}
exports["default"] = App;
