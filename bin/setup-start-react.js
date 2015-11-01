#! /usr/bin/env node

const pkg = require('../package.json');

const bower = require('../bower.json');

const replace = require('replacestream');

const inquirer = require('inquirer');

const fs = require('fs-extra');

console.log(pkg.repository.type)

const confirmSetup = [{
  type: 'confirm',
  name: 'setup',
  message: 'Are any of these files package.json, README.md or bower.json opened in your editor?'
}];
const questions = [
  {
  type: 'input',
  name: 'name',
  message: 'Enter the name of your component, this is also used in the package.json, config files etc',
  default: function() {
    return 'startreact'
  }
}, {
  type: 'input',
  name: 'display_name',
  message: 'Enter a display name or title for you project, this goes into the README, docs etc',
  default: function() {
    return 'Start React'
  }
}, {
  type: 'input',
  name: 'github_url',
  message: 'Enter your github url',
  default: function() {
    return 'https://github.com/foluke-ui-kit/start-react'
  }
}, {
  type: 'input',
  name: 'author',
  message: 'Authors name?',
  default: function() {
    return 'https://github.com/foluke-ui-kit/start-react'
  }
}, {
  type: 'input',
  name: 'email',
  message: 'Project / author email address?',
  default: function() {
    return ''
  }
}];

function replaceMents(key, value, file) {
  fs.createReadStream(file)
    .pipe(replace(key, value))
    .pipe(fs.createWriteStream('./' + file));
}


function prompter() {
  inquirer.prompt(confirmSetup, function(confirmed) {
    //  console.log(confirmed.setup);
    if (confirmed.setup) {
      // see readme console errors
      console.log('*************************************************************');
      console.log('\n Please close any of these open file(s) to continue - package.json, README.md or bower.json \n');
      console.log('*************************************************************');
      prompter();
    } else {
      inquirer.prompt(questions, function(answers) {
        // process.stdout.write(answers)
        //generate package.json replacements
        fs.createReadStream('./backups/package.json')
          .pipe(replace(pkg.name, answers.name ))
          .pipe(replace(pkg.author, answers.author ))
          .pipe(replace(pkg.homepage, answers.github_url ))
          .pipe(fs.createWriteStream('./package.json'));

        // create a config file
        fs.writeJson('./' + answers.name + '.config.json',
        answers,
        function(err) {
          console.log(err)
        })
      });

    }

  });
}

prompter();
