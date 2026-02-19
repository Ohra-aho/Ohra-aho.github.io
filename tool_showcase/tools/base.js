class BaseClass extends HTMLElement { 
	full_screen_content;
	language_changer;
	AddedInit
	constructor() {
		super();
	}

	connectedCallback() {
		this.Base();
	}

	Base() {
		if(this.parentElement.getAttribute("manual")) this.setAttribute("manual", "#");
		const manual = this.getAttribute("manual");
		if(manual == null) this.Inisiate();
		this.setAttribute("custom", "Y");
	}

	StartInit() {
		this.RemoveFullScreen();
		this.ActivateManualChildren();
	}

	EndInit() {
		this.AddFullScreen();
	}

	RemoveFullScreen() {
		this.full_screen_content = this.querySelector("full-screen");
		if(this.full_screen_content != null) {
			this.querySelector("full-screen").remove();

		 	this.language_changer = this.querySelector("language-changer");
			if(this.language_changer != null) {
				this.querySelector("language-changer").remove();
			}
		}
	}

	AddFullScreen() {
		if(this.full_screen_content != null) {
			this.appendChild(this.full_screen_content);
			if(this.language_changer != null) this.appendChild(this.language_changer);
			this.querySelector("full-screen").Inisiate();
		}
	}

	ActivateManualChildren() {
		this.removeAttribute("manual");
		for(let i = 0; i < this.children.length; i++) {
			if(this.children[i].getAttribute("manual") != null) {
				this.children[i].removeAttribute("manual");
			}
		}
	}

	Inisiate() {
		this.StartInit();

		this.AddedInit();

		this.EndInit();
	}
}