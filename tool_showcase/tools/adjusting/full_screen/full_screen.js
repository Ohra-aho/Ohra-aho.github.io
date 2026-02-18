
class FullScreen extends HTMLElement { 
	og_content
	constructor() {
		super();
	}

	connectedCallback() {
		for(let i = 0; i < this.children.length; i++) {
			this.children[i].setAttribute("manual", "#");
		}
	}

	Inisiate() {
		this.og_content = this.innerHTML;
		if(this.getAttribute("add-button") == null) {
			this.parentElement.addEventListener("click", () => {
				this.OpenFullScreen();
			});
		}
	}

	OpenFullScreen() {
		let popup = document.createElement("full-screen-popup");
		document.body.appendChild(popup);
		for(let i = 0; i < this.children.length; i++) {
			popup.appendChild(this.children[i].cloneNode(true))
			if(popup.children[i+1].getAttribute("custom") != null) popup.children[i+1].Inisiate();
		}
	}
}

customElements.define("full-screen", FullScreen);
