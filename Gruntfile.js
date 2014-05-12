
module.exports = function (grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    less: {
      development: {
        files: {
          "dist/btns.css":"less/btns.less"
        }
     }
    },

    autoprefixer: {
      single_file: {
        src: "less/btns.less",
        dest: "less/btns.less"
      }
    },

    recess: {
      dist: {
        options: {
          compile: true
        },
        files: {
            'dist/btns.less': ['dist/btns.less']
        }
      }
    },

    cssmin: {
      files: {
        "dist/btns.min.css": ["dist/btns.css"]
      }
    },

    watch: {
      css: {
        files: "less/*.less",
        tasks: ["less"]
      }
    }
  });
  
  require("load-grunt-tasks")(grunt);

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ["less","autoprefixer","recess","cssmin"]);

};
