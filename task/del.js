var gulp = require('gulp'),
    del = require('del');

gulp.task('del', function () {
    del(['./dist/css','./dist/js','./dist/*.html']);                            //删除文件
});