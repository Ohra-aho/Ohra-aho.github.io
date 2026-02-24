
class TextEditor extends HTMLElement { 
	content
	splitter
	rendered = false;
	constructor() {
		super();
	}

	Inisiate() {
		this.content = this.innerHTML;
		this.innerHTML = "";

		let para_split = this.content.split(this.splitter)
		if(para_split.length > 1) {
			for(let i = 0; i < para_split.length; i++) {
				this.HandleText(para_split[i]);
			}
		} else {
			this.HandleText(para_split[0]);
		}
		
		window.addEventListener("DOMContentLoaded", () => {
			this.LimitTextSize();
		})
		window.addEventListener("resize", () => {
			this.LimitTextSize();
		})
	}

	HandleText(text) {
		//Add a list if one is found
		if(text.includes("- ")) {
			let list = document.createElement("ul");
			let list_split = text.split("- ");
			for(let i = 1; i < list_split.length; i++) {
				let item = document.createElement("li");
				item.innerHTML = list_split[i];
				list.appendChild(item);
			}
			this.appendChild(list);
		} else {
			//Add plain text
			let para = document.createElement("p");
			para.innerHTML = text;
			this.appendChild(para);
		}
	}

	LimitTextSize() {
		if(!this.getAttribute("scroll")) {
			const height_limit = this.parentElement.offsetHeight;
			let current_height = 0;
			let limit_reached = false;

			for(let i = 0; i < this.parentElement.children.length; i++) {
				if(this.parentElement.children[i] != this) {
					current_height += this.parentElement.children[i].offsetHeight;
				}
			}

			for(let i = 0; i < this.children.length; i++) {
				this.children[i].classList.remove("hidden");
			}

			for(let i = 0; i < this.children.length; i++) {
				if(current_height + this.children[i].offsetHeight < height_limit && !limit_reached) {
					current_height += this.children[i].offsetHeight;
				} else {
					limit_reached = true;
					if(this.children[i].nodeName != "BUTTON") this.children[i].classList.add("hidden");

					if(this.querySelector("button") == null) {
						let more_button = document.createElement("button");
						more_button.innerHTML = "&#8595;";
						more_button.addEventListener("click", () => {
							this.ShowAllText();
						});
						this.appendChild(more_button);
					}
				}
			}
		}
	}

	ShowAllText() {
		let button = this.querySelector("button");
		this.classList.toggle("showall");
		this.parentElement.style.maxHeight = "fit-content";
		this.parentElement.style.height = "fit-content";

		if(this.classList.contains("showall")) {
			button.innerHTML = "&#8593;"
		} else {
			button.innerHTML = "&#8595;"
		}
	}
}

customElements.define("text-editor", TextEditor);