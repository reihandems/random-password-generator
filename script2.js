const includeLowercase  = document.getElementById("includeLowercase");
const includeUppercase  = document.getElementById("includeUppercase");
const includeNumbers    = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const result = document.getElementById("result");

function generatePassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    length = Number(passwordLength);

    const lowercaseChars    = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars       = '0123456789';
    const symbolChars       = '!@#$%^&*()_+-=[];:<>?/.,';

    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase.checked ? lowercaseChars : '';
    allowedChars += includeUppercase.checked ? uppercaseChars : '';
    allowedChars += includeNumbers.checked ? numberChars : '';
    allowedChars += includeSymbols.checked ? symbolChars : '';

    if (allowedChars === 0) {
        result.textContent = "Please pick checkboxes!";
        return;
    }
    else if (length === 0) {
        result.textContent = "Please fill the password length first!";
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    result.innerHTML = `<p class="text-lg break-all font-bold text-gray-300">${password}</p>`;
};