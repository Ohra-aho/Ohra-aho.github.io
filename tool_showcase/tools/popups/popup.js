const popup_template = document.createElement("template");
popup_template.innerHTML = 
`
<button>&#10006;</button>
`

class Popup extends HTMLElement { 

	constructor() {
		super();
	}

	connectedCallback() {
		let popup = popup_template.content.cloneNode(true);

		popup.children[0].addEventListener("click", () => {
			this.Close();
		});

		this.appendChild(popup);
	}

	Close() {
		this.remove();
	}
}

customElements.define("full-screen-popup", Popup);
