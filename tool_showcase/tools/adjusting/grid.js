
class GridGenerator extends HTMLElement { 
	narrow = 500;
	medium = 1030;
	wide = 1500;

	cell_height = 0;
	cell_width = 0;

	constructor() {
		super();
	}

	connectedCallback() {
		window.addEventListener("load", () => {this.CreateCells()})
		window.addEventListener("DOMContentLoaded", () => {this.CreateCells()})
		window.addEventListener("resize", () => { this.CreateCells(); });
	}

	CreateCells() {
		this.cell_width = this.children[0].offsetWidth;
		this.cell_height = this.children[0].offsetHeight;
		const parent_width = this.offsetWidth;
		const columns = Math.floor(parent_width / this.cell_width);
		const rows = Math.ceil(this.CalculateTrueChildCount() / columns);

		this.style = 
		`
			grid-template-rows: repeat(${rows}, auto);
			grid-template-columns: repeat(${columns}, auto);
		`;
	}

	CalculateTrueChildCount() {
		let child_count = this.children.length;
		for(let i = 0; i < this.children.length; i++) {
			if(this.children[i].nodeName == "LANGUAGE-CHANGER") {
				child_count--;
			}
		}
		return child_count;
	}
}

customElements.define("grid-generator", GridGenerator);