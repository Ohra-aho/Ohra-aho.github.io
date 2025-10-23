var current_index = 0;

const art = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.png",
	"10.png",
	"11.png",
	"12.jpg",
	"13.png"
];

function OpenFullScreen(index) {
	var full_screen = document.getElementById("full_screen");
	full_screen.style = "display: flex;";
	DisplayImage(index);
}

function CloseFullScreen() {
	var full_screen = document.getElementById("full_screen");
	full_screen.style = "display: none;";
}

function DisplayImage(index) {
	current_index = index;
	var image = document.getElementById("full_screen_image");
	image.src = "../media/images/art/"+art[index];
}

function ChangeImage(forward) {
	if(forward) {
		let i = current_index+1;
		if(i > art.length-1) {
			i = 0;
		}
		current_index = i;
		DisplayImage(i);
	} else
	{
		let i = current_index-1;
		if(i < 0) {
			i = art.length-1;
		}
		current_index = i;
		DisplayImage(i);
	}
}

const english_content = [
	"&#8592 Back",
	"2D artist",
	"I draw from time to time. Mostly black and white cartoonish style, but sometimes I make colored works."
];

const finnish_content = [
	"&#8592 Takaisin",
	"2D-artisti",
	"Piirtelen epäsäännöllisesti. Pääasiassa sarjakuvamaisella tyylillä ja ilman värejä, mutta joskus innostun tekemään väritöitäkin."
];

function ShowContent() {
	let current_language = window.sessionStorage.getItem("language");
	let temp = [];
	if(current_language == undefined || current_language == null) {
		current_language = "suomi";
	}
	switch(current_language) {
		case "englanti": temp = english_content; break;
		case "suomi": temp = finnish_content; break;
	}

	let header = document.getElementById("header");
	let intro = document.getElementById("intro");

	header.children[0].children[0].innerHTML = temp[0];
	header.children[1].innerHTML = temp[1];
	intro.children[0].innerHTML = temp[2];
}