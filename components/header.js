const header = /*html*/ `<header id="header">
			<div class="header-content">
				<div onclick="closeNav()" id="behind-navigation-links"></div>
				<a href="/" class="logo-link">
					<img
					src="/assets/img/white_logo.png"
						alt="Brendan's Logo"
						id="logo"
					/>
				</a>
				<div id="navigation-links">
				<a href="#projects">
						<p>Projects</p>
					</a>
					<a href="https://medium.com/@brendanprobst">
						<p>Blog</p>
					</a>
					
					<a href="#about-me">
						<p>About Me</p>
					</a>
					
					
				</div>
				<button class="menu" id="menu-btn" onclick="toggleNav()">
					<i class="material-icons">menu</i>
				</button>
				<div class="buttons">
					<a href="mailto:bprobst@quae.app">
						<button class="white"><p>Get In Touch</p></button>
					</a>
					
				</div>
			</div>
		</header>`;
function renderHeader() {
	const placeholder = document.querySelector("#header-placeholder");
	placeholder.innerHTML = header;
}
renderHeader();
var navVisible = false;
function toggleNav() {
	if (navVisible) {
		closeNav();
	} else showNav();
}
function showNav() {
	navVisible = true;
	document.getElementById("navigation-links").style.display = "block";
	document.getElementById("behind-navigation-links").style.display = "block";
}
function closeNav() {
	navVisible = false;
	document.getElementById("behind-navigation-links").style.display = "none";
	document.getElementById("navigation-links").style.display = "none";
}

// (function () {
// 	const socialIcons = [
// 		{
// 			icon: <GitHubIcon />,
// 			destination: "https://github.com/brendanprobst",
// 		},

// 		{
// 			icon: <InstagramIcon />,
// 			destination: "https://www.instagram.com/bprobst_13/",
// 		},
// 	];
// 	for (icon of socialIcons) {
// 		var icon = document.createElement("img");
// 	}
// })();
