class SubLinkGenerator extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() { 
		const target = this.getAttribute("target");
		const list_id = this.getAttribute("link-list");
		const label = this.getAttribute("label") ?? document.getElementById(list_id).getAttribute("label");
		
		let targets = document.querySelectorAll(target);
		let target_ids = [];
		for(let i = 0; i < targets.length; i++) {
			const new_id = label+"_"+(i+1).toString();
			targets[i].id = new_id;
			target_ids.push(new_id);
		}
	}

	RecreateLinkList(ids, list) {
		list.classList.remove("single");
		let fragment = document.createDocumentFragment();
		for(let i = 0; i < ids.length; i++) {
			let link = document.createElement("a");
			link.href = "#"+ids[i];
			link.innerText = ids[i];
			fragment.appendChild(link);
		}
		list.appendChild(fragment);
	}
}

customElements.define("sub-link-generator", SubLinkGenerator);