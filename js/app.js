const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const zipInput = document.getElementById("zip");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById(
	"password-confirmation",
);
const submitButton = document.getElementById("submit");

function checkEmail() {
	if (emailInput.validity.typeMismatch || !emailInput.value) {
		emailInput.setCustomValidity("I am expecting an email address!");
	} else {
		emailInput.setCustomValidity("");
	}
}

function checkZip() {
	const zipValue = zipInput.value;
	const countryValue = countryInput.value;

	const constraints = {
		romania: [
			/^\d{6}$/,
			"Romania ZIPs must have exactly 6 digits: e.g. 323165",
		],
		uk: [
			/^[\w\d]{3}\s[\w\d]{3}$/,
			"UK ZIPs must have exactly 6 alfanumeric characters separated by a space: e.g. TW2 3CH",
		],
		us: [
			/^\d{5}$/,
			"US ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
		],
	};
	if (!zipValue) {
		zipInput.setCustomValidity("ZIP cannot be empty");
	}
	if (constraints[countryValue][0].test(zipValue)) {
		zipInput.setCustomValidity("");
	} else {
		zipInput.setCustomValidity(constraints[countryValue][1]);
	}
}

function checkPassword() {
	const passwordValue = passwordInput.value;
	const passwordConfirmationValue = passwordConfirmationInput.value;
	if (passwordValue.length < 8) {
		passwordInput.setCustomValidity(
			"Password is not at least 8 characters long",
		);
	} else if (!/[@_!#$%^&*()<>?/|}{~:\\.]/.test(passwordValue)) {
		passwordInput.setCustomValidity(
			"Password does not contain at least one special character",
		);
	} else if (!/\d/.test(passwordValue)) {
		passwordInput.setCustomValidity(
			"Password does not contain at least one digit",
		);
		// eslint-disable-next-line eqeqeq
	} else if (passwordValue != passwordConfirmationValue) {
		passwordInput.setCustomValidity("Passwords do not match");
		passwordConfirmationInput.setCustomValidity("Passwords do not match");
	} else {
		passwordInput.setCustomValidity("");
		passwordConfirmationInput.setCustomValidity("");
	}
}

function checkPasswordConfirmation() {
	const passwordValue = passwordInput.value;
	const passwordConfirmationValue = passwordConfirmationInput.value;
	if (passwordConfirmationValue.length < 8) {
		passwordConfirmationInput.setCustomValidity(
			"Password is not at least 8 characters long",
		);
	} else if (!/[@_!#$%^&*()<>?/|}{~:\\.]/.test(passwordConfirmationValue)) {
		passwordConfirmationInput.setCustomValidity(
			"Password does not contain at least one special character",
		);
	} else if (!/\d/.test(passwordConfirmationValue)) {
		passwordConfirmationInput.setCustomValidity(
			"Password does not contain at least one digit",
		);
		// eslint-disable-next-line eqeqeq
	} else if (passwordValue != passwordConfirmationValue) {
		passwordInput.setCustomValidity("Passwords do not match");
		passwordConfirmationInput.setCustomValidity("Passwords do not match");
	} else {
		passwordInput.setCustomValidity("");
		passwordConfirmationInput.setCustomValidity("");
	}
}

emailInput.addEventListener("change", checkEmail);
zipInput.addEventListener("change", checkZip);
passwordInput.addEventListener("change", checkPassword);
passwordConfirmationInput.addEventListener("change", checkPasswordConfirmation);

submitButton.addEventListener("click", () => {
	checkEmail();
	checkZip();
	checkPassword();
});
