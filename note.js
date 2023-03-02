export class Note {
	_name = "";
	_done = false;
	constructor(container, name = "", done = false) {
		this.item = document.createElement("div");
		this.buttonGroup = document.createElement("div");
		this.doneButton = document.createElement("button");
		this.nameSpan = document.createElement("span");
		this.deleteButton = document.createElement("button");

		this.item.classList.add(
			"list-group-item",
			"d-flex",
			"justify-content-between",
			"align-items-center"
		);
		this.buttonGroup.classList.add("btn-group", "btn-group-sm");
		this.doneButton.classList.add("btn", "btn-success");
		this.doneButton.textContent = "Done";
		this.deleteButton.classList.add("btn", "btn-danger");
		this.deleteButton.textContent = "Delete";

		this.name = name;
		this.done = done;
		this.container = container;

		this.doneButton.addEventListener("click", () => {
			this.done = !this.done;
		});

		this.deleteButton.addEventListener("click", () => {
			if (confirm("Are you sure?")) {
				this.delete();
			}
		});

		this.buttonGroup.append(this.doneButton, this.deleteButton);
		this.item.append(this.nameSpan, this.buttonGroup);
		container.append(this.item);
	}

	set name(value) {
		this._name = value;
		this.nameSpan.textContent = value;
	}
	get name() {
		return this._name;
	}

	set done(value) {
		this._done = value;
		if (value) {
			this.item.classList.add("list-group-item-success");
		} else {
			this.item.classList.remove("list-group-item-success");
		}
	}
	get done() {
		return this._done;
	}

	delete() {
		this.item.remove();
	}
}
