'use strict';
var amphtmlValidator = require('amphtml-validator');
var fs = require('fs');

getFiles('./_site').forEach(function (path) {
    validatePath(path);
});

function getFiles(dir, fileList) {
    fileList = fileList || [];
    try {
        var files = fs.readdirSync(dir);
        for (var i in files) {
            if (!files.hasOwnProperty(i)) continue;
            var name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()) getFiles(name, fileList);
            else if (name.toLocaleLowerCase().endsWith(".html")) fileList.push(name);
        }
    } catch (err) {
        var folder = path.join(__dirname);
        console.log(err, "folder: " + folder);
    }
    return fileList;
}

function validatePath(path) {
    path = path || "./_site/index.html";
    fs.readFile(path, function (err, data) {
        var html = data.toString();
        return validate(html, path);
    });
}

function validate(html, path) {
    return amphtmlValidator.getInstance().then(function (validator) {
        var result = validator.validateString(html);
        ((result.status === 'PASS') ? console.log : console.error)("\nValidation", result.status, path);
        for (var ii = 0; ii < result.errors.length; ii++) {
            var error = result.errors[ii];
            var msg = 'line ' + error.line + ', col ' + error.col + ': ' + error.message;
            if (error.specUrl !== null) {
                msg += ' (see ' + error.specUrl + ')';
            }
            ((error.severity === 'ERROR') ? console.error : console.warn)(msg);
        }
    });
}