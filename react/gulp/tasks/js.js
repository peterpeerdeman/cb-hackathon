'use strict';

import gulp from 'gulp';
import { noop, env } from 'gulp-util';
import path from 'path';
import sourcemaps from 'gulp-sourcemaps';
import flatten from 'gulp-flatten';
import del from 'del';
import browserify from 'browserify';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import livereload from 'gulp-livereload';
import watchify from 'watchify';
import { contains } from 'mout/array';
import uglify from 'gulp-uglify';
import config from '../config';
import shouldWatch from '../lib/shouldWatch';
import onError from '../lib/onError';

const entries = [config.js.src];
if (contains(config.js.babelPresets, 'react')) {
    entries.unshift(path.join(__dirname, '../lib/jsxTranspileFix.js'));
}

var b = browserify({
    entries: entries,
    debug: true,
    insertGlobals: true,
    extensions: config.js.browserifyExtensions,
    transform: [
        babelify.configure({
            presets: config.js.babelPresets
        })
    ]
});

const task = () =>
    b.bundle()
        .on('error', onError)
        .pipe(source(config.js.dest.file))
        .pipe(buffer())
        .pipe(flatten())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(env.production ? uglify() : noop())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.js.dest.directory))
        .pipe(livereload());

const clean = () =>
    del(config.js.clean);

gulp.task('js', ['js:clean'], task);
gulp.task('js:clean', clean);

if (shouldWatch) {
    b = watchify(b);
    b.on('update', task);
}
