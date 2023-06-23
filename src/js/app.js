document.querySelectorAll(".select-box").forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector(".select-box__select");
	const dropDownList = dropDownWrapper.querySelector(".select-box__list");
	const dropDownListItem =
		dropDownWrapper.querySelectorAll(".select-box__item");

	// Click on the button. Open/Close select
	dropDownBtn.addEventListener("click", function (event) {
		event.preventDefault;
		dropDownList.classList.toggle("show");
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
		}
	});

	// Pressing Tab or Escape. Close the dropdown
	document.addEventListener("keydown", function (event) {
		if (event.key === "Tab" || event.key === "Escape") {
			dropDownList.classList.remove("show");
		}
	});
});
