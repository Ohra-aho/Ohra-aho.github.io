const ham_list_template = document.createElement("template");
ham_list_template.innerHTML = 
`
<button id="ham-button">
	<ham-icon></ham-icon>
</button>
<ham-list-content>
</ham-list-content>
`

const ham_menu_temp = document.createElement("template");
ham_menu_temp.innerHTML = 
`
<ham-menu>
	<div>
		<button id="close">&#x2715;</button>
	</div>
</ham-menu>
`

class HamList extends HTMLElement { 
	content = [];

	constructor() {
		super();
	}

	connectedCallback() { 
		
		for(let i = 0; i < this.children.length; i++) {
			this.content.push(this.children[i]);
		}

		const template = ham_list_template.content.cloneNode(true);
		for(let i = 0; i < this.content.length; i++) {
			template.children[1].appendChild(this.content[i]);
		}
		this.appendChild(template.cloneNode(true));
		document.getElementById("ham-button").onclick = this.OpenList;
	}

	OpenList() {
		let menu = document.createElement("ham-menu");
		menu.content = this.parentElement.content;
		menu.Activate();
	}
}

class HamMenu extends HTMLElement { 
	content;

	constructor() {
		super();
	}

	Activate() {
		let template = ham_menu_temp.content.cloneNode(true);
		document.body.appendChild(template);

		document.querySelector("ham-menu").children[0].children[0].addEventListener("click", () => {
			document.querySelector("ham-menu").remove();
		});

		for(let i = 0; i < this.content.length; i++) {
			document.querySelector("ham-menu").appendChild(this.content[i]);
		}
		
		this.AddCloseToLinks();
	}

	AddCloseToLinks() {
		let ham_menu = document.querySelector("ham-menu");
		let links = ham_menu.querySelectorAll("a");
		for(let i = 0; i < links.length; i++) {
			links[i].onclick = function () {
				ham_menu.remove();
			};
		}
	}
}

customElements.define("ham-menu", HamMenu)
customElements.define("ham-list", HamList);