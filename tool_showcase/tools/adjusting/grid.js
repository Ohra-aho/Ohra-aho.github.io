
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
		window.addEventListener("DOMContentLoaded", () => {this.CreateCells()})
		window.addEventListener("resize", () => {
			this.CreateCells();
		});

	}

	CreateCells() {
		this.cell_width = this.children[0].offsetWidth;
		this.cell_height = this.children[0].offsetHeight;
		const parent_width = this.parentElement.offsetWidth;
		const columns = Math.floor(parent_width / this.cell_width);
		const rows = Math.floor(this.CalculateTrueChildCount() / columns);
		

		this.style = 
		`
			grid-template-rows: repeat(${rows}, ${this.cell_height}px);
			grid-template-columns: repeat(${columns}, ${this.cell_width}px);
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