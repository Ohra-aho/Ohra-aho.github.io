class MirrorEditor extends HTMLElement { 
	target
	inputs
	origin
	constructor() {
		super();
	}

	connectedCallback() {
		for(let i = 0; i < this.parentElement.children.length; i++) {
			if(this.parentElement.children[i].nodeName != "MIRROR-EDITOR") {
				this.target = this.parentElement.children[i];
				break;
			}
		}
	
		this.inputs = this.querySelectorAll("input");
		for(let i = 0; i < this.inputs.length; i++) {
			this.inputs[i].addEventListener("input", () => {
				this.RebuildTarget();
			});
		}

		let text_area = this.querySelector("textarea");
		if(text_area != undefined) {
			text_area.value = this.target.innerHTML;
			text_area.value = text_area.value.replaceAll("\t", "");
			text_area.addEventListener("input", () => {
				this.RebuildTarget();
			});
		}

		this.FindFullscreen();
	}

	FindFullscreen() {
		let parent = this.parentElement;
		while(parent.nodeName != "FULL-SCREEN-POPUP" && parent.nodeName != "BODY") {
			parent = parent.parentElement;
		}
		if(parent.nodeName == "FULL-SCREEN-POPUP") {
			this.origin = parent.parent;
		}
	}

	RebuildTarget() {
		for(let i = 0; i < this.inputs.length; i++) {
			if(this.inputs[i].value != "") {
				this.target.setAttribute(this.inputs[i].id, this.inputs[i].value);
				this.origin.setAttribute(this.inputs[i].id, this.inputs[i].value);
			}
		}
		this.target.innerHTML = this.querySelector("textarea").value;
		this.origin.new_content = this.querySelector("textarea").value;
		this.origin.Edit();
		this.target.Inisiate();
	}
}

customElements.define("mirror-editor", MirrorEditor);
