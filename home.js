
const finnish_text = [
	//header
	["IT-insinööri", "Web-kehittäjä", "Pelinkehittäjä", "2D-artisti", "Suomi"],
	//intros
	[
		"Olen Panu Ohra-aho ja olen IT-insinööri. Kirjoitan koneella kummallista kieltä, joka saa koneet tekemään mitä haluan. Ainakin toisinaan kone ja minä ymmärrämme toisiamme, mutta toisinaan emme. Tämän sivuston kohdalla kone ymmärsi mitä tarkoitin. Sivut ovat olemassa kertoakseen, millainen insinööri minä olen. Tervetuloa.",
		"Tarkemmalta suuntautumiseltani olen mediatekniikan insinööri. Web kehitystä, pelinkehitystä, mobiilikehitystä, jonkun verran AR teknologiaa ja audiovisuaalista suunnittelua. Parhaiten pärjään käyttöliittymien puolella, mutta taustajärjestelmät ovat myös tulleet tutuiksi.",
		"Tähän opintoni painottuivat ja tätä olen eniten päässyt tekemään. Työkaluja on hyvässä muistissa muutama, mutta olen käyttänyt aika monia muitakin. Perus html totta kai, mukana PHP, hitusen React:ia, Angular:ia ja Flutter:ia. PHP:n lisäksi taustajärjestelmissä on käytetty Node.js:sää.",
		"Tämä on rakkaimpia harrastuksiani. Tein lapsena lauta- ja korttipelejä ja nykyään videopelejä. Yksi demo valmiina ja toinen kokonainen peli tulossa. Tämä harrastus on tuonut mielestäni parhaiten kaiken osaamiseni kokoon. Visuaalinen puoli yhdistyy käyttöliittymäkehitykseen ja muuhun geneerisempää koodaamiseen.",
		"Piirrän aina toisinaan. Olen siinä melko hyvä, mitä tulee sarjakuvamaisiin hirviöihin tai muihin karikatyyrihahmoihin. Tarkimmat työni yleensä säätän pelejäni varten, mutta tulee myös tehtyä suurempia projekteja ihan vain tekemisen ilosta."
	],
	//Links
	["Lisää &#8594;"]
];

const english_text = [
	//header
	["IT engineer", "Web developer", "Game developer", "2D artist", "English"],
	//intros
	[
		"I am Panu Ohra-aho, and IT-engineer. I write strange language with a machine, that gets that machine to do what I want. At least sometimes that machine and and I understand each other. What comes to this site, machine understood me. This site exists to tell, what kind of engineer I am. Welcome.",
		"My specialisation is mediatechnology. Web development, game development, mobile development, some amount of AR technology and audiovisual design. I am most skilled with user interfaces, I am also familiar with back end.",
		"My studies focused to this and I have done it the most professionally. I have few toolsets in memory, but I have also worked with many others. I know html of course, but there is some PHP, Flutter, React and Angular. What comes to back end, I know Node.js as well as PHP.",
		"This is one of my dearest hobbies. As a child I made board- and card games and nowadays video games. One demo is done and another full game is comming. This hobby has brought together all of my skills. Visual side combines with UI design and more generic coding.",
		"I graw some times. I am quite good at it, what comes to cartoonish monsters or other exaturated characters. I put most effort to pieses meant for my games, but sometimes I make bigger projects just to make them."
	],
	//Links
	["More &#8594;"]
];

function ChangeLanguage() {
	let current_language = window.sessionStorage.getItem("language");
	let temp = [];
	switch(current_language) {
		case "englanti": temp = english_text; break;
		case "suomi": temp = finnish_text; break;
	}

	//Header
	let header_link_containers = document.getElementsByClassName("header_links");
	let header_links = [];

	for(let i = 0; i < header_link_containers.length; i++) {
		for(let j = 0; j < header_link_containers[i].children.length; j++) {
			header_links.push(header_link_containers[i].children[j])
		}
	}

	for(let i = 0; i < header_links.length; i++) {
		header_links[i].innerHTML = temp[0][i];
	}

	//intros
	let intro_text = [];
	intro_text.push(document.getElementById("intro").children[0]);
	let info_titles = [];
	let intro_infos = document.getElementsByClassName("info");

	//Change links
	for(let i = 0; i < intro_infos.length; i++) {
		intro_infos[i].children[2].innerHTML = temp[2][0];
	}
	//Collect titles and texts
	for(let i = 0; i < intro_infos.length; i++) {
		info_titles.push(intro_infos[i].children[0]);
		intro_text.push(intro_infos[i].children[1]);
	}
	//Change titles
	for(let i = 0; i < info_titles.length; i++) {
		info_titles[i].innerHTML = temp[0][i];
	}
	//Change texts
	for(let i = 0; i < intro_text.length; i++) {
		intro_text[i].innerHTML = temp[1][i];
	}
}