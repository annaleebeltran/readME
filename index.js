// Included packages needed for this application
const inquierer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');

// Created an array of questions for the user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please include a description of your project.',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Please include a table of contents.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage.',
    },
    {
        type: 'list',
        name: 'license',
        choices: [
            'MIT',
            'Apache-2.0',
            'GPL-3.0',
        ]

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests did you run?',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your GitHub username.',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    }




];

// Created a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Success!');
    });

}

// Created a function to initialize the app
function init() {
    inquierer.prompt(questions)
        .then((data) => {
            writeToFile('READMENEW.md', generateMarkdown(data));
        });

}

// Function call to initialize app
init();
