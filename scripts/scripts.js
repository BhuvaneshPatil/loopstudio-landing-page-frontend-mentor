const navButton = document.querySelector("#ham-menu");
const navCloseButton = document.querySelector("#close-menu");
const navMenu = document.querySelector(".nav-menu-desktop");
let init = true;
navButton.addEventListener("click", () => {
	navMenu.classList.add("active");
	navCloseButton.classList.remove("hide");
	navButton.classList.add("hide");
});
navCloseButton.addEventListener("click", () => {
	navMenu.classList.remove("active");
	navCloseButton.classList.add("hide");
	navButton.classList.remove("hide");
});
if (window.innerHeight < 720) {
	const navLinks = document.querySelectorAll("nav .nav-menu-desktop-link");
	navLinks.forEach((item) => {
		item.addEventListener("click", () => {
			navMenu.classList.remove("active");
			navCloseButton.classList.add("hide");
			navButton.classList.remove("hide");
		});
	});
}
