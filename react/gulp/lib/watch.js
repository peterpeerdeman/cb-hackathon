'use strict';

import gulp from 'gulp';
import shouldWatch from './shouldWatch';

export default (src, task, clean) => {
    if (shouldWatch) {
        gulp.watch(src, function(event) {
            if (event.type === 'deleted') {
                clean();
            } else {
                task();
            }
        });
    }
};
