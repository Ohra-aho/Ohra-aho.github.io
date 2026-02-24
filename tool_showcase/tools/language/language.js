class LanguageOption {
	name;
	text;
	attributes;

	constructor(name, text) {
		this.name = name;
		this.text = text;
		this.attributes = new Map();
	}
}

class Language extends HTMLElement {
	text = [];
	current_language = "";
	target_element;
	constructor() {
		super();
	}

	ChangeLanguage(language) {
		this.current_language = language;
		if(this.target_element.getAttribute("custom") != "Y") {
			for(let i = 0; i < this.text.length; i++) {
				if(this.current_language == this.text[i].name) {
					this.target_element.innerHTML = this.text[i].text;
					break;
				}
			}
		} else {
			for(let i = 0; i < this.text.length; i++) {
				if(this.current_language == this.text[i].name) {
					this.target_element.ChangeLanguage(this.text[i])
					break;
				}
			}
		}
	}

	GetCurrentLanguage() {
		const l = window.sessionStorage.getItem("language");
		if(l != this.current_language) {
			this.ChangeLanguage(l);
		}
	}

	FindTargetElement() {
		let temp = this.previousSibling;
		let safe = 0;

		//Loop through white spaces and texts
		while(temp.nodeName == "#text") {
			temp = temp.previousSibling;
			safe++;
			if(safe >= 100) {
				console.log("safe triggered");
				break;
			}
		}
		this.target_element = temp;
		console.log(temp)
	}

	Inisiate() {
		this.FindTargetElement();
		this.current_language = this.getAttribute("default_language");
		if(!this.target_element.getAttribute("custom")) {
			let new_language = new LanguageOption(
					document.querySelector("languages").getAttribute("languages").split(" ")[0],
					this.target_element.innerHTML, 
				)
			this.text.push(new_language);
		} else {
			//GiveBaseLanguage needs to exist in all custom elements
			let target_content = this.target_element.GiveBaseLanguage();
			target_content.name = document.querySelector("languages").getAttribute("languages").split(" ")[0]
			this.text.push(
				target_content
			)
		}

		for(let i = 0; i < this.children.length; i++) {
			const attr = this.children[i].attributes;

			let new_language = new LanguageOption(
					attr.getNamedItem("name").value, 
					this.children[i].innerHTML,
				);

			for(let i = 0; i < attr.length; i++) {
				if(attr[i] != undefined) {
					if(attr[i].name != "name") {
						new_language.attributes.set(attr[i].name, attr[i].value)
					}
				}
			}

			this.text.push(
				new_language
			);
		}
		this.innerHTML = "";
		this.GetCurrentLanguage();
		this.classList.add("init");
	}

}

class LanguageController extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		window.addEventListener("load", () => {
			let lc_s = document.querySelectorAll("language-changer");
			for(let i = 0; i < lc_s.length; i++) {
				lc_s[i].Inisiate();
			}

			let loading_screen = document.querySelector("loading-screen");
			if(loading_screen != null) loading_screen.classList.toggle("done");
		})
	}

}

customElements.define("language-controller", LanguageController);
customElements.define("language-changer", Language);