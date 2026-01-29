
const content = [
	["C#", "Tutuin kieleni. Käytän sitä hyvin usein pelejä tehdessäni."],
	["html, css/scss, JavaScript", "Olen oppinut käyttämään näitä aka hyvin viimeisimmän projektini: Nettisivutyökalut, kanssa."],
	["TypeScript", "Tuli tutuksi opintojen aikana. Ihan kätevä, mutta ei ole tullut sittemmin tarvetta."],
	["C++", "Ensimmäinen koodikieleni. Joku sanoi internetissä että siitä on hyvä aloittaa jos haluaa pelejä tehdä. Oli Python helppoa sen jälkeen."],
	["Node.js", "Toinen suurista tuttavuuksista Casamedialla ollessani. Pääasiallisin taustajärjestelmätyökaluni. Osaan tätä siinä missä JavaScriptiä."],
	["Git", "Tulee käytettyä lähes kaikkien projektien kanssa."],
	["Microsoft Office", "Osaan perus triolla vippaskonsteja ja ongelmatilanteissa tiedän sen verran, että osaan kysyä oikeita kysymyksiä. Exceliä tulee käytettyä ihan arjen budjetoinnissa ja pelinkehityksen apuna."],
	["Flutter, Dart", "Käytin näitä Casamedialla ollessani. On hetki kun olen käyttänyt, mutta huono en ole. Aloitin aivan ummikkona, mutta kun sopimus oli lopuillaan niin vastuullani oli erillisen tekstaussovelluksen kehittäminen."],
	["Unity", "Lähes ainoa pelimoottori jota käytän. 2D puolella osaan asiani. Muuten olen tuttu perusasioiden ja hieman monimutkaisempienkin juttujen kanssa. Selviän useimmista ongelmista."],
	["Android Studio", "Tuli opintojen aikana tehtyä säätä seuraava kännykkäaplikaatio. Tällä hetkellä en ilman nettiä selviäisi projektista, mutta vanhoja tuttuja ollaan."],
	["Python", "Joskus yritin tehdä tällä pelejä. Fysiikkamoottorin kohdalla meni mielenkiinto."],
	["Godot", "Olen tätä itsenäisesti ja ystävän kanssa pyöritellyt. Pieniä projekteja ja homma vielä vähän hakusessa."],
	["Audacity", "Päätyökalu pelieni audiomaailman luomisessa. Teidän tarpeeksi selviytyäkseni perus trimmaamisesta, korjailusta ja ääniefektien kasaamisesta."],
	["Blender", "Olen jonkin verran mallintanut ja animoinut. Joko muuten vain tai malleja peleihini. Olen tykästynyt low-poly-tyyliin."],
	["Web-komponentit", "Osa Nettisivutyökaluprojektiani. Vielä lapsen kengissä, mutta olen jo tehnyt liudan käteviä komponentteja."]
];

const english_content = [
	["C#", "My most familiar language. I use it very often while making games."],
	["html, css/scss, JavaScript", "Due to my most recent project: Web site tools, I have become rather adept with these."],
	["TypeScript", "This became familiar during my studies. Rather handy, but I have not had use for it since"],
	["C++", "My first code language. Someone said on the internet, that it would be good to start with, if one wants to make games. Python was pretty easy after that."],
	["Node.js", "Another one of the main tools while working for Casamedia. My go-to for back end. I can use it as well as JavaScript."],
	["Git", "I use this with almost every project."],
	["Microsoft Office", "I know tricks with main trio and when problems come up, I know to ask the right questions. I use Excel to aid with budjeting and game development."],
	["Flutter, Dart", "I used these while working for Casamedia. It has been a while, but I am not bad at it. I started without knowing much, but when my time there was at its end, I was in charge of the development of separate texting app."],
	["Unity", "Basically the only game engine I use. With 2D, I know what I'm doing. Otherwise I know my way around with basics and also more complex stuff. I can solve most problems."],
	["Android Studio", "I made weather app during my studies with this. We are old pals but a little distant."],
	["Python", "I tried to make games with this. Got tired during physics simulations."],
	["Godot", "I have dabbled with this alone and with a friend. Small projects and still a little dirty."],
	["Audacity", "The main tool for creating sound scapes for my games. I know enough to manage trimming, fixing and pasic effects."],
	["Blender", "I have done a little modeling and animation. Either just for fun or for my game projects. I have grown a liking for low-poly style."],
	["Web components", "Part of my Web site tools project. Still taking baby steps, but I have already made a butch of handy components."]
];

function ShowInfo(index) {
	const grid = document.getElementById("skill_grid");

	for(let i = 0; i < grid.children.length; i++) {
		if(grid.children[i].children[1].classList.contains("visible") && i != index) {
			grid.children[i].children[1].classList.toggle("visible");
			break;
		}
	}

	grid.children[index].children[1].classList.toggle("visible");
}

function DisplayGridContent() {
	let current_language = window.sessionStorage.getItem("language");
	let temp = [];
	if(current_language == undefined || current_language == null) {
		current_language = "suomi";
	}
	switch(current_language) {
		case "englanti": temp = english_content; break;
		case "suomi": temp = content; break;
	}

	const grid = document.getElementById("skill_grid");
	for(let i = 0; i < temp.length; i++) {
		var skill = document.createElement("div");
		skill.classList.add("skill");
		skill.id = "s"+i+1;
		skill.addEventListener("click", () => {ShowInfo(i)});

		const title = document.createElement("p");
		title.innerHTML = temp[i][0];

		const info = document.createElement("div");
		info.classList.add("info");

		var text = document.createElement("p");
		text.innerHTML = temp[i][1];
		info.appendChild(text);

		skill.appendChild(title);
		skill.appendChild(info);

		grid.appendChild(skill);
	}
}