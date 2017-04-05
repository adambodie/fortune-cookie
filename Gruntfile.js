module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        all: ['Gruntfile.js', 'js/**/app.js']
      },
    sass: {
      dist: {
        files: {
          './dist/css/main.css': './src/css/main.scss'
        }
      }
    },
    cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            './dist/css/main.min.css': './dist/css/main.css'
          }
        }
}
  });
     grunt.loadNpmTasks('grunt-contrib-jshint');
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-cssmin');

     grunt.registerTask('default', ['jshint', 'sass', 'cssmin']);

};
