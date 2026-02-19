//Requires text editor

class TextColumn extends BaseClass { 
	splitter
	original_content
	constructor() {
		super();
		this.AddedInit = this.Activate;
	}

	connectedCallback() {
		this.Base();
	}

	Activate() {
		//this.StartInit();

		this.original_content = this.innerHTML;
		this.innerText = "";
		this.splitter = this.getAttribute("splitter") ?? "$";
		const title = this.getAttribute("title") ?? "";

		if(title != "") {
			let prev_title = this.querySelector("h1");
			if(prev_title != null) prev_title.remove();
			let h1 = document.createElement("h1");
			h1.innerText = title;
			this.appendChild(h1);
		}

		//Add text editor
		let prev_text_editor = this.querySelector("text-editor");
		if(prev_text_editor != null) prev_text_editor.remove();
		let text_editor = document.createElement("text-editor");
		text_editor.innerHTML = this.original_content;
		text_editor.splitter = this.splitter;
		this.appendChild(text_editor);
		if(this.title != "") this.children[1].Inisiate();
		else this.children[0].Inisiate();

		//this.EndInit();
	}

	ChangeLanguage(LC) {
		const title = LC.attributes.get("title") ?? "";
		const content = LC.text;
		let h1 = this.querySelector("h1")
		if(h1 != null) {
			h1.innerText = title;
		}
	
		//Remove the old
		let prev_content = this.querySelector("text-editor")
		if(prev_content != null) {
			prev_content.remove();
			//Add the new
			let text_editor = document.createElement("text-editor");
			text_editor.innerHTML = content;
			text_editor.splitter = this.splitter;
			this.appendChild(text_editor);

			this.querySelector("text-editor").Inisiate();
		} else {
			this.innerHTML = LC.text;
			this.setAttribute("title", LC.attributes.get("title"));
		}
	}

	GiveBaseLanguage() {
		let language = new LanguageOption("", this.original_content ?? this.innerHTML);
		language.attributes.set("title", this.getAttribute("title") ?? "")
		return language;
	}
}

customElements.define("text-column", TextColumn);


//Untility functions

//target: class to be worked with
//name: tag in which true content needs to be pasted
//template: template to be pasted into the class
function PlaceTrueContent(target, template, name) {
	const content = target.innerHTML;
	target.innerHTML = "";
	let temp = template.content.cloneNode(true)
	temp.querySelector(name).innerHTML = content;
	target.appendChild(temp);
}