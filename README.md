# JavaScript Password Generator 

## Description
This is a password generator that will generate a random password based on the criteria selected by the user. The user will be prompted to select the length of the password and the type of characters to be included in the password. The password can be between 8 and 128 characters long and can include lowercase letters, uppercase letters, numbers, and special characters. The password will be displayed in the text box on the page.

## Acceptance Criteria

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

