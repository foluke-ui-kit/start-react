
const fs = require('fs-extra');
const backupDir = './backups/';

function backup(file) {
  fs.copy(file, backupDir + file, function(err) {
    if (err) process.stdout.write('Error saving files');
    return;
  });
  process.stdout.write('\n backup' + file + ' completed');
}

backup('./package.json');

backup('./README.md');
