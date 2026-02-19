const link_list_template = document.createElement("template");
link_list_template.innerHTML = 
`
<div id="main-link">
	<button>
		&#8595;
	</button>
</div>
<div id="sub-links">
</div>
`

class LinkList extends BaseClass { 
	links = [];
	constructor() {
		super();
		this.AddedInit = this.Activate;
	}

	Activate() {
		let list = link_list_template.content.cloneNode(true);

		if(this.getAttribute("label")) {
			this.GenerateIds(this.getAttribute("label"));
		}

		//Count for single links
		if(this.children.length == 1) {
			this.classList.add("single")
		}

		list.children[0].insertBefore(this.children[0], list.children[0].children[0])

		if(this.children[0] != undefined) {
			if(this.children[0].nodeName == "LANGUAGE-CHANGER") {
				list.children[0].insertBefore(this.children[0], list.children[0].children[1])
				if(this.children.length == 0) {
					this.classList.add("single")
				}
			}
		}
		const child_count = this.children.length;
		for(let i = 0; i < child_count; i++) {
			this.links.push(this.children[0]);
			list.children[1].appendChild(this.children[0]);
		}
		list.querySelector("button").addEventListener("click", () => {
			 this.OpenList()
		});

		for(let i = 0; i < list.children[1].children.length; i++) {
			list.children[1].children[i].addEventListener("click", () => {
				this.children[1].classList.toggle("open");
			})
		}

		this.appendChild(list);
	}

	OpenList() {
		this.children[1].classList.toggle("open");
		if(Array.from(this.children[1].classList).includes("open")) {
			this.querySelector("button").innerHTML = "&#8593";
		} else {
			this.querySelector("button").innerHTML = "&#8595";
		}
	}

	GenerateIds(label) {
		const links = this.querySelectorAll("a")
		for(let i = 1; i < links.length; i++) {
			links[i].href += "#"+label+"_"+i;
		}
	}
}

customElements.define("link-list", LinkList);