var gulp = require('gulp'),
    sourceMaps=require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    miniCSs = require('gulp-minify-css'),
    autoPre=require('gulp-autoprefixer'),
    rev = require('gulp-rev');

//合并压缩css
gulp.task('css',function () {
    return gulp.src('./src/css/*.css')
        .pipe(sourceMaps.init())
        .pipe(autoPre({
            browser:['last 2 versions'],
            cascade:true,  //是否美化属性
            remove:true    //是否去掉不必要的前缀
        }))
        .pipe(concat('all.min.css'))            //合并文件
        .pipe(miniCSs())                        //压缩css
        .pipe(rev())                            //文件名加MD5后缀
        .pipe(gulp.dest('./dist/css'))
        .pipe(sourceMaps.write())
        .pipe(rename('all.debug.css'))          //重命名文件
        .pipe(gulp.dest('./dist/css'))          //输出文件
        .pipe(rev.manifest())                   //生成一个rev-mainfest.json文件
        .pipe(gulp.dest('./rev/css'))            //将rev-mainfest.json文件保存到rev
});
