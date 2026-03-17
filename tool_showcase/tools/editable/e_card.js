
class EditableCard extends Card { 
	new_content
	constructor() {
		super();
	}

	Edit() {
		let sub_content = this.querySelector("content");
		let text_editor = this.querySelector("text-editor");
		sub_content.children[0].innerHTML = this.getAttribute("title");
		text_editor.innerHTML = this.new_content;
		text_editor.splitter = this.getAttribute("splitter");
		text_editor.Inisiate();
	}
	
}

customElements.define("editable-card-img", EditableCard);
