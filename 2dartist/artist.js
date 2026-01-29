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