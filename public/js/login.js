
// filling the drop down on login screen

// loginScreenRoleDropdown = document.getElementById('roleDropdown');

// roles = [ "Doctor", "Patient"];

// for (var i = 0; i < roles.length; i++) {
//     var option = document.createElement('option');
//     option.text = roles[i];
//     loginScreenRoleDropdown.add(option);
// }


function toggleButton() {
    loginUsernameValue = document.getElementById('loginUsername').value;
    loginPasswordValue = document.getElementById('loginPassword').value;

    loginButton = document.getElementById('loginButton');

    // if values are empty disable button
    if (loginUsernameValue == "" || loginPasswordValue == "" ) {
        loginButton.disabled = true;
        // remove a class
        loginButton.classList.remove("bg-indigo-500");
        loginButton.classList.remove("hover:bg-indigo-600");
        loginButton.classList.add("bg-gray-300");
    }
    else {
        loginButton.disabled = false;
        loginButton.classList.add("bg-indigo-500");
        loginButton.classList.add("hover:bg-indigo-600");
        loginButton.classList.remove("bg-gray-300");
    }
}

toggleButton()


loginUsernameField = document.getElementById('loginUsername');
loginUsernameField.addEventListener('keyup', toggleButton);

loginPasswordField = document.getElementById('loginPassword');
loginPasswordField.addEventListener('keyup', toggleButton);
