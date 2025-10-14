var current_index = 0;
var current_extension = "";

const amma = [
	"home_page.jpg",
	"feature_page.jpg",
	"one feature.jpg",
	"community page.jpg",
	"contact.jpg",
	"devlog.jpg",
	"devlog detail.jpg"
];

const WoN = [
	"WoN 3.jpg",
	"WoN 2.jpg",
	"WoN 4.jpg"
];

function OpenFullScreen(index, extension) {
	let full_screen = document.getElementById("full_screen");
	full_screen.style = "display: flex;";
	current_extension = extension;
	DisplayImage(index);
}

function CloseFullScreen() {
	let full_screen = document.getElementById("full_screen");
	full_screen.style = "display: none;";
}

function DisplayImage(index) {
	current_index = index;
	var image = document.getElementById("full_screen_image");
	console.log(amma[index]+" "+index);
	switch(current_extension) {
		case "amma":
			image.src = "../media/images/"+current_extension+"/"+amma[index];
			break;
		case "WoN":
			image.src = "../media/images/"+current_extension+"/"+WoN[index];
			break;
	}	
}

function ChangeImage(forward) {
	if(forward) {
		let i = current_index+1;
		i = CheckOverIndex(current_extension, i);
		current_index = i;
		DisplayImage(i, current_extension);
	} else
	{
		let i = current_index-1;
		i = CheckOverIndex(current_extension, i);
		current_index = i;
		DisplayImage(i, current_extension);
	}
}

function CheckOverIndex(extension, i) {
	switch(extension) {
		case "amma": 
			if(i > amma.length-1) return 0;
			else if(i < 0) return amma.length-1;
			return i;
		case "WoN":
			if(i > WoN.length-1) return 0;
			else if(i < 0) return WoN.length-1;
			return i;
	}
}

const english_content = [
	"&#8592 Back",
	"Web developer",
	"I made this site. Html+JavaScript+scss. Below can be seen my other creations outside these tools.",
	[
		"Amma: ColS web site",
		"My last project using PHP was a web site for Joinplay Games Studios. They needed site for advertising their upcomming game. (Amma: Chronicles of lost Stars) My job included sites visual expression and functionalities. Later I implemented contacting system and loading system for sites content to make editing easier.",
	],
	[
		"Weather or Not",
		"Fully functional weather app, which I made for one of my courses. Not exactly a web app, but it utilizes data from certain web site. It can give weather info according to users location, either in real time or for the seven upcomming days. More detailed information of those days can also be inspected." 
	]
];

const finnish_content = [
	"&#8592 Takaisin",
	"Web-kehittäjä",
	"Tämä sivusto on minun tekemäni. Html+JavaScrip+scss. Alla esimerkkejä siitä, mitä olen tehnyt näiden ulkopuolella.",

	[
		"Amma: ColS nettisivut",
		"Viimeisin projektini PHP:llä oli nettisivut Joinplay Games Studios:sille. He tarvitsivat sivut tulevan pelinsä (Amma: Chronicles of lost Stars) mainostamiseen. Projektiin liittyi sivuston visuaalisen ilmeen toteuttaminen ja sivuston toiminnalliseuudet. Myöhemmin toteutin myös yhteydenottosysteemin ja sivujen sisällön lataamisen erikseen taustajärjestelmästä editoinnin helpottamiseksi.",
	],
	
	[
		"Weather or Not",
		"Toimiva sääsovellus, jonka tein yhden kurssini lopputyönä. Ei varsinaisesti ole web-sovellus, mutta hyödyntää erään nettisivun dataa toimiakseen. Kykenee antamaan säätietoja käyttäjän nykyisen olinpaikan perusteella, joko reaaliaikaisesti tai seuraavan seitsemän päivän ajalta. Noiden päivien säätiedoja voidaan myös tarkastella tarkemmin."
	]
];

function ShowContent() {
	let header = document.getElementById("header");
	let intro = document.getElementById("intro");
	let sections = document.getElementsByClassName("section");

	let current_language = window.sessionStorage.getItem("language");
	let temp = [];
	switch(current_language) {
		case "englanti": temp = english_content; break;
		case "suomi": temp = finnish_content; break;
	}
	
	header.children[1].innerHTML = temp[1];
	header.children[0].children[0].innerHTML = temp[0];
	intro.children[0].innerHTML = temp[2];
	
	for(let i = 0; i < sections.length; i++) {
		sections[i].children[0].children[0].innerHTML = temp[i+3][0];
		sections[i].children[0].children[1].innerHTML = temp[i+3][1];
	}
}
