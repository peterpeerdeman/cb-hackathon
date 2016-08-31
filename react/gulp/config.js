'use strict';

export default {
    images: {
        src: `src/images/**/*`,
        dest: `dist/res/images`,
        watch: `src/images/**/*`,
        clean: `dist/res/images`
    },
    static: {
        src: `src/static/**/*`,
        dest: `dist/res/static`,
        watch: `src/static/**/*`,
        clean: `dist/res/static`
    },
    staticRoot: {
        src: [`!src/static-root/res/**/*`, `src/static-root/**/*`],
        dest: `dist/`,
        watch: [`!src/static-root/res/**/*`, `src/static-root/**/*`],
        clean: `dist/!(res)`
    },
    js: {
        src: `src/js/index.jsx`,
        dest: {
            directory: `dist/res`,
            file: 'app.js'
        },
        watch: [`node_modules/**/*.js`, `src/js/**/*.js`],
        clean: `dist/res`,
        browserifyExtensions: ['.js', '.jsx', '.json'],
        babelPresets: ['es2015', 'react']
    },
    exampleJs: {
        src: `src/example-js/index.js`,
        dest: {
            directory: `dist/res`,
            file: 'example.js'
        },
        watch: [`node_modules/**/*.js`, `src/example-js/**/*.js`],
        clean: `dist/res`,
        browserifyExtensions: ['.js', '.json'],
        babelPresets: ['es2015']
    },
    css: {
        src: `src/css/index.scss`,
        dest: {
            directory: `dist/res`,
            file: 'app.css'
        },
        watch: [`node_modules/**/*.(css|scss|sass)`, `src/css/**/*.scss`],
        clean: `dist/res`,
        sassOptions: {}
    },
    exampleCss: {
        src: `src/example-css/index.scss`,
        dest: {
            directory: `dist/res`,
            file: 'example.css'
        },
        watch: [`node_modules/**/*.(css|scss|sass)`, `src/example-css/**/*.scss`],
        clean: `dist/res`,
        sassOptions: {}
    },
    server: {
        host: `0.0.0.0`,
        port: 8080,
        root: 'dist',
        debug: true
    }
};
