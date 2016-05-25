var gulp = require('gulp'),
    jshint=require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    rev = require('gulp-rev'),
    sourceMaps=require('gulp-sourcemaps');

//合并压缩js
gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(sourceMaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.min.js'))
        .pipe(uglify())                     //压缩js文件
        .pipe(rev())
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('all.debug.js'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/js'))
});