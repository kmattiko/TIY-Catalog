var gulp = require('gulp');

gulp.task('do-something', function(){
  console.log(arguments);
  console.log('I did something');
});

gulp.task('sass', function(){

  var sass = require('gulp-sass');

  gulp.src('src/scss/main.scss')
    .pipe(sass())
    //.pipe(gulp.dest('src/css/main.css'))
    //.pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist/css/'))

  });

gulp.task('watch:sass', function(){
  gulp.watch('src/scss/*.scss', [ 'sass' ], function(){
    console.log('In your sass files...', 'Building your CSS');
  });
  gulp.watch('src/*.html', [ 'build' ]);
})

gulp.task('clean', function(done){
  var del = require('del');

  del([
    'dist/**/*',
    'dist/**/.*',
    '!dist/.gitignore'

  ], done);

})


gulp.task('build', [ 'sass' ], function(){
  gulp.src([
    'src/*', '!src/scss'
  ]) //gulp.from () source
    .pipe(gulp.dest('dist/')); //through pipe then gulp.into () destenation
});
