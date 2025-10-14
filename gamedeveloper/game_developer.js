

function PlayAudio(index, id) {
	const media = document.getElementById("media_"+id);
	if(media.children[index].currentTime > 0) {
		media.children[index].currentTime = 0;
		media.children[index].pause();
	} else {
		media.children[index].volume = 0.4;
		media.children[index].play();
	}
}

const takaisin = [
	"&#8592 Takaisin",
	"&#8592 Back"
];

const english_content = [
	"Game developer",
	"I make games as a hoddy. Unity is the game engine, which I am the most familiar with, but I have also daggled a little with Godot. Seawall demo is the only product I have published, but Rock, Paper and Guillotine is comming.",
	
	"Seawall is dark strategy game set to postapocalyptic world. Player takes a role of a wall captain and protects humanity from slithering monsters at the bottom of dry ocean. There is survival horror in store in unique setting against a unique foe.",
	"The Game &#8594;",
	"Still under development. Project started from boring sunday, when I coded simple rock-paper-scissors game. I started to make a small upgrades to it and won it is a rogue-like game, where player fights for their life in deadly rock-paper-scissors games. This has been very fun game development challenge. How to make such a simple game interesting.",
];

const finnish_content = [
	"Pelinkehittäjä",
	"Teen pelejä harrastuksena. Unity on pelimoottori, jota parhaiten osaan, mutta olen myös jonkin verran tutkaillut Godottia. Seawall demo on ainoa tuote, jonka olen tähän mennessä julkaissut, mutta Rock, Paper and Guillotine on tulossa.",
	
	"Seawall on synkkä, maailmanlopun jälkeiseen aikaan sijoittuva strategiapeli. Pelaaja ottaa muurikapteenin roolin ja puolustaa ihmiskuntaa kuivuneen meren pohjalta ryömivien epäsikiöiden hyökkäykseltä. Luvassa on selviytymiskauhua ainutlaatuisessa ympäristössä, ainutlaatuista vihollista vastaan.",
	"Pelin Sivut &#8594;",
	"Vielä tekeillä oleva tuotos. Projekti lähti tylsästä sunnuntaista kun huvikseni koodasin kivi-paperi-sakset-pelin. Aloin hiljalleen viedä tekelettä eteenpäin ja nyt se on rogue-like peli, jossa pelaaja taistelee hengestään tappavissa kivi-paperi-sakset peleissä. Tämä on ollut erittäin hauska pelisuunnittelun haaste. Miten saada näin yksinkertaisesta pelistä mieleniintoista.",
];

function ShowContent() {
	let header = document.getElementById("header");
	let intro = document.getElementById("intro");
	let info = document.getElementsByClassName("i");

	let current_language = window.sessionStorage.getItem("language");
	let temp = [];
	switch(current_language) {
		case "englanti": 
			temp = english_content; 
			header.children[0].children[0].innerHTML = takaisin[1];
			break;
		case "suomi": 
			temp = finnish_content;
			header.children[0].children[0].innerHTML = takaisin[0];
			break;
	}

	header.children[1].innerHTML = temp[0];
	intro.children[0].innerHTML = temp[1];
	
	for(let i = 0; i < info.length; i++) {
		if(i == 0) {
			info[i].children[1].innerHTML = temp[i+2];
			info[i].children[2].innerHTML = temp[i+3];
		}else {
			info[i].children[1].innerHTML = temp[i+3];
		}
	}
}