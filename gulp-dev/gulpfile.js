var themename = 'texsite';

var gulp = require('gulp'),
    // Prepare and optimize code etc
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),

    // Only work with new or updated files
    newer = require('gulp-newer'),

    // Name of working theme folder
    root = '../',
    scss = root + 'sass/',
    js = root + 'js/',
    img = root + 'images/',
    languages = root + 'languages/';


// CSS via Sass and Autoprefixer
gulp.task('css', function () {
    return gulp.src(scss + '{style.scss,rtl.scss}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',

            indentType: 'tab',
            indentWidth: '1'
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer('last 2 versions', '> 1%')
        ]))
        .pipe(sourcemaps.write(scss + 'maps'))
        .pipe(gulp.dest(root));
});

// Optimize images through gulp-image
gulp.task('images', function () {
    return gulp.src(img + '**/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest(root + 'optimized/images'));
});

// JavaScript
gulp.task('javascript-all', function () {
    return gulp.src([
        root + 'js/navigation.js'
    ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest(root));
});

gulp.task('javascript-frontpage', function () {
    return gulp.src([
        root + 'js/instagramAPI.js'
    ])
        .pipe(concat('front.js'))
        .pipe(uglify())
        .pipe(gulp.dest(root));
});

gulp.task('javascript-locations', function () {
    return gulp.src([
        root + 'js/googleMaps.js',
        root + 'js/renderMenu.js',
        root + 'js/renderLocations.js',
        root + 'js/geolocation.js',
        root + 'js/loadLocation.js',
        root + 'js/locationsInit.js'
    ])
        .pipe(concat('locations.js'))
        .pipe(uglify())
        .pipe(gulp.dest(root));
});


// Watch everything
gulp.task('watch', function () {
    browserSync.init({
        open: 'external',
        proxy: 'texsite.dev',
        port: 8080
    });
    gulp.watch([root + '**/*.css', root + '**/*.scss'], ['css']);
    gulp.watch(js + '**/*.js', ['javascript-all']);
    gulp.watch(js + '**/*.js', ['javascript-locations']);
    gulp.watch(js + '**/*.js', ['javascript-frontpage']);
    gulp.watch(img + 'RAW/**/*.{jpg,JPG,png}', ['images']);
    gulp.watch(root + '**/*').on('change', browserSync.reload);
});


// Default task (runs at initiation: gulp --verbose)
gulp.task('default', ['watch']);
