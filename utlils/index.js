const fs = require("fs");

const appendFile = (path, data) => {
  fs.appendFile(path, data, err => {
    if (err) {
      throw err;
    }
  });
};

module.exports = { appendFile };
