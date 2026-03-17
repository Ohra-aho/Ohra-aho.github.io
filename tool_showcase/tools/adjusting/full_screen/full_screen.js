
class FullScreen extends HTMLElement { 
	og_content
	constructor() {
		super();
	}

	connectedCallback() {
		for(let i = 0; i < this.children.length; i++) {
			this.children[i].setAttribute("manual", "#");
		}
		this.setAttribute("custom", "#")
	}

	Inisiate() {
		this.og_content = this.innerHTML;
		if(this.getAttribute("add-button") == null) {
			this.parentElement.addEventListener("click", () => {this.OpenFullScreen()});
			this.parentElement.style.cursor = "pointer";
		} else {
			let button = document.createElement("button");
			button.addEventListener("click", () => {this.OpenFullScreen()})
			button.innerHTML = this.getAttribute("add-button");
			button.classList.add("full-screen-open");
			this.parentElement.appendChild(button);
		}
	}

	OpenFullScreen() {
		let popup = document.createElement("full-screen-popup");
		document.body.appendChild(popup);
		for(let i = 0; i < this.children.length; i++) {
			popup.appendChild(this.children[i].cloneNode(true));
			if(popup.children[i+1].getAttribute("custom") != null) popup.children[i+1].Inisiate();

			if(popup.children[i+1].children.length > 0) {
				this.ActivateChildren(popup.children[i+1]);
			}
		}
	}

	ActivateChildren(element) {
		for(let i = 0; i < element.children.length; i++) {
			let child = element.children[i];
			if(child.getAttribute("custom") != null) child.Inisiate();
			else this.ActivateChildren(element.children[i])
		}
	}

	ChangeLanguage(LO) { //LanguageOption
		if(this.getAttribute("add-button") != null) {
			this.setAttribute(LO.attributes.get("add-button"));
		}
	}

	GiveBaseLanguage() {
		let language = new LanguageOption("", "");
		if(this.getAttribute("add-button") != null) language.attributes.set("add-button", this.getAttribute("add-button"))
		return language;
	}
}

customElements.define("full-screen", FullScreen);
