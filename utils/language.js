var current_language = "suomi";

function LoadLanguage() {
	let saved_language = window.sessionStorage.getItem("language");
	if(saved_language != null || saved_language != undefined) {
		current_language = saved_language;
	}
}

function SetNewLanguage() {
	switch(current_language) {
		case "suomi": current_language = "englanti"; break;
		case "englanti": current_language = "suomi"; break;
	}
	window.sessionStorage.setItem("language", current_language);
}

//export var current_language;