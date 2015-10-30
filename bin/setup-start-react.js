const pkg = require('../package.json');

const replace = require('replacestream');

const inquirer = require('inquirer');

const fs = require('fs-extra');



const questions = [{
  type: 'list',
  name: 'component_name',
  message: 'What type of component would you like to generate',
  choices: ['ES5', 'ES6', 'Statless Component', 'ES6 Class', 'ES6 Class +'],
  filter: function(val) {
    return val.toLowerCase();
  },
}, {
  type: 'input',
  name: 'directory',
  message: 'Please enter the name of the directory, leave blank to use the default',
  default: function() {
    return 'false';
  },
}, {
  type: 'input',
  name: 'name',
  message: 'Enter the name of your component',
}];

function replaceMents(key, value) {
  // fs.createReadStream('./package.json')
  // .pipe(replace(key, value))
  // .pipe(fs.createWriteStream('./package.json'));
  fs.createReadStream('./_package.json')
  .pipe(replace(key, value))
  .pipe(fs.createWriteStream('./package.json'));
  // console.log(vf);
}

inquirer.prompt(questions, function(answers) {
  // console.log(answers);

  if (answers.name) {
    console.log(answers.name + ' -- ' + answers.component_name);
    // replace(pkg.name, answers.name, 'package.json');
    replaceMents(pkg.name, answers.name);
  }
});
