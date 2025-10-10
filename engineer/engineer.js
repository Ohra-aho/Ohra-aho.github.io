
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
	["Angular", "Opiskelin tätä useampia kursseja. Sittemmin ei ole tullut tälle käyttöä. On päässyt parhaimmat unohtumaan, mutta pienellä totuttelulla saisin taas hommasta kiinni."],
	["React", "Flutter:in jälkeen ehkä yksi mielityökaluistani käyttöliittymän puolella. Tosin en ole päässyt taitoja hyödyntämään opintojen ulkopuolella, joten vaatisi uudelleen opetelua."],
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
	const grid = document.getElementById("skill_grid");
	for(let i = 0; i < content.length; i++) {
		var skill = document.createElement("div");
		skill.classList.add("skill");
		skill.id = "s"+i+1;
		skill.addEventListener("click", () => {ShowInfo(i)});

		const title = document.createElement("p");
		title.innerHTML = content[i][0];

		const info = document.createElement("div");
		info.classList.add("info");

		var text = document.createElement("p");
		text.innerHTML = content[i][1];
		info.appendChild(text);

		skill.appendChild(title);
		skill.appendChild(info);

		grid.appendChild(skill);
	}
}