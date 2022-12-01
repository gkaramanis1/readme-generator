// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

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
            message: "Please provide some usage information.",
            name: 'usage',
        },
        {
            type: 'list',
            message: "What license are you using?",
            choices: ["MIT", "MPL 2.0", "ISC"],
            name: 'license',
        },

        {
            type: 'input',
            message: "Who contributed to this repository?",
            name: 'contributing',
        },
        {
            type: 'input',
            message: "Please provide some test instructions.",
            name: 'tests',
        },
        {
            type: 'input',
            message: "Please enter your Github username.",
            name: 'questions',
        },
        {
            type: 'input',
            message: "Please enter your email",
            name: 'email',
        }
    ])
    .then(input => {
        return input;
    })
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('Successfully created README.md file!')
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeToFile('README.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}
// Function call to initialize app
init()
