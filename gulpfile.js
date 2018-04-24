var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 6',
    'ie_mob >= 6',
    'ff >= 14',
    'chrome >= 9',
    'safari >= 4',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 6'
];

gulp.task('style', function () {
    return gulp.src('./src/view/sass/*.scss')
        // Compile SASS files
        .pipe(sass({
        outputStyle: 'nested',
        precision: 10,
        includePaths: ['.'],
        onError: console.error.bind(console, 'Sass error:')
        }))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./src'))
    }
); 

gulp.task('style:watch', function () {
  gulp.watch('./src/view/sass/*//*.scss', ['style']);
});