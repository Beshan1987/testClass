import { Note } from "./note.js";

class NoteList {
	_notes = [];
	constructor(container) {
		this.container = container;
		this.list = document.createElement("div");
		this.list.classList.add("list-group");

		this.container.innerHtml = "";
		container.append(this.list);
	}

	add(name, done = false) {
		let newNote = new Note(this.container, name, done);
		this._notes.push(newNote);
	}
}

let newList = new NoteList(document.getElementById("app"), prompt("sas"));
