function removeAll() {
	document.getElementById('chart').style.display = "none"
	document.getElementById('albums').style.display = "none"
	document.getElementById('ep').style.display = "none"
	document.getElementById('singles').style.display = "none"
	document.getElementById('part').style.display = "none"
	document.getElementById('bg').style.display = "none"
}
function changePage(select) {
	var i = select.options[select.selectedIndex];
	if (i.value == "Альбомы") {
		removeAll()
		document.getElementById('albums').style.display = "flex"
	}
	else if (i.value == "EP") {
		removeAll()
		document.getElementById('ep').style.display = "flex"
	}
	else if (i.value == "Синглы") {
		removeAll()
		document.getElementById('singles').style.display = "flex"
	}
	else if (i.value == "Участие в релизах") {
		removeAll()
		document.getElementById('part').style.display = "flex"
	}
	else if (i.value == "Популярные треки") {
		removeAll()
		document.getElementById('chart').style.display = "flex"
		document.getElementById('bg').style.display = "block"
	}
	else {
		removeAll()
	}
}