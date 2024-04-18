const tabsContainer = document.querySelector('.tabs');
const tabsList = tabsContainer.querySelector('.tabs-menu');
const tabButtons = tabsList.querySelectorAll('a');
const tabLabels = tabsList.querySelectorAll('.label');
const tabPanels = tabsContainer.querySelectorAll('.panel > div')

switchTab(document.querySelector('#tab-1'), document.querySelector('#lab-1'));
tabButtons.forEach((tab, index) => {
	if (index === 0) {

	} else {
		tabPanels[index].setAttribute('hidden', '');
	}
});

tabsList.addEventListener("click", (e) => {
	const clickedTab = e.target.closest("a");
	const clickedLabel = e.target.closest(".label");
	if (!clickedTab) return;
	e.preventDefault();
	switchTab(clickedTab, clickedLabel);
})

function switchTab(newTab, newLabel) {
	const activePanelId = newTab.getAttribute("href");
	const activePanel = tabsContainer.querySelector(activePanelId);
	tabPanels.forEach((panel) => {
		$(panel).hide();
	});
	$(activePanel).show();
	clearLabels();
	$(newLabel).css("background", "#292929");
}

function clearLabels() {
	tabLabels.forEach((label) => {
		$(label).css("background", "#1f1f1f");
	});
}
