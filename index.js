// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
   
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
    ];

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            reject (err);
            return;
        }
        resolve ({
            ok: true,
            message: console.log('Successfully wrote to README.md')
        });
      })
    })
  }



// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);

}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})