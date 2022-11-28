// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require()
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter the title of your project.",
            name: 'title',

        },
        {
            type: 'input',
            message: "Write a description of your project.",
            name: 'description',

        },
        {
            type: 'input',
            message: "What are the installation instructions?",
            name: 'installation',
        
        },
        {
            type: 'input',
            message: "How is this application used?",
            name: 'usage',
        },
        {
            type: 'input',
            message: "Who contributed to this repository?",
            name: 'contributors',
        },
        {
            type: 'input',
            message: "What should be inputted for a test run?",
            default: 'npm test'
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
