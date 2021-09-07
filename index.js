// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { async } = require("rxjs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const userPrompt = async () => {
  const response = await inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your page?",
      name: "Title",
    },
    {
      type: "input",
      message: "Please give a description of your project.",
      name: "Description",
    },
    {
      type: "input",
      message: "Installation Instructions",
      name: "Installation",
      default: "No installation information is available.",
    },
    {
      type: "input",
      message: "Usage Information",
      name: "Usage",
      default: "No usage information is available.",
    },
    {
      type: "list",
      name: "License",
      message: "Please choose a License for your application.",
      choices: ["MIT", "ISC", "Unlicensed"],
    },
    {
      type: "input",
      message: "Contribution guidelines",
      name: "Contribution",
      default: "No contribution information is available.",
    },
    {
      type: "input",
      message: "Test Instructions",
      name: "Test",
      default: "No testing information is available.",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
      filter: function (answers) {
        if (answers) {
          return `https://github.com/${answers}`;
        } else {
          return "No GitHub link was entered.";
        }
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "Email",
      filter: function (answers) {
        if (answers) {
          return `${answers}`;
        } else {
          return "No email address was entered.";
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
