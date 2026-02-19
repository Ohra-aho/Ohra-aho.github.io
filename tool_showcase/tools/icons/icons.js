const ham_icon_template = document.createElement("template");
ham_icon_template.innerHTML = 
`
	<ham-icon-temp>
		<div></div>
		<div></div>
		<div></div>
	</ham-icon-temp>
`

class Hamburger extends HTMLElement { 

	constructor() {
		super();
	}

	connectedCallback() { 
		this.appendChild(ham_icon_template.content.cloneNode(true));
	}
}

customElements.define("ham-icon", Hamburger);