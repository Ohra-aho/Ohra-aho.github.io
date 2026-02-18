
class TextEditor extends HTMLElement { 
	content
	splitter
	rendered = false;
	constructor() {
		super();
	}

	Inisiate() {
		this.content = this.innerHTML;
		this.innerHTML = "";

		let para_split = this.content.split(this.splitter)
		if(para_split.length > 1) {
			for(let i = 0; i < para_split.length; i++) {
				this.HandleText(para_split[i]);
			}
		} else {
			this.HandleText(para_split[0]);
		}
	}

	HandleText(text) {
		//Add a list if one is found
		if(text.includes("- ")) {
			let list = document.createElement("ul");
			let list_split = text.split("- ");
			for(let i = 1; i < list_split.length; i++) {
				let item = document.createElement("li");
				item.innerHTML = list_split[i];
				list.appendChild(item);
			}
			this.appendChild(list);
		} else {
			//Add plain text
			let para = document.createElement("p");
			para.innerHTML = text;
			this.appendChild(para);
		}
	}
}

customElements.define("text-editor", TextEditor);