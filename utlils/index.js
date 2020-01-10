const fs = require("fs");

const appendFile = (path, data) => {
  fs.appendFile(path, data, err => {
    if (err) {
      throw err;
    }
  });
};

const readFile = path => {};

module.exports = { appendFile, readFile };
