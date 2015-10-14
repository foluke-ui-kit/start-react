#! /usr/bin/env node

console.log('console output');

var inquirer = require("inquirer");
var questions = [
  {
    type: "confirm",
    name: "bacon",
    message: "Do you like bacon?"
  }];
inquirer.prompt(questions , function( answers ) {
    console.log(answers);
});
