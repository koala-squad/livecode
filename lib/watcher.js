const fs = require('fs');
const glob = require('glob');
const minimatch = require('minimatch');
const rx = require('rx');

function read(path, observer) {
  if (!fs.existsSync(path)) return;
  fs.readFile(path, 'utf-8', (err, text) => {
    if (err) return observer.onError(err);
    observer.onNext({ path, text });
  });
}

function walk(options, observer) {
  options = { nodir: true, ignore: options.exclude };
  glob('**/*', options, (err, paths) => {
    if (err) return observer.onError(err);
    paths.forEach(path => {
      read(path, observer);
    });
  });
}

function watch(options, observer) {
  let dirname = process.cwd();
  let exclude = '{' + options.exclude.join(',') + ',}';
  fs.watch(dirname, { recursive: true }, (event, path) => {
    if (!minimatch(path, exclude))
      read(path, observer);
  });
}

module.exports.watch = function (options) {
  return rx.Observable.create(observer => {
    walk(options, observer);
    watch(options, observer);
  });
};
