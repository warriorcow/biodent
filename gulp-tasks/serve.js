'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import browsersync from 'browser-sync';

gulp.task('serve', () => {
    browsersync.init({
        server: './dist/',
        port: 4000,
        notify: true
    });

    const watchOpts = { usePolling: true, interval: 500 };

    gulp.watch(paths.views.watch, watchOpts, gulp.parallel('views'));
    gulp.watch(paths.styles.watch, watchOpts, gulp.parallel('styles'));
    gulp.watch(paths.scripts.watch, watchOpts, gulp.parallel('scripts'));
    gulp.watch(paths.sprites.watch, watchOpts, gulp.parallel('sprites'));
    gulp.watch(paths.images.watch, watchOpts, gulp.parallel('images'));
    gulp.watch(paths.fonts.watch, watchOpts, gulp.parallel('fonts'));
});
