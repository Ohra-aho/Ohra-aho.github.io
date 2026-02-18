
const card_template = document.createElement("template");
card_template.innerHTML = 
`
	<img-frame>
		<img src="./media/images/header/placeholder_logo.png" alt="image">
	</img-frame>
	<content>
		<h3></h3>
		
	</content>
`

class Card extends HTMLElement { 
	og_content
	splitter
	constructor() {
		super();
	}

	connectedCallback() { 
		if(this.getAttribute("manual") == null) this.Inisiate();
		this.setAttribute("custom", "Y");
	}

	Inisiate() {
		const full_screen_content = this.querySelector("full-screen");
		if(full_screen_content != null) this.querySelector("full-screen").remove();

		let card = card_template.content.cloneNode(true);

		//Get content
		const custom = this.getAttribute("custom-card");
		const title = this.getAttribute("title");
		const image = this.getAttribute("image");
		const horizontal = Array.from(this.classList).includes("horizontal");
		const right = Array.from(this.classList).includes("right");
		this.splitter = this.getAttribute("splitter") ?? "$" 
		this.og_content = this.innerHTML;
		this.innerHTML = "";

		//Place content
		
		if(title != null) {
			card.querySelector("h3").innerText = title
		} else {
			card.querySelector("h3").remove();
		}

		if(custom) {
			card.querySelector("content").innerHTML += this.og_content;
		} else {
			this.classList.add("normal-card")
			//Add text editor
			let text_editor = document.createElement("text-editor");
			text_editor.innerHTML = this.og_content;
			text_editor.splitter = this.splitter;
			card.children[1].appendChild(text_editor);
		}

		if(image != null) { 
			card.querySelector("img").setAttribute("src", image);
		} else {
			card.querySelector("img").remove();
			this.classList.add("text");
		}

		if(horizontal) {
			this.classList.add("horizontal");
		}
		
		if(right) {
			card.appendChild(card.querySelector("img-frame"));
		}

		this.appendChild(card);
		if(!custom) {
			this.querySelector("text-editor").Inisiate();
		}

		if(full_screen_content != null) {
			this.appendChild(full_screen_content);
			full_screen_content.Inisiate();
		}
	}

	ChangeLanguage(LO) { //LanguageOption
		if(!this.getAttribute("custom-card")) {
			this.querySelector("text-editor").remove();
			let text_editor = document.createElement("text-editor");
			if(LO.text.length != 0) text_editor.innerHTML = LO.text;
			else text_editor.innerHTML = this.og_content
			text_editor.splitter = this.splitter;
			this.children[1].appendChild(text_editor);
		}
		let title = this.querySelector("h3");
		if(title != null) title.innerText = LO.attributes.get("title");
	}

	GiveBaseLanguage() {
		let language = new LanguageOption("", this.og_content);
		language.attributes.set("title", this.getAttribute("title"))
		return language;
	}
}

customElements.define("card-img", Card);
