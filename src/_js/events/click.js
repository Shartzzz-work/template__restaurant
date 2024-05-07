document.addEventListener("click", (e) => {
	switch (true) {
		case e.target.hasAttribute("data-class-toggle"): {
			const toggleClass = e.target.dataset.classToggle;
			e.target.classList.toggle(toggleClass);
			break;
		}

		default:
			break;  
	}
});
