// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is you GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is you email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD3", "NONE"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install the dependencies?",
        default: "npm install"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to perform test?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usage guidelines for this project?",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can someone contribute to this project?",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("generating your ReadMe file");
        writeToFile("ReadMe.md", generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();
