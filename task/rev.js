var gulp= require('gulp'),
    revCollector = require('gulp-rev-collector'),
    rev = require('gulp-rev')
    htmlMin=require('gulp-htmlmin');

gulp.task('rev',['css','js','img'],function () {
    var options={
        removeComments:true,   //清除注释
        collapseWhitespace:true, //压缩html
        collapseBooleanAttributes:true,//省略布尔值的属性
        removeEmptyAttributes:true, //删除空值属性
        removeScriptTypeAttributes:true,//删除script标签的type属性
        removeStyleLinkTypeAttributes:true, //删除style和link标签的type属性
        minifyJS:true, //压缩页面js
        minifyCSS:true //压缩页面css
    } ;
    gulp.src(['rev/**/*', 'src/index.html'])   //读取rev-mainfest.json文件以及需要进行css名替换的文件
        .pipe(revCollector())               //执行文件内css名的替换
        .pipe(htmlMin(options))            //压缩html文件
        .pipe(rev())
        .pipe(gulp.dest('./dist'))       //替换后文件输出的目录
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/html'));
});
