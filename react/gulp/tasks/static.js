'use strict';

import gulp from 'gulp';
import del from 'del';
import livereload from 'gulp-livereload';
import config from '../config';
import onError from '../lib/onError';
import watch from '../lib/watch';

const task = () =>
    gulp.src(config.static.src)
        .on('error', onError)
        .pipe(gulp.dest(config.static.dest))
        .pipe(livereload());

const clean = () =>
    del(config.static.clean);

gulp.task('static', ['static:clean'], task);
gulp.task('static:clean', clean);

watch(config.static.watch, task, clean);
