let toggles = document.querySelectorAll(".toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
	toggles[i].addEventListener("click", () => {
		if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
			contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
			icons[i].classList.remove("fa-plus");
			icons[i].classList.add("fa-minus");
		} else {
			contentDiv[i].style.height = "0px";
			icons[i].classList.remove("fa-minus");
			icons[i].classList.add("fa-plus");

			contentDiv[i].classList.remove("heightActive");
			contentDiv[i].classList.add("heightActive");
		}

		for (let j = 0; j < contentDiv.length; j++) {
			if (j !== i) {
				contentDiv[j].style.height = 0;
				icons[j].classList.remove("fa-minus");
				icons[j].classList.add("fa-plus");
			}
		}
	});
}