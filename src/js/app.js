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

//Work with form
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const message = {
	loading: "loading...",
	success: "Ok )",
	failure: "Error",
};

const clearInputs = () => {
	inputs.forEach(item => {
		item.value = '';
	})
}

const postData = async (url, data) => {
	let result = await fetch(url, {
		method: "POST",
		body: data,
	});

	return await result.text();
};

form.addEventListener("submit", (event) => {
	event.preventDefault();
	let statusMessage = document.createElement("div");
	statusMessage.classList.add("show-status");
	form.appendChild(statusMessage);

	const formData = new FormDate(form);
	postData("server.php", formData)
		.then((result) => {
			console.log(result);
			statusMessage.textContent = message.success;
		})
		.catch(() => statusMessage.textContent = message.failure)
		.finally(()=>{
			clearInputs();
			setTimeout(()=> {
				statusMessage.remove();
			}, 5000);
		})
});
