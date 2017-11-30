/*
Servidor web gulp para desarrollo 
*/
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('runserver', function() {
    connect.server({
        port: 5000,
        host: 'upeu.pe'
    });
});
