/**
 * Created by csm on 16/5/16.
 * 分离任务
 */
var gulp= require('gulp');
var runSequence=require('gulp-run-sequence');
var requireDir=require('require-dir');
requireDir('./task');
var browserSync=require('browser-sync').create(),
    reload=browserSync.reload;

gulp.task('server',function(){
    browserSync.init({
        server:{
            baseDir:'./dist'
        }
    }) ;
    gulp.watch(['./src/**/*.{css,js}','./src/imgs/**/*','./src/*.html'],['rev']);
    gulp.watch(['./dist/**/*.{css,js}','./dist/imgs/**/*','./dist/*.html']).on('change',reload);
});

gulp.task('default',function(){
    runSequence('del',['css','js','img'],'rev','server')
});
