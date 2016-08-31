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

var b = browserify({
    entries: [config.exampleJs.src],
    debug: true,
    insertGlobals: true,
    extensions: config.exampleJs.browserifyExtensions,
    transform: [
        babelify.configure({
            presets: config.exampleJs.babelPresets
        })
    ]
});

const task = () =>
    b.bundle()
        .on('error', onError)
        .pipe(source(config.exampleJs.dest.file))
        .pipe(buffer())
        .pipe(flatten())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(env.production ? uglify() : noop())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.exampleJs.dest.directory))
        .pipe(livereload());

const clean = () =>
    del(config.exampleJs.clean);

gulp.task('exampleJs', ['exampleJs:clean'], task);
gulp.task('exampleJs:clean', clean);

if (shouldWatch) {
    b = watchify(b);
    b.on('update', task);
}
