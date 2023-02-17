// TODO: Include packages needed for this application
//maybe inquirer
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usageinfo, contributions, testingIns, authorAck, userName, userEmail, url, repo, license }) =>
    `
# ${title}




----
# Contents
1. [User Story](#user-story)
2. [Descripton](#description)
3. [Installation](#installation)
4. [License](#license)
5. [Contributions](#contributions)
6. [Tests](#tests)
7. [Authors and Acknowledgments](#authors-and-acknowledgments)
8. [Contact Information](#contact-information)

## User Story:
${usageinfo}

## Description:
${description}


## Installation:
${installation}

To clone the repo:
${repo}

## License:
${license}
${getLicenseBadge(license)}

## Contributions:
${contributions}

## Tests:
${testingIns}

## Authors and Acknowledgments:
${authorAck}

## Contact Information:
GitHub:${userName}
Email: ${userEmail}



`;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description regarding your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions.',
    },
    {
        type: 'input',
        name: 'usageinfo',
        message: 'Please enter User story.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please enter contributions.',
    },
    {
        type: 'input',
        name: 'testingIns',
        message: 'Please enter testing instructions.',
    },
    {
        type: 'input',
        name: 'authorAck',
        message: 'Please enter author and acknowledgments.',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Please enter your email.',
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is the URL of the live site?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the URL of the github repo?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your application.',
        choices: ['Apache', 'MIT', 'IBM'],
    },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }
function getLicenseBadge(license){
 if (license === 'Apache') {
    return '[![License; Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

 } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

 } else {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
 
    
 }
}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const readMePageContent = generateREADME(answers);

        fs.writeFile(`${answers.title}.md`, readMePageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );

});
 }

// Function call to initialize app
init();
