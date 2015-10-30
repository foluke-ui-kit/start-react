
const fs = require('fs-extra');
const backupDir = './backups/';

function backup(file) {
  fs.copy(file, backupDir + file, function(err) {
    if (err) return console.error(err);
  });
  process.stdout.write('\n backup' + file + ' completed');
}

backup('./package.json');
