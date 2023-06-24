document.querySelectorAll(".select-box").forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector(".select-box__select");
	const dropDownList = dropDownWrapper.querySelector(".select-box__list");
	const dropDownListItem =
		dropDownWrapper.querySelectorAll(".select-box__item");
	const containerInput = dropDownWrapper.querySelector(
		".select-box__wrapper-input"
	);

	// Click on the button. Open/Close select
	dropDownBtn.addEventListener("click", function (event) {
		event.preventDefault();
		dropDownList.classList.toggle("show");
		containerInput.classList.add("arow-rotate");
	});

	// Selecting a list item. Remember the selected value. Close the dropdown
	dropDownListItem.forEach(function (item) {
		item.addEventListener("click", function (event) {
			event.stopPropagation();
			dropDownBtn.value = this.innerText;
			dropDownBtn.focus();
			dropDownList.classList.remove("show");
		});
	});

	// Click outside the dropdown. Close the dropdown
	document.addEventListener("click", function (event) {
		if (event.target !== dropDownBtn) {
			dropDownList.classList.remove("show");
			containerInput.classList.remove("arow-rotate");
		}
	});

	// Pressing Tab or Escape. Close the dropdown
	document.addEventListener("keydown", function (event) {
		if (event.key === "Tab" || event.key === "Escape") {
			dropDownList.classList.remove("show");
			containerInput.classList.remove("arow-rotate");
		}
	});
});

//Work with forms

const form = document.querySelectorAll("form");
const input = document.querySelectorAll("input");

const massage = {
	loading: "Loading...",
	successs: "Thank you! We will contact you",
	failure: "Failure.",
};

form.forEach(function (item) {
	item.addEventListener("submit", function (event) {
		event.preventDefault();

		let statusMessage = document.createElement("div");
		statusMessage.classList.add("show-message");
		item.appendChild(statusMessage);

		const formData = new FormData(item);

		
	});
});

const postData = async (url, data) => {
	document.querySelector(".show-message").textContent = message.loading;
	let result = await fetch(url, {
		method: "POST",
		body: data,
	});

	return await result.text();
};
