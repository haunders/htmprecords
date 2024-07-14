document.addEventListener('DOMContentLoaded', function () {
	new Zooming({
		bgColor: "#000",
		bgOpacity: 0.9,
		enableGrab: false,
	}).listen('.cover')
})