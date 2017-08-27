// Notes about the gulp and the web tasks // [helping article](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js) // Note : for the development // to start // ///// // gulp // ////// // for the development server do // /////// // cd ../dist // lite-server // //////// var path = require('path'); var fs = require('fs'); var gulp = require('gulp'); var pug = require('gulp-pug'); var sass = require('gulp-sass'); var gulpCopy = require('gulp-copy'); gulp.task('default',['pug','pug:watch', 'styles', 'styles:watch', 'copyAsset']); ///////////////////////// Pug- Templates- Html//////////////////////// gulp.task('pug', function buildHTML() { return gulp.src('./src/views/*.pug') .pipe(pug({ pretty: true, // Note for more :https://pugjs.org/api/reference.html // debug: true, // compileDebug: true, // globals: ["hello"] })) .pipe(gulp.dest('./dist/')) }); gulp.task('pug:watch',()=>{ return gulp.watch('./src/**/*pug',['pug']); }); //////////////////// Scss/ Sass / Styles ///////////////////// gulp.task('styles', function() { gulp.src('./src/**/*.scss') .pipe(sass().on('error', sass.logError)) .pipe(gulp.dest('./dist/assets/')) }); //Watch task gulp.task('styles:watch',function() { gulp.watch('./src/**/*.scss',['styles']); }); ///////////////// Copy Other asset to the dist--- Tasks ///////////// var sourceFiles = [ './src/assets/js/*',]; var destination = './dist/assets/'; gulp.task("copyAssets",()=>{ gulp .src('./src/assets/images/*') .pipe(gulp.dest(destination+'/images')) gulp .src('./src/assets/js/*') .pipe(gulp.dest(destination+'/js')) }) ///////////////// Build--- Tasks ///////////// gulp.task('build',()=>{ //gulp.src('./src/') }); gulp.task("setup",()=>{ //not working it should create a skeleton for me... gulp.src(null) .pipe(gulp.dest('./project')) .pipe(gulp.dest('./project/dist')) .pipe(gulp.dest('./project/src')) .pipe(gulp.dest('./project/src/view')) .pipe(gulp.dest('./project/src/assets')) })// Notes about the gulp and the web tasks
// [helping article](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)

// Note : for the development 
// to start 
// /////
//  gulp 
// //////
// for the development server do 

// ///////
// cd ../dist
// lite-server
// //////// 

var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');

gulp.task('default',['pug','pug:watch', 'styles', 'styles:watch', 'copyAssets']);

///////////////////////// Pug- Templates- Html////////////////////////

gulp.task('pug', function buildHTML() {
  return gulp.src('./src/views/*.pug')
  .pipe(pug({
    pretty: true,
    // Note for more :https://pugjs.org/api/reference.html
    // debug: true,
    // compileDebug: true,
    // globals: ["hello"]

  }))
  .pipe(gulp.dest('./dist/'))
});


gulp.task('pug:watch',()=>{
  return gulp.watch('./src/**/*pug',['pug']);
});

//////////////////// Scss/ Sass / Styles /////////////////////
gulp.task('styles', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/'))
});

//Watch task
gulp.task('styles:watch',function() {
    gulp.watch('./src/**/*.scss',['styles']);
});

///////////////// Copy Other asset to the dist--- Tasks /////////////
var sourceFiles = [ './src/assets/js/*',];
var destination = './dist/assets/';
 
gulp.task("copyAssets",()=>{
   gulp
    .src('./src/assets/images/*')
    .pipe(gulp.dest(destination+'/images'))
    
    gulp
    .src('./src/assets/css/*')
    .pipe(gulp.dest(destination+'/css'))

    gulp
    .src('./src/assets/js/**/*')
    .pipe(gulp.dest(destination+'/js'))
    
    gulp
    .src(['CNAME', 'robot.txt', 'sitemap.xml'])
    .pipe(gulp.dest('./dist'))



})

///////////////// Build--- Tasks /////////////
gulp.task('build',()=>{
 //gulp.src('./src/') 

});

gulp.task("setup",()=>{
  //not working it should create a skeleton for me...
  gulp.src(null)
  .pipe(gulp.dest('./project'))
  .pipe(gulp.dest('./project/dist'))
  .pipe(gulp.dest('./project/src'))
  .pipe(gulp.dest('./project/src/view'))
  .pipe(gulp.dest('./project/src/assets'))
  
})
