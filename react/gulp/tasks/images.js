'use strict';

import gulp from 'gulp';
import { noop, env } from 'gulp-util';
import imagemin from 'gulp-imagemin';
import del from 'del';
import livereload from 'gulp-livereload';
import config from '../config';
import onError from '../lib/onError';
import watch from '../lib/watch';

const task = () =>
    gulp.src(config.images.src)
        .on('error', onError)
        .pipe(env.production ? imagemin() : noop())
        .pipe(gulp.dest(config.images.dest))
        .pipe(livereload());

const clean = () =>
    del(config.images.clean);

gulp.task('images', ['images:clean'], task);
gulp.task('images:clean', clean);

watch(config.images.watch, task, clean);
