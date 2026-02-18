
class ItemList extends BaseClass { 
	constructor() {
		super();
		this.Inisisate = this.Inisiate;
	}

	connectedCallback() { 
		this.Base();
	}

	Inisiate() {
		this.StartInit();

		const type = this.getAttribute("type");
		let list = null;
		if(type == "number") {
			list = document.createElement("ol");
		} else {
			list = document.createElement("ul");
		}
		
		const og_content = this.innerHTML;
		this.innerHTML = "";
		const split_content = og_content.split("-")
		for(let i = 1; i < split_content.length; i++) {
			let item = document.createElement("li");
			item.innerHTML= split_content[i];
			list.appendChild(item);
		}

		this.appendChild(list);

		this.EndInit();
	}

	ChangeLanguage(title, content) {
		//Remove the old
		let list = this.children[0];
		const split_content = content.split("- ");

		for(let i = 0; i < split_content.length-1; i++) {
			list.children[0].remove();
		}
		
		for(let i = 1; i < split_content.length; i++) {
			console.log(split_content[i])
			//list.children[i].innerText = split_content[i]
		}
	}

	GiveBaseLanguage() {
		return [
			"",
			this.og_content
		]
	}
}

customElements.define("item-list", ItemList);