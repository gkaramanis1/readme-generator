// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

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
            type: 'input',
            message: "What license are you using?",
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
        },
    ])
};

// TODO: Create a function to write README file
const generateFile = ({ title, description, installation, usage, license, contributing, tests, questions, email }) =>
`## ${title}

# Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)

# Description
${description}

# Installation
${installation}

# Usage
${usage}

# License
${license}

# Contributing 
${contributing}

# Tests
${tests}

# Questions
[github profile](https://github.com/${questions})

If you have any further questions, please contact me at ${email}
`;

// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((answers) => writeFile('README.md', generateFile(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
