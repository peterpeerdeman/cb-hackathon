'use strict';

import gulp from 'gulp';
import { noop, env } from 'gulp-util';
import sass from 'gulp-sass';
import cssmin from 'gulp-cssmin';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import flatten from 'gulp-flatten';
import del from 'del';
import livereload from 'gulp-livereload';
import autoprefixer from 'gulp-autoprefixer';
import config from '../config';
import onError from '../lib/onError';
import watch from '../lib/watch';

const task = () =>
    gulp.src(config.css.src)
        .on('error', onError)
        .pipe(sourcemaps.init())
        .pipe(sass(config.css.sassOptions).on('error', sass.logError))
        .pipe(env.production ? cssmin() : noop())
        .pipe(flatten())
        .pipe(rename(config.css.dest.file))
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 15 versions', 'ie 8'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.css.dest.directory))
        .pipe(livereload());

const clean = () =>
    del(config.css.clean);

gulp.task('css', ['css:clean'], task);
gulp.task('css:clean', clean);

watch(config.css.watch, task, clean);
