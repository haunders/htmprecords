document.title = document.getElementById("album_name").textContent;
document.addEventListener('DOMContentLoaded', function () {
	new Zooming({
		bgColor: "#000",
		bgOpacity: 0.9,
		enableGrab: false,
	}).listen('.cover')
})