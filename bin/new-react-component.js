#! /usr/bin/env node


var inquirer = require("inquirer");

var questions = [{
  type: "list",
  name: "component_name",
  message: "What type of component would you like to generate",
  choices: ["ES5", "ES6", "Statless Component", "ES6 Class", "ES6 Class +"],
  filter: function(val) {
    return val.toLowerCase();
  }
}, {
  type: "input",
  name: "directory",
  message: "Please enter the name of the directory, leave blank to use the default",
  default: function() {
    return "false";
  }
}, {
  type: "input",
  name: "name",
  message: "Enter the name of your component"
}];
inquirer.prompt(questions, function(answers) {
  console.log(answers);
  if (answers.name)
    console.log(answers.name + " -- " + answers.component_name)
});
