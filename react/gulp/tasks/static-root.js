'use strict';

import gulp from 'gulp';
import del from 'del';
import livereload from 'gulp-livereload';
import config from '../config';
import onError from '../lib/onError';
import watch from '../lib/watch';

const task = () =>
    gulp.src(config.staticRoot.src)
        .on('error', onError)
        .pipe(gulp.dest(config.staticRoot.dest))
        .pipe(livereload());

const clean = () =>
    del(config.staticRoot.clean);

gulp.task('static-root', ['static-root:clean'], task);
gulp.task('static-root:clean', clean);

watch(config.staticRoot.watch, task, clean);
