module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      // This is the list of files on which grunt will run JSHint
      all: ['Gruntfile.js', 'package.json', 'tests/**/*.js', 'server/**/*.js', 'streaming/**/*.js', 'tweetHandler/**/*.js', 'client/app/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
      }
    },

    watch: {
      // These are the files that grunt will watch for changes.
      files: ['Gruntfile.js', 'package.json', 'tests/**/*.js', 'server/**/*.js', 'streaming/**/*.js', 'tweetHandler/**/*.js', 'client/app/**/*.js'],
      // These are the tasks that are run on each of the above files every time there is a change.
      tasks: ['jshint', 'auto_install', 'mochaTest'],
      options: {
        atBegin: true
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: [ 'client/app/factories/*.js', 'client/app/controllers/*.js', 'client/app/app.js'],
        // the location of the resulting JS file
        dest: 'client/dest/build.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'client/dest/build.min.js': ['client/dest/build.js']
        }
      }
    },
    mochaTest: {
      src: ['tests/**/*.js']
    },

    jsdoc: {
      dist: {
        src: ['server/**/*.js', 'streaming/**/*.js', 'tweetHandler/**/*.js', 'tests/**/*.js'],
        options: {
          destination: 'docs'
        }
      }
    },

    auto_install: {
      local: {},
      subdir: {
        options: {
          cwd: 'subdir',
          stdout: true,
          stderr: true,
          failOnError: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('minify', ['jshint', 'concat', 'uglify']);

  grunt.registerTask('default', ['jshint', 'mochaTest', 'jsdoc']);
  grunt.registerTask('test', 'mochaTest');
};
