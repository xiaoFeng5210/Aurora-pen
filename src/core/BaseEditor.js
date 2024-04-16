"use strict";
exports.__esModule = true;
var prosemirror_schema_basic_1 = require("prosemirror-schema-basic");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_view_1 = require("prosemirror-view");
var BaseEditor = /** @class */ (function () {
    function BaseEditor() {
        var state = prosemirror_state_1.EditorState.create({ schema: prosemirror_schema_basic_1.schema });
        var view = new prosemirror_view_1.EditorView(document.body, { state: state });
        console.log(view);
    }
    return BaseEditor;
}());
exports["default"] = BaseEditor;
