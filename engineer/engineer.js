
const content = [
	["C#", "Tutuin kieleni. Käytän sitä hyvin usein pelejä tehdessäni."],
	["html, css/scss, JavaScript", "Nämä sivut on tehty näillä työkaluilla. Hieman ruosteessa olen, mutta hommat sujuu."],
	["TypeScript", "Tuli tutuksi opintojen aikana, mutta ei ole sittemmin ollut tarvetta. Muistan tosin pitäneeni siitä."],
	["C++", "Ensimmäinen koodikieleni. Joku sanoi internetissä että siitä on hyvä aloittaa jos haluaa pelejä tehdä. Oli Python helppoa sen jälkeen."],
	["Node.js", "Toinen suurista tuttavuuksista Casamedialla ollessani. Pääasiallisin taustajärjestelmätyökaluni. Osaan tätä siinä missä JavaScriptiä."],
	["Git", "Tulee käytettyä lähes kaikkien projektien kanssa."],
	["Microsoft Office", "Osaan perus triolla vippaskonsteja ja ongelmatilanteissa tiedän sen verran, että osaan kysyä oikeita kysymyksiä. Exceliä tulee käytettyä ihan arjen budjetoinnissa ja pelinkehityksen apuna."],
	["Flutter, Dart", "Käytin näitä Casamedialla ollessani. On hetki kun olen käyttänyt, mutta huono en ole. Aloitin aivan ummikkona, mutta kun sopimus oli lopuillaan niin vastuullani oli erillisen tekstaussovelluksen kehittäminen."],
	["Unity", "Lähes ainoa pelimoottori jota käytän. 2D puolella osaan asiani. Muuten olen tuttu perusasioiden ja hieman monimutkaisempienkin juttujen kanssa. Selviän useimmista ongelmista."],
	["Android Studio", "Tuli opintojen aikana tehtyä säätä seuraava kännykkäaplikaatio. Tällä hetkellä en ilman nettiä selviäisi projektista, mutta vanhoja tuttuja ollaan."],
	["Python", "Joskus yritin tälläkin pelejä tehdä. Fysiikkamoottorin kohdalla meni mielenkiinto."],
	["Godot", "Olen tätä itsenäisesti ja ystävän kanssa pyöritellyt. Pieniä projekteja ja homma vielä vähän hakusessa."],
	["Gimp", "Oli hyvin yleinen työkalu opintojen aikana. Nykyään käytän enemmän piirto-ohjelmia, mutta käytän tätäkin joskus viimeistelemään töitäni."],
	["Audacity", "Päätyökalu pelieni audiomaailman luomisessa. Teidän tarpeeksi selviytyäkseni perus trimmaamisesta, korjailusta ja ääniefektien kasaamisesta."],
	["Blender", "Useampi kurssi on tätä käyty mallinnuksesta animoimiseen. Olen jonkin verran myös mallintanut hahmoja muuten vaan tai kohteita peleihini. Olen tykästynyt low-poly-tyyliin."],
	["Angular", "Opiskelin tätä useampia kursseja. Sittemmin ei ole tullut tälle käyttöä. Pienellä totuttelulla saisin taas hommasta kiinni."],
	["React", "Flutter:in jälkeen ehkä yksi mielityökaluistani käyttöliittymän puolella. Tosin en ole päässyt taitoja hyödyntämään opintojen ulkopuolella, joten vaatisi uudelleen opetelua."],
];

const english_content = [
	["C#", "My most familiar language. I use it very often while making games."],
	["html, css/scss, JavaScript", "This site is made with these tools. I am a bit rusty, but I can make things work."],
	["TypeScript", "This became familiar during my studies, but there has not been much use for it since. I remember liking it tho."],
	["C++", "My first code language. Someone said on the internet, that it would be good to start with, if one wants to make games. Python was pretty easy after that."],
	["Node.js", "Another one of the main tools while working for Casamedia. My go-to for back ends. I can use it as well as JavaScript."],
	["Git", "I use this with almost every project."],
	["Microsoft Office", "I know tricks with main trio and when problems come up, I know to ask the right questions. I use Excel to aid with budjeting and game development."],
	["Flutter, Dart", "I used these while working for Casamedia. It has been a while, but I am not bad at it. I started without knowing much, but when my time there was at its end, I was in charge of the development of separate texting app."],
	["Unity", "Basically the only game engine I use. With 2D, I know what I'm doing. Otherwise I know my way around with basics and also more complex stuff. I can solve most problems."],
	["Android Studio", "I made weather app during my studies with this. We are old pals but a little distant."],
	["Python", "I tried to make games with this as well. Got tired during physics simulations."],
	["Godot", "I have dabbled with this alone and with a friend. Small projects and still a little dirty."],
	["Gimp", "I used this often during my studies. Nowadays I use drawing programs more, but I still sometimes use this to finish my works."],
	["Audacity", "The main tool for creating sound scapes for my games. I know enough to manage trimming, fixing and pasic effects."],
	["Blender", "I have done few courses on this from modeling to animation. I have also dome some modeling for fun and for my game projects. I have grown a liking for low-poly style"],
	["Angular", "I have dome many courses on this. Haven't used this much since. With little practice I could get a hang of it still."],
	["React", "One of my favourite UI tools after Flutter. Altho haven't got an opportunity to use it outside studies."],
];

