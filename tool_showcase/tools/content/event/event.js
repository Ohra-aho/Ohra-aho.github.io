//Requires 
// - row component
// - text-column component
// - Popup component
// Requires popup style sheet

const event_template = document.createElement("template");
event_template.innerHTML = 
`
	<event-content>
		<text-editor></text-editor>
	</event-content>
	<button></button>
`

class Event extends HTMLElement { 
	og_content
	image
	title //Jotain täytyy keksiä tähän
	full_content
	splitter
	constructor() {
		super();
	}

	connectedCallback() { 
		let event = event_template.content.cloneNode(true);
		let full_event = this.querySelector("full-event");
		if(full_event != null) {
			this.full_content = full_event.innerText;
			full_event.remove();
		}
		const language_changer = this.querySelector("language-changer");
		if(language_changer != null) language_changer.remove();

		//Get content
		const custom = this.getAttribute("custom-event");
		const date = this.getAttribute("date");
		const time = this.getAttribute("time");
		this.image = this.parentElement.parentElement.getAttribute("image") ?? this.getAttribute("image");
		this.title = this.parentElement.parentElement.getAttribute("title") ?? this.getAttribute("title");
		this.splitter = this.getAttribute("splitter") ?? "$";

		this.og_content = this.innerHTML;
		this.innerHTML = "";

		//Place content

		let link = event.children[1];
		link.addEventListener("click", () => {
			this.DisplayFullEvent();
		});
		link.innerHTML = this.getAttribute("button-label") ?? "Lisää &#8594;";

		if(custom) {
			event.querySelector("p").remove();
			event.querySelector("event-content").innerHTML += this.og_content ?? "";
		} else {
			this.classList.add("normal-event")
			event.querySelector("text-editor").innerHTML = this.og_content ?? "";
		}

		if(date != null) {
			let row = document.createElement("row");
			let title = document.createElement("h4");
			let date_dis = document.createElement("time");
			title.innerText = this.getAttribute("date-label") ?? "PVM:";
			//date_dis.setAttribute("datetime", date); //Tarvii muuttaa
			date_dis.innerText = date;

			row.appendChild(title);
			row.appendChild(date_dis);
			this.appendChild(row);
		} 

		if(time != null) {
			let row = document.createElement("row");
			let title = document.createElement("h4");
			let time_dis = document.createElement("time");
			title.innerText = this.getAttribute("time-label") ?? "KLO:";
			//time_dis.setAttribute("datetime", time); //Tarvii muuttaa. Ei toimi yleisimmillä ajan kirjotustavoilla
			time_dis.innerText = time;

			row.appendChild(title);
			row.appendChild(time_dis);
			this.appendChild(row);
		}

		this.appendChild(event);
		this.appendChild(full_event)
		if(language_changer != null) this.appendChild(language_changer);

		this.querySelector("full-event").setAttribute("title", this.title);
	
		//this.querySelector("language-changer").Inisiate();

		let text_editor = this.querySelector("text-editor");
		text_editor.splitter = this.splitter;
		text_editor.Inisiate();
		this.setAttribute("custom", "Y");
	}

	DisplayFullEvent() {
		let full_event = this.querySelector("full-event")
		full_event.media = this.image ?? "";
		full_event.date = this.getAttribute("date");
		full_event.time = this.getAttribute("time");
		full_event.splitter = this.splitter;
		this.querySelector("full-event").Inisiate();
	}

	//2001-12-20
	MakeDate(date) {
		let split_date = [];
		let true_date = "";

		if(date.includes(".")) split_date = date.split(".");
		else if(date.includes(" ")) split_date = date.split(" ");

		for(let i = 0; i < split_date.length; i++) {
			if(split_date[i].length >= 1 && split_date[i].length < 4) {
				true_date += split_date
			}
		}

	}

	MakeTime(time) {

	}

