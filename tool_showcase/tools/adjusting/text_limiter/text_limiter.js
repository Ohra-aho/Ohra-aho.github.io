class LimitedText extends HTMLElement { 
	content
	char_limit
	constructor() {
		super();
	}

	connectedCallback() {
		this.content = this.innerText;
		this.char_limit = 0;

		window.addEventListener("DOMContentLoaded", () => {
			this.CalculateCharLimit();
			if(this.char_limit < this.content.length) {
				this.innerText = this.content.substring(0, this.char_limit) + "...";
			} else {
				this.innerText = this.content;
			}
		});
		

		window.addEventListener("resize", () => {
			this.CalculateCharLimit();
			if(this.char_limit < this.content.length) {
				this.innerText = this.content.substring(0, this.char_limit) + "...";
			} else {
				this.innerText = this.content;
			}
		});


	}

	CalculateCharLimit() {
		var style = window.getComputedStyle(this, null).getPropertyValue('font-size');
		this.char_limit = (this.parentElement.offsetHeight * this.parentElement.offsetWidth / (parseFloat(style)*((parseFloat(style)*0.55))));
	}
}

customElements.define("limited-text", LimitedText);