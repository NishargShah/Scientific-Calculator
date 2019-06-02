const {src, dest, parallel} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

const source = [
    {
        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/**',
        dest: 'assets/webfonts/'
    },
    {
        src: 'node_modules/bootstrap/scss/**',
        dest: 'assets/scss/'
    }
];

const FileSource = [
    {
        src: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/@fortawesome/fontawesome-free/css/all.min.css'
        ],
        concat: 'plugin.css',
        dest: 'assets/css/'
    },
    {
        src: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        concat: 'plugin.js',
        dest: 'assets/js/'
    }
];

(function copy() {
    source.map(function(file) {
        src(file.src)
        .pipe(dest(file.dest));
    });
    FileSource.map(function(file) {
        src(file.src)
        .pipe(concat(file.concat))
        .pipe(dest(file.dest));
    });
})();

function css() {
    return src('css/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('css/'))
}

function js() {
    return src('js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('js/'))
}

exports.css = css;
exports.js = js;
exports.default = parallel(css, js);
