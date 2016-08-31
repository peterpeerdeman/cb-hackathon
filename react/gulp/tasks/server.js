'use strict';

import gulp from 'gulp';
import connect from 'gulp-connect';
import config from '../config';
import shouldWatch from '../lib/shouldWatch';

const task = () =>
    connect.server({
        root: config.server.root,
        host: config.server.host,
        port: config.server.port,
        livereload: shouldWatch,
        debug: config.server.debug
    });

gulp.task('server', task);
