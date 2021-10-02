// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "github",
    message: "Please Enter Your GitHub Username",
  },
  {
    type: "input",
    name: "description",
    message: "Please Enter A Description of This Project",
  },
  {
    type: "input",
    name: "usage",
    message: "Please Enter All Usage Information for This Project"
  },
  {
    type: "input",
    name: "installation",
    message: "Please Give Any Installation Information",
  },
  {
    type: "list",
    name: "license",
    message: "Please Choose Your License",
    choices: ["MIT", "Apache", "GNU", "Boost"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please Enter Any Contribution Information",
  },
  {
    type: "input",
    name: "testing",
    message: "Please Enter Any Testing Information",
  },
  {
    type: "input",
    name: "email",
    message: "Please Enter Your Email Address",
  },
];

const generatePage = (obj) => {
  return `

  # ${obj.title}

  ## Table of Contents
  
  [Title](#title)<br>
  [License](#license)<br>
  [Description](#description)<br>
  [Usage](#usage)<br>
  [Installation](#installation)<br>
  [Contributing](#contributing)<br>
  [Testing](#testing)<br>
  [Questions](#questions)

  # License

  ${obj.license}
  
  # Description

  ${obj.description}

  # Usage

  ${obj.usage}

  # Installation

  ${obj.installation}

  # Contributing

  ${obj.contributing}

  # Testing

  ${obj.testing}

  # Questions

  If you have any questions, please don't hesitate to reach out to me at [${obj.email}](mailto:${obj.email}), or on GitHub at [https://github.com/${obj.github}](https://github.com/${obj.github})!

  `;
};

function init() {
  inquirer
      .prompt(questions)
      .then((answers) => {
          console.log(answers);

          const myREADME = generatePage(answers);

          console.log(myREADME);

         
          fs.writeFile('./output/README.md', myREADME, () => {
              console.log("README file successfully generated! Please check the output directory for your new README file!")
          })


      })
}


init();