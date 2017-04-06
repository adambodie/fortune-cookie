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
	},
	watch: {
		options: {
		dateFormat: function(time) {
			  grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
			  grunt.log.writeln('Waiting for more changes...');
			},
		  },
		scripts: {
			files: ['**/*.js'],
			tasks: ['jshint'],
			options: {
				spawn: false,
			},
		},
	},
      wiredep: {

      task: {

        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: ['./index.html'] ,

        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    }
  });
     grunt.loadNpmTasks('grunt-contrib-jshint');
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-wiredep');

     grunt.registerTask('default', ['jshint', 'sass', 'cssmin', 'watch']);
     grunt.registerTask('css', ['sass', 'cssmin']);

};
