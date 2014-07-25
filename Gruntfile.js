
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
        src: "dist/btns.css",
        dest: "dist/btns.css"
      }
    },

    recess: {
      dist: {
        options: {
          compile: true
        },
        files: {
            'dist/btns.css': ['dist/btns.css']
        }
      }
    },

    cssmin: {
      min: {
        files: {
          "dist/btns.min.css": ["dist/btns.css"]
        }
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

  grunt.registerTask('default', ["less","watch"]);
  grunt.registerTask('build', ["less","autoprefixer","recess","cssmin"]);

};
