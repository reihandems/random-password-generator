// Random Password Generator Program

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]:';,./<>?";

    let allowedChars = "";
    let password = "" ;

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = false;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);