	//Language functions
	ChangeLanguage(LC) {
		//Change text-editor
		this.querySelector("text-editor").remove();
		let text_editor = document.createElement("text-editor");
		text_editor.innerHTML = LC.text;
		text_editor.splitter = this.splitter;
		this.querySelector("event-content").appendChild(text_editor);
		this.querySelector("text-editor").Inisiate();

		//Change labels
		let date_time = this.querySelectorAll("h4");
		date_time[0].innerText = LC.attributes.get("date-label");
		date_time[1].innerText = LC.attributes.get("time-label");
		this.querySelector("button").innerHTML = LC.attributes.get("button-label");
	}

	GiveBaseLanguage() {
		let language = new LanguageOption("", this.og_content);
		language.attributes.set("date-label", this.getAttribute("date-label") ?? "PVM:");
		language.attributes.set("time-label", this.getAttribute("time-label") ?? "KLO:");
		language.attributes.set("button-label", this.getAttribute("button-label") ?? "Lisää &#8594;");
		language.attributes.set("title", this.title);
		return language;
	}
}


//Full content
const full_event_template = document.createElement("template");
full_event_template.innerHTML = 
`
<full-event-content>
	
</full-event-content>
`

class FullEvent extends HTMLElement { 
	og_content
	media
	date
	time
	splitter

	constructor() {
		super();
	}

	connectedCallback() { 
		this.og_content = this.innerHTML;
		this.setAttribute("custom", "Y");
	}

	Inisiate() {
		let popup = document.createElement("full-screen-popup");
		let event = full_event_template.content.cloneNode(true);

		// Add media
		if(this.media != null) {
			let new_media = document.createElement("img");
			new_media.src = this.media;
			event.children[0].appendChild(new_media);
		}

		//Add datetime
		if(this.date != null) {
			let row = document.createElement("row");
			let title = document.createElement("h4");
			let date_dis = document.createElement("time");
			title.innerText = this.getAttribute("date-label") ?? "PVM:";
			date_dis.setAttribute("datetime", this.date); //Tarvii muuttaa
			date_dis.innerText = this.date;

			row.appendChild(title);
			row.appendChild(date_dis);
			event.children[0].appendChild(row);
		} 

		if(this.time != null) {
			let row = document.createElement("row");
			let title = document.createElement("h4");
			let time_dis = document.createElement("time");
			title.innerText = this.getAttribute("time-label") ?? "KLO:";
			time_dis.setAttribute("datetime", this.time); //Tarvii muuttaa. Ei toimi yleisimmillä ajan kirjotustavoilla
			time_dis.innerText = this.time;

			row.appendChild(title);
			row.appendChild(time_dis);
			event.children[0].appendChild(row);
		}

		//Add text
		if(false) { //if custom
			//Worry about later
			//event.querySelector("p").remove();
			//event.querySelector("event-content").innerHTML += this.og_content ?? "";
		} else {
			this.classList.add("normal-full-event")
			let text = document.createElement("text-column");
			text.innerHTML = this.og_content ?? "";

			text.setAttribute("static", "true");
			text.setAttribute("title", this.getAttribute("title"));
			text.setAttribute("splitter", this.splitter);

			event.children[0].appendChild(text);
		}
		popup.appendChild(event);
		document.body.appendChild(popup);
	}

	ChangeLanguage(LC) {
		this.innerHTML = LC.text;
		this.setAttribute("date-label", LC.attributes.get("date-label"))
		this.setAttribute("time-label", LC.attributes.get("time-label"))
		this.setAttribute("title", LC.attributes.get("title"));
	}

	GiveBaseLanguage() {
		let language = new LanguageOption("", this.innerText);
		language.attributes.set("date-label", this.getAttribute("date-label") ?? "PVM:");
		language.attributes.set("time-label", this.getAttribute("time-label") ?? "KLO:");
		language.attributes.set("title", this.getAttribute("title") ?? "");
		return language;
	}
}


customElements.define("event-summary", Event);
customElements.define("full-event", FullEvent);