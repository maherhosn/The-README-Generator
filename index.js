// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the Title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Can you provide a description for this project?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Can you provide instructions and examples for use?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license from the following options:",
        choices: ["Apache", "Boost", "MIT","None"]
    },
    {
        type: 'checkbox',
        name: 'contributing',
        message: "Would you like other devlopers to contribute to this application?",
        choices: ["yes", "no"]
    },
    {
        type: 'input',
        name: 'tests',
        message: "What are the steps to test this application?"
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your github username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
            const readMeFile = generateMarkdown(answers);
            writeToFile("README.md", readMeFile);
        });
}

// Function call to initialize app
init();
