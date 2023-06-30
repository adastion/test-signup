// Work with form
const workWithForm = document.querySelectorAll("form");

workWithForm.forEach(function (form) {
	const userName = form.querySelector('input[name="firstName"]');
	const userlastName = form.querySelector('input[name="lastName"]');
	const userEmail = form.querySelector('input[name="email"]');
	const userPassword = form.querySelector('input[name="password"]');
	const userConfirmPassword = form.querySelector(
		'input[name="confirm-password"]'
	);
	const day = form.querySelector('input[name="day"]');
	const month = form.querySelector('input[name="month"]');
	const year = form.querySelector('input[name="year"]');
	const inputs = form.querySelectorAll("input");
	const submitBtn = form.querySelector("button");

	function validated() {
		const ONLY_TEXT = /[a-z]/i;
		const ONLY_NUMBER_SYMBOL = /[0-9]+$/i;
		const NAME_REGEXP = /[a-z0-9]+$/i;
		const EMAIL_REGEXP =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

		//User name
		if (!NAME_REGEXP.test(userName.value)) {
			userName.classList.add("form__input--not-validated");
			return true;
		} else {
			userName.classList.remove("form__input--not-validated");
		}

		//User last name
		if (!NAME_REGEXP.test(userlastName.value)) {
			userlastName.classList.add("form__input--not-validated");
			return true;
		} else {
			userlastName.classList.remove("form__input--not-validated");
		}

		//Email
		if (!EMAIL_REGEXP.test(userEmail.value)) {
			userEmail.classList.add("form__input--not-validated");
			return true;
		} else {
			userEmail.classList.remove("form__input--not-validated");
			document.querySelectorAll(".form__item").forEach((item) => {
				if (item.lastElementChild === userEmail) {
					item.classList.add("form__item--correct");
				} else {
					item.lastElementChild.classList.remove("form__item--correct");
					item.lastElementChild.blur();
				}
			});
		}

		//Password
		if (userPassword.value.length < 8) {
			userPassword.classList.add("form__input--not-validated");
			return true;
		} else {
			userPassword.classList.remove("form__input--not-validated");
		}

		//Confirm Password
		if (userConfirmPassword.value !== userPassword.value) {
			userConfirmPassword.classList.add("form__input--not-validated");
			return true;
		} else {
			userConfirmPassword.classList.remove("form__input--not-validated");
		}

		//Day
		if (!ONLY_NUMBER_SYMBOL.test(day.value) || day.value > 31) {
			day.classList.add("form__input--not-validated");
			return true;
		} else {
			day.classList.remove("form__input--not-validated");
		}

		//Year
		if (!ONLY_NUMBER_SYMBOL.test(year.value)) {
			year.classList.add("form__input--not-validated");
			return true;
		} else {
			year.classList.remove("form__input--not-validated");
		}

		//Month
		if (!ONLY_TEXT.test(month.value)) {
			month.classList.add("form__input--not-validated");
			return true;
		} else {
			month.classList.remove("form__input--not-validated");
		}
	}

	const clearInputs = () => {
		inputs.forEach((item) => {
			item.value = "";
			document.querySelectorAll(".form__item").forEach((item) => {
				if (item.lastElementChild === userEmail) {
					item.lastElementChild.classList.remove("form__item--correct");
				}
			});
		});
	};

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data,
		});

		return await res.text();
	};

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const formData = new FormData(form);

		if (validated()) {
			submitBtn.classList.remove("error");
			submitBtn.offsetWidth;
			submitBtn.classList.add("error");
		} else {
			postData("server.php", formData)
				.then((res) => {
					console.log(res);
				})
				.catch(() => "ok")
				.finally(() => {
					clearInputs();
				});
		}
	});
});
