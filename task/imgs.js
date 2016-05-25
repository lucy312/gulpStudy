var gulp = require('gulp'),
    cache = require('gulp-cache'),
    rev = require('gulp-rev'),
    imagemin = require('gulp-imagemin'),
    browserSync=require('browser-sync').create(),
    reload=browserSync.reload;

//图片压缩
gulp.task('img', function () {
    return gulp.src('./src/imgs/*')
        .pipe(cache(imagemin(
            //{
            //optimizationLevel:5,  //类型：Number  默认：3  取值范围：0-7（优化等级）
            //progressive:true,     //类型：Boolean 默认：false 无损压缩jpg图片
            //interlaced:true,      //类型：Boolean 默认：false 隔行扫描gif进行渲染
            //multipass:true       //类型：Boolean 默认：false 多次优化svg直到完全优化
            //}
        )))
        .pipe(rev())
        .pipe(gulp.dest('./dist/imgs'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/imgs'))
        .pipe(reload({stream:true}));
});
