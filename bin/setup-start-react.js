const pkg = require('../package.json');

const replace = require('replacestream');

const inquirer = require('inquirer');

const fs = require('fs-extra');

const confirmSetup = [{
  type: 'confirm',
  name: 'setup',
  message: 'Is the package.json file opened in your editor?',
}];
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
  fs.createReadStream('./_package.json')
  .pipe(replace(key, value))
  .pipe(fs.createWriteStream('./package.json'));
}

function copyPkg(file, dest) {
  fs.copy(file, dest, function(err) {
    if (err) return;
  });
}

inquirer.prompt(confirmSetup, function(confirmed) {
//  console.log(confirmed.setup);
  if (confirmed.setup) {
    // see readme console log error
    console.log('Please close the package.json before you continue');
    return;
  }
  inquirer.prompt(questions, function(answers) {
      // process.stdout.write(answers);
    copyPkg('./package.json', './_package.json');
    if (answers.name) {
      process.stdout.write(answers.name + ' -- ' + answers.component_name);
      replaceMents(pkg.name, answers.name);
    }
  });
});
