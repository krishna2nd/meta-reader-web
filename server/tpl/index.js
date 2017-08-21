let fs = require('fs'),
  util = require('util');

let getAllContents = async (file) => {
  let readFile = util.promisify(fs.readFile);
  data = await readFile(file);
  return data;
}

let tpl = {
  index: require('./html/index'),
  report: require('./html/index')
};

module.exports = {
  index: tpl.index,
  report: tpl.report
}

