const dropDownBtn = document.querySelector(".select-box__select");
const dropDownList = document.querySelector(".select-box__list");
const dropDownListItem = document.querySelectorAll(".select-box__item");

dropDownBtn.addEventListener("click", function (e) {
	e.preventDefault;
	dropDownList.classList.toggle("show");
});

dropDownListItem.forEach(function (item) {
	item.addEventListener("click", function () {
		dropDownBtn.innerText = this.innerText;
	});
});

