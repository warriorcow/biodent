'use strict';

import gulp from 'gulp';

const requireDir = require('require-dir'),
    paths = {
        views: {
            src: [
                './src/views/index.pug',
                './src/views/pages/*.pug'
            ],
            dist: './dist/',
            watch: [
                './src/blocks/**/*.pug',
                './src/views/**/*.pug'
            ]
        },
        json: {
            src: './src/json/header.json'
        },
        styles: {
            src: './src/styles/main.{scss,sass}',
            dist: './dist/styles/',
            watch: [
                './src/blocks/**/*.{scss,sass}',
                './src/styles/**/*.{scss,sass}',
                './src/views/**/*.{scss,sass}',
            ]
        },
        scripts: {
            src: './src/js/index.js',
            dist: './dist/js/',
            watch: [
                './src/blocks/**/*.js',
                './src/js/**/*.js'
            ]
        },
        images: {
            src: [
                './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
                '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'
            ],
            dist: './dist/img/',
            watch: './src/img/**/*.{jpg,jpeg,png,gif,svg}'
        },
        sprites: {
            src: './src/img/svg/*.svg',
            dist: './dist/img/sprites/',
            watch: './src/img/svg/*.svg'
        },
        fonts: {
            src: './src/fonts/**/*.{woff,woff2,otf}',
            dist: './dist/fonts/',
            watch: './src/fonts/**/*.{woff,woff2,otf}'
        },
        favicons: {
            src: './src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
            dist: './dist/img/favicons/',
        },
        gzip: {
            src: './src/.htaccess',
            dist: './dist/'
        }
    };

requireDir('./gulp-tasks/');

export { paths };

export const development = gulp.series('clean',
    gulp.parallel(['views', 'styles', 'scripts', 'images', 'sprites', 'fonts', 'favicons']),
    gulp.parallel('serve'));

export const prod = gulp.series('clean',
    gulp.parallel(['views', 'styles', 'scripts', 'images', 'sprites', 'fonts', 'favicons', 'gzip']));

export default development;
