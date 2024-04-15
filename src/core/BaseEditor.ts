import {schema} from "prosemirror-schema-basic"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"

class BaseEditor {
	constructor() {
		let state = EditorState.create({schema})
		let view = new EditorView(document.body, {state});
		console.log(view)
	}
}

export default BaseEditor