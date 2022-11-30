const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `(${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[![License: MIT]https://img.shields.io/badge/License-MIT-yellow.svg](https://opensource.org/licenses/MIT)`
  }
  if (license === 'MPL 2.0') {
    return `[![License: MPL 2.0]https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg](https://opensource.org/licenses/MPL-2.0)`
  }
  if (license === 'ISC') {
    return `[![License: ISC]https://img.shields.io/badge/License-ISC-blue.svg](https://opensource.org/licenses/ISC)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `This project uses the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
  ## ${data.title}
  
  # Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#contributing)
  - [Test](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  # Description
  ${data.description}
  
  # Installation
  ${data.installation}
  
  # Usage
  ${data.usage}
  
  # How to Contribute
  ${data.contributing}
  
  # Tests
  ${data.tests}
  
  # License
  ${data.license}
  
  # Questions
  [github profile](https://github.com/${data.questions})
  
  If you have any further questions, please contact me at ${data.email}
 
`;
}

module.exports = generateMarkdown;
