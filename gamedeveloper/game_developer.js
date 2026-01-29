

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