const finnish_intro = [
	"Mediatekniikan insinööri",
	"Valitsin mediatekniikan koska haaveilen urasta pelialalla ja siellä niitä kursseja oli. Peliohjelmointia ja niin edelleen. Niiden lisäksi tuli myös opeteltua kaikenlaista muutakin, kunten ohjelmointia aivan liian monella kielellä ja työkalulla, kuvan ja äänen käsittelyä, 3D-mallinnusta, ohjelmistokehityksen teoriaa ja yleisiä toimisto-ohjelmia kuten Excel:iä. Jos minä jotain opin niin sen miten omaksua uusia ohjelmia ja alani osa-alueita.",
	"Opinnäytetyö",
	"Mitä osaan",
	"IT-insinööri",
	"&#8592 Takaisin"
];

const english_intro = [
	"Engineer of media technology",
	"I chose this, because I dream of a career in game development and there were the courses. Game programming and such. In addition I studied the whole lot of other things, such programming in too many languages and tools, photo and audio editing, 3D-modeling, software development theory and common office programs such as Excel. if I learned anything, then how to adapt to new tools and tasks.",
	"Thesis",
	"What I know",
	"IT engineer",
	"&#8592 Back"
];

const finnish_job_template = [
	"Työnantaja",
	"Ajanjakso",
	"Työtehtävät"
];

const english_job_template = [
	"Employer",
	"Duration",
	"Tasks"
];

const finnish_jobs = [
	[
		"Web kehittäjä",
		"Joinplay games",
		"Suunnittelin ja ohjelmoin nettisivuja työnantajani uuden tuotteen mainostamista varten. Vastuullani oli sivujen visuaalinen ilme ja toiminnallisuudet. Työkaluina olivat PHP, scss ja JavaScript."
	],
	[
		"Flutter kehittäjä",
		"Casamedia Ky",
		"Suunnittelin ja kehitin käyttöliittymään uusia komponentteja ja toiminnallisuuksia. Yhdistin tuotokseni taustajärjestelmään ja suoritin testauksia ja virheen korjauksia. Käytössä olleet teknologiat olivat Flutter, ja NodeJS. Ohjelmointikielinä Dart ja JavaScript. Tietokannassa käytettiin MongoDB:tä."
	],
	[
		"Pelinkehittäjä",
		"Minä, kevytyrittäjänä",
		"Suunnittelin, ohjelmoin ja julkaisin oman pelidemon. Vastasin kaikesta mekaniikkojen suunnittelusta äänisuunnitteluun. Pelimoottorina toimi Unity, kielenä C#. Audiovisuaalinen puoli hoidettiin Audacitylla ja Kritalla."
	]
]

const english_jobs = [
	[
		"Web developer",
		"Joinplay games",
		"I designed and developed a website for advertising my employer’s upcoming game. I made everything from the visual arrangements to functionalities. Tools used were PHP, scss and JavaScript."
	],
	[
		"Flutter developer",
		"Casamedia Ky",
		"I desingend and programmed new components and functionalities for the UI. I connected my creations to the Back End and performed testing and bug fixes."
	],
	[
		"Pelinkehittäjä",
		"Minä, kevytyrittäjänä",
		"I designed, programmed and published my own game demo. I answered in everything from mechanics to sound design. I used Unity as the game engine and C# as the language. Audiovisual side was achieved with Audacity and Krita."
	]
]


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

function ShowIntro() {
	let intro_text = document.getElementById("text_box");
	let left = document.getElementById("left");
	let grid_container = document.getElementById("grid_container");
	let header = document.getElementById("header");

	let current_language = window.sessionStorage.getItem("language");
	let temp = [];
	switch(current_language) {
		case "englanti": temp = english_intro; break;
		case "suomi": temp = finnish_intro; break;
	}

	intro_text.children[0].innerHTML = temp[0];
	intro_text.children[1].innerHTML = temp[1];
	left.children[1].children[0].children[0].innerHTML = temp[2];
	grid_container.children[0].innerHTML = temp[3];
	header.children[1].innerHTML = temp[4];
	header.children[0].children[0].innerHTML = temp[5];
}

function ShowJobs() {
	let current_language = window.sessionStorage.getItem("language");
	let temp_template = [];
	let temp = [];

	switch(current_language) {
		case "englanti": 
			temp_template = english_job_template;
			temp = english_jobs;
			break;
		case "suomi": 
			temp_template = finnish_job_template; 
			temp = finnish_jobs;
			break;
	}

	let jobs = document.getElementsByClassName("job");
	
	for(let i = 0; i < jobs.length; i++) {
		jobs[i].children[0].innerHTML = temp[i][0];
		jobs[i].children[1].children[1].innerHTML = temp[i][1];
		jobs[i].children[4].innerHTML = temp[i][2];

		jobs[i].children[1].children[0].innerHTML = temp_template[0];
		jobs[i].children[2].children[0].innerHTML = temp_template[1];
		jobs[i].children[3].innerHTML = temp_template[2];
	}
}