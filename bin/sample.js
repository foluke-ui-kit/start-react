#! /usr/bin/env node

const inquirer = require("inquirer");
const questions = [
  {
    type: "confirm",
    name: "bacon",
    message: "Do you like bacon?"
  }];
inquirer.prompt(questions , function( answers ) {
    console.log(answers);
    if(answers.bacon)
    console.log('logger')
});
