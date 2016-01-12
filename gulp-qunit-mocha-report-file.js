'use strict';
var fs = require('fs');

module.exports = function(error, result, file) {
    if (result) {
        try {
            result.trim().split('\n').forEach(function(line) {
                if (line.indexOf('{') !== -1) {
                    // Делаем JSON.parse, JSON.stringify чтобы убедиться, что пришел валидный JSON и его можно
                    // писать в файл для дальнейшей обработки
                    var report = JSON.parse(line.trim());
                    fs.writeFileSync(`qunit-report-${file.relative}.json`, JSON.stringify(report), 'utf8');
                }
            });
        } catch (ignore) {}
    }
};
