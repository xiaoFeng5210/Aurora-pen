// import {schema} from "prosemirror-schema-basic"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {undo, redo, history} from "prosemirror-history"
import {keymap} from "prosemirror-keymap"
import {baseKeymap} from "prosemirror-commands"
import {schema} from "./Schema"
import { Schema, Node, DOMParser } from "prosemirror-model";

class BaseEditor {
	constructor(domId?: string) {
		if (!domId) {
			throw new Error("domId is required")
		}
		const dom = document.getElementById(domId)
		let state = EditorState.create({
			schema,
			plugins: [history(), keymap({"Mod-z": undo, "Mod-y": redo}), keymap(baseKeymap)]
		})
		let view = new EditorView(dom, {state});
		
	}
	
	private createBaseDoc() {
		
	}
}

export default BaseEditor