signupRoleDropdown = document.getElementById('signupRoleDropdown');


roles = ["Doctor", "Patient"];

for (var i = 0; i < roles.length; i++) {
    var option2 = document.createElement('option');
    option2.text = roles[i];
    signupRoleDropdown.add(option2);
}

function toggleButton() {
    signupUserNameValue = document.getElementById('signupUsername').value;
    signupPassswordValue = document.getElementById('signupPassword').value;
    signupConfirmPasswordValue = document.getElementById('signupConfirmPassword').value;

    signupButton = document.getElementById('signupButton');

    // if values are empty disable button
    if (signupUserNameValue == "" || signupPassswordValue == "" || signupConfirmPasswordValue == "") {
        signupButton.disabled = true;
        // remove a class
        signupButton.classList.remove("bg-indigo-500");
        signupButton.classList.remove("hover:bg-indigo-600");
        signupButton.classList.add("bg-gray-300");
    }
    else {
        signupButton.disabled = false;
        signupButton.classList.add("bg-indigo-500");
        signupButton.classList.add("hover:bg-indigo-600");
        signupButton.classList.remove("bg-gray-300");
    }
}

toggleButton()

signupUsernameField = document.getElementById('signupUsername');
signupUsernameField.addEventListener('keyup', toggleButton);

signupPasswordField = document.getElementById('signupPassword');
signupPasswordField.addEventListener('keyup', toggleButton);

signupConfirmPasswordField = document.getElementById('signupConfirmPassword');
signupConfirmPasswordField.addEventListener('keyup', toggleButton);
