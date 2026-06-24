'use strict';

import gulp from 'gulp';
import del from 'del';

gulp.task('docs', async () => {
    await del(['./docs']);
    return gulp.src('./dist/**/*', { base: './dist' })
        .pipe(gulp.dest('./docs'));
});
