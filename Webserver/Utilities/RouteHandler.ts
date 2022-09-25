import path from 'path';
import glob from 'glob';
import { white } from 'colorette';

export default function(server: any, opts: object, done: any) {
    glob('./Webserver/Routes/**/*.ts', {}, function (err: any, files: any) {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
        files.forEach(function (file: string) {
            let posix = file.split(path.sep).join(path.posix.sep);
            // posix formatted route
            // from "src\\webserver\\routes\\example\\fetch.index.js"
            // to "src/webserver/routes/example/fetch.index.js"
            // путь форматированный в позиксе
            // из "src\\webserver\\routes\\example\\fetch.index.js"
            // в "src/webserver/routes/example/fetch.index.js"
    
            let replacedPrefix = posix.replace(/^\.\/Webserver\/Routes(.*)$/g, '$1');
            // general prefix name
            // removes the src/webserver/routes from the string
            // общее название префикса
            // удаляет ./webserver/routes из стринга
    
            let prefix = replacedPrefix;
            if (path.basename(file) === 'Index.ts' || path.basename(file).match(/.*\.Index\.ts/g)) {
                prefix = path.dirname(prefix);
                // turn /example/nesting/fetch.index.js
                // and /example/nesting/index.js
                // to /example/nesting
                // переводит /example/nesting/fetch.index.js
                // и /example/nesting/index.js
                // в /example/nesting
            } else {
                prefix = prefix.replace(/\.[^/.]+$/, "");
                // turn /example/nesting.js
                // to /example/nesting
                // переводит /example/nesting.js
                // в /example/nesting
            }
    
            const route = import(path.resolve(file));

            server.register(route, {
                prefix: prefix
            });
        });
        done();
    });
};