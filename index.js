// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    "What is the Title of your project?",
    "Can you provide a description for this project?",
    "What are the steps required to install your project?",
    "Can you provide instructions and examples for use?",
    "Choose a license from the following options:",
    "Would you like other devlopers to contribute to this application?",
    "What are the steps to test this application?",
    "What is your github username?",
    "What is your email address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    const generateReadMeFile = ({ title, description, installation, usage, license, contributing, tests, username, email }) =>
        `# ${title}

      ## Description:
      ${description}

      ## Table Of Contents:

      ## Installation Guide:
       ${installation}

      ## Usage: 
      ${usage}

      ## License:
      ${license}

      ## Contributing:
      ${contributing}

      ## Tests:
      ${tests}

      ## Questions:
      If you have any question please contact:
      name: ${username}
      email: ${email}
      `;

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: ["just to test1", "testing2", "third test option"]
            },
            {
                type: 'checkbox',
                name: 'contributing',
                message: questions[5],
                choices: ["yes", "no"]
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[6],
            },
            {
                type: 'input',
                name: 'username',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            },
        ])
        .then((answers) => {
            const readMeFile = generateReadMeFile(answers);

            writeToFile("README.md", readMeFile);

        });
}

// Function call to initialize app
init();
