let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
	page.classList.toggle('light-theme');
	page.classList.toggle('dark-theme');
	document.getElementById("text0").innerHTML="kriva, сделаешь бг?";
};