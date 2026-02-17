class MirrorEditor extends HTMLElement { 
	target
	inputs
	constructor() {
		super();
	}

	connectedCallback() {
		for(let i = 0; i < this.parentElement.children.length; i++) {
			if(this.parentElement.children[i].nodeName != "MIRROR-EDITOR") {
				this.target = this.parentElement.children[i];
			}
		}
	
		this.inputs = this.querySelectorAll("input");
		for(let i = 0; i < this.inputs.length; i++) {
			this.inputs[i].addEventListener("input", () => {
				this.RebuildTarget();
			});
		}

		this.querySelector("textarea").addEventListener("input", () => {
			this.RebuildTarget();
		});
	}

	RebuildTarget() {
		for(let i = 0; i < this.inputs.length; i++) {
			if(this.inputs[i].value != "") {
				this.target.setAttribute(this.inputs[i].id, this.inputs[i].value)
			}
		}
		this.target.innerHTML = this.querySelector("textarea").value;
		this.target.Inisiate();
	}
}

customElements.define("mirror-editor", MirrorEditor);
