const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
function compilar (){
    return src ("src/scss/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(dest('dist/css'));
}
exports.compilar = compilar;
exports.default = function(){
    watch("src/scss/*.scss",compilar);
};
