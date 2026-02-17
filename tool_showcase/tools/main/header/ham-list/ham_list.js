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
		this.parentElement.classList.toggle("open");
		if(this.parentElement.classList.contains("open")) {
			const temp = ham_menu_temp.content.cloneNode(true);
			temp.getElementById("close").addEventListener("click", function () {
				this.parentElement.parentElement.parentElement.classList.toggle("open");
				this.parentElement.parentElement.remove();
			});
			this.parentElement.appendChild(temp);
			for(let i = 0; i < this.parentElement.content.length; i++) {
				this.parentElement.querySelector("ham-menu").appendChild(this.parentElement.content[i].cloneNode(true));
				this.parentElement.AddCloseToLinks();
			}
		} else {
			this.parentElement.querySelector("ham-menu").remove();
		}
	}

	AddCloseToLinks() {
		let ham_menu = this.querySelector("ham-menu");
		let links = ham_menu.querySelectorAll("a");
		for(let i = 0; i < links.length; i++) {
			links[i].onclick = function () {
				document.querySelector("ham-list").classList.toggle("open");
				ham_menu.remove();
			};
		}
	}
}

customElements.define("ham-list", HamList);