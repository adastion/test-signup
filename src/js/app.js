let dropDownBtn = document.querySelector(".select-box__select");
const dropDownList = document.querySelector(".select-box__list");
const dropDownListItem = document.querySelectorAll(".select-box__item");

dropDownBtn.addEventListener("click", (e) => {
	// e.preventDefault;
	dropDownList.classList.toggle("show");
});



dropDownListItem.forEach((item) => {
	item.addEventListener("click", () => {
    dropDownBtn.innerText = this.innerText;
  });
});

console.log(dropDownBtn.innerText);