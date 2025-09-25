function generatePassword(
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let result = "";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let possibleChars = "";
  if (includeLowercase) possibleChars += lowercase;
  if (includeUppercase) possibleChars += uppercase;
  if (includeNumbers) possibleChars += numbers;
  if (includeSymbols) possibleChars += symbols;
  if (possibleChars.length === 0)
    return "Please select at least one character type.";

  for (let i = 0; i < passwordLength; i++) {
    let random = Math.floor(Math.random() * possibleChars.length + 1);
    result += possibleChars.charAt(random);
  }

  return result;
}

const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
