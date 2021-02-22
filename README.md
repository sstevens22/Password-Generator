# Password Generator

Hello World! My name is Sheldon Stevens and I was given the task to refactor pre-built code and insure that it meets the customers specific set of Criteria.

# Usage 

This is a random password generator that gives the user the option to choose a randomly generated password from a set of pre-set options. Included in the set the user has the option to choose password length between 8-128 characters, Capitol letters, Lowercase letters, Numbers, and special characters.

# Acceptance Criteria 

GIVEN I need a new, secure password
--[x]WHEN I click the button to generate a password
     THEN I am presented with a series of prompts for password criteria
----[x]WHEN prompted for password criteria
       THEN I select which criteria to include in the password
--[x]WHEN prompted for the length of the password
     THEN I choose a length of at least 8 characters and no more than 128 characters
----[x]WHEN prompted for character types to include in the password
       THEN I choose lowercase, uppercase, numeric, and/or special characters
--[x]WHEN I answer each prompt
     THEN my input should be validated and at least one character type should be selected
----[x]WHEN all prompts are answered
       THEN a password is generated that matches the selected criteria
--[x]WHEN the password is generated
     THEN the password is either displayed in an alert or written to the page

# Preview

![PasswordMockup](./assets/PasswordMockup.png)

# Links

