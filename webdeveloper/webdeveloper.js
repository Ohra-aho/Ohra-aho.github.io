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