// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
let promptToggle = document.querySelector("#promptToggle");

// Write password to the #password input
function writePassword() {
  let settings=getSettings()
  let password = generatePassword(settings);
  let passwordText = document.querySelector("#password");
passwordText.value = password;
}

// function to toggle the prompt
function togglePrompt() {
  let options = document.querySelector(".options");
  options.style.display = "block";
}

// function to get the settings
function getSettings()
{
  let length=document.querySelector("#optionLength").value
  let useUppercase=document.querySelector("#optionUpper").checked
  let useLowercase=document.querySelector("#optionLower").checked
  let useNumeric=document.querySelector("#optionNumber").checked
  let useSpecials=document.querySelector("#optionSpecial").checked
  return {
    length: length,
    useUppercase: !!useUppercase,
    useLowercase: !!useLowercase,
    useNumeric: !!useNumeric,
    useSpecials: !!useSpecials
  }
}

/**
 * creates password with given parameters
 * @param {object} settings
 * @returns 
 */

// 
function generatePassword(settings)
{
  let counter=0
  let password=""

// Adds to the counter
  if (settings.useLowercase==true)
  {
    password+=getLowercaseLetter()
    counter++
  } 
  if (settings.useUppercase==true)
  {
    password+=getCapitalLetter()
    counter++
  }
  if (settings.useNumeric==true)
  {
    password+=getRandomNumber()
    counter++
  }
  if (settings.useSpecials==true)
  {
    password+=getRandomSpecial()
    counter++
  }
  while(counter<settings.length)
  {
    password+=getAnyRandom()
    counter++ 
  }
  //password+=getCapitalLetter()+getRandomSpecial()+getLowercaseLetter()+getRandomNumber()
  return password
}

/**
 * gets a random integer between two random values
 * @param {number} min the minimum value inclusive
 * @param {number} max the maximum value inclusive
 * @returns the generated number
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * gets a random capital letter
 */
function getCapitalLetter()
{
  const startCaps=65
  const endCaps=90
  let charCode=getRandomInteger(startCaps,endCaps)
  return String.fromCharCode(charCode) //converts integer to ASCII code
}
// Ascii 97-122
/**
 * get a random lowercase letter
 */
function getLowercaseLetter()
{
 const startLowers=97
 const endLowers=122
 let charCode=getRandomInteger(startLowers,endLowers)
 return String.fromCharCode(charCode) //converts integer to ASCII
}

function getRandomNumber()
{
  return Math.floor(Math.random() * 10)
}

function getRandomSpecial()
{
  let specialChar="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let specials=specialChar.split('');
  let lastIndex=specials.length-1
  let randomIndex=getRandomInteger(0,lastIndex)
  let randomSpecial=specials[randomIndex]
  return randomSpecial
}

function getAnyRandom()
{
  let option=getRandomInteger(1,4)
  if (option==1)
  {
    return getRandomSpecial()
  }
  if (option==2)
  {
    return getLowercaseLetter()
  }
  if (option==3)
  {
    return getRandomNumber()
  }
  if (option==4)
  {
    return getCapitalLetter()
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

promptToggle.addEventListener("click", togglePrompt);

function OptionsChanged()
{
  console.log("options changed");

}